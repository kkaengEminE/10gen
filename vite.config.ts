import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  base: '/10gen/',
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5174,
  },
});
