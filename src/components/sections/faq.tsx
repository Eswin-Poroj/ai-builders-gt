import { event } from "@/content/event"

export function FaqSection() {
  return (
    <section className="wall wall-ink" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="wall-title shout">
        {event.faq.heading}
      </h2>
      <div className="faq">
        {event.faq.items.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
