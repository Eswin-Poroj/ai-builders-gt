import { CommunityCta } from "@/components/community-cta"
import {
  CalendarMark,
  PersonMark,
  PinMark,
} from "@/components/hero-marks"
import { HeroPhoto } from "@/components/ui/hero-photo"
import { event } from "@/content/event"
import "./hero.css"

export function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-stage">
        <HeroPhoto />
        <div className="hero-veil" />
        <div className="hero-invite">
          <div className="hero-title-block">
            <h1 id="hero-title">
              <span>{event.hero.lines[0]}</span>
              <span>{event.hero.lines[1]}</span>
              <span className="hero-xela">{event.hero.lines[2]}</span>
            </h1>
            <p className="hero-subhead">{event.hero.subhead}</p>
          </div>

          <div className="hero-meta-row">
            <div className="hero-info">
              <p className="hero-date">
                <CalendarMark className="hero-mark hero-mark-brand" />
                {event.dates.display}
              </p>
              <p className="hero-venue">
                <PinMark className="hero-mark hero-mark-brand" />
                {event.venue.display}
              </p>
            </div>
            <div className="hero-actions">
              <p className="hero-badge">
                <CalendarMark className="hero-mark" />
                {event.badge}
              </p>
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
