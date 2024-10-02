import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      '/api': 'http://20.172.32.213:8080',
      '/api/ws': {
        target: 'ws://20.172.32.213:8080',
        ws: true
      }
    },
  }
});