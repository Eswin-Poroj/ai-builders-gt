"use server"

import { computeBoard, type HackathonBoard } from "@/lib/hackathon/board"
import { parseRegisterPayload } from "@/lib/hackathon/validate"
import { createClient } from "@/lib/supabase/server"

export type RegisterTeamState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success"; teamName: string; board: HackathonBoard }

const GENERIC_ERROR = "No se pudo registrar el equipo. Inténtalo de nuevo."

function mapRpcError(error: { code?: string; message?: string; details?: string }) {
  const blob = `${error.code ?? ""} ${error.message ?? ""} ${error.details ?? ""}`

  if (blob.includes("FULL_TEAMS") || blob.includes("FULL_PEOPLE") || blob.includes("FULL")) {
    return "Cupo lleno"
  }
  if (error.code === "23505" || /duplicate|unique/i.test(blob)) {
    return "Ese nombre de equipo ya está registrado."
  }
  if (error.code === "22023" || blob.includes("VALIDATION")) {
    return "Revisa el nombre del equipo, los integrantes (nombre y apellido) y el contacto."
  }
  return GENERIC_ERROR
}

async function readBoard() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("hackathon_team_listings")
    .select("team_name, member_count")
    .order("created_at", { ascending: true })

  if (error) return null

  return computeBoard(
    (data ?? []).map((row) => ({
      teamName: row.team_name as string,
      memberCount: Number(row.member_count),
    })),
  )
}

export async function registerHackathonTeam(
  _prev: RegisterTeamState,
  formData: FormData,
): Promise<RegisterTeamState> {
  const parsed = parseRegisterPayload(formData)
  if (!parsed.ok) {
    return { status: "error", message: parsed.message }
  }

  const supabase = await createClient()
  const { error } = await supabase.rpc("register_hackathon_team", {
    p_team_name: parsed.data.teamName,
    p_members: parsed.data.members,
    p_contact: parsed.data.contact,
  })

  if (error) {
    return { status: "error", message: mapRpcError(error) }
  }

  const board = await readBoard()
  if (!board) {
    return { status: "success", teamName: parsed.data.teamName, board: computeBoard([]) }
  }

  return { status: "success", teamName: parsed.data.teamName, board }
}
