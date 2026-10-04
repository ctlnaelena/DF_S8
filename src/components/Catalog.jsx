import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';

/**
 * Sección del catálogo. Decide qué mostrar según el estado de la carga:
 * cargando → error → sin resultados → grilla de productos.
 */
function Catalog({
  products,
  loading,
  error,
  onRetry,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearch,
  onAddToCart,
  getQuantity,
}) {
  /** Elige el contenido según el estado (renderizado condicional). */
  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center hero-text mx-auto py-4" role="status">
          <div className="spinner-border spinner-ataraxia mb-3" aria-hidden="true"></div>
          <p>Cargando productos...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-warning text-center" role="alert">
          <p className="mb-2">{error} Por favor, inténtalo nuevamente.</p>
          <button type="button" className="btn btn-sm btn-dark" onClick={onRetry}>
            Reintentar
          </button>
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <p className="text-center text-white-50">
          No encontramos libros con ese criterio
          {searchQuery && <> para “<strong>{searchQuery}</strong>”</>}.
        </p>
      );
    }

    return (
      <div className="row g-3 g-md-4">
        {products.map((product) => (
          <div className="col-6 col-md-4" key={product.id}>
            <ProductCard
              product={product}
              quantityInCart={getQuantity(product.id)}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="catalogo">
      <div className="container">
        <h2 className="text-center mb-2">Catálogo destacado</h2>
        <p className="text-center hero-text mb-4 mx-auto">Busca por título o autor, o filtra por categoría.</p>

        <SearchBar value={searchQuery} onSearch={onSearch} />
        <CategoryFilter selected={selectedCategory} onChange={onCategoryChange} />

        {/* Contador de resultados: solo aparece cuando ya hay datos */}
        {!loading && !error && (
          <p className="text-center small text-white-50 mb-4">
            Mostrando {products.length} {products.length === 1 ? 'libro' : 'libros'}
          </p>
        )}

        {renderContent()}
      </div>
    </section>
  );
}

export default Catalog;
