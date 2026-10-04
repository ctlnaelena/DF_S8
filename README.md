# Ataraxia Bookstore — React

eCommerce de la librería Ataraxia migrado a **React + Vite**, usando `useState`, `useEffect` y renderizado condicional.

## Estructura del proyecto

```
ataraxia-react/
├── public/
│   ├── data/products.json      ← "API" local que se carga con fetch
│   └── img/                    ← logobook.png y AB22.png
├── src/
│   ├── components/             ← un componente por sección/elemento
│   │   ├── Navbar.jsx           CartOffcanvas.jsx   CartItem.jsx
│   │   ├── Hero.jsx             About.jsx           Catalog.jsx
│   │   ├── SearchBar.jsx        CategoryFilter.jsx  ProductCard.jsx
│   │   └── ReadingClub.jsx      Reviews.jsx         Contact.jsx   Footer.jsx
│   ├── hooks/
│   │   ├── useProducts.js      ← useEffect + fetch: carga de productos
│   │   └── useCart.js          ← lógica del carrito + persistencia
│   ├── data/                   ← categorías y contenido fijo (sin duplicar)
│   ├── utils/helpers.js        ← formatPrice, publicUrl
│   ├── styles/styles.css
│   ├── App.jsx                 ← estados compartidos
│   └── main.jsx                ← punto de entrada
├── index.html
└── vite.config.js
```

## Requisitos de la pauta y dónde se cumplen

| Requisito | Implementación |
|---|---|
| **useState** – lista de productos | `useProducts.js` (`products`, `loading`, `error`) |
| **useState** – carrito | `useCart.js` (`cart`, agregar / restar / eliminar / vaciar) |
| **useState** – elemento interactivo | `ProductCard.jsx`: botón "Agregar al carrito" → "¡Agregado!" → "✓ En el carrito (n)" |
| **useState** – otros | filtros y búsqueda (`App.jsx`), input (`SearchBar.jsx`), formulario (`Contact.jsx`) |
| **useEffect** – cargar datos | `useProducts.js`: `fetch('data/products.json')` con retardo simulado, limpieza con `AbortController` y botón "Reintentar" |
| **useEffect** – actualizar estado | `setProducts(data)` al recibir los datos; guardado del carrito en `localStorage`; temporizador del "¡Agregado!" |
| **Renderizado condicional** | carga (spinner) / error / sin resultados / grilla; carrito vacío vs. listado; botón y cinta "En tu carrito"; badge activo; botón "Limpiar" búsqueda; confirmación del formulario |
| **Contador del carrito** | badge de la navbar (`totalItems`) |

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).
