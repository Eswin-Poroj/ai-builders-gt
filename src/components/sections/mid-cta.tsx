import { RegisterCta } from "@/components/register-cta"
import { event } from "@/content/event"
import "./mid-cta.css"

export function MidCtaSection() {
  return (
    <section className="wall mid" aria-labelledby="mid-title">
      <h2 id="mid-title" className="wall-title shout">
        {event.midCta.heading}
      </h2>
      <p className="lede">{event.midCta.lede}</p>
      <RegisterCta placement="mid" className="band band-hero" />
    </section>
  )
}
