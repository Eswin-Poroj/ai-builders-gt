export const CRITERIA = [
  {
    key: "comprension",
    column: "c_comprension",
    label: "Comprensión de la solución",
    hint: "Explica arquitectura y código; justifica decisiones; distingue aporte propio vs. IA.",
    max: 30,
  },
  {
    key: "arquitectura",
    column: "c_arquitectura",
    label: "Calidad de arquitectura",
    hint: "Componentes bien separados; decisiones coherentes; flujo de datos claro.",
    max: 20,
  },
  {
    key: "codigo",
    column: "c_codigo",
    label: "Calidad de código",
    hint: "Ordenado, legible, modular, sin duplicación ni código muerto.",
    max: 20,
  },
  {
    key: "reto",
    column: "c_reto",
    label: "Cumplimiento del reto",
    hint: "Dashboard explicativo + agente funcional que no alucina; datos bien tratados.",
    max: 15,
  },
  {
    key: "practicas",
    column: "c_practicas",
    label: "Buenas prácticas",
    hint: "README completo, repo ordenado, sin secretos, decisiones documentadas.",
    max: 10,
  },
  {
    key: "reproducibilidad",
    column: "c_reproducibilidad",
    label: "Reproducibilidad",
    hint: "Arranca correctamente siguiendo las instrucciones del README.",
    max: 5,
  },
] as const

export type CriterionKey = (typeof CRITERIA)[number]["key"]

export const CRITERIA_TOTAL = CRITERIA.reduce((sum, item) => sum + item.max, 0)

export const DOMAIN_OPTIONS = [
  {
    value: "si",
    label: "Sí",
    hint: "Explica el porqué de cada decisión, demuestra seguridad y es transparente sobre el uso de la IA.",
  },
  {
    value: "mas_o_menos",
    label: "Más o menos",
    hint: "Describe lo que hace la aplicación, pero le cuesta profundizar o justificar las decisiones técnicas.",
  },
  {
    value: "no",
    label: "No",
    hint: "Desconoce partes clave del proyecto o atribuye la totalidad del desarrollo e ideas a la IA.",
  },
] as const

export type DomainValue = (typeof DOMAIN_OPTIONS)[number]["value"]

export function scoreBand(total: number) {
  if (total >= 90) return "Excelente"
  if (total >= 70) return "Bueno"
  if (total >= 50) return "Aceptable"
  return "Insuficiente"
}
