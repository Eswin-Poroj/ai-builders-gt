import { AboutSection } from "@/components/sections/about"
import { AlliesSection } from "@/components/sections/allies"
import { FaqSection } from "@/components/sections/faq"
import { FinalCtaSection } from "@/components/sections/final-cta"
import { FormatSection } from "@/components/sections/format"
import { HeroSection } from "@/components/sections/hero"
import { MidCtaSection } from "@/components/sections/mid-cta"
import { RecapSection } from "@/components/sections/recap"
import { SpeakersSection } from "@/components/sections/speakers"
import { TracksSection } from "@/components/sections/tracks"
import { VenueSection } from "@/components/sections/venue"
import { WinnersSection } from "@/components/sections/winners"
import { JsonLd } from "@/components/json-ld"

export function EventArchive({ pageUrl }: { pageUrl: string }) {
  return (
    <>
      <JsonLd pageUrl={pageUrl} />
      <HeroSection />
      <AboutSection />
      <RecapSection />
      <WinnersSection />
      <FormatSection />
      <SpeakersSection />
      <TracksSection />
      <MidCtaSection />
      <AlliesSection />
      <VenueSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
