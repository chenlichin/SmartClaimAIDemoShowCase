import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './', // 保持相對路徑
  build: {
    // 確保資源都被內聯
    assetsInlineLimit: 100000000, 
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false, // 不拆分 CSS
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // 內聯動態引入
      },
    },
  },
})