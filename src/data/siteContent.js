/* Contenido fijo del sitio separado del marcado.
   Así los componentes solo recorren arreglos con .map()
   en vez de repetir el mismo HTML varias veces. */

export const CLUB_SESSIONS = [
  { id: 1, title: 'Una corte de llamas plateadas // Discusión', detail: '30 de agosto · Sala principal, 17:30 h' },
  { id: 2, title: 'Actividades de recomendación', detail: '9 de septiembre · Patio interior, 10:30 h' },
  { id: 3, title: 'Feria bookish', detail: '13 de septiembre · Sala principal, 10:00 h' },
];

export const REVIEWS = [
  { id: 1, text: 'Llegué buscando un regalo y salí con cuatro libros para mí. Así es siempre.', author: 'Francisca T.' },
  { id: 2, text: 'El club de lectura me devolvió el hábito de leer que había perdido hace años.', author: 'Karla M.' },
  { id: 3, text: 'Las recomendaciones nunca fallan. Conocen su catálogo de memoria.', author: 'Loreto S.' },
];
