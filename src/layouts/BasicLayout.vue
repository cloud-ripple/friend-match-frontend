<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const onClickLeft = () => history.back()
const onClickRight = () => {
  router.push({
    name: 'sousuo'
  })
}
// 默认底部 tab 栏高亮标签索引
const activeName = ref(0)
// 顶部导航栏中间标题
const navTitle = ref('主页')
// 切换底部tab栏标签时触发，更换当前激活的标签索引值name

const tabChange = (index: any) => {
  // console.log('index = ', index)
  activeName.value = index
  // 切换标签时，修改对应导航栏标题
  // console.log('当前激活高亮标签：', activeName.value)
  switch (activeName.value) {
    case 1:
      navTitle.value = '队伍'
      break
    case 2:
      navTitle.value = '创作'
      break
    case 3:
      navTitle.value = '消息'
      break
    case 4:
      navTitle.value = '个人中心'
      break
    default:
      navTitle.value = '主页'
      break
  }

}

// 图片
const icon = {
  active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
}

const route = useRoute()
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
  <van-tabbar
    v-model="activeName"
    inactive-color="grey"
    @change="tabChange"
    placeholder
    safe-area-inset-bottom
  >
    <van-tabbar-item icon="home-o" badge="3" :to="{ path: '/' }"> 主页 </van-tabbar-item>
    <van-tabbar-item icon="flag-o" dot :to="{ path: '/team' }">队伍</van-tabbar-item>
    <van-tabbar-item icon="add" :to="{ path: '/create' }">创作</van-tabbar-item>
    <van-tabbar-item icon="chat-o" :to="{ path: '/message' }">
      <van-badge :content="130" max="99" :show-zero="false" :offset="[2, -17]">消息</van-badge>
    </van-tabbar-item>
    <van-tabbar-item icon="manager-o" :to="{ path: '/user' }">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped></style>
