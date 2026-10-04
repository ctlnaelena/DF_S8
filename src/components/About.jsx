import { publicUrl } from '../utils/helpers';

/** Sección "Nosotros". */
function About() {
  return (
    <section id="nosotros">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-lg-1">
            <div className="about-image">
              <img src={publicUrl('img/AB22.png')} alt="Logo de Librería Ataraxia, letras A y B entrelazadas con una hoja" />
            </div>
          </div>
          <div className="col-lg-7">
            <p className="eyebrow">Nuestra historia</p>
            <h2>Una librería de grandes sueños y aun más grandes oportunidades.</h2>
            <p className="hero-text">
              Ataraxia nace del amor a los libros y de cómo ellos unieron a dos amigas para realizar este gran sueño.
            </p>
            <ul className="about-list">
              <li>Selección de cada título acorde a nuestra identidad y a quienes vienen a conocernos.</li>
              <li>Envíos a todo el país en 48 horas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
