import { useState, useEffect } from 'react';
import { formatPrice } from '../utils/helpers';
import BookImage from './BookImage';

/**
 * Tarjeta de un libro del catálogo.
 *
 * Renderizado condicional del botón:
 *  - No está en el carrito  → "Agregar al carrito" (estilo principal)
 *  - Recién agregado        → "¡Agregado!" por un momento (feedback)
 *  - Ya está en el carrito  → "✓ En el carrito (n)" (estilo alternativo)
 */
function ProductCard({ product, quantityInCart, onAddToCart }) {
  // Estado local: muestra el mensaje "¡Agregado!" durante un instante
  const [justAdded, setJustAdded] = useState(false);

  // Efecto: después de 1,2 s el botón vuelve a su texto normal
  useEffect(() => {
    if (!justAdded) return;
    const timer = setTimeout(() => setJustAdded(false), 1200);
    return () => clearTimeout(timer); // limpieza si se desmonta antes
  }, [justAdded]);

  const isInCart = quantityInCart > 0;

  const handleClick = () => {
    onAddToCart(product);
    setJustAdded(true);
  };

  // Texto y estilo del botón según el estado
  let buttonText = 'Agregar al carrito';
  let buttonClass = 'btn-primary';
  if (justAdded) {
    buttonText = '¡Agregado!';
    buttonClass = 'btn-success-ataraxia';
  } else if (isInCart) {
    buttonText = `✓ En el carrito (${quantityInCart})`;
    buttonClass = 'btn-in-cart';
  }

  return (
    <article className={`book-card card h-100 border-0 ${isInCart ? 'book-card--in-cart' : ''}`}>
      <div className="book-cover">
        <BookImage src={product.image} title={product.title} className="card-img-top" />
        <span className="cover-tag">{product.category}</span>
        {/* Cinta visible solo cuando el libro ya está en el carrito */}
        {isInCart && <span className="in-cart-ribbon">En tu carrito</span>}
      </div>

      <div className="card-body d-flex flex-column">
        <h3 className="h6 mb-1">{product.title}</h3>
        <p className="book-author mb-2">{product.author}</p>
        <p className="book-desc small flex-grow-1">{product.description}</p>

        <div className="text-center mt-2">
          <span className="price d-block mb-2">{formatPrice(product.price)}</span>
          <button
            type="button"
            className={`btn btn-sm w-100 add-to-cart-btn ${buttonClass}`}
            onClick={handleClick}
            title={isInCart ? 'Agregar otra unidad' : 'Agregar al carrito'}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
