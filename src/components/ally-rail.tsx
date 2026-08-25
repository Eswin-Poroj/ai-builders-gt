"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function AllyRail({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const echo = useRef<HTMLDivElement>(null)
  const held = useRef(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    echo.current
      ?.querySelectorAll("a, button")
      .forEach((el) => el.setAttribute("tabindex", "-1"))
  }, [children])

  useEffect(() => {
    const node = root.current
    if (!node) return

    const io = new IntersectionObserver(
      ([entry]) => {
        node.toggleAttribute("data-offscreen", !entry.isIntersecting)
      },
      { threshold: 0.2 },
    )
    io.observe(node)

    function onVis() {
      node.toggleAttribute("data-hidden", document.hidden)
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  function pause() {
    setPaused(true)
  }

  function hold() {
    held.current = true
    setPaused(true)
  }

  function maybeResume() {
    if (!held.current) setPaused(false)
  }

  return (
    <div
      ref={root}
      className={paused ? "ally-scroller is-paused" : "ally-scroller"}
      onPointerDown={hold}
      onMouseEnter={pause}
      onMouseLeave={maybeResume}
      onFocusCapture={pause}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          maybeResume()
        }
      }}
    >
      <div
        className="ally-rail"
        role="list"
        aria-label="Aliados del evento. El listado avanza solo; tócalo para detenerlo."
      >
        <div className="ally-track">
          <div className="ally-set">{children}</div>
          <div className="ally-set ally-echo" ref={echo} aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
