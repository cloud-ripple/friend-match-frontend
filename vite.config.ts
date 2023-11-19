import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Vant UI 组件样式自动按需引入
// 就可以直接在模板中使用 Vant 组件了，unplugin-vue-components 会解析模板并自动注册对应的组件, @vant/auto-import-resolver 会自动引入对应的组件样式。
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173, //这里的ip和端口是前端项目的;下面为需要跨域访问后端项目
    open: false, //启动服务时浏览器自动打开
    // origin: 'http://127.0.0.1:8080', //定义开发调试阶段生成资源的 origin
    // cors: true,
    proxy: {
      '/api': {
        // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: 'http://localhost:8080', //这里填入你要请求的接口的前缀
        changeOrigin: true //是否跨域
      }
    }
  }
})
