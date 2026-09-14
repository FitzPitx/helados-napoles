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
              src="https://www.google.com/maps/embed?pb=!4v1789346169331!6m8!1m7!1s3HcnN2OC-Opfy_5HBy36BQ!2m2!1d4.619677082916618!2d-74.11805477905409!3f38.703312!4f0!5f0.7820865974627469"
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
