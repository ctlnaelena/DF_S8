import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { ALL_CATEGORIES } from './data/categories';

import Navbar from './components/Navbar';
import CartOffcanvas from './components/CartOffcanvas';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import ReadingClub from './components/ReadingClub';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente raíz. Aquí "viven" los estados que comparten varios
 * componentes (productos, carrito, categoría activa y búsqueda),
 * y se pasan hacia abajo mediante props.
 */
function App() {
  // Productos cargados con useEffect dentro del hook
  const { products, loading, error, reload } = useProducts();

  // Carrito de compras (estado + acciones)
  const cart = useCart();

  // Filtros del catálogo: los usa tanto la navbar como el catálogo
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');

  // Lista filtrada (valor derivado: se recalcula en cada render)
  const visibleProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === ALL_CATEGORIES || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      q === '' || p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  /** Cambia la categoría y limpia la búsqueda para no combinar filtros "invisibles". */
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  return (
    <>
      <Navbar
        totalItems={cart.totalItems}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <CartOffcanvas cart={cart} />

      <main>
        <Hero />
        <About />
        <Catalog
          products={visibleProducts}
          loading={loading}
          error={error}
          onRetry={reload}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          onAddToCart={cart.addToCart}
          getQuantity={cart.getQuantity}
        />
        <ReadingClub />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
