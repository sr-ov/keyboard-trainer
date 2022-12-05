import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	root: resolve(__dirname, 'src'),
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src', 'index.html'),
			},
			output: {
				dir: resolve(__dirname, 'dist'),
			},
		},
	},
	plugins: [],
})
