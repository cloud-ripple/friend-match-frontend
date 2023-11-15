import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import Home from '@/pages/home/Index.vue'
import User from "@/pages/user/Index.vue"
import Team from "@/pages/team/Index.vue"
import Setting from "@/pages/setting/Index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由
    {
      path: '/',
      component: BasicLayout,
      // 二级路由
      children: [
        {
          path: '', //当访问路径默认为空时，该组件页面也会展示
          name: 'home',
          component: Home
        },
        {
          path: 'team', //当访问路径默认为空时，该组件页面也会展示
          name: 'duiwu',
          component: Team
        },
        {
          path: 'user', //当访问路径默认为空时，该组件页面也会展示
          name: 'geren',
          component: User
        },
        {
          path: 'setting', //当访问路径默认为空时，该组件页面也会展示
          name: 'shezhi',
          component: Setting
        },
      ]
    }
  ]
})

export default router
