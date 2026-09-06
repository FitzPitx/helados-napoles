const eventFeatures = [
  {
    title: "Cotización en minutos",
    text: "Cuéntanos la fecha y el número de invitados; te respondemos con una propuesta clara, sin letra pequeña.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    title: "Paquetes para cumpleaños y colegios",
    text: "Sabores para todos los gustos, listos para la fiesta de los más pequeños o de toda la familia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v6M9 22h6" />
      </svg>
    ),
  },
  {
    title: "Detalles para empresas",
    text: "Onces corporativas, eventos institucionales y regalos que sorprenden a tu equipo o tus clientes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    title: "Compra al por mayor",
    text: "Atención cercana y tiempos de entrega claros para pedidos, sin complicaciones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8M12 13v8" />
      </svg>
    ),
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="section">
      <div className="container cta-layout">
        <div className="reveal">
          <span className="eyebrow">Para tus celebraciones</span>
          <h2 className="section-title">De la paleta de la tarde a la fiesta más grande, siempre contigo.</h2>
          <p className="section-lead">
            Cumpleaños, colegios, empresas o una reunión familiar: llevamos el sabor de toda la
            vida a donde nos necesites, con atención cercana y pedidos que llegan a tiempo.
          </p>

          <div className="event-grid">
            {eventFeatures.map((f) => (
              <article className="event-card" key={f.title}>
                <span className="event-icon">{f.icon}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="https://wa.me/573132689693?text=Hola%2C%20quiero%20cotizar%20un%20evento%20con%20Helados%20N%C3%A1poles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar mi evento
            </a>
          </div>
        </div>

        <div className="cta-box reveal">
          <span className="chip">Para tu próxima celebración</span>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", marginTop: ".6rem" }}>
            Lleva el sabor Nápoles a tu evento.
          </h3>
          <p style={{ marginTop: ".6rem", color: "var(--color-text-muted)" }}>
            Cuéntanos la fecha, el número de invitados y los sabores que te gustaría incluir. Te
            respondemos con una propuesta a la medida en minutos.
          </p>
          <div className="btn-row" style={{ marginTop: "1.4rem" }}>
            <a
              className="btn btn-primary"
              href="https://wa.me/573132689693?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20un%20pedido%20al%20por%20mayor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedido al por mayor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}