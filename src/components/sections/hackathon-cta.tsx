import { event } from "@/content/event"
import { HackathonRegisterCta } from "@/components/hackathon-register-cta"
import "./hackathon-cta.css"

export function HackathonCtaSection() {
  return (
    <section
      className="wall wall-deep hackathon-cta"
      id="equipos"
      aria-labelledby="equipos-title"
    >
      <h2 id="equipos-title" className="wall-title shout">
        {event.registerTeams.ctaHeading}
      </h2>
      <p className="lede">{event.registerTeams.ctaLede}</p>
      <HackathonRegisterCta
        className="band band-hero"
        label={event.registerTeams.ctaLabel}
      />
    </section>
  )
}
