import { CATEGORIES } from '../data/categories';

/**
 * Barra de navegación superior: logo, botón del carrito con contador
 * y menú con un dropdown de categorías que filtra el catálogo.
 */
function Navbar({ totalItems, selectedCategory, onCategoryChange }) {
  return (
    <nav className="navbar-ataraxia sticky-top">
      <div className="container">
        {/* Fila superior: logo + carrito (+ hamburguesa en móvil) */}
        <div className="navbar-top d-flex justify-content-between align-items-center">
          <a className="navbar-brand logo" href="#inicio">
            Ataraxia <span>Bookstore</span>
          </a>

          <div className="d-flex align-items-center gap-2">
            <button
              id="cartButton"
              className="btn btn-outline-light"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
            >
              🛒 Carrito
              {/* Renderizado condicional: el badge cambia de estilo si hay productos */}
              <span
                id="cartBadge"
                className={`badge rounded-pill ms-1 ${totalItems > 0 ? 'badge-active' : ''}`}
              >
                {totalItems}
              </span>
            </button>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
              aria-controls="navMenu"
              aria-expanded="false"
              aria-label="Abrir menú de navegación"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {/* Fila inferior: menú de navegación */}
        <div className="collapse" id="navMenu">
          <ul className="nav-menu-list list-unstyled d-flex flex-column flex-lg-row justify-content-lg-center align-items-center gap-lg-4 mb-0">
            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#catalogo"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catálogo
              </a>
              <ul className="dropdown-menu">
                {CATEGORIES.map((cat) => (
                  <li key={cat.value}>
                    <a
                      className={`dropdown-item ${selectedCategory === cat.value ? 'active' : ''}`}
                      href="#catalogo"
                      onClick={() => onCategoryChange(cat.value)}
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#club">Club de lectura</a></li>
            <li className="nav-item"><a className="nav-link" href="#resenas">Reseñas</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
