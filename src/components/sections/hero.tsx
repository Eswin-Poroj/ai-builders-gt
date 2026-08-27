import ReactDOM from "react-dom"
import Image from "next/image"
import { event } from "@/content/event"
import { RegisterCta } from "@/components/register-cta"
import {
  CalendarMark,
  GiftMark,
  PersonMark,
  PinMark,
} from "@/components/hero-marks"

export function HeroSection() {
  ReactDOM.preload("/hero/kiosco-svg-noche.svg", { as: "image", type: "image/svg+xml" })

  return (
    <section className="hero" id="registro" aria-labelledby="hero-title">
      <div className="hero-stage">
        <div className="hero-reel" aria-hidden="true">
          <img
            src="/hero/kiosco-svg-noche.svg"
            alt=""
            className="hero-slide hero-slide--1"
            fetchPriority="high"
            decoding="async"
          />
          <img
            src="/hero/parque-centroamerica-noche.svg"
            alt=""
            className="hero-slide hero-slide--2"
            decoding="async"
          />
          <img
            src="/hero/parque-centroamerica-dia.svg"
            alt=""
            className="hero-slide hero-slide--3"
            decoding="async"
          />
          <img
            src="/hero/parque-dia.svg"
            alt=""
            className="hero-slide hero-slide--4"
            decoding="async"
          />
          <img
            src="/hero/templo-minerva.svg"
            alt=""
            className="hero-slide hero-slide--5"
            decoding="async"
          />
        </div>
        <div className="hero-veil" />
        <div className="hero-invite">
          <Image
            className="hero-logo"
            src="/brand/logo-mark-knockout.png"
            alt="AI Builders GT"
            width={80}
            height={93}
            priority
          />

          {/* Three-line poster title — each word on its own line at maximum scale */}
          <div className="hero-title-block">
            <h1 id="hero-title">
              <span>{event.hero.lines[0]}</span>
              <span>{event.hero.lines[1]}</span>
              <span className="hero-xela">{event.hero.lines[2]}</span>
            </h1>
          </div>

          {/* Info bar: date/venue left, badge+CTA right */}
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
                <GiftMark className="hero-mark hero-mark-action" />
                {event.badge}
              </p>
              <RegisterCta
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
