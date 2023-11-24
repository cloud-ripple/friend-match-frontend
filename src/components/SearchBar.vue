<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { showNotify } from 'vant'

// 获取路由器
const router = useRouter()
// 获取路由
const route = useRoute()

// 1. 子组件向父组件传递数据，通过defineEmits在该组件身上注册指定的事件名，得到一个 emit
// 2. 当其它组件使用该子组件时，可以用 @事件名="callbackFunction" 直接在子组件标签中添加使用其身上的 ClickSearch事件，并给该事件绑定一个回调函数
// 3. 通过  emit('事件名', 参数数据) 方式触发(调用)其它组件中对应事件名所绑定的函数，并能接收到额外传入的参数(可多个)
const emit = defineEmits(['getUsersAPI', 'showSearchIndex']) //在当前组件身上注册声明自定义事件

// 搜索框当前输入值
const searchValue = ref('')

// 输入完关键字后，确认搜索时(包括回车)触发该回调
const onSureSearch = (val: string) => {
  // if (val.trim().length === 0) {
  //   // 警告通知
  //   showNotify({ type: 'warning', message: '搜索内容不能为空！', duration: 800 })
  //   return
  // }
  // 触发调用 其它组件在使用<SearchBar/>子组件时 所添加的ClickSearch事件绑定(指定)的函数，并给该函数传入指定的参数
  emit('getUsersAPI', searchValue.value.trim()) //简单点说 -> 此处调用接口获取用户数据

  // 确认搜索后跳转到搜索结果页
  // router.push('/result')
}

// 点击/进入搜索框时触发
const onClickInput = () => {
  // 通过路由path或者name来判断当前位于那个组件页面，如果是搜索结果页面(SearchResult.vue)在点击搜索框时
  // if (route.path === '/result') {
  //   router.push('/search') //直接进入搜索页
  // }

  // 1.如果当前显示的是搜索结果页区域时，此时用户又点击了搜索框，并且搜索框内没有内容，
  // 2.需要触发调用SearchIndex.vue 组件中showSearchIndex事件绑定的回调函数 showSearchIndex来显示默认的搜索页面
  // (达到页面跳转的效果，其作用原理是：通过 v-show v-if v-else-if 来动态展示对应的页面区域)
  // 3.从而实现在一个组件中(默认搜索主页SearchIndex.vue)动态切换展示 --空状态区域、默认搜索页区域、搜索结果展示区域-- 等3个部分的页面内容 )
  /*
    在 SearchIndex.vue 组件中：
   <!-- 搜索框，使用子组件身上注册的 ClickSearch 事件，并绑定一个回调函数，当子组件触发 emit('事件名',参数) 时，此处的回调函数会调用，并接收传入郭磊的参数 -->
   <SearchBar @getUsersAPI="getUsersList" @showSearchIndex="showSearchIndex"></SearchBar>
   */
  if (searchValue.value.trim() === '') {
    //触发调用该事件对应的回调函数，并传入一个 false 值
    emit('showSearchIndex')
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
