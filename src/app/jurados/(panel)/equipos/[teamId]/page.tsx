import { notFound } from "next/navigation"
import { JudgeScoreForm } from "@/components/jurados/judge-score-form"
import { judgeSheet } from "@/content/judge-sheet"
import { loadJudgeSheet, requireJudgeSession } from "@/lib/hackathon/judge-data"

type Props = {
  params: Promise<{ teamId: string }>
}

export default async function JudgeTeamSheetPage({ params }: Props) {
  const { teamId } = await params
  const session = await requireJudgeSession()
  const sheet = await loadJudgeSheet(teamId, session.username)
  if (!sheet) notFound()

  return (
    <main className="wall jurados-main" id="sobre">
      <h1 className="jurados-title">{judgeSheet.heading}</h1>
      <JudgeScoreForm
        teamId={teamId}
        sheet={{
          ...sheet,
          judge: {
            username: session.username,
            display_name: session.displayName,
          },
        }}
      />
    </main>
  )
}
