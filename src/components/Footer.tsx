
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-contact">
            <span>
              ¿Prefieres escribirnos por correo? Envía tu pedido a{" "}
              <a href="mailto:heladosnapoles@heladosnapoles.com">
                heladosnapoles@heladosnapoles.com
              </a>
            </span>
          </div>

          <div className="footer-socials">
            <a
              className="footer-social-link"
              href="https://www.instagram.com/helados_napoles_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Helados Nápoles"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://wa.me/573132689693?text=Hola%20Helados%20N%C3%A1poles%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Helados Nápoles"
            >
              <svg viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.6.8 5 2.1 7L3 29l6.6-2.4c1.9 1 4.1 1.6 6.4 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1.4 1.4-3.8-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.7 0-5.8 4.7-10.5 10.5-10.5S26.5 9.8 26.5 15.6 21.8 25.8 16 25.8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Helados Nápoles · Tradición familiar en Bogotá desde el 2000.</span>
          <span>Hecho con sabor artesanal.</span>
        </div>
      </div>
    </footer>
  );
}