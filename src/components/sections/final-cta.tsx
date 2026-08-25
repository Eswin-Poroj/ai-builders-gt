import { event } from "@/content/event"
import { RegisterCta } from "@/components/register-cta"

export function FinalCtaSection() {
  return (
    <section className="final wall" aria-labelledby="final-title">
      <h2 id="final-title" className="final-title shout">
        {event.finalCta.heading}
      </h2>
      <RegisterCta placement="final" />
    </section>
  )
}
