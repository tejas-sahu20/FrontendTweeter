import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/FrontendTweeter/",
  build: {
    rollupOptions: {
      external: ['@emotion/react']
    }
  }
});