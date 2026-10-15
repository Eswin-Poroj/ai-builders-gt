# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router, deploy en Vercel (elección del usuario en init, 2026-08-24). Sin backend propio. Dominio: aibuildersgt.com.

## Users

Visitante principal: alguien en celular que llega desde Instagram o WhatsApp y, a la vez, un builder de Quetzaltenango / occidente de Guatemala (devs, estudiantes, fundadores) que necesita saber qué es AI Builders GT y si el fin de semana en Xela vale la pena.

Trabajo en el sitio: reconocer la comunidad, pasar de usar la IA a construir con ella, unirse al grupo de WhatsApp, ver las charlas en línea y el archivo de lo que ya ocurrió.

Audiencias secundarias (no son el job principal): aliados, prensa local, speakers.

## Product Purpose

Home de la comunidad **AI Builders GT** en aibuildersgt.com, con **AI Builders Xela 2026** como archivo de la primera edición.

Es a la vez la casa de la comunidad y el recap de esa edición: el primer hackathon de inteligencia artificial en el occidente de Guatemala.

Éxito: el visitante hace clic en «Unite a la comunidad» y sale a WhatsApp. Un solo objetivo de conversión en el hero.

## Positioning

AI Builders GT es la comunidad; Xela 2026 es la prueba de que el occidente de Guatemala es un nodo de IA, no un anexo de la capital. Un fin de semana gratuito en la Universidad Mesoamericana (Quetzaltenango) junta el Building with AI Summit con el Cursor Hackathon, con tracks anclados a problemas reales del país (lenguas mayas, rural/agrícola, pymes, salud y educación). Un evento genérico de IA en Guatemala Ciudad no puede copiar esa afirmación.

## Operating Context

- Tráfico esperado: Instagram y WhatsApp, mayoritariamente móvil.
- Registro de comunidad: grupo de WhatsApp (`https://chat.whatsapp.com/LEcqvlB7J57AvLoNIrM0qN`).
- Charlas en línea: calendario Luma embebido (no es registro del hackathon).
- Archivo: Building with AI Summit (Xela, presencial, 19–20 sept 2026) y charlas pasadas en `src/content/events.ts`.
- Comunidad: AI Builders GT. Coorganiza Universidad Mesoamericana.
- Contacto: eswinstuardporojcastro@gmail.com. Instagram: @aibuilders.gt.
- Copy en español de Guatemala, tono directo y cercano, no corporativo.

## Capabilities and Constraints

- Una sola página, scroll vertical; no hay app, auth ni CMS.
- Identidad de comunidad (logo, nombre AI Builders GT, redes, contacto) en header y footer; el cuerpo convierte al grupo. Xela 2026 vive en el archivo.
- CTA de comunidad en el hero de la home (uno solo) y en el archivo de edición; todos apuntan a WhatsApp. Instagram es chip, no segunda banda.
- Cuatro tracks visibles; el organizador seleccionará 3 de 4 antes del cierre de inscripción — debe poder ocultarse uno sin rearmar la página.
- Sin formularios propios.
- Prioridad de carga: mobile-first, sin librerías pesadas innecesarias.
- Comentarios en código marcando: link de Luma, logos de sponsors, fotos de speakers.
- SEO: título de comunidad en `/`; cada edición tiene el suyo. Imagen OG con branding y el CTA ámbar.

Abierto:
- Logos de aliados aprobados para la home (hoy: ninguno).
- Fotos y clips de recap cuando existan (no inventar).
- Páginas extra de comunidad o ediciones futuras.

## Brand Commitments

- Nombres: AI Builders GT (comunidad); AI Builders Xela / AI Builders Xela 2026 (edición).
- Voz: español de Guatemala, directo, cercano, no corporativo.
- Logo: ícono de red neuronal + bloques apilados; lockup con texto «AI BUILDERS / GT»; variantes para fondo claro y fondo oscuro. Archivos en `brand/logo-mark.png`, `brand/logo-lockup-light.png`, `brand/logo-lockup-themes.png`.
- Paleta vinculante: morado `#5B21B6`, morado oscuro `#4C1D95`, verde agua `#0F766E`, fondo oscuro `#0F0A1E`, blanco `#FFFFFF`, ámbar de CTA `#F59E0B` con texto ink.
- Tipografía vinculante: sans-serif geométrica moderna (ejemplos citados: Inter, Poppins o similar); títulos bold, cuerpo regular.
- Tono visual solicitado: tecnología de vanguardia + identidad regional/latinoamericana; moderno, limpio, no corporativo genérico.
- CTA fijo: «Unite a la comunidad» (ámbar `#F59E0B` con texto ink `#0F0A1E`). En el archivo, badge: «Ya sucedió».

## Evidence on Hand

Logos oficiales en `brand/`: ícono, lockup claro, comparación claro/oscuro.

Speakers confirmados (sin foto): Giovanni Castillo; Carlos Sosa; Cristian Lavarreda (Ajexport); Yeffri Salazar (Arduino Guatemala). Espacio para 1–2 «por confirmar».

Aliados nombrados, sin logos reales: Cursor (naming sponsor del hackathon), Arduino Guatemala / Python Guatemala / GDG Xela (community), SMOPS / CREABOT (aliados), Universidad Mesoamericana (coorganiza), La Voz de Xela (media partner).

Stats del brief (no son métricas medidas): 80–150 participantes esperados; premios en efectivo + créditos de Cursor; 2 días; evento gratuito.

No hay testimonios ni fotos del recinto del summit. No inventar quotes, métricas de asistencia, ni logotipos no aprobados. No hay links de Meet.

## Product Principles

1. El sitio es la casa de AI Builders GT; la acción que importa es unirse a la comunidad.
2. La prueba es local y concreta: Xela, la universidad, speakers nombrados, tracks de Guatemala — no un pitch genérico de IA.
3. Gratis y accesible es parte de la oferta, no un asterisco.
4. Lo que falta (fotos, clips, logos de aliados) se marca como ausente; no se fabrica.
5. Primero el celular; el escritorio hereda.

## Accessibility & Inclusion

No hay un estándar nombrado. El evento es gratuito y abierto a todos los niveles; la UI debe ser usable en celular, con contraste legible sobre el fondo oscuro y un CTA obvio.
