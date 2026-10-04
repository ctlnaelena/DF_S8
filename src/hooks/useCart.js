import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ataraxia-cart';

/** Lee el carrito guardado en el navegador (si existe). */
function loadSavedCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return []; // Modo privado o datos corruptos: partimos con el carrito vacío
  }
}

/**
 * Hook personalizado con toda la lógica del carrito de compras.
 * El estado `cart` es un arreglo de { ...producto, quantity }.
 *
 * Las actualizaciones son inmutables (siempre se crea un arreglo nuevo),
 * que es lo que React necesita para detectar el cambio y volver a renderizar.
 */
export function useCart() {
  // Inicialización "lazy": la función solo se ejecuta en el primer render
  const [cart, setCart] = useState(loadSavedCart);

  // Efecto secundario: cada vez que cambia el carrito, se guarda en localStorage
  // para que no se pierda al recargar la página.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* Si el navegador no permite guardar, la app sigue funcionando igual */
    }
  }, [cart]);

  /** Agrega un producto (o suma una unidad si ya estaba). */
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /** Quita una unidad (o elimina el producto si queda en 0). */
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  /** Elimina un producto completo del carrito. */
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  /** Vacía el carrito. */
  const clearCart = () => setCart([]);

  /** Devuelve cuántas unidades de un producto hay en el carrito (0 si no está). */
  const getQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity ?? 0;

  // Valores derivados: se calculan a partir del estado, no se guardan aparte
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getQuantity,
  };
}
