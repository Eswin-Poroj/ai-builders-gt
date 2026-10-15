import { EventCard } from "@/components/ui/event-card"
import { Wall } from "@/components/ui/wall"
import { community } from "@/content/community"
import { pastCommunityEvents } from "@/content/events"

export function PastEventsSection() {
  const events = pastCommunityEvents()

  return (
    <Wall
      id="eventos-pasados"
      titleId="eventos-title"
      heading={community.pastEvents.heading}
    >
      <p className="lede">{community.pastEvents.lede}</p>
      <ul className="event-grid">
        {events.map((item) => (
          <li key={item.id}>
            <EventCard event={item} />
          </li>
        ))}
      </ul>
    </Wall>
  )
}
