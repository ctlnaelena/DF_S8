import { useState, useEffect, useCallback } from 'react';
import { publicUrl } from '../utils/helpers';

// Retardo artificial para simular una API externa y poder ver
// el estado de "cargando" en pantalla (útil para las capturas).
const SIMULATED_DELAY_MS = 900;

/**
 * Hook personalizado que carga los productos desde un JSON local
 * (public/data/products.json) usando Fetch API dentro de useEffect.
 *
 * Gestiona tres estados con useState:
 *  - products: la lista de productos del catálogo
 *  - loading:  true mientras se están pidiendo los datos
 *  - error:    mensaje de error si la carga falla (o null)
 *
 * @returns {{ products: Array, loading: boolean, error: string|null, reload: Function }}
 */
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Cambiar este número fuerza a que el useEffect se vuelva a ejecutar (botón "Reintentar")
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // AbortController permite cancelar el fetch si el componente se desmonta
    const controller = new AbortController();
    let timeoutId;

    setLoading(true);
    setError(null);

    timeoutId = setTimeout(() => {
      fetch(publicUrl('data/products.json'), { signal: controller.signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error('El servidor respondió con un error: ' + response.status);
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data); // Actualizamos el estado con los datos cargados
        })
        .catch((err) => {
          if (err.name === 'AbortError') return; // Cancelado a propósito: no es un error
          console.error('No se pudieron cargar los productos:', err);
          setError('No pudimos cargar el catálogo en este momento.');
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, SIMULATED_DELAY_MS);

    // Función de limpieza: se ejecuta al desmontar o antes de re-ejecutar el efecto
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [reloadKey]);

  const reload = useCallback(() => setReloadKey((k) => k + 1), []);

  return { products, loading, error, reload };
}
