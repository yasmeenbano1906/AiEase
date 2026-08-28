import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/AiEase/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guide: resolve(__dirname, 'src/pages/guide.html'),
        tools: resolve(__dirname, 'src/pages/tools.html'),
        resources: resolve(__dirname, 'src/pages/resources.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
      },
    },
  },
})