import Link from "next/link"
import { community } from "@/content/community"
import {
  editionIndex,
  editionPath,
  editionStatusLabel,
} from "@/content/edition-index"
import "./editions.css"

export function EditionsSection() {
  return (
    <section className="wall" id="ediciones" aria-labelledby="ediciones-title">
      <h2 id="ediciones-title" className="wall-title shout">
        {community.editions.heading}
      </h2>
      <p className="lede">{community.editions.lede}</p>
      <ul className="edition-grid">
        {editionIndex.map((edition) => (
          <li key={edition.slug}>
            <Link className="edition-plaque" href={editionPath(edition.slug)}>
              <p className="edition-status">
                {editionStatusLabel(edition.status)}
              </p>
              <h3 className="edition-name">{edition.tabLabel}</h3>
              <p className="edition-meta">
                {edition.dateDisplay}
                {" · "}
                {edition.city}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
