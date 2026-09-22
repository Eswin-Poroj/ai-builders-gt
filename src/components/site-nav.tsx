"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { editionIndex, editionPath } from "@/content/edition-index"
import "./site-nav.css"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="site-nav">
      <Link className="site-nav-lockup" href="/">
        <Image
          src="/brand/logo-mark-knockout.png"
          alt=""
          width={80}
          height={80}
        />
        <span className="site-nav-name">AI Builders GT</span>
      </Link>
      <nav className="site-tabs" aria-label="Pestañas del sitio">
        <Link
          className="site-tab"
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Comunidad
        </Link>
        {editionIndex.map((edition) => {
          const href = editionPath(edition.slug)
          const current =
            pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={edition.slug}
              className="site-tab"
              href={href}
              aria-current={current ? "page" : undefined}
            >
              {edition.tabLabel}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
