import { AboutSection } from "@/components/sections/about"
import { AlliesSection } from "@/components/sections/allies"
import { FaqSection } from "@/components/sections/faq"
import { FinalCtaSection } from "@/components/sections/final-cta"
import { FooterSection } from "@/components/sections/footer"
import { FormatSection } from "@/components/sections/format"
import { HeroSection } from "@/components/sections/hero"
import { MidCtaSection } from "@/components/sections/mid-cta"
import { SpeakersSection } from "@/components/sections/speakers"
import { TracksSection } from "@/components/sections/tracks"
import { VenueSection } from "@/components/sections/venue"

export const dynamic = "force-static"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FormatSection />
      <SpeakersSection />
      <TracksSection />
      <MidCtaSection />
      <AlliesSection />
      <VenueSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  )
}
