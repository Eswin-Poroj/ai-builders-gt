export type CtaPlacement = "header" | "hero" | "mid" | "final"

export type EventCta = {
  placement: CtaPlacement
  label: string
}

export type EventStat = {
  id: "participants" | "prize" | "days" | "price"
  value: string
  label: string
}

export type EventDayId = "day-1" | "day-2"

export type EventDay = {
  id: EventDayId
  dateLabel: string
  title: string
  subtitle: string
  bullets: string[]
}

export type Speaker = {
  id: string
  name: string
  role: string
  topic: string
  photoSrc: string | null
  href: string | null
  confirmed: boolean
}

export type TrackId =
  | "lenguas-mayas"
  | "rural-agricola"
  | "pymes"
  | "salud-educacion"

export type Track = {
  id: TrackId
  title: string
  description: string
  visible: boolean
}

export type SponsorTier =
  | "naming"
  | "tool"
  | "community"
  | "ally"
  | "venue"
  | "media"

export type Sponsor = {
  id: string
  name: string
  tier: SponsorTier
  href: string | null
  logoSrc: string | null
  logoWidth?: number
  logoHeight?: number
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type EventContent = {
  communityName: string
  editionName: string
  badge: string
  dates: {
    startIso: string
    endIso: string
    display: string
    shout: string
  }
  venue: {
    name: string
    city: string
    display: string
  }
  seo: {
    title: string
    description: string
  }
  hero: {
    lines: [string, string, string]
    subhead: string
  }
  about: {
    heading: string
    paragraphs: string[]
    stats: EventStat[]
  }
  format: {
    heading: string
    days: [EventDay, EventDay]
  }
  speakers: {
    heading: string
    items: Speaker[]
  }
  tracks: {
    heading: string
    note: string
    items: Track[]
  }
  allies: {
    heading: string
    items: Sponsor[]
  }
  faq: {
    heading: string
    items: FaqItem[]
  }
  finalCta: {
    heading: string
  }
  footer: {
    contactEmail: string
    instagramHandle: string
    instagramUrl: string
    copyright: string
  }
  ctas: EventCta[]
}
