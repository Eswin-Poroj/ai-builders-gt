import { RecapGallery } from "@/components/recap-gallery"
import { event } from "@/content/event"
import { resolveRecapGallery } from "@/lib/recap"
import "./recap.css"

export function RecapSection() {
  const gallery = resolveRecapGallery()
  const teams = event.recap.teams ?? []

  if (gallery.kind === "empty" && teams.length === 0) return null

  const heading =
    gallery.kind === "editorial"
      ? event.recap.heading
      : event.recap.teamsHeading ?? event.recap.heading
  const lede =
    gallery.kind === "editorial"
      ? event.recap.lede
      : event.recap.teamsLede ?? event.recap.lede

  return (
    <section className="wall wall-ink" id="recap" aria-labelledby="recap-title">
      <h2 id="recap-title" className="wall-title shout">
        {heading}
      </h2>
      <p className="lede">{lede}</p>
      {gallery.kind === "editorial" ? (
        <RecapGallery photos={gallery.photos} />
      ) : (
        <ol className="recap-teams">
          {teams.map((team) => (
            <li key={team.teamName} className="recap-team">
              {team.teamName}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
