import type { Metadata } from "next"
import { HackathonJsonLd } from "@/components/hackathon-json-ld"
import { FooterSection } from "@/components/sections/footer"
import { RegisterTeamsSection } from "@/components/sections/register-teams"
import { event } from "@/content/event"
import { HACKATHON_REGISTER_PATH } from "@/lib/hackathon/constants"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const pageUrl = `${SITE_URL}${HACKATHON_REGISTER_PATH}`

export const metadata: Metadata = {
  title: event.seo.hackathonTitle,
  description: event.seo.hackathonDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: event.seo.hackathonTitle,
    description: event.seo.hackathonDescription,
    url: pageUrl,
    siteName: event.communityName,
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: event.seo.hackathonTitle,
    description: event.seo.hackathonDescription,
  },
}

export default function HackathonRegisterPage() {
  return (
    <main>
      <HackathonJsonLd />
      <RegisterTeamsSection />
      <FooterSection />
    </main>
  )
}
