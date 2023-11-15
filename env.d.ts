/// <reference types="vite/client" />
/**
 webstorm vue3+ts报错:Cannot find module ‘@/views/xxx.vue‘ or its corresponding type declarations
 意思是说找不到对应的模块“@/views/xxx.vue”或其相应的类型声明
 因为ts只能解析 .ts 文件，无法解析 .vue文件
 解决方法很简单，一开始的时候env.d.ts是空文件，我们可以在项目的env.d.ts中引入如下代码：
 */
declare module '*.vue' {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}