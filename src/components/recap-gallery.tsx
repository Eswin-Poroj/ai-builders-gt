"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import Image from "next/image"
import type { RecapPhoto } from "@/content/types"

type Props = {
  photos: RecapPhoto[]
}

function sizesFor(span: RecapPhoto["span"]) {
  if (span === "wide") return "(min-width: 800px) 50vw, 100vw"
  return "(min-width: 800px) 25vw, 50vw"
}

function cellClass(span: RecapPhoto["span"]) {
  if (span === "wide") return "recap-cell recap-cell--wide"
  if (span === "tall") return "recap-cell recap-cell--tall"
  return "recap-cell"
}

export function RecapGallery({ photos }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const labelId = useId()

  const current = photos[index]

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const open = useCallback((nextIndex: number) => {
    setIndex(nextIndex)
    dialogRef.current?.showModal()
  }, [])

  const step = useCallback(
    (delta: number) => {
      setIndex((currentIndex) => {
        if (photos.length === 0) return 0
        return (currentIndex + delta + photos.length) % photos.length
      })
    },
    [photos.length],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onKey = (event: KeyboardEvent) => {
      if (!dialog.open) return
      if (event.key === "ArrowRight") {
        event.preventDefault()
        step(1)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        step(-1)
      }
    }

    dialog.addEventListener("keydown", onKey)
    return () => dialog.removeEventListener("keydown", onKey)
  }, [step])

  if (photos.length === 0) return null

  return (
    <>
      <ul className="recap-grid">
        {photos.map((photo, photoIndex) => (
          <li key={photo.id} className={cellClass(photo.span)}>
            <button
              type="button"
              className="recap-cell-btn"
              onClick={() => open(photoIndex)}
              aria-label={`Abrir foto: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                quality={90}
                sizes={sizesFor(photo.span)}
                className="recap-cell-img"
              />
              {photo.caption ? (
                <span className="recap-caption">{photo.caption}</span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="recap-dialog"
        aria-labelledby={labelId}
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
      >
        {current ? (
          <figure className="recap-dialog-figure">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={90}
              sizes="92vw"
              className="recap-dialog-img"
            />
            <figcaption id={labelId} className="recap-dialog-caption">
              {current.caption ?? current.alt}
            </figcaption>
          </figure>
        ) : null}

        <div className="recap-dialog-nav">
          <button
            type="button"
            className="chip recap-dialog-nav-btn"
            onClick={() => step(-1)}
          >
            Anterior
          </button>
          <button
            type="button"
            className="chip recap-dialog-close"
            onClick={close}
          >
            Cerrar
          </button>
          <button
            type="button"
            className="chip recap-dialog-nav-btn"
            onClick={() => step(1)}
          >
            Siguiente
          </button>
        </div>
      </dialog>
    </>
  )
}
