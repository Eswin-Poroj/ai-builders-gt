import { computeBoard } from "@/lib/hackathon/board"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("hackathon_team_listings")
    .select("team_name, member_count")
    .order("created_at", { ascending: true })

  if (error) {
    return Response.json({ error: "No se pudo leer el cupo" }, { status: 500 })
  }

  const board = computeBoard(
    (data ?? []).map((row) => ({
      teamName: row.team_name as string,
      memberCount: Number(row.member_count),
    })),
  )

  return Response.json(board, {
    headers: { "Cache-Control": "no-store" },
  })
}
