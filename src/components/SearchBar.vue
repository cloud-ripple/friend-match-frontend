<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { showNotify } from 'vant'

// 获取路由器
const router = useRouter()
// 获取路由
const route = useRoute()

// 1. 子组件向父组件传递数据，通过defineEmits在该组件身上注册指定的事件名，得到一个 emit
// 2. 当其它组件使用该子组件时，可以用 @事件名="callbackFunction" 直接在子组件标签中添加使用其身上的 ClickSearch事件，并给该事件绑定一个回调函数
// 3. 通过  emit('事件名', 参数数据) 方式触发(调用)其它组件中对应事件名所绑定的函数，并能接收到额外传入的参数(可多个)
const emit = defineEmits(['getUsersAPI']) //在当前组件身上注册声明一个自定义事件

// 搜索框当前输入值
const searchValue = ref('')

// 输入完关键字后，确认搜索时(包括回车)触发该回调
const onSureSearch = (val: string) => {
  if (val.trim().length === 0) {
    // 警告通知
    showNotify({ type: 'warning', message: '搜索内容不能为空！', duration: 800 })
    return
  }
  console.log('SearchBar组件-搜索值 =', val)
  // 触发调用 其它组件在使用<SearchBar/>子组件时 所添加的ClickSearch事件绑定(指定)的函数，并给该函数传入指定的参数
  emit('getUsersAPI', searchValue.value.trim()) //简单点说 -> 此处调用接口获取用户数据

  // 确认搜索后跳转到搜索结果页
  router.push('/result')
}

// 点击搜索框时触发
const onClickInput = () => {
  // 通过路由path或者name来判断当前位于那个组件页面，如果是搜索结果页面(SearchResult.vue)在点击搜索框时
  // 让路由直接跳转到搜索主页(SearchIndex.vue)
  if (route.path === '/result') {
    router.push('/search') //直接进入搜索页
  }
}

// 点击输入框右侧取消时触发
const onClickCancel = () => {
  // 先判断搜索框是否有内容
  if (searchValue.value.trim() === '') {
    // 如果为空，且点击了取消，则退出当前搜索页面，返回主页面
    router.push({
      name: 'home'
    })
    return
  }
  // 清空搜索框
  searchValue.value = ''
}

// 当前组件挂载完毕之后调用
onMounted(() => {
  // todo 可以加载搜索历史、热搜推荐等数据的逻辑
})
</script>

<template>
  <!-- 搜索框 -->
  <van-search
    v-model="searchValue"
    shape="round"
    show-action
    autofocus
    placeholder="请输入搜索关键词"
    @search="onSureSearch(searchValue.trim())"
    @click-input="onClickInput"
  >
    <!--  搜索框右侧内容（自定义插槽）  -->
    <template #action>
      <span @click="onClickCancel">取消</span>
    </template>
  </van-search>
</template>

<style scoped></style>
