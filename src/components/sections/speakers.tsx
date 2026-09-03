import Image from "next/image"
import { event } from "@/content/event"
import type { Speaker } from "@/content/types"

export function SpeakersSection() {
  return (
    <section className="wall wall-ink" id="speakers" aria-labelledby="speakers-title">
      <h2 id="speakers-title" className="wall-title shout">
        {event.speakers.heading}
      </h2>
      <div className="cast">
        {event.speakers.items.map((speaker) => (
          <SpeakerBay key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  )
}

function SpeakerBay({ speaker }: { speaker: Speaker }) {
  const body = (
    <>
      <div className="speaker-mark" aria-hidden="true">
        {speaker.photoSrc ? (
          <Image
            src={speaker.photoSrc}
            alt=""
            width={96}
            height={96}
            sizes="4.5rem"
          />
        ) : null}
      </div>
      <div>
        {speaker.confirmed ? (
          <>
            <h3 className="speaker-name shout">{speaker.name}</h3>
            {speaker.role ? <p className="speaker-role">{speaker.role}</p> : null}
            {speaker.topic ? <p className="speaker-topic">{speaker.topic}</p> : null}
          </>
        ) : (
          <p className="tba">Por confirmar</p>
        )}
      </div>
    </>
  )

  if (speaker.href && speaker.confirmed) {
    return (
      <a
        className="speaker"
        href={speaker.href}
        rel="noreferrer"
        target="_blank"
      >
        {body}
      </a>
    )
  }

  return <article className="speaker">{body}</article>
}
