import Image from "next/image"
import { event } from "@/content/event"
import type { FaqItem } from "@/content/types"

const faqImageWrapStyle = {
  display: "block",
  width: "8.5rem",
  margin: "0 0 1.2rem",
  padding: "0.45rem",
  background: "var(--paper)",
  borderRadius: 4,
} as const

function FaqItemImage({ item }: { item: FaqItem }) {
  if (!item.imageSrc) return null

  const image = (
    <Image
      src={item.imageSrc}
      alt={item.imageAlt ?? ""}
      width={450}
      height={450}
      sizes="8.5rem"
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  )

  if (!item.href) {
    return <div style={faqImageWrapStyle}>{image}</div>
  }

  return (
    <a href={item.href} rel="noreferrer" target="_blank" style={faqImageWrapStyle}>
      {image}
    </a>
  )
}

export function FaqSection() {
  return (
    <section className="wall wall-ink" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="wall-title shout">
        {event.faq.heading}
      </h2>
      <div className="faq">
        {event.faq.items.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>{item.question}</summary>
            <p>
              {item.answer}
              {item.href && item.linkLabel ? (
                <>
                  {" "}
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { rel: "noreferrer", target: "_blank" }
                      : {})}
                  >
                    {item.linkLabel}
                  </a>
                  {"."}
                </>
              ) : null}
            </p>
            <FaqItemImage item={item} />
          </details>
        ))}
      </div>
    </section>
  )
}
