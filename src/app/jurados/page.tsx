import { redirect } from "next/navigation"
import { JudgeGateForm } from "@/components/jurados/judge-gate-form"
import { judgeSheet } from "@/content/judge-sheet"
import { HACKATHON_JUDGE_PATH } from "@/lib/hackathon/constants"
import { readJudgeCookieUsername } from "@/lib/hackathon/judge-session"
import { createAdminClient } from "@/lib/supabase/admin"

export default async function JudgeGatePage() {
  const username = await readJudgeCookieUsername()
  if (username) {
    try {
      const admin = createAdminClient()
      const { data } = await admin.rpc("hackathon_judge_session_ok", {
        p_username: username,
      })
      const payload = data as { ok?: boolean } | null
      if (payload?.ok) redirect(`${HACKATHON_JUDGE_PATH}/equipos`)
    } catch {
      // Stay on the gate if the admin client is not configured yet.
    }
  }

  return (
    <main className="wall jurados-main" id="sobre">
      <h1 className="jurados-title">{judgeSheet.gateHeading}</h1>
      <p className="lede jurados-lede">{judgeSheet.gateLede}</p>
      <JudgeGateForm />
    </main>
  )
}
