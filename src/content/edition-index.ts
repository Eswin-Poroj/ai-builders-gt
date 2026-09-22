import type { EventLifecycle } from "./types"

export type EditionIndex = {
  slug: string
  tabLabel: string
  name: string
  status: EventLifecycle
  dateDisplay: string
  city: string
}

export const EDITION_ROOT = "/eventos"

export const editionIndex: EditionIndex[] = [
  {
    slug: "xela-2026",
    tabLabel: "Xela 2026",
    name: "AI Builders Xela 2026",
    status: "completed",
    dateDisplay: "19–20 de septiembre 2026",
    city: "Quetzaltenango",
  },
]

export function editionPath(slug: string) {
  return `${EDITION_ROOT}/${slug}`
}

export function editionStatusLabel(status: EventLifecycle) {
  if (status === "completed") return "Ya sucedió"
  if (status === "cancelled") return "Cancelada"
  return "Próxima"
}
