"use server"

import type { HackathonBoard } from "@/lib/hackathon/board"

export type RegisterTeamState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success"; teamName: string; board: HackathonBoard }

const CLOSED_MESSAGE = "El registro de esta edición ya cerró."

/**
 * Xela 2026 registration is closed. `RegisterTeamsForm` is no longer
 * mounted, but this action stays server-side truth: it must reject before
 * touching Supabase so a hand-crafted POST can never create a new team.
 */
export async function registerHackathonTeam(
  _prev: RegisterTeamState,
  _formData: FormData,
): Promise<RegisterTeamState> {
  return { status: "error", message: CLOSED_MESSAGE }
}
