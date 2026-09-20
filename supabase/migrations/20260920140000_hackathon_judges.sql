create extension if not exists pgcrypto with schema extensions;

create table if not exists private.hackathon_judges (
  username text primary key
    check (username ~ '^[a-z0-9._-]{3,40}$'),
  password_hash text not null,
  display_name text not null check (char_length(display_name) between 2 and 80),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists private.hackathon_evaluations (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.hackathon_teams (id) on delete cascade,
  judge_username text not null references private.hackathon_judges (username),
  c_comprension integer not null check (c_comprension between 0 and 30),
  c_arquitectura integer not null check (c_arquitectura between 0 and 20),
  c_codigo integer not null check (c_codigo between 0 and 20),
  c_reto integer not null check (c_reto between 0 and 15),
  c_practicas integer not null check (c_practicas between 0 and 10),
  c_reproducibilidad integer not null check (c_reproducibilidad between 0 and 5),
  total integer generated always as (
    c_comprension + c_arquitectura + c_codigo + c_reto + c_practicas + c_reproducibilidad
  ) stored,
  dominio text not null check (dominio in ('si', 'mas_o_menos', 'no')),
  comentarios text check (comentarios is null or char_length(comentarios) <= 4000),
  anotaciones text check (anotaciones is null or char_length(anotaciones) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint hackathon_evaluations_team_judge unique (team_id, judge_username)
);

create index if not exists hackathon_evaluations_judge_idx
  on private.hackathon_evaluations (judge_username);

create table if not exists private.hackathon_judge_gate_attempts (
  ip_hash text not null,
  attempted_at timestamptz not null default now()
);

create index if not exists hackathon_judge_gate_attempts_idx
  on private.hackathon_judge_gate_attempts (ip_hash, attempted_at);

alter table private.hackathon_judges enable row level security;
alter table private.hackathon_judges force row level security;
alter table private.hackathon_evaluations enable row level security;
alter table private.hackathon_evaluations force row level security;
alter table private.hackathon_judge_gate_attempts enable row level security;
alter table private.hackathon_judge_gate_attempts force row level security;

revoke all on table private.hackathon_judges from public, anon, authenticated;
revoke all on table private.hackathon_evaluations from public, anon, authenticated;
revoke all on table private.hackathon_judge_gate_attempts from public, anon, authenticated;

create or replace function private.touch_hackathon_evaluation()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists hackathon_evaluations_touch on private.hackathon_evaluations;
create trigger hackathon_evaluations_touch
  before update on private.hackathon_evaluations
  for each row execute function private.touch_hackathon_evaluation();

create or replace function private.hackathon_judge_gate_blocked(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_count integer;
begin
  delete from private.hackathon_judge_gate_attempts
  where attempted_at < now() - interval '24 hours';

  select count(*)::integer into v_count
  from private.hackathon_judge_gate_attempts
  where ip_hash = p_ip_hash
    and attempted_at > now() - interval '15 minutes';

  return coalesce(v_count, 0) >= 8;
end;
$$;

create or replace function private.hackathon_judge_gate_record(p_ip_hash text, p_success boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_success then
    return;
  end if;
  insert into private.hackathon_judge_gate_attempts (ip_hash) values (p_ip_hash);
end;
$$;

create or replace function private.hackathon_judge_verify(p_username text, p_password text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user text;
  v_hash text;
  v_name text;
  v_dummy constant text := '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';
begin
  v_user := lower(trim(coalesce(p_username, '')));

  select password_hash, display_name
    into v_hash, v_name
  from private.hackathon_judges
  where username = v_user
    and is_active;

  perform extensions.crypt(coalesce(p_password, ''), coalesce(v_hash, v_dummy));

  if v_hash is null then
    return null;
  end if;

  if extensions.crypt(coalesce(p_password, ''), v_hash) = v_hash then
    return jsonb_build_object(
      'username', v_user,
      'display_name', v_name
    );
  end if;

  return null;
end;
$$;

create or replace function private.hackathon_judge_session_ok(p_username text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user text;
  v_name text;
begin
  v_user := lower(trim(coalesce(p_username, '')));

  select display_name into v_name
  from private.hackathon_judges
  where username = v_user
    and is_active;

  if v_name is null then
    return jsonb_build_object('ok', false);
  end if;

  return jsonb_build_object(
    'ok', true,
    'username', v_user,
    'display_name', v_name
  );
end;
$$;

create or replace function private.hackathon_judge_list_teams(p_username text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user text;
  v_ok jsonb;
  v_out jsonb;
begin
  v_user := lower(trim(coalesce(p_username, '')));
  v_ok := private.hackathon_judge_session_ok(v_user);
  if coalesce(v_ok ->> 'ok', 'false') <> 'true' then
    return '[]'::jsonb;
  end if;

  select coalesce(jsonb_agg(to_jsonb(q) order by q.created_at), '[]'::jsonb)
    into v_out
  from (
    select
      t.id,
      t.team_name,
      t.members,
      jsonb_array_length(t.members) as member_count,
      e.total as my_total,
      e.updated_at as my_updated_at,
      t.created_at
    from public.hackathon_teams t
    left join private.hackathon_evaluations e
      on e.team_id = t.id
     and e.judge_username = v_user
    order by t.created_at
  ) q;

  return v_out;
end;
$$;

create or replace function private.hackathon_judge_get_sheet(p_team_id uuid, p_username text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user text;
  v_ok jsonb;
  v_team jsonb;
  v_eval jsonb;
begin
  v_user := lower(trim(coalesce(p_username, '')));
  v_ok := private.hackathon_judge_session_ok(v_user);
  if coalesce(v_ok ->> 'ok', 'false') <> 'true' then
    return null;
  end if;

  select jsonb_build_object(
    'id', t.id,
    'team_name', t.team_name,
    'members', t.members
  )
    into v_team
  from public.hackathon_teams t
  where t.id = p_team_id;

  if v_team is null then
    return null;
  end if;

  select jsonb_build_object(
    'c_comprension', e.c_comprension,
    'c_arquitectura', e.c_arquitectura,
    'c_codigo', e.c_codigo,
    'c_reto', e.c_reto,
    'c_practicas', e.c_practicas,
    'c_reproducibilidad', e.c_reproducibilidad,
    'total', e.total,
    'dominio', e.dominio,
    'comentarios', e.comentarios,
    'anotaciones', e.anotaciones,
    'updated_at', e.updated_at
  )
    into v_eval
  from private.hackathon_evaluations e
  where e.team_id = p_team_id
    and e.judge_username = v_user;

  return jsonb_build_object(
    'team', v_team,
    'evaluation', v_eval,
    'judge', v_ok
  );
end;
$$;

create or replace function private.hackathon_judge_upsert_evaluation(
  p_username text,
  p_team_id uuid,
  p_comprension integer,
  p_arquitectura integer,
  p_codigo integer,
  p_reto integer,
  p_practicas integer,
  p_reproducibilidad integer,
  p_dominio text,
  p_comentarios text,
  p_anotaciones text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user text;
  v_ok jsonb;
  v_exists uuid;
  v_comentarios text;
  v_anotaciones text;
  v_row private.hackathon_evaluations;
begin
  v_user := lower(trim(coalesce(p_username, '')));
  v_ok := private.hackathon_judge_session_ok(v_user);
  if coalesce(v_ok ->> 'ok', 'false') <> 'true' then
    raise exception 'UNAUTHORIZED' using errcode = '42501';
  end if;

  select t.id into v_exists from public.hackathon_teams t where t.id = p_team_id;
  if v_exists is null then
    raise exception 'NOT_FOUND' using errcode = 'P0002';
  end if;

  if p_dominio not in ('si', 'mas_o_menos', 'no') then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  if p_comprension not between 0 and 30
     or p_arquitectura not between 0 and 20
     or p_codigo not between 0 and 20
     or p_reto not between 0 and 15
     or p_practicas not between 0 and 10
     or p_reproducibilidad not between 0 and 5 then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  v_comentarios := nullif(trim(coalesce(p_comentarios, '')), '');
  v_anotaciones := nullif(trim(coalesce(p_anotaciones, '')), '');
  if (v_comentarios is not null and char_length(v_comentarios) > 4000)
     or (v_anotaciones is not null and char_length(v_anotaciones) > 4000) then
    raise exception 'VALIDATION' using errcode = '22023';
  end if;

  insert into private.hackathon_evaluations (
    team_id,
    judge_username,
    c_comprension,
    c_arquitectura,
    c_codigo,
    c_reto,
    c_practicas,
    c_reproducibilidad,
    dominio,
    comentarios,
    anotaciones
  )
  values (
    p_team_id,
    v_user,
    p_comprension,
    p_arquitectura,
    p_codigo,
    p_reto,
    p_practicas,
    p_reproducibilidad,
    p_dominio,
    v_comentarios,
    v_anotaciones
  )
  on conflict (team_id, judge_username) do update set
    c_comprension = excluded.c_comprension,
    c_arquitectura = excluded.c_arquitectura,
    c_codigo = excluded.c_codigo,
    c_reto = excluded.c_reto,
    c_practicas = excluded.c_practicas,
    c_reproducibilidad = excluded.c_reproducibilidad,
    dominio = excluded.dominio,
    comentarios = excluded.comentarios,
    anotaciones = excluded.anotaciones
  returning * into v_row;

  return jsonb_build_object(
    'team_id', v_row.team_id,
    'total', v_row.total,
    'updated_at', v_row.updated_at
  );
end;
$$;

create or replace function private.hackathon_judge_results(p_username text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_ok jsonb;
  v_out jsonb;
begin
  v_ok := private.hackathon_judge_session_ok(p_username);
  if coalesce(v_ok ->> 'ok', 'false') <> 'true' then
    return '[]'::jsonb;
  end if;

  select coalesce(jsonb_agg(to_jsonb(q) order by q.avg_total desc nulls last, q.team_name), '[]'::jsonb)
    into v_out
  from (
    select
      t.id,
      t.team_name,
      avg(e.total)::numeric(5, 2) as avg_total,
      count(e.id)::integer as n_scores,
      coalesce(
        jsonb_agg(
          jsonb_build_object(
            'judge_username', e.judge_username,
            'judge_display_name', j.display_name,
            'total', e.total,
            'updated_at', e.updated_at
          )
          order by j.display_name
        ) filter (where e.id is not null),
        '[]'::jsonb
      ) as scores
    from public.hackathon_teams t
    left join private.hackathon_evaluations e on e.team_id = t.id
    left join private.hackathon_judges j on j.username = e.judge_username
    group by t.id, t.team_name
  ) q;

  return v_out;
end;
$$;

create or replace function public.hackathon_judge_gate_blocked(p_ip_hash text)
returns boolean
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_gate_blocked(p_ip_hash);
$$;

create or replace function public.hackathon_judge_gate_record(p_ip_hash text, p_success boolean)
returns void
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_gate_record(p_ip_hash, p_success);
$$;

create or replace function public.hackathon_judge_verify(p_username text, p_password text)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_verify(p_username, p_password);
$$;

create or replace function public.hackathon_judge_session_ok(p_username text)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_session_ok(p_username);
$$;

create or replace function public.hackathon_judge_list_teams(p_username text)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_list_teams(p_username);
$$;

create or replace function public.hackathon_judge_get_sheet(p_team_id uuid, p_username text)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_get_sheet(p_team_id, p_username);
$$;

create or replace function public.hackathon_judge_upsert_evaluation(
  p_username text,
  p_team_id uuid,
  p_comprension integer,
  p_arquitectura integer,
  p_codigo integer,
  p_reto integer,
  p_practicas integer,
  p_reproducibilidad integer,
  p_dominio text,
  p_comentarios text,
  p_anotaciones text
)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_upsert_evaluation(
    p_username,
    p_team_id,
    p_comprension,
    p_arquitectura,
    p_codigo,
    p_reto,
    p_practicas,
    p_reproducibilidad,
    p_dominio,
    p_comentarios,
    p_anotaciones
  );
$$;

create or replace function public.hackathon_judge_results(p_username text)
returns jsonb
language sql
security definer
set search_path = ''
as $$
  select private.hackathon_judge_results(p_username);
$$;

revoke all on function public.hackathon_judge_gate_blocked(text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_gate_record(text, boolean) from public, anon, authenticated;
revoke all on function public.hackathon_judge_verify(text, text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_session_ok(text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_list_teams(text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_get_sheet(uuid, text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_upsert_evaluation(text, uuid, integer, integer, integer, integer, integer, integer, text, text, text) from public, anon, authenticated;
revoke all on function public.hackathon_judge_results(text) from public, anon, authenticated;

grant execute on function public.hackathon_judge_gate_blocked(text) to service_role;
grant execute on function public.hackathon_judge_gate_record(text, boolean) to service_role;
grant execute on function public.hackathon_judge_verify(text, text) to service_role;
grant execute on function public.hackathon_judge_session_ok(text) to service_role;
grant execute on function public.hackathon_judge_list_teams(text) to service_role;
grant execute on function public.hackathon_judge_get_sheet(uuid, text) to service_role;
grant execute on function public.hackathon_judge_upsert_evaluation(text, uuid, integer, integer, integer, integer, integer, integer, text, text, text) to service_role;
grant execute on function public.hackathon_judge_results(text) to service_role;
