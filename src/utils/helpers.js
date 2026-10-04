/**
 * Formatea un número como precio en pesos chilenos.
 * Ej: 25900 -> "$25.900"
 * @param {number} value
 * @returns {string}
 */
export function formatPrice(value) {
  return '$' + value.toLocaleString('es-CL');
}

/**
 * Construye una ruta a un archivo de /public respetando la "base"
 * configurada en Vite (necesario para que funcione en gh-pages).
 * @param {string} path - ruta relativa, ej: "img/logo.png"
 */
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}
