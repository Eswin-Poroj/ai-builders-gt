---
name: AI Builders GT
description: Umbral cívico de Xela — reel de noche en el parque, shout Barlow, una sola puerta teal.
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
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(3.8rem, 15vw, 12rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(3rem, 11vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Condensed, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.8rem, 8vw, 2.4rem)"
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
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  xs: "2px"
  sm: "4px"
spacing:
  sm: "0.85rem"
  md: "1.15rem"
  lg: "1.4rem"
  wall: "4rem"
  inset: "1.5rem"
  inset-lg: "8vw"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "0.65rem 1.2rem"
    height: "2.8rem"
  skip-link:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    padding: "0.6rem 1rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.xs}"
    padding: "0.3rem 0.7rem"
    height: "2.4rem"
  chip-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.7rem"
    height: "2.4rem"
  agenda-span:
    backgroundColor: "color-mix(in oklab, #0f0a1e 55%, #5b21b6)"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.15rem"
  agenda-talk:
    backgroundColor: "color-mix(in oklab, #0f0a1e 72%, #5b21b6)"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem 0.85rem 1.15rem"
  track:
    backgroundColor: "color-mix(in oklab, #0f0a1e 74%, #5b21b6)"
    textColor: "{colors.paper}"
    padding: "1.8rem 1.5rem"
  speaker-photo:
    backgroundColor: "color-mix(in oklab, #5b21b6 28%, #0f0a1e)"
    width: "4.5rem"
  wall-ink:
    backgroundColor: "color-mix(in oklab, #0f0a1e 88%, #5b21b6)"
    textColor: "{colors.paper}"
    padding: "4rem 1.5rem"
  wall-deep:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.paper}"
    padding: "4rem 1.5rem"
  foot:
    backgroundColor: "color-mix(in oklab, #0f0a1e 92%, black)"
    textColor: "{colors.paper}"
    padding: "2rem 1.5rem 2.5rem"
---

# Design System: AI Builders GT

## Overview

**Creative North Star: "El umbral del arco"**

El sistema es el umbral cívico de Xela: un reel de fotos reales del kiosco, el Parque Centroamérica y el Templo a Minerva. La invitación se lee abajo a la izquierda, sobre la noche, no recortada al contorno de un arco. El campo es noche (`ink`). El papel y un solo teal de acción abren la puerta. Seed `4c2d6d65`.

Barlow Condensed carga el shout (hero, muros, tracks). Poppins 400–700 sostiene ledes, FAQ, meta y chips. Los muros se distinguen por tinte de brand sobre ink. Quien llega ve el lugar, la fecha y que es gratis, y sale a Luma.

Rechazos visuales confirmados: afiche gritón recortado, wood-type de feria, chamfer a 45°, hero SaaS con orbes.

**Key Characteristics:**

- Reel cívico de Xela a 100svh; cartel Barlow en caja alta, anclado abajo a la izquierda
- Campo noche, papel blanco, brand que tintea, teal como única puerta
- Dos caras: Barlow Condensed (shout) + Poppins (cuerpo), tracking leve en títulos
- CTA banda teal, radio 2px, hover `translateY(-2px)`, resplandor con offset
- Agenda del sábado: dos vanos en escritorio (Aula Principal brand, Aula 2 action); un aula por chip en celular

## Colors

Noche como suelo, brand como tinte, un teal que solo abre.

### Primary

- **Noche de Xela** (`ink`): Campo de `html`, `body`, hero y muros por defecto. Es el suelo, no el acento.
- **Violeta de marca** (`brand`): Tinte de muros, tracks y mezclas. No pinta CTAs.
- **Violeta profundo** (`brand-deep`): Campo de formato y aliados.

### Secondary

- **Teal de puerta** (`action`): Única superficie de conversión (banda, skip-link, `::selection`, anillo de foco). Marca «Xela» en el hero y el «+» del FAQ. No rellena secciones.

### Neutral

