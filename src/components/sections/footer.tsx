import Image from "next/image"
import { event } from "@/content/event"

export function FooterSection() {
  return (
    <footer className="site-foot">
      <a className="foot-lockup" href="#registro">
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
        <a href={event.footer.instagramUrl}>{event.footer.instagramHandle}</a>
        <a href={`mailto:${event.footer.contactEmail}`}>
          {event.footer.contactEmail}
        </a>
      </div>
      <p className="foot-copy">{event.footer.copyright}</p>
    </footer>
  )
}
