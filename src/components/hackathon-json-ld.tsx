import { event } from "@/content/event"
import { SITE_URL } from "@/lib/site"
import { HACKATHON_REGISTER_PATH } from "@/lib/hackathon/constants"

export function HackathonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "GrokBot Hackathon",
    description: event.seo.hackathonDescription,
    startDate: event.dates.endIso,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    url: `${SITE_URL}${HACKATHON_REGISTER_PATH}`,
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
      url: `${SITE_URL}${HACKATHON_REGISTER_PATH}`,
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
