import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'app',
  plugins: [react()],
  build:{
    outDir: '../api/dist'
  }
})
