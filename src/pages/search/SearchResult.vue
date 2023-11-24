<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type UserProps from '@/interface/UserProps'

// 控制加载提示（进入当前搜索结果页时默认显示）
const loading = ref(true)

// 在组件挂载完毕后关闭控制加载提示
onMounted(() => {
  // 600ms 后关闭加载提示
  setTimeout(() => {
    loading.value = false
  }, 600)
})

// -------- 搜索结果展示区域--------
// 当前激活的标签 默认高亮 name="users" 标签
const activeTabName = ref('users')
// 点击 tab栏标签时触发
const onClickTab = (tabParamsObj: any) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  // console.log('SearchResult.vue 当前激活标签是:', activeTabName.value)
}

// 声明接收父组件传递过来的属性和方法（只能在模板语法中使用，props父向子传递数据是单向的，数据不能修改，只读）
const props = defineProps<UserProps>()
</script>

<template>
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
      <!-- 此处的 usersList(后) 数据就是SearchIndex.vue父组件传递过来的，在上面已经通过defineProps声明接收了，
          紧接着又把当前这个数据继续传递给 UserCard.vue子组件，且指定参数名为 usersList(前)  -->
      <UserCard :usersList="usersList"></UserCard>
    </van-tab>
    <!-- 综合  -->
    <van-tab title="综合" name="overall"> 综合内容 </van-tab>
    <!-- 队伍  -->
    <van-tab title="队伍" name="teams"> 队伍内容 </van-tab>
    <!-- 帖子文章  -->
    <van-tab title="帖子文章" name="articles"> 帖子内容 </van-tab>
  </van-tabs>
</template>

<style scoped></style>
