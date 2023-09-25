import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],

//  server
  server: {
    host: true,
    port: 3000
  }
})
