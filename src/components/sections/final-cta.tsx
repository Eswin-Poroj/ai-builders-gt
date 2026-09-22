import { CommunityCta } from "@/components/community-cta"
import { event } from "@/content/event"
import "./final-cta.css"

type Props = {
  heading?: string
}

export function FinalCtaSection({ heading }: Props = {}) {
  return (
    <section className="final wall" id="cierre" aria-labelledby="final-title">
      <h2 id="final-title" className="final-title shout">
        {heading ?? event.finalCta.heading}
      </h2>
      <CommunityCta placement="final" />
    </section>
  )
}
