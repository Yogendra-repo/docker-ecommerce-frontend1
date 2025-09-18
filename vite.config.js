import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // or 9090 if you prefer
  },
  base: '/ecommerce/', // <- this is the key
})
