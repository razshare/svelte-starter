import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@scripts': `${path.resolve(__dirname, 'src/scripts.ts')}`,
      '@components': `${path.resolve(__dirname, 'src/components.ts')}`,
      '@types': `${path.resolve(__dirname, 'src/types.d.ts')}`,
      '@stores': `${path.resolve(__dirname, 'src/stores.ts')}`,
      '@constants': `${path.resolve(__dirname, 'src/constants.ts')}`
    },
  },
})
