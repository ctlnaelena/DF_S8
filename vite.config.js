import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' genera rutas relativas en el build, así la app funciona
// en GitHub Pages (https://usuario.github.io/nombre-repo/) sin importar
// cómo se llame el repositorio.
export default defineConfig({
  plugins: [react()],
  base: './',
});