- **Papel** (`paper`): Tipo sobre noche y chip de aula activo.
- **Bruma** (`mist`): Texto secundario — ledes, meta, roles, copyright. Papel mezclado 78% con brand.
- **Dintel de piedra** (`stone`): Solo en hairlines entre muros (`border-warm`), nunca como relleno.

**La regla del campo.** El suelo es ink. Brand tintea; brand-deep pinta formato y aliados. Action no es fondo de sección.

**La regla de la única puerta.** Un solo color de conversión: action. Su rareza es el punto.

## Typography

**Display Font:** Barlow Condensed (con ui-sans-serif, sans-serif)
**Body Font:** Poppins (con ui-sans-serif, sans-serif)

**Character:** El shout es condensado cívico, caja alta, interlineado apretado. El cuerpo es geométrico, caja de frase, 400 a ~1.5–1.65. No es wood-type de feria: es cartel de recinto.

### Hierarchy

- **Display** (Barlow 700, clamp 3.8rem–12rem, line-height 0.88, letter-spacing −0.01em, uppercase): tres líneas del hero. «Xela» en action.
- **Headline** (Barlow 700, clamp 3rem–7.5rem, line-height 0.9, letter-spacing −0.02em, uppercase): títulos de muro (`FORMATO`, `SPEAKERS`).
- **Title** (Barlow 700, clamp 1.8rem–2.4rem, line-height 1.15): título del summit en caja de frase; tracks en caja alta un paso más amplio.
- **Body** (Poppins 400, 1.05rem, line-height 1.5–1.65, lede máx. 46rem): lectura. Strong 600 paper. FAQ 0.9rem a 52ch.
- **Label** (Poppins 600–700, 0.82rem): chips, meta de charla, pie. Mayúsculas en badge, banda, tiers de aliados y «Por confirmar».

**La regla de las dos caras.** Barlow Condensed para el shout; Poppins para el cuerpo. El display va en caja alta; el lede no.

**La regla del vano.** El reel llena el campo. Logo, título, fecha, sede, badge y CTA se leen abajo a la izquierda, sobre la foto, con velo ink + brand — no con recorte geométrico del kiosco.

## Layout

Pila vertical a todo el ancho sobre ink. Sin `max-width` de sitio. Canto `--wall-x` 1.5rem en móvil; 8vw desde 800px. Muros: padding 4rem en el eje vertical.

Hero a 100svh, reel de cinco fotos con Ken Burns de 25s. Invitación absoluta al borde inferior. Logo knockout ~2.2rem arriba a la izquierda. El CTA de mitad no es un muro: es padding sobre ink.

El sábado *es* la agenda a todo el ancho (`#agenda`); el domingo es un rastro a 42rem. Speakers a dos columnas desde 800px. About: 1fr / 2fr desde 800px.

**La regla del umbral.** El recinto es fotográfico. El cartel no se centra en un anillo vacío; se ancla al canto inferior.

## Elevation & Depth

Sin sombras de card. La profundidad es tonal: mixes de ink + brand, filete inset de aula en las charlas, y un hairline de piedra en el dintel del muro. El cierre usa «XELA» como marca de agua espectral, no relieve.

### Shadow Vocabulary

- **Puerta** (`box-shadow: 0 4px 20px color-mix(in oklab, #0f766e 42%, transparent)`): resplandor de la banda en reposo, con offset. Hover: `0 8px 30px` al 55%. No es halo a 0px.
- **Dintel** (`box-shadow: inset 0 1px 0 var(--border-warm)`): filo superior de cada muro.
- **Junta** (`border-top: 1px solid var(--border-warm)`): entre muros consecutivos.

**La regla del dintel.** El relieve nace de tinte y piedra. No de sombras de elevación UI, ni de grano, ni de hojas rotadas.

## Shapes

Radio 2px en banda, badge, chips de aliado y controles de speaker. Radio 4px en bandas de agenda, charlas y chip de aula. Sin `clip-path` de chamfer. Filetes de lista 1px paper al ~11–16%; borde de chip 1px paper al 28%. Foco: 3px action, offset 3px.

