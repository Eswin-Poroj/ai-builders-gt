import { editionIndex, editionPath } from "./edition-index"
import { event as xela2026 } from "./event"
import type { EventContent } from "./types"

const editionsBySlug: Record<string, EventContent> = {
  "xela-2026": xela2026,
}

export function getEdition(slug: string): EventContent | undefined {
  return editionsBySlug[slug]
}

export function listEditionSlugs() {
  return editionIndex.map((edition) => edition.slug)
}

export { editionIndex, editionPath }
