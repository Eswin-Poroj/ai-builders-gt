import { event } from "@/content/event"

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
        <div>
          {event.about.paragraphs.map((p, i) => (
            <p key={i} className="lede">{p}</p>
          ))}
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
