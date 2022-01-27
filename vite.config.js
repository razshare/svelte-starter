import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url';
const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file).replace(/\\+/, '/');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@lib': `${path.resolve(dir, 'src/lib')}`
    },
  },
  optimizeDeps: {
    exclude: ['svelte-routing'],
  },
  build:{
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
})