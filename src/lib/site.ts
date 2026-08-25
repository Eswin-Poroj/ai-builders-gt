export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aibuildersgt.com"

export function visibleTracks<T extends { visible: boolean }>(items: T[]): T[] {
  return items.filter((item) => item.visible)
}
