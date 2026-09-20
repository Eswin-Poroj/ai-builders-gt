import type { ReactNode } from "react"
import { JudgeChrome } from "@/components/jurados/judge-chrome"
import { requireJudgeSession } from "@/lib/hackathon/judge-data"

export default async function JudgePanelLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await requireJudgeSession()

  return (
    <>
      <JudgeChrome displayName={session.displayName} />
      {children}
    </>
  )
}
