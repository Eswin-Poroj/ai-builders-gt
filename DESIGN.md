---
name: AI Builders GT
description: Umbral cívico de Xela — foto del anillo vacío, campo noche, una sola puerta teal.
colors:
  ink: "#0f0a1e"
  paper: "#ffffff"
  brand: "#5b21b6"
  brand-deep: "#4c1d95"
  action: "#0f766e"
  mist: "color-mix(in oklab, #ffffff 78%, #5b21b6)"
  stone: "#c4b49a"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.8rem, 8vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.8rem, 8vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.35rem, 5.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Poppins, ui-sans-serif, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, ui-sans-serif, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "4px"
spacing:
  sm: "0.85rem"
  md: "1.15rem"
  lg: "1.4rem"
  wall: "3.2rem"
  wall-lg: "4.2rem"
  inset-lg: "8vw"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.2rem"
    height: "3.4rem"
  skip-link:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    padding: "0.6rem 1rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.7rem"
    height: "2.4rem"
  faq-closed:
    backgroundColor: "color-mix(in oklab, #0f0a1e 55%, #5b21b6)"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1rem"
  faq-open:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "1rem"
  track:
    backgroundColor: "color-mix(in oklab, #0f0a1e 70%, #5b21b6)"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1.15rem 1rem 1.2rem"
  speaker-photo:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    width: "3.4rem"
    height: "3.4rem"
  wall-ink:
    backgroundColor: "color-mix(in oklab, #0f0a1e 88%, #5b21b6)"
    textColor: "{colors.paper}"
    padding: "3.2rem 1.15rem 3.4rem"
  wall-deep:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.paper}"
    padding: "3.2rem 1.15rem 3.4rem"
  foot:
    backgroundColor: "color-mix(in oklab, #0f0a1e 92%, black)"
    textColor: "{colors.paper}"
    padding: "2rem 1.15rem 2.4rem"
---

# Design System: AI Builders GT

## Overview

**Creative North Star: "El umbral del arco"**

El sistema es el umbral cívico de Xela: una foto real del kiosco del Parque Centroamérica mira al cielo a través del anillo de piedra; la invitación se lee en el panel, nunca dentro del anillo. El campo es noche (`ink`). El papel y un solo teal de acción abren la puerta. Seed `4c2d6d65`.

Una sola sans geométrica (Poppins 400–700) sostiene títulos y cuerpo. Los muros se distinguen por tinte de brand sobre ink, no por grano, no por hojas despegadas. Quien llega ve el lugar, la fecha y que es gratis, y sale a Luma.

Rechazos visuales confirmados: afiche gritón recortado, wood-type condensado, chamfer a 45°, hero SaaS con orbes, tipo o logo dentro del anillo de piedra.

**Key Characteristics:**

- Foto del templo mirando arriba; anillo sin tipo
- Campo noche, papel blanco, brand que tintea, teal como única puerta
- Poppins 400–700, títulos en caja de frase, tracking −0.03em
- CTA banda teal, radio 4px, hover `translateY(-2px)`
- Cifras de día que se apagan; FAQ que invierte a papel al abrir

## Colors

Noche como suelo, brand como tinte, un teal que solo abre.

### Primary

- **Noche de Xela** (`ink`): Campo de `html`, `body`, hero y muros por defecto. Es el suelo, no el acento.
- **Violeta de marca** (`brand`): Tinte de muros, tracks y FAQ cerrado (`color-mix` con ink). No pinta títulos ni CTAs.
- **Violeta profundo** (`brand-deep`): Campo de formato y aliados.

### Secondary

- **Teal de puerta** (`action`): Única superficie de conversión (banda, skip-link, `::selection`, anillo de foco). También marca «Xela 2026» en el título del hero. No rellena secciones.

### Neutral

- **Papel** (`paper`): Tipo sobre noche, campo del FAQ abierto, recorte de foto de speaker.
- **Bruma** (`mist`): Texto secundario — ledes, meta, roles, copyright. Papel mezclado 78% con brand.
- **Dintel de piedra** (`stone`): Muestra del lintel; solo en hairlines entre muros, nunca como relleno.

**La regla del campo.** El suelo es ink. Brand tintea; brand-deep pinta formato y aliados. Action no es fondo de sección.

**La regla de la única puerta.** Un solo color de conversión: action. Su rareza es el punto.

## Typography

**Display Font:** Poppins (con ui-sans-serif, sans-serif)
**Body Font:** Poppins (con ui-sans-serif, sans-serif)

**Character:** Una sola geometría. Títulos 700 con tracking negativo leve; cuerpo 400 a 1.5. Sin condensar, sin recortar contra el marco, sin `text-transform` en títulos.

### Hierarchy

- **Display** (700, clamp 1.8rem–3.2rem, line-height 1.12, letter-spacing −0.03em): título del hero y cierre. «Xela 2026» en el hero va en action.
- **Headline** (700, clamp 1.8rem–2.4rem, line-height 1.15): títulos de muro.
- **Title** (700, clamp 1.35rem–2rem): títulos de día y valores de stat. Nombres de speaker, tracks y lockup del pie bajan a 1.15rem.
- **Body** (400, 1.05rem, line-height 1.5, máx. 36rem en el sub del hero y 42rem en ledes/FAQ): lectura. Strong 600 paper. Meta y fecha del hero 500–600 a 1.05rem.
- **Label** (500–700, 0.82rem): labels de stat, chips, links y copyright del pie. Mayúsculas solo en etiquetas de tier de aliados (tracking 0.08em) y en «Por confirmar» (tracking 0.04em).

