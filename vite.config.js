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
      '@scripts': `${path.resolve(dir, 'src/scripts.ts')}`,
      '@components': `${path.resolve(dir, 'src/components.ts')}`,
      '@types': `${path.resolve(dir, 'src/types.d.ts')}`,
      '@stores': `${path.resolve(dir, 'src/stores.ts')}`,
      '@constants': `${path.resolve(dir, 'src/constants.ts')}`,
      '@assets': `${path.resolve(dir, 'src/assets.ts')}`
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
