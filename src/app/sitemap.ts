import type { MetadataRoute } from "next"
import { editionIndex, editionPath } from "@/content/edition-index"
import { HACKATHON_REGISTER_PATH } from "@/lib/hackathon/constants"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date("2026-09-21") },
    ...editionIndex.map((edition) => ({
      url: `${SITE_URL}${editionPath(edition.slug)}`,
      lastModified: new Date("2026-09-21"),
    })),
    {
      url: `${SITE_URL}${HACKATHON_REGISTER_PATH}`,
      lastModified: new Date("2026-09-19"),
    },
  ]
}
