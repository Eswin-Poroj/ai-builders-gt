import Image from "next/image"
import { event } from "@/content/event"
import type { FaqItem } from "@/content/types"
import "@/components/community.css"

function FaqItemImage({ item }: { item: FaqItem }) {
  if (!item.imageSrc) return null

  const image = (
    <Image
      src={item.imageSrc}
      alt={item.imageAlt ?? ""}
      width={450}
      height={450}
      sizes="8.5rem"
    />
  )

  if (!item.href) {
    return <div className="qr-plaque qr-plaque--faq">{image}</div>
  }

  return (
    <a
      href={item.href}
      rel="noreferrer"
      target="_blank"
      className="qr-plaque qr-plaque--faq"
    >
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
