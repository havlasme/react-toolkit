import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export default defineConfig({
  root: 'app',
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  optimizeDeps: {
    exclude: ['@havlasme/react-toolkit'],
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/@havlasme/react-toolkit/**'],
    },
  },
})
