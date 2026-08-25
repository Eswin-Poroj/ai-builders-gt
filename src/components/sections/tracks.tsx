import { event } from "@/content/event"
import { visibleTracks } from "@/lib/site"

export function TracksSection() {
  const tracks = visibleTracks(event.tracks.items)
  return (
    <section className="wall" id="tracks" aria-labelledby="tracks-title">
      <h2 id="tracks-title" className="wall-title shout">
        {event.tracks.heading}
      </h2>
      <p className="note">{event.tracks.note}</p>
      <div className="tracks">
        {tracks.map((track, index) => (
          <article
            key={track.id}
            className="track"
            data-track={String(index + 1)}
          >
            <h3 className="shout">{track.title}</h3>
            <p>{track.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
