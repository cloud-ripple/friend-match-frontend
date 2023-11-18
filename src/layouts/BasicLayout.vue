<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()
const onClickLeft = () => history.back()
const onClickRight = () => {
  router.push({
    name: 'sousuo'
  })
}
// 默认底部 tab 栏高亮标签索引
const active = ref('home')
// 顶部导航栏中间标题
const navTitle = ref('伙伴匹配')
// 切换底部tab栏标签时触发，更换当前激活的标签索引值name
const tabChange = (name: string) => {
  // 切换标签时，修改对应导航栏标题
  // console.log(name)
  switch (name) {
    case 'team':
      navTitle.value = '队伍'
      break
    case 'user':
      navTitle.value = '个人中心'
      break
    case 'message':
      navTitle.value = '消息会话'
      break
    default:
      navTitle.value = '伙伴匹配'
  }
}

// 图片
const icon = {
  active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
}
</script>

<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar
    :title="navTitle"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <!--导航栏右侧-内容插槽 -->
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <!--  中间区域- 二级路由出口 -->
  <div id="content">
    <RouterView />
  </div>

  <!-- 底部tab栏 -->
  <van-tabbar v-model="active" @change="tabChange">
    <van-tabbar-item icon="home-o" name="home" badge="3" :to="{ name: 'home' }">
      主页
    </van-tabbar-item>
    <van-tabbar-item icon="flag-o" name="team" dot :to="{ name: 'duiwu' }">队伍</van-tabbar-item>
    <van-tabbar-item icon="add" name="create">创作</van-tabbar-item>
    <van-tabbar-item icon="chat-o" name="message" :to="{ name: 'xiaoxi' }">
      <van-badge :content="130" max="99" :show-zero="false" :offset="[2, -17]">消息</van-badge>
    </van-tabbar-item>
    <van-tabbar-item icon="manager-o" name="user" :to="{ name: 'geren' }">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>