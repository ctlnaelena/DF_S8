/** Pie de página. */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <p className="logo footer-logo mb-2">Ataraxia <span>Bookstore</span></p>
            <p>Venta de libros y realización de actividades.<br />Librería independiente.</p>
          </div>
          <div className="col-md-4">
            <h4>Navegación</h4>
            <ul className="list-unstyled">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>
        <hr className="my-4 footer-divider" />
        <p className="text-center small mb-0">&copy; {year} Ataraxia Bookstore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
