import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="reveal is-visible">
          <span className="eyebrow">Pulpa de fruta 100% real · Hecho a mano cada día</span>
          <h1>El sabor que se saborea desde el primer lametón.</h1>
          <p>
            Cada paleta Nápoles se prepara con pulpa de fruta natural, sin atajos y con la misma
            receta que ha conquistado paladares por generaciones. Cremosidad, frescura y un
            antojo que no se resiste: así se conquista un cliente que vuelve una y otra vez.
          </p>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="https://wa.me/573132689693?text=Hola%20quiero%20conocer%20el%20men%C3%BA%20de%20Helados%20N%C3%A1poles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero pedir ahora
            </a>
            <a className="btn btn-secondary" href="#menu">
              Ver menú completo
            </a>
            <a className="btn btn-secondary" href="#eventos">
              Cotizar evento
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <strong>+70</strong>
              <span>Años de una receta que no ha cambiado.</span>
            </div>
            <div className="stat-card">
              <strong>12+</strong>
              <span>Sabores hechos con fruta real todos los días.</span>
            </div>
            <div className="stat-card">
              <strong>100%</strong>
              <span>Pulpa de fruta, cero atajos artificiales.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal is-visible">
          <div className="hero-card">
            <div className="hero-main-image">
              <Image
                src="/assets/hero-principal-editorial.png"
                alt="Bolsa tradicional de Helados Nápoles con logo rojo y blanco"
                width={1200}
                height={1600}
                priority
              />
            </div>
          </div>

          <div className="floating-badge">
            <div className="floating-thumb">
              <Image
                src="/assets/paleta-maracumango.png"
                alt="Paleta de maracumango"
                width={104}
                height={104}
              />
            </div>
            <div>
              <strong>Antojo garantizado</strong>
              <span>Fruta real, textura deliciosa y ese primer mordisco que te hace querer otra.</span>
            </div>
          </div>

          <div className="floating-location">
            <div className="floating-thumb">
              <Image
                src="/assets/cono-helado-suave-producto.png"
                alt="Helado suave en cono"
                width={104}
                height={104}
              />
            </div>
            <div>
              <strong>Cremosidad que enamora</strong>
              <span>Textura suave y balance perfecto de dulzura en cada preparación.</span>
            </div>
          </div>

          <div className="floating-review">
            <div className="floating-thumb">
              <Image
                src="/assets/vasito-helado-gomitas-producto.png"
                alt="Vasito de helado con gomitas"
                width={104}
                height={104}
              />
            </div>
            <div>
              <strong>Para compartir o consentirte</strong>
              <span>Ideal solo, con toppings o para regalar un momento dulce a quien quieras.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}