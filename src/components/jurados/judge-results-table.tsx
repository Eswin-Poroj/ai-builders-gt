import { scoreBand } from "@/lib/hackathon/rubric"
import type { JudgeResultRow } from "@/lib/hackathon/judge-data"
import { judgeSheet } from "@/content/judge-sheet"

export function JudgeResultsTable({ rows }: { rows: JudgeResultRow[] }) {
  if (rows.length === 0) {
    return <p className="jurados-lede">{judgeSheet.resultsEmpty}</p>
  }

  return (
    <div className="jurados-table-wrap">
      <table className="jurados-table">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Promedio</th>
            <th>Fichas</th>
            <th>Banda</th>
            <th>Jurados</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const avg = row.avg_total == null ? null : Number(row.avg_total)
            return (
              <tr key={row.id}>
                <td>{row.team_name}</td>
                <td>{avg == null ? "—" : avg.toFixed(1)}</td>
                <td>{row.n_scores}</td>
                <td>{avg == null ? "—" : scoreBand(avg)}</td>
                <td>
                  {row.scores.length === 0
                    ? "—"
                    : row.scores
                        .map((score) => `${score.judge_display_name} ${score.total}`)
                        .join(" · ")}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
