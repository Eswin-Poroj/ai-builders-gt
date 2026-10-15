type Props = {
  href?: string
  label?: string
}

export function SkipLink({
  href = "#inicio",
  label = "Saltar al contenido",
}: Props) {
  return (
    <a className="skip" href={href}>
      {label}
    </a>
  )
}
