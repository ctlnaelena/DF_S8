/* Punto de entrada de la aplicación React */
import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap: CSS + JS (el bundle incluye Popper, necesario para
// dropdown, collapse y offcanvas que usamos con atributos data-bs-*)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Estilos propios (después de Bootstrap para poder sobreescribirlo)
import './styles/styles.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
