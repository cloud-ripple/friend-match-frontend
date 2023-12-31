import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import HomeIndex from '@/pages/home/Index.vue'
import UserIndex from '@/pages/user/Index.vue'
import TeamIndex from '@/pages/team/Index.vue'
import MessageIndex from '@/pages/message/Index.vue'
import SearchIndex from '@/pages/search/SearchIndex.vue'
import SearchResult from '@/pages/search/SearchResult.vue'
import CreateIndex from '@/pages/create/Index.vue'
import MessageChat from '@/pages/message/MessageChat.vue'
import UserEdit from '@/pages/user/UserEdit.vue'
import TeamInfo from '@/pages/team/TeamInfo.vue'
import FriendApply from '@/pages/message/FriendApply.vue'
import UserLogin from '@/pages/user/UserLogin.vue'
import UserRegister from '@/pages/user/UserRegister.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 一级路由
    {
      path: '/', //默认通用布局页
      component: BasicLayout,
      // 二级路由
      children: [
        {
          path: '', //当访问路径默认为空时，该组件页面也会展示
          name: 'home', //主页
          component: HomeIndex
        },
        {
          path: 'team',
          name: 'duiwu', //队伍页
          component: TeamIndex
        },
        {
          path: 'teamInfo',
          name: 'duiwuInfo', //队伍详情页
          component: TeamInfo
        },
        {
          path: 'create',
          name: 'chuangzuo', //创作页
          component: CreateIndex
        },
        {
          path: 'message',
          name: 'xiaoxi', //消息页
          component: MessageIndex
        },
        {
          path: 'user',
          name: 'geren', //个人中心页
          component: UserIndex
        },
        {
          path: 'edit',
          name: 'bianji', //个人资料编辑页
          component: UserEdit
        },
        {
          path: 'friend',
          name: 'haoyou', //好友申请页
          component: FriendApply
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
    },
    {
      path: '/chat',
      name: 'liaotian', //用户聊天页
      component: MessageChat
    },
    {
      path: '/login',
      name: 'denglu', //登录页
      component: UserLogin
    },
    {
      path: '/register',
      name: 'zhuce', //注册页
      component: UserRegister
    }
  ]
})
