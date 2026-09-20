"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { logoutJudge } from "@/app/jurados/actions"
import { HACKATHON_JUDGE_PATH } from "@/lib/hackathon/constants"
import { judgeSheet } from "@/content/judge-sheet"

export function JudgeChrome({ displayName }: { displayName: string }) {
  const pathname = usePathname()
  const onResults = pathname.includes("/resultados")

  return (
    <header className="jurados-bar">
      <p className="jurados-bar-name">{displayName}</p>
      <nav className="jurados-nav" aria-label="Jurado">
        <Link
          href={`${HACKATHON_JUDGE_PATH}/equipos`}
          aria-current={onResults ? undefined : "page"}
        >
          {judgeSheet.navTeams}
        </Link>
        <Link
          href={`${HACKATHON_JUDGE_PATH}/resultados`}
          aria-current={onResults ? "page" : undefined}
        >
          {judgeSheet.navResults}
        </Link>
        <form action={logoutJudge}>
          <button type="submit">{judgeSheet.logout}</button>
        </form>
      </nav>
    </header>
  )
}
