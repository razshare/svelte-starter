import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url'
const file = fileURLToPath(import.meta.url)
const dir = path.dirname(file).replace(/\\+/, '/')

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@components': `${path.resolve(dir, 'src/lib/@components')}`,
      '@stores': `${path.resolve(dir, 'src/lib/@stores')}`,
      '@types': `${path.resolve(dir, 'src/lib/@types')}`,
      '@scripts': `${path.resolve(dir, 'src/lib/@scripts')}`,
      '@constants': `${path.resolve(dir, 'src/lib/@constants.ts')}`,
      '@assets': `${path.resolve(dir, 'src/lib/@assets.ts')}`,
    },
  },
  optimizeDeps: {
    exclude: ['svelte-routing'],
  },
  build: {
    outDir: 'dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
