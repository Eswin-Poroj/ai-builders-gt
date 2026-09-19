import Link from "next/link"
import { HACKATHON_REGISTER_PATH } from "@/lib/hackathon/constants"

type Props = {
  label: string
  className?: string
}

export function HackathonRegisterCta({ label, className = "band" }: Props) {
  return (
    <Link className={className} href={HACKATHON_REGISTER_PATH} data-cta="hackathon">
      {label}
    </Link>
  )
}
