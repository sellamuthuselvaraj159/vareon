import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:              resolve(__dirname, 'index.html'),
        about:             resolve(__dirname, 'about.html'),
        services:          resolve(__dirname, 'services.html'),
        'chatbot-solutions': resolve(__dirname, 'chatbot-solutions.html'),
        contact:           resolve(__dirname, 'contact.html'),
        'privacy-policy':  resolve(__dirname, 'privacy-policy.html'),
        disclaimer:        resolve(__dirname, 'disclaimer.html'),
        '404':             resolve(__dirname, '404.html'),
      },
    },
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
