import "server-only"
import { redirect } from "next/navigation"
import { HACKATHON_JUDGE_PATH } from "@/lib/hackathon/constants"
import { readJudgeCookieUsername } from "@/lib/hackathon/judge-session"
import { createAdminClient } from "@/lib/supabase/admin"

export type JudgeSession = {
  username: string
  displayName: string
}

export async function requireJudgeSession(): Promise<JudgeSession> {
  const username = await readJudgeCookieUsername()
  if (!username) redirect(HACKATHON_JUDGE_PATH)

  const admin = createAdminClient()
  const { data, error } = await admin.rpc("hackathon_judge_session_ok", {
    p_username: username,
  })

  if (error || !data || typeof data !== "object") {
    redirect(HACKATHON_JUDGE_PATH)
  }

  const payload = data as { ok?: boolean; username?: string; display_name?: string }
  if (!payload.ok || !payload.username || !payload.display_name) {
    redirect(HACKATHON_JUDGE_PATH)
  }

  return { username: payload.username, displayName: payload.display_name }
}

export type JudgeTeamRow = {
  id: string
  team_name: string
  members: string[]
  member_count: number
  my_total: number | null
  my_updated_at: string | null
}

export type JudgeSheet = {
  team: { id: string; team_name: string; members: string[] }
  evaluation: {
    c_comprension: number
    c_arquitectura: number
    c_codigo: number
    c_reto: number
    c_practicas: number
    c_reproducibilidad: number
    total: number
    dominio: "si" | "mas_o_menos" | "no"
    comentarios: string | null
    anotaciones: string | null
    updated_at: string
  } | null
  judge: { username: string; display_name: string }
}

export type JudgeResultRow = {
  id: string
  team_name: string
  avg_total: number | null
  n_scores: number
  scores: {
    judge_username: string
    judge_display_name: string
    total: number
    updated_at: string
  }[]
}

function asJsonArray<T>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[]
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data) as unknown
      return Array.isArray(parsed) ? (parsed as T[]) : []
    } catch {
      return []
    }
  }
  return []
}

export async function loadJudgeTeams(username: string) {
  const admin = createAdminClient()
  const { data, error } = await admin.rpc("hackathon_judge_list_teams", {
    p_username: username,
  })
  if (error) return [] as JudgeTeamRow[]
  return asJsonArray<JudgeTeamRow>(data)
}

export async function loadJudgeSheet(teamId: string, username: string) {
  const admin = createAdminClient()
  const { data, error } = await admin.rpc("hackathon_judge_get_sheet", {
    p_team_id: teamId,
    p_username: username,
  })
  if (error || !data) return null
  return data as JudgeSheet
}

export async function loadJudgeResults(username: string) {
  const admin = createAdminClient()
  const { data, error } = await admin.rpc("hackathon_judge_results", {
    p_username: username,
  })
  if (error) return [] as JudgeResultRow[]
  return asJsonArray<JudgeResultRow>(data)
}
