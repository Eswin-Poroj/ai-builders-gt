import { event } from "@/content/event"
import type { HackathonPlace } from "@/content/types"
import "./winners.css"

const placeLabel: Record<HackathonPlace, string> = {
  1: "Primer lugar",
  2: "Segundo lugar",
  3: "Tercer lugar",
  mention: "Mención",
}

export function WinnersSection() {
  const winners = event.recap.winners
  if (!winners?.length) return null

  return (
    <section className="wall" id="ganadores" aria-labelledby="ganadores-title">
      <h2 id="ganadores-title" className="wall-title shout">
        {event.recap.winnersHeading ?? "Ganadores"}
      </h2>
      {event.recap.winnersLede ? (
        <p className="lede">{event.recap.winnersLede}</p>
      ) : null}
      <ol className="winners">
        {winners.map((winner) => (
          <li key={`${winner.place}-${winner.teamName}`} className="winner-row">
            <p className="winner-place">{placeLabel[winner.place]}</p>
            <p className="winner-name">{winner.teamName}</p>
            {winner.project ? (
              <p className="winner-project">{winner.project}</p>
            ) : null}
            {winner.members?.length ? (
              <p className="winner-members">{winner.members.join(" · ")}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
