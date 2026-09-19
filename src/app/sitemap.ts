import type { MetadataRoute } from "next"
import { HACKATHON_REGISTER_PATH } from "@/lib/hackathon/constants"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date("2026-08-24") },
    {
      url: `${SITE_URL}${HACKATHON_REGISTER_PATH}`,
      lastModified: new Date("2026-09-19"),
    },
  ]
}
