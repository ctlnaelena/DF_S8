/* Categorías del catálogo. Se definen una sola vez y se reutilizan
   en la barra de navegación y en los filtros del catálogo,
   evitando duplicar la lista en varios componentes. */
export const ALL_CATEGORIES = 'todos';

export const CATEGORIES = [
  { value: ALL_CATEGORIES, label: 'Todos' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Fantasía', label: 'Fantasía' },
  { value: 'Ficción', label: 'Ficción' },
];
