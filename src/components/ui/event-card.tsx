import Link from "next/link"
import type { CommunityEvent } from "@/content/events"
import { FormatBadge } from "@/components/ui/format-badge"

function speakerLine(event: CommunityEvent): string {
  return event.speakers
    .map((speaker) => {
      if (speaker.role === "co-speaker") return `${speaker.name} (co-speaker)`
      return speaker.name
    })
    .join(" · ")
}

type Props = {
  event: CommunityEvent
}

export function EventCard({ event }: Props) {
  const books = event.recommendedBooks ?? []
  const speakers = speakerLine(event)

  return (
    <article className="event-card">
      <div className="event-card-meta">
        <time dateTime={event.date}>{event.dateDisplay}</time>
        <FormatBadge format={event.format} />
      </div>
      <h3 className="event-card-title">{event.title}</h3>
      {event.topic ? <p className="event-card-topic">{event.topic}</p> : null}
      {speakers ? (
        <p className="event-card-speakers">
          <span className="event-card-label">Quién habló</span>
          {speakers}
        </p>
      ) : null}
      {books.length > 0 ? (
        <div className="event-card-books">
          <p className="event-card-label">Libros recomendados</p>
          <ul>
            {books.map((book) => (
              <li key={`${book.title}-${book.recommendedBy}`}>
                {book.title} ({book.author}) — lo recomendó {book.recommendedBy}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {event.recapHref ? (
        <Link className="event-card-link" href={event.recapHref}>
          Ver el recap
        </Link>
      ) : null}
      {event.clipHref ? (
        <a
          className="event-card-link"
          href={event.clipHref}
          target="_blank"
          rel="noreferrer"
        >
          Ver el clip
        </a>
      ) : null}
    </article>
  )
}
