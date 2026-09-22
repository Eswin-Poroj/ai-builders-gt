import { CommunityJsonLd } from "@/components/json-ld"
import { CommunityAbout } from "@/components/sections/community-about"
import { CommunityHero } from "@/components/sections/community-hero"
import { EditionsSection } from "@/components/sections/editions"
import { FooterSection } from "@/components/sections/footer"
import { MidCtaSection } from "@/components/sections/mid-cta"
import { community } from "@/content/community"

export const dynamic = "force-static"

export default function Home() {
  return (
    <main>
      <CommunityJsonLd />
      <CommunityHero />
      <CommunityAbout />
      <EditionsSection />
      <MidCtaSection
        heading={community.midCta.heading}
        lede={community.midCta.lede}
      />
      <FooterSection />
    </main>
  )
}
