import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		{
			// custom plugin
			name: 'treat-js-files-as-jsx',
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/)) return null

				// Use the exposed transform from vite, instead of directly
				// transforming with esbuild
				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic',
				})
			},
		},
		react(),
		tailwindcss(),
	],
	server: {
		watch: {
			usePolling: true,
		},
	},

	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},

	/*   test: {
    // Desabilitar el aislamiento de cada test puede mejorar la velocidad en proyectos basados en node
    isolate: false,
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.js' // assuming the test folder is in the root of our project
  } */
})
