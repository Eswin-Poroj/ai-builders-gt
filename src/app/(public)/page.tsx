import { CommunityJsonLd } from "@/components/json-ld"
import { CharlasSection } from "@/components/sections/charlas"
import { CommunityHero } from "@/components/sections/community-hero"
import { FooterSection } from "@/components/sections/footer"
import { PastEventsSection } from "@/components/sections/past-events"

export const dynamic = "force-static"

export default function Home() {
  return (
    <main>
      <CommunityJsonLd />
      <CommunityHero />
      <CharlasSection />
      <PastEventsSection />
      <FooterSection />
    </main>
  )
}
