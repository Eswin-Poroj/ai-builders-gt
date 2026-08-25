import { event } from "@/content/event"

export function FormatSection() {
  return (
    <section className="wall wall-deep" id="formato" aria-labelledby="formato-title">
      <h2 id="formato-title" className="wall-title shout">
        {event.format.heading}
      </h2>
      <div className="days">
        {event.format.days.map((day, index) => (
          <article key={day.id} className="day" data-day={String(index + 1)}>
            <h3 className="day-title shout">
              {day.subtitle} — {day.title}
            </h3>
            <p className="day-date">{day.dateLabel}</p>
            <ul>
              {day.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
