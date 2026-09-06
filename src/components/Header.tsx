import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Ir al inicio de Helados Nápoles"
        >
          <Image
            src="/assets/logo-azul-helados-napoles-official.png"
            alt="Helados Nápoles, desde 2000, Bogotá"
            width={180}
            height={130}
            className="brand-logo"
            priority
          />

          <div className="brand-copy">
            <strong>Helados Nápoles</strong>
            <span>Tradición familiar · En Bogotá desde el 2000</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#historia">Historia</a>
          <a href="#menu">Menú</a>
          <a href="#eventos">Eventos</a>
          <a href="#prueba-social">Tradición</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost" href="tel:+573132689693">
            Llamar
          </a>

          <a
            className="btn btn-primary"
            href="https://wa.me/573132689693?text=Hola%20Helados%20N%C3%A1poles%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}