import { editionPath } from "./edition-index"
import { event } from "./event"

export type EventFormat = "en-linea" | "presencial"

export type EventSpeaker = {
  name: string
  role?: "speaker" | "co-speaker"
}

export type RecommendedBook = {
  title: string
  author: string
  recommendedBy: string
}

export type CommunityEvent = {
  id: string
  date: string
  dateDisplay: string
  format: EventFormat
  title: string
  topic?: string
  speakers: EventSpeaker[]
  recommendedBooks?: RecommendedBook[]
  recapHref?: string
  clipHref?: string
  status: "past" | "upcoming"
}

export const FORMAT_LABEL: Record<EventFormat, string> = {
  "en-linea": "En línea",
  presencial: "Presencial",
}

export const communityEvents: CommunityEvent[] = [
  {
    id: "xela-2026-summit",
    date: event.dates.startIso,
    dateDisplay: event.dates.display,
    format: "presencial",
    title: "Building with AI Summit",
    topic:
      "Summit y GrokBot Hackathon en la Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango.",
    speakers: event.speakers.items
      .filter((speaker) => speaker.confirmed)
      .map((speaker) => ({ name: speaker.name })),
    recapHref: editionPath(event.slug),
    status: "past",
  },
  {
    id: "charla-2026-10-13",
    date: "2026-10-13",
    dateDisplay: "13 de octubre 2026",
    format: "en-linea",
    title: "Charla en línea con Ludwing Ixcayau",
    speakers: [
      { name: "Ludwing Ixcayau", role: "speaker" },
      { name: "Cristian", role: "co-speaker" },
    ],
    recommendedBooks: [
      {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        recommendedBy: "Ludwing Ixcayau",
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        recommendedBy: "Ludwing Ixcayau",
      },
      {
        title: "The Innovator's Dilemma",
        author: "Clayton Christensen",
        recommendedBy: "Cristian",
      },
      {
        title: "Scaling Up",
        author: "Verne Harnish",
        recommendedBy: "Cristian",
      },
    ],
    status: "past",
  },
  {
    id: "charla-2026-10-20",
    date: "2026-10-20",
    dateDisplay: "20 de octubre 2026",
    format: "en-linea",
    title: "Café con Victor",
    topic:
      "Tu infraestructura miente, y la IA le cree. Charla de Victor Marroquin, Cloud Infrastructure Engineer en Yalo.",
    speakers: [{ name: "Victor Marroquin", role: "speaker" }],
    status: "past",
  },
]

export function pastCommunityEvents(): CommunityEvent[] {
  return communityEvents
    .filter((item) => item.status === "past")
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function formatLabel(format: EventFormat): string {
  return FORMAT_LABEL[format]
}
