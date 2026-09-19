create schema if not exists private;

revoke all on schema private from public;
grant usage on schema private to postgres, service_role;

create table if not exists public.hackathon_teams (
  id uuid primary key default gen_random_uuid(),
  team_name text not null,
  members jsonb not null,
  contact text not null,
  created_at timestamptz not null default now(),
  constraint hackathon_teams_team_name_len check (char_length(team_name) between 2 and 80),
  constraint hackathon_teams_members_array check (jsonb_typeof(members) = 'array'),
  constraint hackathon_teams_members_len check (jsonb_array_length(members) between 2 and 5),
  constraint hackathon_teams_contact_len check (char_length(contact) between 5 and 120)
);

create unique index if not exists hackathon_teams_team_name_key
  on public.hackathon_teams (team_name);

create unique index if not exists hackathon_teams_team_name_ci
  on public.hackathon_teams (lower(team_name));

create table if not exists public.hackathon_team_listings (
  id uuid primary key references public.hackathon_teams (id) on delete cascade,
  team_name text not null,
  member_count integer not null check (member_count between 2 and 5),
  created_at timestamptz not null
);

alter table public.hackathon_teams enable row level security;
alter table public.hackathon_teams force row level security;
alter table public.hackathon_team_listings enable row level security;
alter table public.hackathon_team_listings force row level security;

revoke all on table public.hackathon_teams from public, anon, authenticated;
revoke all on table public.hackathon_team_listings from public;

grant select on table public.hackathon_team_listings to anon, authenticated;

drop policy if exists hackathon_team_listings_public_read on public.hackathon_team_listings;
create policy hackathon_team_listings_public_read
  on public.hackathon_team_listings
  for select
  to anon, authenticated
  using (true);

create or replace function private.normalize_person_name(p_name text)
returns text
language sql
immutable
set search_path = ''
as $$
  select nullif(regexp_replace(trim(p_name), '\s+', ' ', 'g'), '');
$$;

create or replace function private.sync_hackathon_team_listing()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    insert into public.hackathon_team_listings (id, team_name, member_count, created_at)
    values (new.id, new.team_name, jsonb_array_length(new.members), new.created_at);
  elsif tg_op = 'UPDATE' then
    update public.hackathon_team_listings
      set team_name = new.team_name,
          member_count = jsonb_array_length(new.members)
      where id = new.id;
  elsif tg_op = 'DELETE' then
    delete from public.hackathon_team_listings where id = old.id;
  end if;
  return null;
end;
$$;

drop trigger if exists hackathon_teams_listing_sync on public.hackathon_teams;
create trigger hackathon_teams_listing_sync
  after insert or update or delete on public.hackathon_teams
  for each row execute function private.sync_hackathon_team_listing();

create or replace function private.register_hackathon_team(
  p_team_name text,
  p_members jsonb,
  p_contact text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_name text;
  v_members jsonb := '[]'::jsonb;
  v_contact text;
  v_elem jsonb;
  v_member text;
  v_words integer;
  v_teams integer;
  v_people integer;
  v_new integer;
  v_team_cap constant integer := 12;
  v_person_cap constant integer := 50;
begin
  perform pg_advisory_xact_lock(20260920, 12);

  v_name := private.normalize_person_name(p_team_name);
  if v_name is null or char_length(v_name) < 2 or char_length(v_name) > 80 then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  if jsonb_typeof(p_members) is distinct from 'array'
     or jsonb_array_length(p_members) not between 2 and 5 then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  for v_elem in select value from jsonb_array_elements(p_members) as t(value)
  loop
    if jsonb_typeof(v_elem) is distinct from 'string' then
      raise exception 'VALIDATION' using errcode = '22023';
    end if;
    v_member := private.normalize_person_name(v_elem #>> '{}');
    if v_member is null then
      raise exception 'VALIDATION' using errcode = '22023';
    end if;
    v_words := cardinality(regexp_split_to_array(v_member, '\s+'));
    if v_words < 2 then
      raise exception 'VALIDATION' using errcode = '22023';
    end if;
    v_members := v_members || to_jsonb(v_member);
  end loop;

  v_contact := trim(p_contact);
  if v_contact is null
     or char_length(v_contact) < 5
     or char_length(v_contact) > 120
     or (
       v_contact !~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
       and replace(replace(replace(replace(v_contact, ' ', ''), '-', ''), '(', ''), ')', '')
           !~ '^\+?[0-9]{8,15}$'
     ) then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  select count(*)::integer,
         coalesce(sum(jsonb_array_length(members)), 0)::integer
    into v_teams, v_people
    from public.hackathon_teams;

  v_new := jsonb_array_length(v_members);

  if v_teams >= v_team_cap then
    raise exception 'FULL_TEAMS' using errcode = 'P0001';
  end if;
  if v_people + v_new > v_person_cap then
    raise exception 'FULL_PEOPLE' using errcode = 'P0001';
  end if;

  insert into public.hackathon_teams (team_name, members, contact)
  values (v_name, v_members, v_contact);

  return jsonb_build_object(
    'team_name', v_name,
    'member_count', v_new
  );
end;
$$;

revoke all on function private.register_hackathon_team(text, jsonb, text)
  from public, anon, authenticated;

create or replace function public.register_hackathon_team(
  p_team_name text,
  p_members jsonb,
  p_contact text
)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.register_hackathon_team(p_team_name, p_members, p_contact);
$$;

revoke all on function public.register_hackathon_team(text, jsonb, text) from public;
grant execute on function public.register_hackathon_team(text, jsonb, text)
  to anon, authenticated;

do $$
begin
  begin
    alter publication supabase_realtime add table public.hackathon_team_listings;
  exception
    when duplicate_object then null;
    when undefined_object then null;
  end;
end $$;
