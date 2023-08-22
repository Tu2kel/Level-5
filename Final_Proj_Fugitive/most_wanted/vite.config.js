import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/fugitives": {
        target: "http://localhost:7222",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
