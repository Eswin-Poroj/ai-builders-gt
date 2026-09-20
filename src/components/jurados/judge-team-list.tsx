import Link from "next/link"
import { HACKATHON_JUDGE_PATH } from "@/lib/hackathon/constants"
import { scoreBand } from "@/lib/hackathon/rubric"
import type { JudgeTeamRow } from "@/lib/hackathon/judge-data"
import { judgeSheet } from "@/content/judge-sheet"

export function JudgeTeamList({ teams }: { teams: JudgeTeamRow[] }) {
  if (teams.length === 0) {
    return <p className="jurados-lede">{judgeSheet.teamsEmpty}</p>
  }

  return (
    <ul className="jurados-list">
      {teams.map((team) => {
        const members = Array.isArray(team.members)
          ? team.members.join(", ")
          : ""
        const saved = team.my_total != null
        return (
          <li key={team.id}>
            <Link href={`${HACKATHON_JUDGE_PATH}/equipos/${team.id}`}>
              <span className="jurados-list-name">{team.team_name}</span>
              <span className="jurados-list-meta">
                {members}
              </span>
              <span className="jurados-list-meta">
                <span className="jurados-badge">
                  {saved ? judgeSheet.saved : judgeSheet.pending}
                </span>
                {saved ? ` · ${team.my_total}/100 · ${scoreBand(team.my_total ?? 0)}` : ""}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
