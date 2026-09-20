import {
  CRITERIA,
  type CriterionKey,
  type DomainValue,
  DOMAIN_OPTIONS,
} from "@/lib/hackathon/rubric"

export type EvaluationInput = {
  scores: Record<CriterionKey, number>
  dominio: DomainValue
  comentarios: string
  anotaciones: string
}

export type ParseEvaluationResult =
  | { ok: true; data: EvaluationInput }
  | { ok: false; message: string }

const domainValues = new Set(DOMAIN_OPTIONS.map((item) => item.value))

function readInt(value: FormDataEntryValue | null) {
  if (value == null || String(value).trim() === "") return null
  if (!/^\d+$/.test(String(value).trim())) return null
  return Number(value)
}

export function parseEvaluationForm(formData: FormData): ParseEvaluationResult {
  const scores = {} as Record<CriterionKey, number>

  for (const criterion of CRITERIA) {
    const parsed = readInt(formData.get(criterion.key))
    if (parsed == null || parsed < 0 || parsed > criterion.max) {
      return {
        ok: false,
        message: `${criterion.label}: usa un entero entre 0 y ${criterion.max}.`,
      }
    }
    scores[criterion.key] = parsed
  }

  const dominio = String(formData.get("dominio") ?? "") as DomainValue
  if (!domainValues.has(dominio)) {
    return { ok: false, message: "Elige una opción de dominio del proyecto." }
  }

  const comentarios = String(formData.get("comentarios") ?? "").trim()
  const anotaciones = String(formData.get("anotaciones") ?? "").trim()
  if (comentarios.length > 4000 || anotaciones.length > 4000) {
    return { ok: false, message: "Comentarios y anotaciones: máximo 4000 caracteres." }
  }

  return { ok: true, data: { scores, dominio, comentarios, anotaciones } }
}
