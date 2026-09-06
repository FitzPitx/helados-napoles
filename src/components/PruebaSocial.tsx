import Image from "next/image";

const items = [
  {
    title: "Reconocimiento oficial",
    text: "Distinción del Concejo de Bogotá D.C. por más de 26 años de tradición comercial y aporte a la ciudad.",
  },
  {
    title: "Legado familiar vivo",
    text: "Una receta transmitida entre generaciones, hoy disponible para pedir en minutos por WhatsApp.",
  },
  {
    title: "Sabor que se recomienda solo",
    text: "Clientes que vuelven una y otra vez son la mejor prueba de que el sabor Nápoles no se olvida.",
  },
];

export default function PruebaSocial() {
  return (
    <section id="prueba-social" className="section">
      <div className="container">
        <div className="recognition-layout reveal">
          <div>
            <span className="eyebrow">Tradición reconocida</span>
            <h2 className="section-title">Una marca que ya se ganó la confianza de Bogotá.</h2>
            <p className="section-lead">
              El reconocimiento del Concejo de Bogotá y más de siete décadas de trayectoria no
              son solo historia: son la garantía de que cada pedido llega con la misma calidad
              de siempre.
            </p>
          </div>

          <figure className="recognition-image-card">
            <Image
              src="/assets/reconocimiento_consejo_bogota_1.jpg"
              alt="Reconocimiento oficial del Concejo de Bogotá D.C. a Helados Nápoles"
              width={900}
              height={1150}
            />
            <span className="recognition-image-tag">Documento oficial</span>
            <div className="recognition-image-caption">
              <strong>Reconocido por el Concejo de Bogotá D.C.</strong>
              <span>Una distinción real que respalda más de 26 años de tradición.</span>
            </div>
          </figure>
        </div>

        <div className="social-grid">
          {items.map((item) => (
            <article className="social-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}