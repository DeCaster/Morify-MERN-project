import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100', // The target should point to the base URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites the URL by removing '/api'
      },
    },
  },
});
