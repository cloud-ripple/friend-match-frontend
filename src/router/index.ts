import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import Home from '@/pages/home/Index.vue'
import User from '@/pages/user/Index.vue'
import Team from '@/pages/team/Index.vue'
import Message from '@/pages/message/Index.vue'
import SearchIndex from '@/pages/search/Index.vue'
import SearchResult from '@/pages/search/SearchResult.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由
    {
      path: '/', //默认页
      component: BasicLayout,
      // 二级路由
      children: [
        {
          path: '', //当访问路径默认为空时，该组件页面也会展示
          name: 'home', //主页
          component: Home
        },
        {
          path: 'team',
          name: 'duiwu', //队伍页
          component: Team
        },
        {
          path: 'message',
          name: 'xiaoxi', //消息页
          component: Message
        },
        {
          path: 'user',
          name: 'geren', //个人中心页
          component: User
        }
      ]
    },
    {
      path: '/search',
      name: 'sousuo', //搜索主页
      component: SearchIndex
    },
    {
      path: '/result',
      name: 'jieguo', //搜索结果页
      component: SearchResult
    }
  ]
})
