import type { EventContent } from "./types"

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/HAE68LzXZ29HZw2ShoAyTz?mode=gi_t"
const INSTAGRAM_URL = "https://instagram.com/aibuilders.gt_"

export const event: EventContent = {
  communityName: "AI Builders GT",
  editionName: "AI Builders Xela 2026",
  slug: "xela-2026",
  tabLabel: "Xela 2026",
  eventStatus: "completed",
  badge: "Ya sucedió",
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
    heading: "Dónde fue",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6628.659181363057!2d-91.54277412306315!3d14.843519185672095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e9821d5d018bf%3A0xb35fd953c69529a9!2sFacultad%20de%20Ingenier%C3%ADa%20Universidad%20Mesoamericana!5e1!3m2!1ses!2sgt!4v1787904151989!5m2!1ses!2sgt",
  },
  seo: {
    title: "AI Builders Xela 2026 — archivo de la 1.ª edición",
    description:
      "El 19 y 20 de septiembre 2026, el primer hackathon de IA del occidente de Guatemala se hizo en la Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango. Archivo de la comunidad AI Builders GT.",
    hackathonTitle: "GrokBot Hackathon — archivo | AI Builders Xela 2026",
    hackathonDescription:
      "El GrokBot Hackathon del domingo 20 de septiembre 2026 en Quetzaltenango ya ocurrió. Equipos de 2 a 5. El cupo de la primera edición cerró.",
    ogCta: "Entrá al grupo",
  },
  hero: {
    lines: ["AI", "BUILDERS", "XELA"],
    subhead:
      "Fue el primer hackathon de inteligencia artificial en el occidente de Guatemala",
  },
  about: {
    heading: "Lo que pasó",
    paragraphs: [
      "El 19 y 20 de septiembre 2026, AI Builders Xela juntó el Building with AI Summit y el GrokBot Hackathon en la Facultad de Ingeniería de la Universidad Mesoamericana, en Quetzaltenango.",
      "Fue la primera vez que el occidente de Guatemala tuvo un hackathon de inteligencia artificial. Dos días de charlas, equipos y prototipos, con gente que vino a construir.",
      "Esta página es el archivo de esa edición. La comunidad sigue: el grupo de WhatsApp y el Instagram son la puerta para lo que viene.",
    ],
    quota: "",
    quotaLinkLabel: "",
    quotaHref: null,
    stats: [
      {
        id: "speakers",
        value: "10",
        label: "speakers del summit",
      },
      {
        id: "prize",
        value: "Premios",
        label: "en créditos de GrokBot",
      },
      {
        id: "days",
        value: "2 días",
        label: "19 y 20 de septiembre",
      },
      {
        id: "price",
        value: "Gratis",
        label: "entrada libre",
      },
    ],
  },
  format: {
    heading: "El fin de semana",
    days: [
      {
        id: "day-1",
        dateLabel: "Sábado 19 sept",
        title: "Building with AI Summit",
        subtitle: "Día 1",
        bullets: [
          "Keynotes, paneles y charlas técnicas",
          "Charlas en el Aula Principal",
          "Presentación oficial de los retos del hackathon",
          "Workshop de formación de equipos",
        ],
        schedule: [
          { time: "8:00 – 9:30", label: "Bienvenida, inauguración y registro", place: "Auditorio" },
          { time: "9:30 – 13:00", label: "Charlas — Bloques 1 y 2", place: "Aula Principal" },
          { time: "13:00 – 14:00", label: "Almuerzo" },
          { time: "14:00 – 15:30", label: "Charlas — Bloque 3", place: "Aula Principal" },
          { time: "15:30 – 15:45", label: "Coffee break", place: "Todos" },
          {
            time: "15:45 – 16:45",
            label: "Workshop: formación de equipos y retos del hackathon",
            place: "Auditorio",
          },
          { time: "16:45 – 17:00", label: "Cierre del Día 1", place: "Auditorio" },
        ],
        roomsHeading: "Agenda",
        roomsNote:
          "Bienvenida y cierre en el Auditorio · Charlas en el Aula Principal",
        rooms: [
          {
            id: "aula-principal",
            name: "Aula Principal",
            accent: "brand",
            talks: [
              {
                time: "9:30 – 10:15",
                speakerId: "yeffri-salazar",
                duration: "45 min",
              },
              {
                time: "9:30 – 10:30",
                speakerId: "erick-pineda",
                duration: "1 h",
                modality: "en-linea",
              },
              {
                time: "10:15 – 10:35",
                speakerId: "giovanni-castillo",
                duration: "20 min",
              },
              {
                time: "10:30 – 10:45",
                title: "Coffee break",
                duration: "15 min",
                kind: "break",
              },
              {
                time: "10:40 – 11:25",
                speakerId: "cristina-coutino",
                duration: "45 min",
              },
              {
                time: "10:45 – 11:45",
                speakerId: "carlos-sosa",
                title: "Agentes en AWS (complemento directo de la charla de Erick Pineda)",
                duration: "1 h",
                modality: "en-linea",
              },
              {
                time: "11:25 – 11:55",
                speakerId: "cristian-lavarreda",
                duration: "30 min",
                modality: "en-linea",
              },
              {
                time: "11:55 – 12:15",
                speakerId: "carlos-escobar",
                duration: "20 min",
              },
              {
                time: "12:15 – 13:00",
                speakerId: "diego-rosales",
                duration: "45 min",
              },
              {
                time: "14:00 – 14:30",
                speakerId: "giovanni-castillo",
                title: "Convierte tu proyecto en una empresa que cambie tu vida",
                duration: "30 min",
              },
              {
                time: "14:00 – 15:00",
                speakerId: "edwin-sac",
                duration: "1 h",
              },
              {
                time: "15:00 – 15:30",
                speakerId: "diego-cum",
                duration: "30 min",
              },
            ],
          },
        ],
      },
      {
        id: "day-2",
        dateLabel: "Domingo 20 sept",
        title: "GrokBot Hackathon",
        subtitle: "Día 2",
        bullets: [
          "Un solo reto general para todos los equipos",
          "Equipos de 2 a 5 personas",
          "3 bloques de construcción con mentoría",
          "Freeze de código a las 15:30",
          "Demo Day, premiación y cierre",
        ],
        roomsNote: "Auditorio 8:00–9:00 y desde 16:15 · Laboratorio el resto del día",
        schedule: [
          { time: "8:00 – 8:30", label: "Bienvenida — jurado y mentores", place: "Auditorio" },
          { time: "8:30 – 9:00", label: "Presentación del reto y reglas", place: "Auditorio" },
          { time: "9:00 – 9:15", label: "Traslado al laboratorio" },
          { time: "9:15 – 10:00", label: "Grokbot Meetup - Guatemala (Xela)", place: "Laboratorio" },
          {
            time: "10:00 – 11:30",
            label: "Bloque de construcción 1 (checkpoint de idea ~10:30)",
            place: "Laboratorio",
          },
          { time: "11:30 – 11:45", label: "Coffee break (horario flexible)", place: "Laboratorio" },
          {
            time: "11:45 – 13:15",
            label: "Bloque de construcción 2 (mentoría ~12:30)",
            place: "Laboratorio",
          },
          { time: "13:15 – 14:15", label: "Almuerzo (horario flexible)" },
          {
            time: "14:15 – 15:30",
            label: "Bloque de construcción 3 (mentoría final ~15:00)",
            place: "Laboratorio",
          },
          { time: "15:30", label: "Freeze de código", place: "Laboratorio" },
          { time: "15:30 – 16:00", label: "Preparación de pitch", place: "Laboratorio" },
          { time: "16:00 – 16:15", label: "Traslado al auditorio" },
          { time: "16:15 – 17:05", label: "Demo Day — pitches", place: "Auditorio" },
          { time: "17:05 – 17:20", label: "Deliberación del jurado", place: "Auditorio" },
          { time: "17:20 – 17:30", label: "Premiación y cierre", place: "Auditorio" },
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
        role: "CREABOT",
        topic: "La Ruta del Chip: IA y mecatrónica como puerta de entrada al empleo",
        photoSrc: "/speakers/giovanni-castillo.png",
        href: "https://creabot.gt",
        confirmed: true,
        bio: "Director de CREABOT Guatemala y miembro de la Mesa Empresarial y de Talento de La Ruta del Chip.",
        socials: { website: "https://creabot.gt" },
      },
      {
        id: "carlos-sosa",
        name: "Carlos Sosa",
        role: "",
        topic: "Agentes en AWS",
        photoSrc: "/speakers/carlos-sosa.jpg",
        href: null,
        confirmed: true,
        bio: "Desarrollador e investigador enfocado en aplicaciones prácticas de inteligencia artificial para el contexto latinoamericano.",
      },
      {
        id: "cristian-lavarreda",
        name: "Cristian Lavarreda",
        role: "Esource Capital",
        topic: "Retos del desarrollo de un SLM en Kaqchikel",
        photoSrc: "/speakers/cristian-lavarreda.png",
        href: "https://www.linkedin.com/in/lavarreda",
        confirmed: true,
        bio: "Socio fundador de Esource Capital. Ha ayudado a más de 4,000 empresas en Latinoamérica a adoptar tecnología de nube e inteligencia artificial.",
        socials: {
          linkedin: "https://www.linkedin.com/in/lavarreda",
          website: "https://www.esourcecapital.com",
        },
      },
      {
        id: "yeffri-salazar",
        name: "Yeffri Salazar",
        role: "Arduino Guatemala",
        topic: "IA local y humanoides",
        photoSrc: "/speakers/yeffri-salazar.jpg",
        href: "https://www.linkedin.com/in/yeffrimic",
        confirmed: true,
        bio: "Maker, ingeniero en electrónica y seleccionado nacional de eSports. Construye robots y organiza eventos de tecnología.",
        socials: {
          linkedin: "https://www.linkedin.com/in/yeffrimic",
          instagram: "https://www.instagram.com/yeffrimic",
          website: "https://themicrofcontrol.wordpress.com",
        },
      },
      {
        id: "carlos-escobar",
        name: "Carlos Hugo Escobar Gómez",
        role: "Koi Software",
        topic: "El repo no es el producto",
        photoSrc: "/speakers/carlos-escobar.jpg",
        href: "https://www.linkedin.com/in/carloshugoeg",
        confirmed: true,
        bio: "Fundador de Koi Software y becado de Fundación Juan Bautista Gutiérrez. Construye software a la medida para negocios reales en Guatemala usando IA de forma central en el proceso.",
        socials: {
          linkedin: "https://www.linkedin.com/in/carloshugoeg",
          instagram: "https://www.instagram.com/carloshugoeg",
          twitter: "https://x.com/carloshugoeg",
          website: "https://koisoftware.com",
        },
      },
      {
        id: "edwin-sac",
        name: "Edwin Luis Carlos Sac Recinos",
        role: "GisystemsInt",
        topic: "Geoportales y sistemas de información geográfica con Inteligencia Artificial",
        photoSrc: "/speakers/edwin-sac.png",
        href: "https://www.instagram.com/edwinsacrecinos",
        confirmed: true,
        bio: "Ingeniero en sistemas, arquitecto de soluciones y escritor. Especialista en backend, IA e infraestructuras modulares. Encargado de desarrollo de sistemas de información geográfica en GisystemsInt.",
        socials: { instagram: "https://www.instagram.com/edwinsacrecinos" },
      },
      {
        id: "diego-cum",
        name: "Diego Andrés Cum Chavez",
        role: "Cursor Ambassador",
        topic: "GrokBot in Action — Pide y se te dará",
        photoSrc: "/speakers/diego-cum.jpg",
        href: "https://www.linkedin.com/in/diegodevgt",
        confirmed: true,
        bio: "AI Architect, desarrollador y creador de contenido. Cursor Ambassador en Guatemala, Claude Certified Architect y cofundador de DDR Innova, donde impulsa soluciones de IA para negocios y productos digitales.",
        socials: {
          linkedin: "https://www.linkedin.com/in/diegodevgt",
          instagram: "https://www.instagram.com/diegodevgt",
          twitter: "https://x.com/diegodevgt",
          website: "https://diegodevgt.com",
        },
      },
      {
        id: "erick-pineda",
        name: "Erick Pineda",
        role: "Python Guatemala",
        topic: "Conectando servicios de IA de AWS con Python y Boto3",
        photoSrc: "/speakers/erick-pineda.png",
        href: "https://www.linkedin.com/in/epinedaamezquita/",
        confirmed: true,
        bio: "Ingeniero en Sistemas, AWS Community Builder y líder de Python Guatemala. Conferencista y creador del podcast Café Con Datos, con experiencia en nube, ciencia de datos e inteligencia artificial.",
        socials: {
          linkedin: "https://www.linkedin.com/in/epinedaamezquita/",
          website: "https://pythonguatemala.dev/",
        },
      },
      {
        id: "cristina-coutino",
        name: "Cristina del Rosario Coutiño Arriaga",
        role: "Docente universitaria",
        topic: "Más allá del prompt: construyendo soluciones reales con IA",
        photoSrc: "/speakers/cristina-coutino.png",
        href: "https://www.linkedin.com/in/cristina-coutiño-9408201a1",
        confirmed: true,
        bio: "Profesional en informática especializada en análisis y visualización de datos, desarrollo de software e ingeniería de datos. Consultora con experiencia en Python, bases de datos e inteligencia artificial.",
        socials: {
          linkedin: "https://www.linkedin.com/in/cristina-coutiño-9408201a1",
        },
      },
      {
        id: "diego-rosales",
        name: "Diego Rosales",
        role: "SpaceX Ambassador",
        topic: "Automatización de procesos en 2026 — Convoflow AI",
        photoSrc: "/speakers/diego-rosales.jpg",
        href: "https://www.linkedin.com/in/dvrm",
        confirmed: true,
        bio: "Ingeniero de software y SpaceX Ambassador. Cofundador de DDR Innova y coorganizador del primer Cursor Meetup en Guatemala.",
        socials: {
          linkedin: "https://www.linkedin.com/in/dvrm",
          website: "https://convoflow.ai",
        },
      },
    ],
  },
  tracks: {
    heading: "Tracks",
    note: "El domingo hay un solo reto general para todos los equipos.",
    items: [
      {
        id: "lenguas-mayas",
        title: "IA para lenguas mayas",
        description:
          "Vertical estrella. Prototipos que ayuden a documentar, traducir o crear contenido en idiomas mayas de Guatemala, con respeto a las comunidades que los hablan.",
        visible: false,
      },
      {
        id: "rural-agricola",
        title: "IA para el sector rural y agrícola",
        description:
          "Herramientas para el campo del occidente: cooperativas, cadenas agrícolas y problemas concretos de quien produce lejos de la capital.",
        visible: false,
      },
      {
        id: "pymes",
        title: "IA para pymes y emprendimiento",
        description:
          "IA práctica para vender, operar y crecer un negocio pequeño. Menos demo de laboratorio, más algo que se pueda usar el lunes.",
        visible: false,
      },
      {
        id: "salud-educacion",
        title: "IA para salud y educación",
        description:
          "Prototipos que ayuden a clínicas, escuelas o programas comunitarios, pensados para el contexto real de Quetzaltenango y el occidente.",
        visible: false,
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
      {
        id: "spacex",
        name: "SpaceX",
        tier: "sponsor",
        href: "https://www.spacex.com",
        logoSrc: "/hero/spacex-com-brandmark-dark.svg",
        logoWidth: 147,
        logoHeight: 19,
      },
      {
        id: "codekids",
        name: "CodeKids",
        tier: "sponsor",
        href: "https://www.facebook.com/share/19MH8mxPd6/",
        logoSrc: "/hero/codekids.svg",
        logoWidth: 1080,
        logoHeight: 1107,
      },
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
      },/*
      {
        id: "open2",
        name: "Open2",
        tier: "community",
        href: "https://open2.io",
        logoSrc: "/sponsors/open2.png",
        logoWidth: 1024,
        logoHeight: 241,
      },*/
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
        href: "https://smops.ai/",
        logoSrc: "/sponsors/smops.svg",
        logoWidth: 1213,
        logoHeight: 265,
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
        logoWidth: 1200,
        logoHeight: 1191,
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
        question: "¿Cuánto costó participar?",
        answer:
          "Fue completamente gratuito. Los premios del hackathon fueron créditos de GrokBot, no efectivo.",
      },
      {
        id: "experiencia",
        question: "¿Necesito experiencia previa en IA para la comunidad?",
        answer:
          "No. El summit y el hackathon tuvieron espacio para todos los niveles, y el grupo sigue igual: desde principiantes hasta avanzados.",
      },
      {
        id: "horario",
        question: "¿Cómo fue el horario?",
        answer:
          "Sábado 19: bienvenida de 8:00 a 9:30, charlas en el Aula Principal, workshop de equipos a las 15:45 y cierre a las 17:00. Domingo 20: bienvenida a las 8:00, construcción en el Laboratorio y Demo Day desde las 16:15. El detalle completo está en El fin de semana.",
        href: "#formato",
        linkLabel: "Ver la agenda",
      },
      {
        id: "parqueo",
        question: "¿Hubo parqueo?",
        answer: "Sí, hay parqueo en la Universidad Mesoamericana.",
      },
      {
        id: "comida",
        question: "¿Hubo comida?",
        answer:
          "Sí. Café, pizza y bebida. El domingo no se comió en el laboratorio: café y almuerzo fueron horarios de referencia.",
      },
      {
        id: "donde",
        question: "¿Dónde fue el evento?",
        answer: "Facultad de Ingeniería, Universidad Mesoamericana, Quetzaltenango.",
      },
      {
        id: "fotos",
        question: "¿Dónde están las fotos?",
        answer:
          "Todavía no tenemos fotos del recinto para este archivo. Las que vayan saliendo se publican en el grupo de WhatsApp; acá abajo están los equipos que compitieron.",
        href: "#recap",
        linkLabel: "Ver los equipos",
      },
      {
        id: "proxima",
        question: "¿Va a haber otra edición?",
        answer:
          "Esta fue la primera. La comunidad sigue activa y queremos que Xela se vuelva un referente anual del occidente. La fecha de la siguiente no está anunciada todavía.",
      },
      {
        id: "avisos",
        question: "¿Dónde me entero de lo que sigue?",
        answer:
          "En el grupo de WhatsApp de la comunidad. Ahí van avisos, fotos y lo que vaya saliendo.",
        href: WHATSAPP_GROUP_URL,
        linkLabel: "Entrá al grupo",
      },
    ],
  },
  registerTeams: {
    heading: "Equipos de Xela 2026",
    lede:
      "El registro para el GrokBot Hackathon ya cerró. Estos fueron los equipos que compitieron el domingo 20 de septiembre.",
    ctaHeading: "Registra tu equipo",
    ctaLede:
      "GrokBot Hackathon · domingo 20 · equipos de 2 a 5 · 12 equipos o 50 personas.",
    ctaLabel: "Registra tu equipo",
    backLabel: "AI Builders Xela",
    fullMessage: "Cupo lleno",
    successTemplate: "Equipo {name} registrado. Cualquier duda: {email}.",
    teamNameLabel: "Nombre del equipo",
    membersLegend: "Integrantes",
    memberLabel: "Integrante {n}",
    contactLabel: "WhatsApp o correo del representante",
    contactHint: "Lo usamos solo para contactar al equipo.",
    addMember: "+ Agregar integrante",
    removeMember: "Quitar",
    submit: "Registrar equipo",
    submitting: "Registrando…",
    submitted: "Equipo registrado",
    listHeading: "Equipos registrados",
    emptyList: "Aún no hay equipos registrados.",
    memberCountLabel: "{n} integrantes",
  },
  midCta: {
    heading: "La comunidad sigue en Xela",
    lede: "El summit y el hackathon ya fueron. El grupo de WhatsApp y el Instagram son la puerta para lo que viene.",
  },
  finalCta: {
    heading: "Ya pasó, pero el grupo sigue",
  },
  recap: {
    heading: "Así se vio",
    lede:
      "El sábado fue summit. El domingo, GrokBot Hackathon. Este muro es el archivo visual de la primera edición en Xela.",
    // COMENTARIO: fotos reales del recinto van acá cuando existan. Mientras
    // tanto, esta sección no las inventa: muestra a los equipos en su lugar.
    photos: [],
    teamsHeading: "Los equipos",
    teamsLede:
      "Todavía no tenemos fotos del recinto. Estos son los equipos que compitieron el domingo 20 en el GrokBot Hackathon.",
    teams: [
      { teamName: "No’j Code" },
      { teamName: "UNIC" },
      { teamName: "BALAM TEAM" },
      { teamName: "Asimov's Builders" },
      { teamName: "CodeSensitive" },
      { teamName: "print(\"Hola Mundo\")" },
      { teamName: "Fatal3ye.inc" },
      { teamName: "Tauron Flash" },
      { teamName: "Alt + F4" },
    ],
  },
  community: {
    doors: [
      { id: "whatsapp", kind: "primary", label: "Entrá al grupo" },
      { id: "instagram", kind: "secondary", label: "Instagram" },
    ],
  },
  footer: {
    contactEmail: "eswinstuardporojcastro@gmail.com",
    instagramHandle: "@aibuilders.gt_",
    instagramUrl: INSTAGRAM_URL,
    whatsappLabel: "WhatsApp",
    whatsappUrl: WHATSAPP_GROUP_URL,
    whatsappQrSrc: "/community/whatsapp-qr.png",
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
  sponsor: "Patrocinador",
  tool: "Tool partner",
  community: "Community partners",
  ally: "Aliados",
  venue: "Coorganiza",
  media: "Media partner",
}
