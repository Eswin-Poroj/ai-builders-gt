import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

type WallTone = "default" | "ink" | "deep"

type Props = {
  id: string
  titleId: string
  heading: ReactNode
  children: ReactNode
  tone?: WallTone
  className?: string
  eyebrow?: ReactNode
}

const toneClass: Record<WallTone, string | undefined> = {
  default: undefined,
  ink: "wall-ink",
  deep: "wall-deep",
}

export function Wall({
  id,
  titleId,
  heading,
  children,
  tone = "default",
  className,
  eyebrow,
}: Props) {
  return (
    <section
      className={cn("wall", toneClass[tone], className)}
      id={id}
      aria-labelledby={titleId}
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="wall-title shout">
        {heading}
      </h2>
      {children}
    </section>
  )
}
