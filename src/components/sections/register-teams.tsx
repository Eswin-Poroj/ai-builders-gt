import Link from "next/link"
import { event } from "@/content/event"
import { RegisterTeamsForm } from "@/components/sections/register-teams-form"
import "./register-teams.css"

export function RegisterTeamsSection() {
  return (
    <section className="wall wall-ink" id="sobre" aria-labelledby="equipos-title">
      <Link className="teams-back" href="/" aria-label="Volver al inicio">
        {event.registerTeams.backLabel}
      </Link>
      <h2 id="equipos-title" className="wall-title shout">
        {event.registerTeams.heading}
      </h2>
      <p className="lede">{event.registerTeams.lede}</p>
      <RegisterTeamsForm
        copy={event.registerTeams}
        contactEmail={event.footer.contactEmail}
      />
    </section>
  )
}
