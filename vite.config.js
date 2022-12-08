import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理配置
  server: {
    proxy: {
      '/api': {
        target: 'https://mock.apifox.cn/m1/2058081-0-default/',
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp("^/api"), "/"),
      }
    }
  }
})
