import Image from "next/image";

const timeline = [
  {
    year: "1955",
    title: "Origen en Fusagasugá",
    text: "La tradición de Heladería Nápoles comienza en Fusagasugá y se asocia con una fórmula heredada y un oficio transmitido por la familia.",
  },
  {
    year: "Legado familiar",
    title: "Samuel E. Aguilar P. y Hernando Aguilar C.",
    text: "La historia del negocio se conecta con una familia emprendedora, el trabajo constante y una oportunidad convertida en tradición comercial.",
  },
  {
    year: "2000",
    title: "Bogotá como nueva etapa",
    text: "Helados Nápoles llega a Bogotá como heredero de la fórmula artesanal, manteniendo calidad, compromiso y satisfacción al cliente.",
  },
  {
    year: "Hoy",
    title: "La misma receta, a un pedido de distancia",
    text: "Hoy puedes disfrutar esa misma tradición sin salir de casa: pide por WhatsApp y recibe el sabor que ha enamorado a generaciones.",
  },
];

const gallery = [
  {
    src: "/assets/estatua_fundador_2.jpg",
    alt: "Busto conmemorativo de Samuel E. Aguilar P. en Helados Nápoles",
    caption: "Samuel E. Aguilar P., el fundador cuya visión sigue viva en cada paleta que servimos hoy.",
  },
  {
    src: "/assets/reconocimiento_consejo_bogota.jpg",
    alt: "Reconocimiento institucional de Helados Nápoles del Concejo de Bogotá",
    caption: "Un reconocimiento oficial del Concejo de Bogotá que respalda más de 26 años de tradición y calidad.",
  },
  {
    src: "/assets/aviso-publicitario-maracumango-1.png",
    alt: "Aviso de Heladería Nápoles con promoción del sabor maracumango",
    caption: "Sabores nuevos, esencia de siempre: el antojo por lo artesanal nunca pasa de moda.",
  },
  {
    src: "/assets/cono-helado-suave-producto.png",
    alt: "Helado suave recién servido en cono, símbolo de la calidad Nápoles",
    caption: "Hoy seguimos preparando cada helado con la misma pasión de siempre, listo para que lo pidas en minutos.",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="section">
      <div className="container story-layout">
        <div className="reveal">
          <span className="eyebrow">Una historia que se saborea</span>
          <h2 className="section-title">Una receta familiar que hoy puedes pedir por WhatsApp.</h2>
          <p className="section-lead">
            Detrás de cada paleta Nápoles hay una familia que dedicó su vida a perfeccionar un
            sabor. Ese legado es la razón por la que miles de personas confían en nosotros desde
            1955 en Fusagasugá y desde el año 2000 en Bogotá: la misma calidad, la misma pasión,
            ahora a un clic de distancia.
          </p>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="story-gallery reveal">
          {gallery.map((item) => (
            <figure className="gallery-card" key={item.src}>
              <Image src={item.src} alt={item.alt} width={1200} height={1600} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
