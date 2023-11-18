<script setup lang="ts">
// 控制提示
import { onBeforeMount, ref } from 'vue'
import UserCard from '@/components/UserCard.vue'

// 控制加载提示是否显示
const loading = ref(true)

// 在组件挂载之前加载提示
onBeforeMount(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

// -------- 搜索结果展示区域--------
// 当前激活的标签 默认高亮 name="users" 标签
const activeTabName = ref('users')
// 点击 tab栏标签时触发
const onClickTab = (tabParamsObj: any) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  console.log('主页-当前激活标签是:', activeTabName.value)
}
</script>

<template>
  <!-- 搜索框 -->
  <SearchBar></SearchBar>
  <!-- 分割线 -->
  <van-divider :hairline="true" :style="{ color: '#151313', borderColor: '#a29999' }" />
  <!-- 加载中提示 -->
  <van-loading vertical v-if="loading">
    <template #icon>
      <van-icon name="star-o" size="40" />
    </template>
    数据加载中...
  </van-loading>
  <!-- 搜索结果展示区域 -->
  <van-tabs v-model:active="activeTabName" type="line" @click-tab="onClickTab">
    <!-- 用户  -->
    <van-tab title="用户" name="users">
      <UserCard></UserCard>

    </van-tab>
    <!-- 综合  -->
    <van-tab title="综合" name="overall">
      综合内容
    </van-tab>
    <!-- 队伍  -->
    <van-tab title="队伍" name="teams">
      队伍内容
    </van-tab>
    <!-- 帖子文章  -->
    <van-tab title="帖子文章" name="articles">
      帖子内容
    </van-tab>
  </van-tabs>
</template>

<style scoped></style>
