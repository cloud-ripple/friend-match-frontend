<script setup lang="ts">
// 搜索框当前输入值
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showNotify } from 'vant'

// 获取路由器
const router = useRouter()

// 搜索框当前输入值
const searchValue = ref('')
// 搜索触发，输入完关键字后，确认搜索时触发(包括回车)
const onSureSearch = (val: any) => {
  if (val.trim().length === 0) {
    // 警告通知
    showNotify({ type: 'warning', message: '搜索内容不能为空！', duration: 800 })
    return
  }
  console.log('搜索值', val)
  // 跳转到搜索结果页
  router.push('/result')
}

// 点击输入框右侧取消时触发
const onClickCancel = () => {
  // 先判断搜索框是否有内容
  if (searchValue.value === '') {
    // 如果为空，且点击了取消，则退出当前搜索页面，返回主页面
    router.push({
      name: 'home'
    })
    return
  }
  // 清空搜索框
  searchValue.value = ''
}
</script>

<template>
  <!-- 搜索框 -->
  <van-search
    v-model="searchValue"
    shape="round"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSureSearch(searchValue)"
  >
    <!--  搜索框右侧内容（自定义插槽）  -->
    <template #action>
      <span @click="onClickCancel">取消</span>
    </template>
  </van-search>
</template>

<style scoped></style>
