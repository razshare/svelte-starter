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
			$manifest: `${path.resolve(dir, './src/manifest.json')}`,
			$favicon: `${path.resolve(dir, './$assets/icon/favicon.ico')}`,
			$logo: `${path.resolve(dir, './$assets/imgs/logo.png')}`,
			$main: `${path.resolve(dir, './src/main.svelte')}`,
			$pages: `${path.resolve(dir, './src/lib/$pages')}`,
			$components: `${path.resolve(dir, './src/lib/$components')}`,
			$stores: `${path.resolve(dir, './src/lib/$stores')}`,
			$types: `${path.resolve(dir, './src/lib/$types')}`,
			$scripts: `${path.resolve(dir, './src/lib/$scripts')}`,
			$constants: `${path.resolve(dir, './src/lib/$constants')}`,
			$assets: `${path.resolve(dir, './$assets')}`,
		},
	},
	optimizeDeps: {
		exclude: ['svelte-routing'],
	},
	build: {
		outDir: 'dist',
		minify: true,
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
				secure: false,
				ws: true,
			},
		},
	},
})
