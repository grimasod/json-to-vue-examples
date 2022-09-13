import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9003
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'JsonToVueExamples',
      fileName: 'json-to-vue-examples'
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'json-to-vue'
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          'json-to-vue': 'JsonToVue'
        }
      }
    }
  }
})
