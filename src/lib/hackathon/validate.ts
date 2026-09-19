import {
  CONTACT_MAX,
  MAX_MEMBERS,
  MIN_MEMBERS,
  TEAM_NAME_MAX,
} from "@/lib/hackathon/constants"

export function normalizeName(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

export function hasTwoWords(value: string) {
  return normalizeName(value).split(" ").filter(Boolean).length >= 2
}

export function isEmailOrWhatsApp(value: string) {
  const compact = value.trim()
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(compact)) return true
  const phone = compact.replace(/[\s()-]/g, "")
  return /^\+?[0-9]{8,15}$/.test(phone)
}

export type RegisterPayload = {
  teamName: string
  members: string[]
  contact: string
}

export type ParseResult =
  | { ok: true; data: RegisterPayload }
  | { ok: false; message: string }

export function parseRegisterPayload(formData: FormData): ParseResult {
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: false, message: "No se pudo registrar el equipo. Inténtalo de nuevo." }
  }

  const teamName = normalizeName(String(formData.get("teamName") ?? ""))
  if (teamName.length < 2 || teamName.length > TEAM_NAME_MAX) {
    return { ok: false, message: "El nombre del equipo debe tener entre 2 y 80 caracteres." }
  }

  const members = formData
    .getAll("members")
    .map((value) => normalizeName(String(value)))
    .filter(Boolean)

  if (members.length < MIN_MEMBERS || members.length > MAX_MEMBERS) {
    return {
      ok: false,
      message: `El equipo debe tener entre ${MIN_MEMBERS} y ${MAX_MEMBERS} integrantes.`,
    }
  }

  if (members.some((member) => !hasTwoWords(member))) {
    return { ok: false, message: "Cada integrante debe incluir nombre y apellido." }
  }

  const contact = String(formData.get("contact") ?? "").trim()
  if (!contact || contact.length > CONTACT_MAX || !isEmailOrWhatsApp(contact)) {
    return {
      ok: false,
      message: "Ingresa un WhatsApp o un correo del representante para poder contactarlos.",
    }
  }

  return { ok: true, data: { teamName, members, contact } }
}
