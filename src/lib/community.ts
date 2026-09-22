import { event } from "@/content/event"
import type {
  CommunityChannel,
  CommunityDoor,
  EventContent,
} from "@/content/types"

export function getCommunityHref(
  channel: CommunityChannel,
  content: EventContent = event,
): string {
  const door = content.community.doors.find((item) => item.id === channel)
  if (door?.href) return door.href
  if (channel === "whatsapp") return content.footer.whatsappUrl
  if (channel === "instagram") return content.footer.instagramUrl
  return `mailto:${content.footer.contactEmail}`
}

export function getPrimaryDoor(content: EventContent = event): CommunityDoor {
  return (
    content.community.doors.find((item) => item.kind === "primary") ??
    content.community.doors[0]
  )
}
