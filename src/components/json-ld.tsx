import { event } from "@/content/event"
import { SITE_URL } from "@/lib/site"

function schemaEventStatus(status: typeof event.eventStatus) {
  // schema.org EventStatusType does not list EventCompleted; past dates
  // are the real signal. Never emit EventCancelled for a finished edition.
  if (status === "cancelled") return "https://schema.org/EventCancelled"
  if (status === "completed") return "https://schema.org/EventCompleted"
  return "https://schema.org/EventScheduled"
}

export function CommunityJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#org`,
        name: event.communityName,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/logo-lockup-themes.png`,
        sameAs: [event.footer.instagramUrl, event.footer.whatsappUrl],
      },
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: event.communityName,
        inLanguage: "es-GT",
        publisher: { "@id": `${SITE_URL}#org` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function JsonLd({ pageUrl }: { pageUrl: string }) {
  const recapImage = event.recap.photos[0]
  const image = recapImage
    ? `${SITE_URL}${recapImage.src}`
    : `${SITE_URL}/brand/logo-lockup-themes.png`

  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.editionName,
    description: event.seo.description,
    startDate: event.dates.startIso,
    endDate: event.dates.endIso,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: schemaEventStatus(event.eventStatus),
    isAccessibleForFree: true,
    url: pageUrl,
    image,
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
    performer: event.speakers.items
      .filter((speaker) => speaker.confirmed)
      .map((speaker) => ({
        "@type": "Person",
        name: speaker.name,
      })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
