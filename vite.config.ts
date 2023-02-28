import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8086,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://oat.365you.com/:90/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
