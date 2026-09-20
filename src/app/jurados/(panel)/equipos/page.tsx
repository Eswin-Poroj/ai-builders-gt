import { JudgeTeamList } from "@/components/jurados/judge-team-list"
import { judgeSheet } from "@/content/judge-sheet"
import { loadJudgeTeams, requireJudgeSession } from "@/lib/hackathon/judge-data"

export default async function JudgeTeamsPage() {
  const session = await requireJudgeSession()
  const teams = await loadJudgeTeams(session.username)

  return (
    <main className="wall jurados-main" id="sobre">
      <h1 className="jurados-title">{judgeSheet.teamsHeading}</h1>
      <JudgeTeamList teams={teams} />
    </main>
  )
}
