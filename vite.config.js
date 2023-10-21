import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import { fileURLToPath } from 'url'
const file = fileURLToPath(import.meta.url)
const dir = path.dirname(file).replace(/\\+/, '/')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      ':pages': `${path.resolve(dir, './src/lib/:pages')}`,
      ':components': `${path.resolve(dir, './src/lib/:components')}`,
      ':stores': `${path.resolve(dir, './src/lib/:stores')}`,
      ':scripts': `${path.resolve(dir, './src/lib/:scripts')}`,
      ':assets': `${path.resolve(dir, './:assets')}`,
      ':constants': `${path.resolve(dir, './src/lib/:constants.js')}`,
      ':types': `${path.resolve(dir, './src/lib/:types.js')}`,
      ':style': `${path.resolve(dir, './src/lib/:style.scss')}`,
      ':main': `${path.resolve(dir, './src/:main.svelte')}`,
    },
  },
  optimizeDeps: {
    exclude: ['svelte-routing'],
  },
  build: {
    sourcemap: true,
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
  server: {
    https: false,
    host: '::',
    proxy: {
      '^/api/.*': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: false,
        rewrite: function replace(path) {
          return path.replace(/^\/api/, '')
        },
        secure: false,
        ws: true,
      },
    },
  },
})
