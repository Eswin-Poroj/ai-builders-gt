"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  src: string
  title: string
}

export function LumaEmbed({ src, title }: Props) {
  const frame = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const node = frame.current
    if (!node || load) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setLoad(true)
      },
      { rootMargin: "120px 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [load])

  return (
    <div className="charlas-frame" ref={frame}>
      {load ? (
        <iframe
          src={src}
          title={title}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <p className="charlas-placeholder">
          El calendario se carga cuando llegás a esta sección.
        </p>
      )}
    </div>
  )
}
