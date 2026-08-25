import { event } from "@/content/event"
import { getLumaUrl } from "@/lib/luma"
import { SITE_URL } from "@/lib/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.editionName,
    description: event.seo.description,
    startDate: event.dates.startIso,
    endDate: event.dates.endIso,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    url: SITE_URL,
    image: `${SITE_URL}/brand/logo-lockup-themes.png`,
    location: {
      "@type": "Place",
      name: event.venue.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.venue.city,
        addressCountry: "GT",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.communityName,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "GTQ",
      url: getLumaUrl().startsWith("#") ? SITE_URL : getLumaUrl(),
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
