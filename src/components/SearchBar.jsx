import { useState, useEffect } from 'react';

/**
 * Buscador por título o autor.
 * Tiene su propio estado local (`text`) para lo que se va escribiendo;
 * la búsqueda real solo se aplica al enviar el formulario.
 */
function SearchBar({ value, onSearch }) {
  const [text, setText] = useState(value);

  // Si la búsqueda se limpia desde afuera (ej. al cambiar de categoría),
  // sincronizamos el input con ese valor.
  useEffect(() => {
    setText(value);
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    onSearch(text.trim());
  };

  const handleClear = () => {
    setText('');
    onSearch('');
  };

  return (
    <form className="row g-2 justify-content-center mb-3" role="search" onSubmit={handleSubmit}>
      <div className="col-10 col-sm-6 col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por título o autor..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Buscar por título o autor"
        />
      </div>
      <div className="col-auto d-flex gap-2">
        <button type="submit" className="btn btn-primary">Buscar</button>
        {/* El botón "Limpiar" solo aparece si hay una búsqueda activa */}
        {value && (
          <button type="button" className="btn btn-outline-light" onClick={handleClear}>
            Limpiar
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