**La regla de la geometría.** Una cara, Poppins. Títulos 700 en caja de frase. No hay segunda familia de display.

**La regla del anillo vacío.** Ningún tipo, logo ni CTA entra en la foto del templo. La invitación vive en el panel.

## Layout

Pila vertical a todo el ancho sobre ink. Sin `max-width` de sitio. Canto 1.15rem en móvil; 8vw desde 800px. Muros: padding 3.2rem / 3.4rem (4.2rem / 4.6rem desde 800px). Lede y FAQ a 42rem.

Hero a 100svh. En móvil: columna — foto (mín. 42svh, `object-position: center 28%`) y panel debajo. Desde 800px: grilla `1.15fr 0.85fr`, foto a 100svh, panel a la derecha alineado al centro. Logo knockout 3rem en el panel, no sobre la piedra. El CTA de mitad no es un muro: es la banda con padding horizontal.

Días a dos columnas desde 800px. Stats, speakers y listas se apilan con hairline paper al 16%.

**La regla del umbral.** Móvil apila foto / panel; desde 800px la foto toma 1.15fr y el panel 0.85fr. El anillo permanece sin tipo.

## Elevation & Depth

Sin sombras de card. La profundidad es tonal: mixes de ink + brand, inversión del FAQ, y un hairline de piedra en el dintel del muro. Las cifras de día son rastro, no relieve.

### Shadow Vocabulary

- **Dintel** (`box-shadow: inset 0 1px 0 color-mix(in oklab, #c4b49a 55%, transparent)`): filo superior de cada muro.
- **Junta** (`border-top: 1px solid color-mix(in oklab, #c4b49a 28%, transparent)`): entre muros consecutivos.

**La regla del dintel.** El relieve nace de tinte y piedra. No de sombras de elevación UI, ni de grano, ni de hojas rotadas.

## Shapes

Radio único de 4px en banda, chips, tracks, FAQ y recorte de foto. Sin `clip-path`. Filetes de lista 1px paper al 16%; borde de chip 1px paper al 28%. Foco: 3px action, offset 3px.

**La regla del 4px.** Esquinas suaves de 4px. La banda no se recorta a 45°.

## Components

### Buttons

Banda de conversión, no píldora. Action sobre paper, radio 4px, min-height 3.4rem, padding 0.85rem 1.2rem, peso 700, 1.05rem, tracking 0.01em, label canónico «Regístrate gratis». Tres colocaciones (hero, mitad, cierre); sin Luma real el href es `#registro`. Hover/focus-visible: `translateY(-2px)` en 0.18s `cubic-bezier(0.16, 1, 0.3, 1)`. El skip-link comparte action/paper, peso 600, sin radio declarado.

### Chips

Inline-flex, min-height 2.4rem, padding 0.3rem 0.7rem, borde 1px, radio 4px, peso 600, 0.82rem. Nombres de aliados. Si hay logo, la imagen mide 1.4rem de alto.

### Cards / Containers

No hay cards flotantes. Muros a ancho completo: campo ink, `wall-ink` (ink 88% + brand), `wall-deep` (brand-deep). Tracks: ink 70% + brand, radio 4px, gap 0.75rem. El footer baja a ink 92% + negro; lockup 2.4rem + nombre 700 a dos líneas.

### Inputs / Fields

No hay campos. El registro sale a Luma.

### Navigation

No hay nav de sitio. Skip al contenido. Pie: lockup + links en columna 600 0.82rem + copyright mist.

### FAQ

Cerrado: tinte ink 55% + brand, tipo paper. Abierto: paper sobre ink. Summary 600, 1.05rem, padding 1rem, sin marcador. Respuesta body, padding 0 1rem 1.1rem, máx. 42rem.

### Speaker row

Sin iniciales. Foto solo si hay `photoSrc`: recorte 3.4rem, radio 4px, `object-fit: cover`. Sin foto, una columna (`speaker-bare`). Filete superior paper 16%. «Por confirmar» en label uppercase.

### Day traces

Cifra `data-day` detrás del bloque, clamp 2.4rem–5.2rem, paper al 16%, máscara que se apaga hacia abajo. El contenido queda a z-index 1. No es un título.

### Invite motion

El panel del hero entra con `rise`: solo `translateY(12px)` → reposo, 0.55s `cubic-bezier(0.16, 1, 0.3, 1)`. El estado por defecto ya es visible. Con `prefers-reduced-motion`, animación y transición de banda se apagan.

## Do's and Don'ts

### Do:

- **Do** dejar la foto del templo sin tipo; leer la invitación en el panel (abajo en móvil, a la derecha desde 800px).
- **Do** usar la banda teal de 4px como única puerta; el label canónico es «Regístrate gratis».
- **Do** tintear muros con ink + brand; usar stone solo en hairlines.
- **Do** invertir el FAQ al abrir (paper sobre ink).
- **Do** tratar Día 1/2 como rastros que se apagan, no como titulación.

### Don't:

- **Don't** poner tipo, logo ni CTA dentro del anillo de piedra.
- **Don't** recortar a 45°, usar `clip-path` de chamfer, ni madera condensada.
- **Don't** armar un hero SaaS con orbes, glass cards o CTA en píldora.
- **Don't** inventar avatares de iniciales cuando no hay foto.
- **Don't** pintar secciones con action ni añadir un segundo color de conversión.
- **Don't** animar con slam, rotación o `translateX`; el invite solo sube en Y.
