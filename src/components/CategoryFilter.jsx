import { CATEGORIES } from '../data/categories';

/**
 * Botones de filtro por categoría. El botón activo se marca
 * con la clase "active" según el estado recibido por props.
 */
function CategoryFilter({ selected, onChange }) {
  return (
    <div className="catalog-toolbar d-flex flex-wrap justify-content-center gap-2 mb-3">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          type="button"
          className={`btn btn-sm ${selected === cat.value ? 'active' : ''}`}
          aria-pressed={selected === cat.value}
          onClick={() => onChange(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
