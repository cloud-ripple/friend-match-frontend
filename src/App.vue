<script setup lang="ts">
// 获取一个 Store 存储实例
import { useCurrentUserStore } from '@/stores/counter'
import { onMounted } from 'vue'

const currentUserStore = useCurrentUserStore()
onMounted(() => {
  // 调用函数，获取当前登录用户
  currentUserStore.getCurrentUser()
})
</script>

<template>
  <!--  一级路由出口-->
  <RouterView />
</template>

<style scoped></style>
