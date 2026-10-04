import { useState } from 'react';

/**
 * Imagen de portada reutilizable (catálogo y carrito).
 * Si el enlace de la imagen falla (404, sitio caído, bloqueo),
 * se muestra una portada de respaldo con el título del libro
 * en vez de un ícono de imagen rota: renderizado condicional.
 */
function BookImage({ src, title, className = '' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`book-image-fallback ${className}`} role="img" aria-label={`Portada no disponible de ${title}`}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Portada de ${title}`}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

export default BookImage;
