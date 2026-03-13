import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes all asset paths relative, which works for both:
//   - GitHub Pages project pages (username.github.io/repo-name/)
//   - Custom domains (yourdomain.com/)
// Change to '/' only if you run into routing issues with a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
});
