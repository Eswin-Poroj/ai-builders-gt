import { JudgeResultsTable } from "@/components/jurados/judge-results-table"
import { judgeSheet } from "@/content/judge-sheet"
import { loadJudgeResults, requireJudgeSession } from "@/lib/hackathon/judge-data"

export default async function JudgeResultsPage() {
  const session = await requireJudgeSession()
  const rows = await loadJudgeResults(session.username)

  return (
    <main className="wall jurados-main" id="sobre">
      <h1 className="jurados-title">{judgeSheet.resultsHeading}</h1>
      <JudgeResultsTable rows={rows} />
    </main>
  )
}
