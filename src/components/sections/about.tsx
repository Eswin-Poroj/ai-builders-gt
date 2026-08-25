export function AboutSection() {
  return (
    <section className="wall" id="sobre" aria-labelledby="sobre-title">
      <h2 id="sobre-title" className="wall-title shout">
        Sobre el evento
      </h2>
      <p className="lede">
        AI Builders Xela combina el{" "}
        <strong>Building with AI Summit</strong> (charlas, paneles y
        networking) con el <strong>Cursor Hackathon</strong> (construcción
        intensiva de soluciones con IA), durante un fin de semana completo en
        Quetzaltenango.
      </p>
      <p className="lede">
        Buscamos posicionar a Quetzaltenango como nodo activo del ecosistema
        tecnológico centroamericano, conectando a desarrolladores, fundadores,
        estudiantes y líderes del sector alrededor de la inteligencia
        artificial aplicada a problemas reales de Guatemala.
      </p>
      <p className="lede">
        Es la primera edición de lo que buscamos convertir en un referente
        anual del occidente del país.
      </p>
      <Stats />
    </section>
  )
}

function Stats() {
  const stats = [
    { id: "participants", value: "80–150", label: "participantes esperados" },
    {
      id: "prize",
      value: "Premios",
      label: "en efectivo + créditos de Cursor y Notion",
    },
    { id: "days", value: "2 días", label: "completos de actividades" },
    { id: "price", value: "Gratis", label: "evento completamente gratuito" },
  ] as const

  return (
    <div className="stat-row">
      {stats.map((stat) => (
        <p key={stat.id} className="stat">
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </p>
      ))}
    </div>
  )
}
