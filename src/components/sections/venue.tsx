import { event } from "@/content/event"

export function VenueSection() {
  const { venue } = event
  if (!venue.mapEmbedSrc) return null

  return (
    <section className="wall" id="ubicacion" aria-labelledby="ubicacion-title">
      <h2 id="ubicacion-title" className="wall-title">
        Ubicación
      </h2>
      <p className="lede venue-address">
        {venue.display}
      </p>
      <div className="venue-map">
        <iframe
          src={venue.mapEmbedSrc}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={`Mapa — ${venue.name}`}
        />
      </div>
    </section>
  )
}
