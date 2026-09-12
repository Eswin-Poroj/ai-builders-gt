import { event } from "@/content/event"

export function FormatSection() {
  return (
    <section className="wall wall-deep" id="formato" aria-labelledby="formato-title">
      <h2 id="formato-title" className="wall-title">
        {event.format.heading}
      </h2>
      <div className="days">
        {event.format.days.map((day) => {
          const rows =
            day.schedule && day.schedule.length > 0
              ? day.schedule.map((slot) => `${slot.time} — ${slot.label}`)
              : day.bullets
          return (
            <article key={day.id} className="day">
              <p className="day-eyebrow">{day.subtitle}</p>
              <h3 className="day-title">{day.title}</h3>
              <p className="day-date">{day.dateLabel}</p>
              <ul>
                {rows.map((item, index) => (
                  <li key={`${day.id}-${index}`}>{item}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
