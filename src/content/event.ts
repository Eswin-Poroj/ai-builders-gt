import type { EventContent } from "./types"

export const event: EventContent = {
  communityName: "AI Builders GT",
  editionName: "AI Builders Xela 2026",
  badge: "100% Gratis",
  dates: {
    startIso: "2026-09-19",
    endIso: "2026-09-20",
    display: "19–20 de septiembre 2026",
    shout: "19–20 SEPT 2026",
  },
  venue: {
    name: "Facultad de Ingeniería, Universidad Mesoamericana",
    city: "Quetzaltenango",
    display: "Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.659181363057!2d-91.54277412306315!3d14.843519185672095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e9821d5d018bf%3A0xb35fd953c69529a9!2sFacultad%20de%20Ingenier%C3%ADa%20Universidad%20Mesoamericana!5e1!3m2!1ses!2sgt!4v1787904151989!5m2!1ses!2sgt",
  },
  seo: {
    title: "AI Builders Xela 2026 — Hackathon de IA en Guatemala",
    description:
      "19–20 de septiembre 2026 en la Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango. El primer hackathon de IA del occidente de Guatemala. 100% gratis.",
  },
  hero: {
    lines: ["AI", "BUILDERS", "XELA"],
    subhead:
      "El primer hackathon de inteligencia artificial en el occidente de Guatemala",
  },
  about: {
    heading: "Sobre el evento",
    paragraphs: [
      "AI Builders Xela combina el Building with AI Summit (charlas, paneles y networking) con el Cursor Hackathon (construcción intensiva de soluciones con IA), durante un fin de semana completo en Quetzaltenango.",
      "Buscamos posicionar a Quetzaltenango como nodo activo del ecosistema tecnológico centroamericano, conectando a desarrolladores, fundadores, estudiantes y líderes del sector alrededor de la inteligencia artificial aplicada a problemas reales de Guatemala.",
      "Es la primera edición de lo que buscamos convertir en un referente anual del occidente del país.",
    ],
    stats: [
      {
        id: "participants",
        value: "80–150",
        label: "participantes esperados",
      },
      {
        id: "prize",
        value: "Premios",
        label: "en efectivo + créditos de Cursor y Notion",
      },
      {
        id: "days",
        value: "2 días",
        label: "completos de actividades",
      },
      {
        id: "price",
        value: "Gratis",
        label: "evento completamente gratuito",
      },
    ],
  },
  format: {
    heading: "Formato",
    days: [
      {
        id: "day-1",
        dateLabel: "Sábado 19 sept",
        title: "Building with AI Summit",
        subtitle: "Día 1",
        bullets: [
          "Keynotes, paneles y charlas técnicas",
          "Charlas simultáneas en 3 aulas",
          "Presentación oficial de los retos del hackathon",
          "Workshop de formación de equipos",
        ],
      },
      {
        id: "day-2",
        dateLabel: "Domingo 20 sept",
        title: "Grokbot Meetup - Guatemala (Xela)",
        subtitle: "Día 2",
        bullets: [
          "Presentado por Cursor como naming sponsor",
          "3 bloques de construcción con mentoring",
          "Demo Day ante jurado",
          "Premiación y cierre",
        ],
      },
    ],
  },
  speakers: {
    heading: "Speakers",
    items: [
      {
        id: "giovanni-castillo",
        name: "Giovanni Castillo",
        role: "",
        topic: "La Ruta del Chip: oportunidades en IA embebida",
        // SPEAKER PHOTOS: poner photoSrc → /speakers/{id}.jpg cuando lleguen archivos a public/speakers/
        photoSrc: null,
        href: null,
        confirmed: true,
      },
      {
        id: "carlos-sosa",
        name: "Carlos Sosa",
        role: "",
        topic: "IA aplicada",
        photoSrc: null,
        href: null,
        confirmed: true,
      },
      {
        id: "boris-lemus",
        name: "Boris Lemus",
        role: "Cooperativas MICOPE",
        topic: "Innovación tecnológica y transformación digital",
        photoSrc: null,
        href: "https://www.linkedin.com/in/borislemusv",
        confirmed: true,
      },
      {
        id: "cristian-lavarreda",
        name: "Cristian Lavarreda",
        role: "Ajexport",
        topic: "Emprendimiento y comercio exterior",
        photoSrc: null,
        href: "https://www.linkedin.com/in/lavarreda",
        confirmed: true,
      },
      {
        id: "yeffri-salazar",
        name: "Yeffri Salazar",
        role: "Arduino Guatemala",
        topic: "Hardware y mecatrónica",
        photoSrc: null,
        href: "https://www.linkedin.com/in/yeffrimic",
        confirmed: true,
      },
      {
        id: "tba-1",
        name: "Por confirmar",
        role: "",
        topic: "",
        photoSrc: null,
        href: null,
        confirmed: false,
      },
      {
        id: "tba-2",
        name: "Por confirmar",
        role: "",
        topic: "",
        photoSrc: null,
        href: null,
        confirmed: false,
      },
    ],
  },
  tracks: {
    heading: "Tracks",
    note: "El organizador seleccionará 3 de estos 4 antes del cierre de inscripción.",
    items: [
      {
        id: "lenguas-mayas",
        title: "IA para lenguas mayas",
        description:
          "Vertical estrella. Prototipos que ayuden a documentar, traducir o crear contenido en idiomas mayas de Guatemala, con respeto a las comunidades que los hablan.",
        visible: true,
      },
      {
        id: "rural-agricola",
        title: "IA para el sector rural y agrícola",
        description:
          "Herramientas para el campo del occidente: cooperativas, cadenas agrícolas y problemas concretos de quien produce lejos de la capital.",
        visible: true,
      },
      {
        id: "pymes",
        title: "IA para pymes y emprendimiento",
        description:
          "IA práctica para vender, operar y crecer un negocio pequeño. Menos demo de laboratorio, más algo que se pueda usar el lunes.",
        visible: true,
      },
      {
        id: "salud-educacion",
        title: "IA para salud y educación",
        description:
          "Prototipos que ayuden a clínicas, escuelas o programas comunitarios, pensados para el contexto real de Quetzaltenango y el occidente.",
        visible: true,
      },
    ],
  },
  allies: {
    heading: "Aliados",
    items: [
      // SPONSOR LOGOS: poner logoSrc → /sponsors/{id}.png cuando lleguen archivos oficiales a public/sponsors/
      {
        id: "grokbot-meetup",
        name: "Grokbot Meetup - Guatemala (Xela)",
        tier: "naming",
        href: "https://cursor.com",
        logoSrc: "/sponsors/grokbot-meetup.png",
        logoWidth: 400,
        logoHeight: 400,
      },
      /* {
        id: "notion",
        name: "Notion",
        tier: "tool",
        href: "https://www.notion.com",
        logoSrc: null,
      }, */
      {
        id: "arduino-gt",
        name: "Arduino Guatemala",
        tier: "community",
        href: "https://www.facebook.com/ArduinoGuatemala",
        logoSrc: "/sponsors/arduino-gt.png",
        logoWidth: 720,
        logoHeight: 593,
      },
      {
        id: "python-gt",
        name: "Python Guatemala",
        tier: "community",
        href: "https://www.meetup.com/python-guatemala/",
        logoSrc: "/sponsors/python-gt.png",
        logoWidth: 385,
        logoHeight: 399,
      },
      /* {
        id: "gdg-xela",
        name: "GDG Xela",
        tier: "community",
        href: "https://gdg.community.dev/gdg-xela/",
        logoSrc: null,
      }, */
      {
        id: "smops",
        name: "SMOPS",
        tier: "ally",
        // ALLY LINK: URL oficial pendiente
        href: null,
        logoSrc: "/sponsors/smops.png",
        logoWidth: 493,
        logoHeight: 136,
      },
      {
        id: "creabot",
        name: "CREABOT",
        tier: "ally",
        href: "https://www.creabot.us/",
        logoSrc: "/sponsors/creabot.png",
        logoWidth: 1024,
        logoHeight: 157,
      },
      {
        id: "mesoamericana",
        name: "Universidad Mesoamericana",
        tier: "venue",
        href: "https://mesoamericana.edu.gt/",
        logoSrc: "/sponsors/mesoamericana.png",
        logoWidth: 1024,
        logoHeight: 1024,
      },
      {
        id: "voz-xela",
        name: "La Voz de Xela",
        tier: "media",
        href: "https://lavozdexela.com/",
        logoSrc: "/sponsors/voz-xela.png",
        logoWidth: 500,
        logoHeight: 167,
      },
    ],
  },
  faq: {
    heading: "Preguntas",
    items: [
      {
        id: "costo",
        question: "¿Cuánto cuesta participar?",
        answer: "Es completamente gratuito.",
      },
      {
        id: "experiencia",
        question: "¿Necesito experiencia previa en IA?",
        answer:
          "No, hay espacio para todos los niveles, desde principiantes hasta avanzados.",
      },
      {
        id: "equipo",
        question: "¿Puedo ir sin equipo?",
        answer: "Sí, hay un workshop de formación de equipos el Día 1.",
      },
      {
        id: "llevar",
        question: "¿Qué necesito llevar?",
        answer: "Tu laptop y muchas ganas de construir.",
      },
      {
        id: "donde",
        question: "¿Dónde es el evento?",
        answer: "Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango.",
      },
    ],
  },
  finalCta: {
    heading: "No te quedes fuera del primer hackathon de IA del occidente de Guatemala",
  },
  footer: {
    contactEmail: "eswinstuardporojcastro@gmail.com",
    instagramHandle: "@aibuilders.gt",
    instagramUrl: "https://instagram.com/aibuilders.gt",
    copyright: "© 2026 AI Builders GT",
  },
  ctas: [
    { placement: "header", label: "Regístrate gratis" },
    { placement: "hero", label: "Regístrate gratis" },
    { placement: "mid", label: "Regístrate gratis" },
    { placement: "final", label: "Regístrate gratis" },
  ],
}

export const tierLabels: Record<EventContent["allies"]["items"][number]["tier"], string> = {
  naming: "Presentado por Cursor Guatemala",
  tool: "Tool partner",
  community: "Community partners",
  ally: "Aliados",
  venue: "Coorganiza",
  media: "Media partner",
}
