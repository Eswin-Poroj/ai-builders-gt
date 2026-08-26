const EVENT_LUMA_URL = "https://luma.com/ozqw0lw8"

export function getLumaUrl(): string {
  const url = process.env.NEXT_PUBLIC_LUMA_URL
  if (url && !url.includes("PLACEHOLDER")) return url
  return EVENT_LUMA_URL
}
