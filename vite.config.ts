import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/variables.scss";'
      }
    }
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude any files or directories that match the pattern
        return id.includes('src/api');
      }
    }
  }
});
