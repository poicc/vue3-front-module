import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 symbleId 格式
      symbolId: 'icon-[name]'
    })
  ],
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
        target: 'https://api.imooc-front.lgdsunday.club/api/',
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp("^/api"), "/"),
      },
      '/prod-api': {
        target: 'https://api.imooc-front.lgdsunday.club/prod-api/',
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp("^/prod-api"), "/"),
      }
    }
  }
})
