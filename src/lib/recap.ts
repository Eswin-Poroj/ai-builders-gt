import { event } from "@/content/event"
import type { EventContent, RecapPhoto } from "@/content/types"

export type RecapGallery = {
  kind: "editorial" | "empty"
  photos: RecapPhoto[]
}

/**
 * Only ever returns real, editorial photos of the event. Never fabricates a
 * gallery from speaker headshots or the civic hero reel — PRODUCT.md is
 * explicit that missing evidence gets marked as missing, not invented.
 */
export function resolveRecapGallery(
  content: EventContent = event,
): RecapGallery {
  if (content.recap.photos.length > 0) {
    return { kind: "editorial", photos: content.recap.photos }
  }

  return { kind: "empty", photos: [] }
}
