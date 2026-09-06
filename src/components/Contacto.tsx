export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="container contact-layout">
        <div className="reveal">
          <span className="eyebrow">Hablemos</span>
          <h2 className="section-title">Pide tu antojo en menos de un minuto.</h2>
          <p className="section-lead">
            Escríbenos por WhatsApp o llámanos directamente: te confirmamos disponibilidad,
            sabores y tiempo de entrega.
          </p>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="https://wa.me/573132689693?text=Hola%20Helados%20N%C3%A1poles%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <a className="btn btn-secondary" href="tel:+573132689693">
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="contact-panel reveal">
          <h3>Datos de contacto</h3>
          <div className="contact-list">
            <div className="contact-item">
              <span>Dirección</span>
              <strong>Calle 4ta 53F - 82, Barrio Colón, Puente Aranda, Bogotá.</strong>
              
            </div>
            <div className="contact-item">
              <span>WhatsApp</span>
              <strong>+57 313 268 9693</strong>
            </div>
            <div className="contact-item">
              <span>Horario</span>
              <strong>Todos los días, jornada continua.</strong>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8588133468074!2d-74.11716621852416!3d4.619265606012991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9951bef6a091%3A0xa3e5d5fcd33cf8e2!2sCl.%204a%20%2353c62%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1787190183399!5m2!1sen!2sco"
              title="Ubicación de Helados Nápoles en Google Maps"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
