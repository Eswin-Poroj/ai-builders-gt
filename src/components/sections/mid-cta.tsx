import { CommunityCta } from "@/components/community-cta"
import { event } from "@/content/event"
import "./mid-cta.css"

type Props = {
  /** Overrides for the community home, which is not the same job as the
   *  edition archive: same door, different moment in the story. */
  heading?: string
  lede?: string
}

export function MidCtaSection({ heading, lede }: Props = {}) {
  return (
    <section className="wall mid" id="comunidad" aria-labelledby="mid-title">
      <h2 id="mid-title" className="wall-title shout">
        {heading ?? event.midCta.heading}
      </h2>
      <p className="lede">{lede ?? event.midCta.lede}</p>
      <CommunityCta placement="mid" className="band band-hero" />
    </section>
  )
}
