export type CtaPlacement = "header" | "hero" | "mid" | "final"

export type EventCta = {
  placement: CtaPlacement
  label: string
}

export type EventLifecycle = "scheduled" | "completed" | "cancelled"

export type EventStatId =
  | "participants"
  | "prize"
  | "days"
  | "price"
  | "speakers"
  | "teams"
  | "talks"
  | "edition"

export type EventStat = {
  id: EventStatId
  value: string
  label: string
}

export type CommunityChannel = "whatsapp" | "instagram" | "email"

export type CommunityDoorKind = "primary" | "secondary"

export type CommunityDoor = {
  id: CommunityChannel
  kind: CommunityDoorKind
  label: string
  href?: string
}

export type RecapPhotoSpan = "normal" | "wide" | "tall"

export type RecapPhoto = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  span?: RecapPhotoSpan
}

export type HackathonPlace = 1 | 2 | 3 | "mention"

export type HackathonWinner = {
  place: HackathonPlace
  teamName: string
  project?: string
  members?: string[]
  photoSrc?: string
}

export type RecapTeam = {
  teamName: string
}

export type RecapContent = {
  heading: string
  lede: string
  photos: RecapPhoto[]
  /** Snapshot of registered teams, frozen once registration closed. Shown
   *  only when there are no editorial photos yet — never fabricated. */
  teams?: RecapTeam[]
  teamsHeading?: string
  teamsLede?: string
  winners?: HackathonWinner[]
  winnersHeading?: string
  winnersLede?: string
}

export type CommunityContent = {
  doors: CommunityDoor[]
}

export type EventDayId = "day-1" | "day-2"

export type EventSlot = {
  time: string
  label: string
  place?: string
}

export type TalkModality = "presencial" | "en-linea"

export type EventTalk = {
  time: string
  speakerId?: string
  title?: string
  duration?: string
  modality?: TalkModality
  kind?: "talk" | "break"
}

export type RoomAccent = "brand" | "action"

export type EventRoom = {
  id: string
  name: string
  note?: string
  accent?: RoomAccent
  talks: EventTalk[]
}

export type EventDay = {
  id: EventDayId
  dateLabel: string
  title: string
  subtitle: string
  bullets: string[]
  schedule?: EventSlot[]
  roomsHeading?: string
  roomsNote?: string
  rooms?: EventRoom[]
}

export type SpeakerSocials = {
  linkedin?: string
  instagram?: string
  github?: string
  twitter?: string
  website?: string
}

export type Speaker = {
  id: string
  name: string
  role: string
  topic: string
  photoSrc: string | null
  href: string | null
  confirmed: boolean
  bio?: string
  socials?: SpeakerSocials
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
  | "sponsor"
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
  href?: string
  linkLabel?: string
  imageSrc?: string
  imageAlt?: string
}

export type EventContent = {
  communityName: string
  editionName: string
  slug: string
  tabLabel: string
  eventStatus: EventLifecycle
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
    heading: string
    mapEmbedSrc?: string
  }
  seo: {
    title: string
    description: string
    hackathonTitle: string
    hackathonDescription: string
    ogCta?: string
  }
  hero: {
    lines: [string, string, string]
    subhead: string
  }
  about: {
    heading: string
    paragraphs: string[]
    quota: string
    quotaLinkLabel: string
    quotaHref?: string | null
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
  midCta: {
    heading: string
    lede: string
  }
  finalCta: {
    heading: string
  }
  footer: {
    contactEmail: string
    instagramHandle: string
    instagramUrl: string
    whatsappLabel: string
    whatsappUrl: string
    whatsappQrSrc: string
    copyright: string
  }
  recap: RecapContent
  community: CommunityContent
  registerTeams: RegisterTeamsCopy
  ctas: EventCta[]
}

export type RegisterTeamsCopy = {
  heading: string
  lede: string
  ctaHeading: string
  ctaLede: string
  ctaLabel: string
  backLabel: string
  fullMessage: string
  successTemplate: string
  teamNameLabel: string
  membersLegend: string
  memberLabel: string
  contactLabel: string
  contactHint: string
  addMember: string
  removeMember: string
  submit: string
  submitting: string
  submitted: string
  listHeading: string
  emptyList: string
  memberCountLabel: string
}
