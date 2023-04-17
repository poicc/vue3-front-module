import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

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
  build: {
    rollupOptions,
    minify: `terser`, // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: false,
    lib: {
      entry: "./src/libs/index.js",
      name: "POICCUI",
      fileName: "poicc-ui",
      formats: ["esm", "umd", "iife"], // 导出模块类型
    },
    outDir: "./dist",
  },
  // 代理配置
  server: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club/api/',
        // target: 'https://mock.apifox.cn/m1/2058081-0-default',
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp("^/api"), "/"),
      },
      '/prod-api': {
        target: 'https://api.imooc-front.lgdsunday.club/api/',
        changeOrigin: true,
        rewrite: (path) =>
            path.replace(new RegExp("^/prod-api"), "/"),
      }
    }
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
})
