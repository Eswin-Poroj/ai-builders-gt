// LUMA: sustituir NEXT_PUBLIC_LUMA_URL cuando exista la página del evento.
// Hasta entonces el CTA no apunta a un dominio inventado.
export function getLumaUrl(): string {
  const url = process.env.NEXT_PUBLIC_LUMA_URL
  if (!url || url.includes("PLACEHOLDER")) return "#registro"
  return url
}
