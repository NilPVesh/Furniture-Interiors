import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, 'src')],
        additionalData: (content, filepath) => {
          const normalized = String(filepath).replace(/\\/g, '/')
          if (
            normalized.includes('/styles/abstracts/') ||
            normalized.includes('/styles/base/') ||
            normalized.includes('/styles/themes/') ||
            normalized.includes('/styles/utilities/') ||
            normalized.endsWith('/styles/main.scss')
          ) {
            return content
          }
          return `@use "styles/abstracts" as *;\n${content}`
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
