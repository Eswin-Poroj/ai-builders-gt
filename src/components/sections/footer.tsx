import Image from "next/image"
import { event } from "@/content/event"
import "@/components/community.css"

export function FooterSection() {
  return (
    <footer className="site-foot">
      <a className="foot-lockup" href="/">
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
        className="qr-plaque"
        aria-label="Escanear para unirse al grupo de WhatsApp"
      >
        <Image
          src={event.footer.whatsappQrSrc}
          alt=""
          width={450}
          height={450}
          sizes="6.5rem"
        />
      </a>
      <p className="foot-copy">{event.footer.copyright}</p>
    </footer>
  )
}
