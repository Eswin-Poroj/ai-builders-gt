import Image from "next/image"
import Link from "next/link"
import type {
  CommunityEvent,
  EventSpeaker,
  RecommendedBook,
} from "@/content/events"
import { FormatBadge } from "@/components/ui/format-badge"

function speakerInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  const first = parts[0]?.[0] ?? ""
  const second = parts[1]?.[0] ?? ""
  return `${first}${second}`.toUpperCase()
}

function speakerCaption(speaker: EventSpeaker): string {
  if (speaker.role === "co-speaker") return `${speaker.name} (co-speaker)`
  return speaker.name
}

function SpeakerItem({ speaker }: { speaker: EventSpeaker }) {
  return (
    <li className="event-speaker">
      <span className="event-speaker-avatar" aria-hidden="true">
        {speaker.photoSrc ? (
          <Image
            src={speaker.photoSrc}
            alt=""
            width={32}
            height={32}
            sizes="32px"
            loading="lazy"
          />
        ) : (
          <span className="event-speaker-initials">
            {speakerInitials(speaker.name)}
          </span>
        )}
      </span>
      <span>{speakerCaption(speaker)}</span>
    </li>
  )
}

function BookItem({ book }: { book: RecommendedBook }) {
  const title = book.href ? (
    <a
      className="event-book-title"
      href={book.href}
      target="_blank"
      rel="noreferrer"
    >
      {book.title}
    </a>
  ) : (
    book.title
  )

  return (
    <li className={book.coverSrc ? "event-book event-book--cover" : "event-book"}>
      {book.coverSrc ? (
        <span className="event-book-cover">
          <Image
            src={book.coverSrc}
            alt=""
            width={40}
            height={60}
            sizes="40px"
            loading="lazy"
          />
        </span>
      ) : null}
      <span className="event-book-copy">
        {title} ({book.author}) — lo recomendó {book.recommendedBy}
      </span>
    </li>
  )
}

type Props = {
  event: CommunityEvent
}

export function EventCard({ event }: Props) {
  const books = event.recommendedBooks ?? []
  const speakersId = `${event.id}-speakers`
  const booksId = `${event.id}-books`

  return (
    <article className="event-card">
      <div className="event-card-meta">
        <time dateTime={event.date}>{event.dateDisplay}</time>
        <FormatBadge format={event.format} />
      </div>
      <h3 className="event-card-title">{event.title}</h3>
      {event.topic ? <p className="event-card-topic">{event.topic}</p> : null}
      {event.speakers.length > 0 ? (
        <div className="event-card-speakers">
          <p className="event-card-label" id={speakersId}>
            Quién habló
          </p>
          <ul className="event-speaker-list" aria-labelledby={speakersId}>
            {event.speakers.map((speaker) => (
              <SpeakerItem
                key={`${speaker.name}-${speaker.role ?? "speaker"}`}
                speaker={speaker}
              />
            ))}
          </ul>
        </div>
      ) : null}
      {books.length > 0 ? (
        <div className="event-card-books">
          <p className="event-card-label" id={booksId}>
            Libros recomendados
          </p>
          <ul aria-labelledby={booksId}>
            {books.map((book) => (
              <BookItem
                key={`${book.title}-${book.recommendedBy}`}
                book={book}
              />
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
          Ver la grabación completa
        </a>
      ) : null}
    </article>
  )
}
