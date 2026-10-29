import { editionPath } from "./edition-index"
import { event } from "./event"

export type EventFormat = "en-linea" | "presencial"

export type EventSpeaker = {
  name: string
  role?: "speaker" | "co-speaker"
  photoSrc?: string
}

export type RecommendedBook = {
  title: string
  author: string
  recommendedBy: string
  href?: string
  coverSrc?: string
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
      .map((speaker) => ({
        name: speaker.name,
        photoSrc: speaker.photoSrc ?? undefined,
      })),
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
      {
        name: "Ludwing Ixcayau",
        role: "speaker",
        photoSrc: "/speakers/ludwing-foto.jpg",
      },
      {
        name: "Cristian Lavarreda",
        role: "co-speaker",
        photoSrc: "/speakers/lavarreda.png",
      },
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
    clipHref:
      "https://drive.google.com/file/d/1WBO_27zmk27NyoDPPsDz76j0dX5KuXYd/view?usp=sharing",
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
    speakers: [
      {
        name: "Victor Marroquin",
        role: "speaker",
        photoSrc: "/speakers/victor-foto.png",
      },
    ],
    recommendedBooks: [
      {
        title: "El Negociador",
        author: "Carlos Fabián Murro",
        recommendedBy: "Victor Marroquin",
        href: "https://www.oceano.com.ar/LibroDetalle/EL-NEGOCIADOR-9789876097253",
        coverSrc: "/books/el-negociador.jpg",
      },
      {
        title: "Site Reliability Engineering (2.ª edición)",
        author: "Google / O'Reilly",
        recommendedBy: "Victor Marroquin",
        href: "https://www.oreilly.com/library/view/site-reliability-engineering/9798341607675/",
        coverSrc: "/books/site-reliability-engineering.jpg",
      },
    ],
    clipHref:
      "https://drive.google.com/file/d/15CYeP0OdzSvpKnaoxfq8LJWVyQeG3fiE/view?usp=sharing",
    status: "past",
  },
  {
    id: "cowork-2026-10-21",
    date: "2026-10-21",
    dateDisplay: "21 de octubre 2026",
    format: "presencial",
    title: "Co-work en Xela: traé tu proyecto y construilo con IA",
    topic:
      "Co-work de networking en Sucrér coffee experience, Quetzaltenango: ronda de presentaciones, trabajo en grupos por intereses y demos opcionales.",
    speakers: [],
    status: "past",
  },
  {
    id: "charla-2026-10-27",
    date: "2026-10-27",
    dateDisplay: "27 de octubre 2026",
    format: "en-linea",
    title: "Builders en Vivo con Marvin",
    topic:
      "¿Por qué la IA acierta… y por qué se equivoca con tanta seguridad? Charla de Marvin Mazariegos, AI DevRel en DDR Innova, sobre las capacidades y limitaciones de los modelos de lenguaje y cómo tener un modelo mental para usarlos bien.",
    speakers: [
      {
        name: "Marvin Mazariegos",
        role: "speaker",
        photoSrc: "/speakers/marvin-moises.png",
      },
    ],
    recommendedBooks: [
      {
        title: "Co-Intelligence",
        author: "Ethan Mollick",
        recommendedBy: "Marvin Mazariegos",
      },
    ],
    clipHref:
      "https://drive.google.com/file/d/1s9_n5kCvJMYnZlTWLuR8bY0C3pk747E0/view?usp=sharing",
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
