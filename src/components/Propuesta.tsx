import Image from "next/image";

const razones = [
  {
    title: "Pulpa de fruta, no saborizantes",
    text: "Cada paleta se prepara con pulpa de fruta el mismo día. Lo notas desde el primer mordisco: no es un sabor artificial, es fruta de verdad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3c-1 2-3 3-3 6a3 3 0 006 0c0-3-2-4-3-6z" />
        <path d="M6 12a6 6 0 1012 0 6 6 0 00-12 0z" />
      </svg>
    ),
  },
  {
    title: "Más de 70 años perfeccionando la receta",
    text: "La misma fórmula familiar que empezó en Fusagasugá en 1955 sigue viva hoy en Bogotá, cuidada por la misma pasión de siempre.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Tu antojo, resuelto en minutos",
    text: "Escribe por WhatsApp y recibe tu pedido en la puerta de tu casa, sin filas, sin esperas largas y con la misma calidad de siempre.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v12H8l-4 4V4z" />
      </svg>
    ),
  },
];

export default function Propuesta() {
  return (
    <section className="section" id="propuesta">
      <div className="container reveal">
        <span className="eyebrow">Por qué elegirnos</span>
        <h2 className="section-title">Razones para que hoy pidas por primera vez.</h2>
        <p className="section-lead">
          No es un helado más: es una receta de más de 70 años, hecha con fruta real y pensada
          para que quieras repetir. Esto es lo que encuentras en cada pedido de Helados Nápoles.
        </p>

        <div className="promise-bento">
          <figure className="promise-image-card">
            <Image
              src="/assets/paleta-maracumango.png"
              alt="Paleta artesanal de Helados Nápoles hecha con fruta real"
              width={800}
              height={1000}
            />
            <span className="promise-image-tag">Hecho a mano cada día</span>
            <div className="promise-image-caption">
              <strong>Así se ve una paleta de verdad.</strong>
              <span>Fruta real, cero atajos, el mismo sabor que enamora Bogotá desde el 2000.</span>
            </div>
          </figure>

          <div style={{ display: "grid", gap: "1rem" }}>
            {razones.map((r) => (
              <article className="promise-card" key={r.title}>
                <span className="promise-icon">{r.icon}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}