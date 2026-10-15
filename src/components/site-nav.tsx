"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./site-nav.css"

function scrollToId(id: string) {
  const section = document.getElementById(id)
  if (!section) return false
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  section.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  })
  return true
}

export function SiteNav() {
  const pathname = usePathname()
  const onHome = pathname === "/"
  const onEvents = pathname.startsWith("/eventos/")

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
          aria-current={onHome ? "page" : undefined}
        >
          Comunidad
        </Link>
        <Link
          className="site-tab"
          href="/#charlas"
          onClick={(event) => {
            if (!onHome) return
            if (!scrollToId("charlas")) return
            event.preventDefault()
            history.replaceState(null, "", "/#charlas")
          }}
        >
          Charlas
        </Link>
        <Link
          className="site-tab"
          href="/#eventos-pasados"
          aria-current={onEvents ? "page" : undefined}
          onClick={(event) => {
            if (!onHome) return
            if (!scrollToId("eventos-pasados")) return
            event.preventDefault()
            history.replaceState(null, "", "/#eventos-pasados")
          }}
        >
          Eventos
        </Link>
      </nav>
    </header>
  )
}
