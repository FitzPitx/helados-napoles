const WHATSAPP_NUMBER = "573132689693";

function whatsappLink(sabor: string) {
  const mensaje = `Hola, quiero pedir la paleta de sabor ${sabor}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

const sabores = [
  { title: "Paleta de Leche", text: "Suave, dulce y con ese sabor de siempre que sabe a tradición." },
  { title: "Coco", text: "Fresca y tropical, con el toque justo de coco natural." },
  { title: "Mora", text: "Sabor intenso a mora silvestre, ácida y dulce en su punto." },
  { title: "Revuelto (Moraleche)", text: "La combinación perfecta entre mora y leche en cada mordisco." },
  { title: "Guayaba", text: "Dulce, aromática y con ese sabor a guayaba recién cortada." },
  { title: "Combinado (Leche guayaba)", text: "Suavidad de leche con el toque frutal de la guayaba." },
  { title: "Guanábana", text: "Suave, untuosa y con el sabor inconfundible de la guanábana." },
  { title: "Lulo", text: "Ácido y refrescante: el sabor colombiano que no falla." },
  { title: "Mango", text: "Dulce y jugoso, como comerte un mango maduro en paleta." },
  { title: "Maracumango", text: "La mezcla explosiva de mango y maracuyá que se volvió la favorita." },
  { title: "Maracuyá", text: "Ácida, intensa y perfecta para quienes aman lo tropical." },
  { title: "Curuba", text: "Un sabor artesanal, suave y ligeramente ácido que enamora." },
];

export default function Menu() {
  return (
    <section id="menu" className="section">
      <div className="container reveal">
        <span className="eyebrow">Menú irresistible</span>
        <h2 className="section-title">Sabores que invitan a pedir de inmediato.</h2>
        <p className="section-lead">
          Doce sabores hechos con pulpa de fruta real, listos para pedir en segundos. Elige el
          tuyo, escríbenos por WhatsApp y te lo llevamos hasta la puerta.
        </p>

        <div className="feature-banner">
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", lineHeight: 1.1 }}>
              Sabor del mes: Maracumango
            </h3>
            <p>
              La mezcla de mango y maracuyá que está volviendo locos a nuestros clientes.
              Pídelo hoy antes de que se agote la tanda del día.
            </p>
          </div>
          <a
            className="btn feature-banner-cta"
            href={whatsappLink("Maracumango")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir Maracumango
          </a>
        </div>

        <div className="menu-grid">
          {sabores.map((s) => (
            <article className="card menu-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a
                className="menu-tag"
                href={whatsappLink(s.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir este sabor →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}