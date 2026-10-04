import { publicUrl } from '../utils/helpers';

/** Portada principal del sitio. */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <p className="eyebrow hero-eyebrow">Somos ese sueño que se hizo realidad</p>
          <h1 className="hero-heading">Cada libro es una nueva oportunidad</h1>
          <div className="hero-visual">
            <img
              src={publicUrl('img/logobook.png')}
              alt="Ilustración de un libro abierto del que crecen hojas y brillan estrellas"
              className="hero-logo"
            />
          </div>
          <p className="hero-text">
            Vendemos libros que siempre quisimos leer, y otros que no sabíamos que necesitábamos,
            y siempre tenemos una recomendación lista para ti.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">Explorar catálogo</a>
            <a href="#club" className="btn btn-outline-light">Club de lectura</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
