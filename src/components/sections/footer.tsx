import Image from "next/image"
import { event } from "@/content/event"

export function FooterSection() {
  return (
    <footer className="site-foot">
      <a className="foot-lockup" href="/#registro">
        <Image
          src="/brand/logo-mark-knockout.png"
          alt=""
          width={80}
          height={80}
        />
        <span className="foot-name">
          AI Builders
          <br />
          GT
        </span>
      </a>
      <div className="foot-links">
        <a href={event.footer.whatsappUrl} rel="noreferrer" target="_blank">
          {event.footer.whatsappLabel}
        </a>
        <a href={event.footer.instagramUrl}>{event.footer.instagramHandle}</a>
        <a href={`mailto:${event.footer.contactEmail}`}>
          {event.footer.contactEmail}
        </a>
      </div>
      <a
        href={event.footer.whatsappUrl}
        rel="noreferrer"
        target="_blank"
        aria-label="Escanear para unirse al grupo de WhatsApp"
        style={{
          display: "block",
          width: "6.5rem",
          margin: "0 0 1.2rem",
          padding: "0.4rem",
          background: "var(--paper)",
          borderRadius: 4,
        }}
      >
        <Image
          src={event.footer.whatsappQrSrc}
          alt=""
          width={450}
          height={450}
          sizes="6.5rem"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </a>
      <p className="foot-copy">{event.footer.copyright}</p>
    </footer>
  )
}
