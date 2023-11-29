<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {  userLoginAPI } from '@/apis/userAPI'

onMounted(async () => {
  const res = await userLoginAPI('ripple2', '11111111')
  console.log('登录：', res)
})
</script>

<template>
  <!--  一级路由出口-->
  <RouterView />
</template>

<style scoped></style>
