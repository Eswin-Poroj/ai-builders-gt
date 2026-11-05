const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/

const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "m.youtube.com",
  "music.youtube.com",
  "youtube-nocookie.com",
])

function validId(value: string | undefined): string | null {
  return value && YOUTUBE_ID.test(value) ? value : null
}

export function youtubeVideoId(href: string): string | null {
  try {
    const url = new URL(href)
    const host = url.hostname.replace(/^www\./, "").toLowerCase()

    if (host === "youtu.be") {
      return validId(url.pathname.split("/").filter(Boolean)[0])
    }

    if (!YOUTUBE_HOSTS.has(host)) return null

    const fromQuery = validId(url.searchParams.get("v") ?? undefined)
    if (fromQuery) return fromQuery

    const pathMatch = url.pathname.match(
      /^\/(?:embed|shorts|live|v)\/([A-Za-z0-9_-]{11})(?:\/|$)/,
    )
    return validId(pathMatch?.[1])
  } catch {
    return null
  }
}

export function youtubeThumbnailSrc(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

export function youtubeEmbedSrc(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`
}