**La regla del canto.** Chrome (banda, badge, aliados) a 2px. Agenda (banda, charla, chip) a 4px. La banda no se recorta a 45°.

## Components

### Buttons

Banda de conversión, no píldora. Action sobre paper, radio 2px, min-height 2.8rem, padding 0.65rem 1.2rem, peso 700, 0.88rem, tracking 0.04em, uppercase, label canónico «Regístrate gratis». Tres colocaciones (hero, mitad, cierre). Hover/focus-visible: `translateY(-2px)` en 0.18s `cubic-bezier(0.16, 1, 0.3, 1)` y resplandor más amplio. Skip-link: action/paper, padding 0.6rem 1rem, peso 600.

### Chips

Aliados: inline-flex, min-height ~2.2–2.4rem, borde 1px, radio 2px, peso 600. Aula de la agenda: radio 4px; inactivo transparente; activo paper sobre ink (misma inversión que el umbral). Hover inactivo: opacity 0.72. Foco en el chip, no en el radio oculto.

### Cards / Containers

No hay cards flotantes. Muros a ancho completo: ink, `wall-ink` (ink 88% + brand), `wall-deep` (brand-deep). Tracks: tinte ink + brand, filete izquierdo 4px (action en impar, brand en par), títulos Barlow uppercase. Footer: ink 92% + negro.

### Inputs / Fields

No hay campos de registro. En celular el aula se elige con radios nativos vestidos de chip; en escritorio las dos aulas se leen a la vez. El registro sale a Luma.

### Navigation

No hay nav de sitio. Skip al contenido. Pie: lockup Barlow uppercase + links Poppins 600 0.82rem.

### FAQ

Lista con hairline. Summary 600, 0.95rem, padding 1rem 0. El «+» es action en Barlow y rota 45° al abrir. Abierto no invierte a papel: la respuesta queda mist, 0.9rem, 52ch.

### Agenda

Bienvenida, almuerzo, workshop y cierre: banda a todo el ancho, tinta ink + brand, radio 4px, hora Barlow 1.15rem. Café es la misma banda, más baja y en mist. Charlas: dos columnas desde 800px; Aula Principal con filete brand, Aula 2 con filete action; la altura crece con los minutos (`flex-grow`). En celular, un aula. «En línea» es chip paper/hairline.

### Speaker row

Fila que voltea. Frente: marca 4.5rem (ratio 4/5), foto o iniciales Barlow; filete izquierdo 2px action. Nombre Barlow uppercase. Hover: opacity 0.72. Dorso: bio mist, socials en chip 2px. Flip 0.55s `cubic-bezier(0.16, 1, 0.3, 1)`.

### Invite motion

El panel entra con `rise`: opacity 0 + `translateY(18px)` → reposo, 0.7s `cubic-bezier(0.16, 1, 0.3, 1)`. El reel hace fade-in 0.8s y Ken Burns 25s. Con `prefers-reduced-motion`, invite, reel, banda y flip se apagan.

## Do's and Don'ts

### Do:

- **Do** leer la invitación abajo a la izquierda, sobre el reel cívico de noche.
- **Do** usar la banda teal de 2px como única puerta; el label canónico es «Regístrate gratis».
- **Do** tintear muros con ink + brand; usar stone solo en hairlines.
- **Do** pintar las dos aulas a la vez en escritorio, con filete brand / action, y el chip de aula activo en papel.
- **Do** tratar el sábado como el tablero y el domingo como rastro, no como dos cards gemelas.

### Don't:

- **Don't** recortar a 45°, usar `clip-path` de chamfer, ni madera de feria.
- **Don't** armar un hero SaaS con orbes, glass cards o CTA en píldora.
- **Don't** pintar secciones con action ni añadir un segundo color de conversión.
- **Don't** usar teal como riel de día ni como eyebrow.
- **Don't** animar con slam o `translateX`; el invite solo sube en Y. El FAQ «+» es la única rotación permitida.
