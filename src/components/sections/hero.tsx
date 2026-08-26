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
  return (
    <section className="hero" id="registro" aria-labelledby="hero-title">
      <div className="hero-stage">
        <Image
          src="/hero/kiosco-noche.jpg"
          alt="Kiosco del Parque Centroamérica, Quetzaltenango, de noche"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hero-photo-img"
        />
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
          <h1 id="hero-title">
            AI Builders
            <span className="hero-edition">
              <span className="hero-xela">Xela</span>{" "}
              <span className="hero-year">2026</span>
            </span>
          </h1>
          <hr className="hero-rule" />
          <p className="hero-date">
            <CalendarMark className="hero-mark hero-mark-brand" />
            {event.dates.display}
          </p>
          <p className="hero-meta">
            <PinMark className="hero-mark hero-mark-action" />
            <span className="hero-place">
              {event.venue.name}
              <span className="hero-city">{event.venue.city}</span>
            </span>
          </p>
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
    </section>
  )
}
