import type { ReactNode } from "react"
import { getLumaUrl } from "@/lib/luma"

type Props = {
  placement: "header" | "hero" | "mid" | "final"
  label?: string
  className?: string
  leading?: ReactNode
}

export function RegisterCta({
  placement,
  label = "Regístrate gratis",
  className = "band",
  leading,
}: Props) {
  const luma = getLumaUrl()
  return (
    <a
      className={className}
      href={luma}
      data-cta={placement}
    >
      {leading}
      {label}
    </a>
  )
}
