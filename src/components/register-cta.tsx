import { getLumaUrl } from "@/lib/luma"

type Props = {
  placement: "header" | "hero" | "mid" | "final"
  label?: string
  className?: string
}

export function RegisterCta({
  placement,
  label = "Regístrate gratis",
  className = "band",
}: Props) {
  const luma = getLumaUrl()
  return (
    <a
      className={className}
      href={luma}
      data-cta={placement}
    >
      {label}
    </a>
  )
}
