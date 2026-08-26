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
  const external = luma.startsWith("http")
  return (
    <a
      className={className}
      href={luma}
      data-cta={placement}
      {...(external
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    >
      {leading}
      {label}
    </a>
  )
}
