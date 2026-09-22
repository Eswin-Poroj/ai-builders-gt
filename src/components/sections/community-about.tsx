import { community } from "@/content/community"

export function CommunityAbout() {
  return (
    <section className="wall" id="sobre" aria-labelledby="sobre-title">
      <h2 id="sobre-title" className="wall-title">
        {community.about.heading}
      </h2>
      {community.about.paragraphs.map((paragraph) => (
        <p key={paragraph} className="lede">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
