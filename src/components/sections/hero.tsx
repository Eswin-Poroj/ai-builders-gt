import ReactDOM from "react-dom"
import { CommunityCta } from "@/components/community-cta"
import { CIVIC_REEL } from "@/content/civic-reel"
import { event } from "@/content/event"
import {
  CalendarMark,
  PersonMark,
  PinMark,
} from "@/components/hero-marks"
import "./hero.css"

export function HeroSection() {
  ReactDOM.preload("/hero/kiosco-svg-noche.svg", { as: "image", type: "image/svg+xml" })

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-stage">
        <div className="hero-reel" aria-hidden="true">
          {CIVIC_REEL.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt=""
              className={`hero-slide ${slide.className}`}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
            />
          ))}
        </div>
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
                <PinMark className="hero-mark hero-mark-action" />
                {event.venue.display}
              </p>
            </div>
            <div className="hero-actions">
              <p className="hero-badge">
                <CalendarMark className="hero-mark hero-mark-action" />
                {event.badge}
              </p>
              <CommunityCta
                placement="hero"
                className="band band-hero"
                leading={<PersonMark />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
