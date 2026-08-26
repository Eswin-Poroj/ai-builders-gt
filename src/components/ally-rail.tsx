"use client"

import { useEffect, useRef, type ReactNode } from "react"

const LOOP_MS = 28_000
const SETTLE_MS = 420
const TAP_PX = 8

export function AllyRail({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  const echoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    echoRef.current
      ?.querySelectorAll("a, button")
      .forEach((el) => el.setAttribute("tabindex", "-1"))
  }, [children])

  useEffect(() => {
    const scroller = scrollerRef.current
    const set = setRef.current
    if (!scroller || !set) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    let setWidth = 0
    let pointerDown = false
    let userScroll = false
    let offscreen = false
    let keyFocus = false
    let viaKeyboard = false
    let ignoreScroll = 0
    let startX = 0
    let startScroll = 0
    let suppressClick = false
    let raf = 0
    let lastTs = 0
    let settle = 0
    let carry = 0

    const measure = () => {
      setWidth = set.offsetWidth
    }

    const writeScroll = (next: number) => {
      ignoreScroll += 1
      scroller.scrollLeft = next
      requestAnimationFrame(() => {
        ignoreScroll = Math.max(0, ignoreScroll - 1)
      })
    }

    const wrap = () => {
      if (setWidth <= 0) return
      const x = scroller.scrollLeft
      if (x >= setWidth) writeScroll(x - setWidth)
    }

    const markUserScroll = () => {
      userScroll = true
      window.clearTimeout(settle)
      settle = window.setTimeout(() => {
        userScroll = false
      }, SETTLE_MS)
    }

    const canDrift = () => {
      return (
        !reduce.matches &&
        !document.hidden &&
        !offscreen &&
        !pointerDown &&
        !userScroll &&
        !keyFocus &&
        setWidth > 0
      )
    }

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts
      const dt = Math.min(ts - lastTs, 64)
      lastTs = ts
      if (canDrift()) {
        carry += (setWidth / LOOP_MS) * dt
        const step = Math.floor(carry)
        if (step > 0) {
          carry -= step
          writeScroll(scroller.scrollLeft + step)
          wrap()
        }
      }
      raf = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      if (ignoreScroll > 0) {
        wrap()
        return
      }
      markUserScroll()
      wrap()
    }

    const onWheel = () => {
      markUserScroll()
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return
      pointerDown = true
      startX = event.clientX
      startScroll = scroller.scrollLeft
      suppressClick = false
    }

    const onPointerUp = (event: PointerEvent) => {
      if (!pointerDown) return
      pointerDown = false
      const moved =
        Math.abs(event.clientX - startX) > TAP_PX ||
        Math.abs(scroller.scrollLeft - startScroll) > TAP_PX
      if (moved) {
        suppressClick = true
        markUserScroll()
      }
    }

    const onClick = (event: MouseEvent) => {
      if (!suppressClick) return
      event.preventDefault()
      event.stopPropagation()
      suppressClick = false
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" || event.key.startsWith("Arrow")) {
        viaKeyboard = true
      }
    }

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target
      const fromKeys = viaKeyboard
      viaKeyboard = false
      if (
        fromKeys &&
        target instanceof Element &&
        target.matches(":focus-visible")
      ) {
        keyFocus = true
        target.closest("[role='listitem']")?.scrollIntoView({
          block: "nearest",
          inline: "nearest",
        })
      }
    }

    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget
      if (next instanceof Node && scroller.contains(next)) return
      keyFocus = false
    }

    const onVis = () => {
      lastTs = 0
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        offscreen = !entry.isIntersecting
      },
      { threshold: 0.12 },
    )
    io.observe(scroller)

    const ro = new ResizeObserver(() => {
      measure()
      wrap()
    })
    ro.observe(set)

    measure()
    scroller.addEventListener("scroll", onScroll, { passive: true })
    scroller.addEventListener("wheel", onWheel, { passive: true })
    scroller.addEventListener("pointerdown", onPointerDown)
    scroller.addEventListener("click", onClick, true)
    scroller.addEventListener("focusin", onFocusIn)
    scroller.addEventListener("focusout", onFocusOut)
    window.addEventListener("keydown", onKeyDown, true)
    window.addEventListener("pointerup", onPointerUp)
    window.addEventListener("pointercancel", onPointerUp)
    document.addEventListener("visibilitychange", onVis)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(settle)
      io.disconnect()
      ro.disconnect()
      scroller.removeEventListener("scroll", onScroll)
      scroller.removeEventListener("wheel", onWheel)
      scroller.removeEventListener("pointerdown", onPointerDown)
      scroller.removeEventListener("click", onClick, true)
      scroller.removeEventListener("focusin", onFocusIn)
      scroller.removeEventListener("focusout", onFocusOut)
      window.removeEventListener("keydown", onKeyDown, true)
      window.removeEventListener("pointerup", onPointerUp)
      window.removeEventListener("pointercancel", onPointerUp)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div
      ref={scrollerRef}
      className="ally-scroller"
      role="region"
      aria-label="Aliados del evento. El listado avanza solo; arrástralo para recorrer."
    >
      <div className="ally-track">
        <div className="ally-set" ref={setRef} role="list">
          {children}
        </div>
        <div className="ally-set ally-echo" ref={echoRef} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
