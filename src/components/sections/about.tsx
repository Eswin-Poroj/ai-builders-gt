import Link from "next/link"
import { event } from "@/content/event"
import "./about.css"

export function AboutSection() {
  return (
    <section className="wall" id="sobre" aria-labelledby="sobre-title">
      <h2 id="sobre-title" className="wall-title">
        {event.about.heading}
      </h2>
      <div className="about-grid">
        <aside>
          <Stats />
        </aside>
        <div className="about-copy">
          {event.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="lede">{paragraph}</p>
          ))}
          {event.about.quota ? (
            <p className="lede">
              {event.about.quota}
              {event.about.quotaHref && event.about.quotaLinkLabel ? (
                <>
                  {" "}
                  <Link href={event.about.quotaHref}>
                    {event.about.quotaLinkLabel}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <div className="stat-row">
      {event.about.stats.map((stat) => (
        <p key={stat.id} className="stat">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </p>
      ))}
    </div>
  )
}
