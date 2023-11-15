import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Vant UI 组件样式自动按需引入
// 就可以直接在模板中使用 Vant 组件了，unplugin-vue-components 会解析模板并自动注册对应的组件, @vant/auto-import-resolver 会自动引入对应的组件样式。
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from "@vant/auto-import-resolver";

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
  }
})
