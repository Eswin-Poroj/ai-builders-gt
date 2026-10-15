const EVENT_LUMA_URL = "https://luma.com/ozqw0lw8"

export const LUMA_CALENDAR_ID = "cal-Y5A1rEB10zxvFEh"

/** Weekly talks series only ("Café con Builders with AI"). No co-work. */
export const LUMA_WEEKLY_TALKS_TAG = "Café con Builders with AI"

const WEEKLY_TALKS_TAG_QUERY = `tag=${encodeURIComponent(LUMA_WEEKLY_TALKS_TAG)}`

export const LUMA_WEEKLY_TALKS_EMBED_URL =
  `https://luma.com/embed/calendar/${LUMA_CALENDAR_ID}/events?${WEEKLY_TALKS_TAG_QUERY}`

export const LUMA_WEEKLY_TALKS_CALENDAR_URL =
  `https://luma.com/calendar/${LUMA_CALENDAR_ID}?${WEEKLY_TALKS_TAG_QUERY}`

export function getLumaUrl(): string {
  const url = process.env.NEXT_PUBLIC_LUMA_URL
  if (url && !url.includes("PLACEHOLDER")) return url
  return EVENT_LUMA_URL
}
