import { CommunityCta } from "@/components/community-cta"
import { PersonMark } from "@/components/hero-marks"
import { HeroPhoto } from "@/components/ui/hero-photo"
import { community } from "@/content/community"
import "@/components/sections/hero.css"

export function CommunityHero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-stage">
        <HeroPhoto />
        <div className="hero-veil" />
        <div className="hero-invite">
          <div className="hero-title-block">
            <p className="hero-brand">{community.name}</p>
            <h1 id="hero-title">
              <span>{community.hero.lines[0]}</span>
              <span>{community.hero.lines[1]}</span>
              <span className="hero-xela">{community.hero.lines[2]}</span>
            </h1>
            <p className="hero-purpose">{community.hero.purpose}</p>
            <p className="hero-subhead">{community.hero.lede}</p>
          </div>

          <div className="hero-meta-row">
            <div className="hero-actions">
              <CommunityCta
                placement="hero"
                className="band-hero"
                leading={<PersonMark />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
