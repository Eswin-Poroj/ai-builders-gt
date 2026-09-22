import Link from "next/link"
import { CommunityCta } from "@/components/community-cta"
import { editionPath } from "@/content/edition-index"
import { event } from "@/content/event"
import "./register-teams.css"

/**
 * Xela 2026 registration is closed. This is now an archive, not a form:
 * the team list is the frozen snapshot from `event.recap.teams`, and the
 * only action left is the community door — never a re-opened intake form.
 */
export function RegisterTeamsSection() {
  const teams = event.recap.teams ?? []

  return (
    <section className="wall wall-ink" id="inicio" aria-labelledby="equipos-title">
      <Link
        className="teams-back"
        href={editionPath(event.slug)}
        aria-label="Volver al evento"
      >
        {event.registerTeams.backLabel}
      </Link>
      <h2 id="equipos-title" className="wall-title shout">
        {event.registerTeams.heading}
      </h2>
      <p className="lede">{event.registerTeams.lede}</p>

      {teams.length > 0 ? (
        <ul className="teams-archive-list">
          {teams.map((team) => (
            <li key={team.teamName}>{team.teamName}</li>
          ))}
        </ul>
      ) : (
        <p className="note">{event.registerTeams.emptyList}</p>
      )}

      <CommunityCta placement="mid" className="band band-hero" />
    </section>
  )
}
