<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import { searchUsersByTagsAPI } from '@/apis/userAPI'
import SearchResult from '@/pages/search/SearchResult.vue'
import { getChildTagsAPI, getParentTagsAPI } from '@/apis/tagAPI'
import { showNotify } from 'vant'
import type { Tag } from '@/models/tag'

//  -------搜索历史区域---------

// -------已选标签展示区域-----------

// 已选标签列表(里面存放标签名字符串)
const selectedTagsList: any = ref([])

// 点击关闭标签时触发
const onCloseTag = (tagName: any) => {
  // console.log(`当前要关闭的标签名：`, tagName)
  // 对当前要关闭的标签，通过名字在已选标签列表中进行比对，过滤出不需要关闭的标签，重新赋值数据渲染
  selectedTagsList.value = selectedTagsList.value.filter((item: any) => {
    return item !== tagName
  })
}

// ------标签分类区域-----
// 当前激活的tab标签
const activeTabName = ref('热门')

// 点击每个 tab 标签栏触发(会自动改变当前激活的tab标签名)
const onClickTab = (tabParamsObj: any) => {
  //console.log(tabParamsObj) //接收到的参数对象
  console.log(`搜索页-当前激活标签是${activeTabName.value}`)
  // 在所有子标签的基础上，过滤出当前分类下的子标签，重新赋值用于渲染
  categoryTagsList.value = allChildTags.value.filter((item: Tag) => {
    return item.category === activeTabName.value
  })
}

// 所有父标签列表（所有分类）
const parentTagsList: any = ref([])
// 所有子标签列表（用于存放）
const allChildTags: any = ref([])
// 当前分类下的子标签（用于渲染）
const categoryTagsList: any = ref([])

// 获取所有父标签
const getParentTags = async () => {
  const result = await getParentTagsAPI()
  parentTagsList.value = result.data.data
}

// 获取所有子标签，根据分类名
const getChildTags = async () => {
  const result = await getChildTagsAPI()
  allChildTags.value = result.data.data
}

// 组件挂载之前
onBeforeMount(() => {
  // 加载父标签分类数据
  getParentTags()
  // 加载所有子标签数据
  getChildTags()
})

// 点击标签时触发 -> 添加到已选标签列表中进行展示
const onClickAddTag = (tagName: any) => {
  // console.log('点击了标签', tagName)
  // 判断当前添加的标签在已选列表中是否存在，如果存在，就不用再次添加了，会造成标签重复展示
  if (!selectedTagsList.value.includes(tagName)) {
    // 将其添加到已选标签列表
    selectedTagsList.value.push(tagName)
  }
}

// --------- 确认搜索后的操作区域--------
// 用户列表（存放根据标签查询到的用户）
const usersList = ref([])
// 获取用户列表-根据多个标签查询用户(SearchBar.vue 中 emit事件 确认搜索时触发的回调)
const getUsersList = async (searchValue: any) => {
  console.log('子组件SearchBar.vue 传递的搜索值 =', searchValue)
  // 如果搜索值为空，则按照已选标签名作为参数去查询用户
  if (searchValue === '' && selectedTagsList.value.length === 0) {
    // 警告通知
    showNotify({ type: 'warning', message: '搜索内容不能为空！', duration: 800 })
    return
  }
  // 如果勾选了标签，则默认按照标签匹配用户，搜索内容不参与查询条件
  if (selectedTagsList.value.length > 0) {
    searchValue = selectedTagsList.value.toString()
  }
  console.log('查询参数 searchValue = ', searchValue)
  // 调用后台接口，获取数据
  const result = await searchUsersByTagsAPI(searchValue)
  // console.log('根据标签查询到的用户:', result.data)
  usersList.value = result.data.data
  // 如果后端查询到的数据为空，设置显示空状态区域
  if (usersList.value.length === 0) {
    isEmpty.value = true
  }
}

// ---------- 搜索结果区域 -------------
// 控制空状态区域 (默认false不显示，true-显示)，当用户点击了搜索，但是没有匹配到任何搜索结果时才显示
const isEmpty = ref(false)

// 空状态区域下，点击返回按钮触发回调
const onClickEmptyReturn = () => {
  console.log('空状态返回')
  // 不显示空状态区域
  isEmpty.value = false
}

// 显示默认的搜索主页区域
const showSearchIndex = () => {
  // 清空用户列表数据，此时由于usersList数组长度为0，不展示搜索结果区域
  usersList.value = []
  // 不显示空状态区域
  isEmpty.value = false
}
</script>

<template>
  <!-- 1. 顶部-搜索框区域，使用子组件身上注册的 ClickSearch 事件，并绑定一个回调函数，当子组件触发 emit('事件名',参数) 时，此处的回调函数会调用，并接收传入郭磊的参数 -->
  <SearchBar @getUsersAPI="getUsersList" @showSearchIndex="showSearchIndex"></SearchBar>
  <!--            2 3 4 区域互斥，在当前页面中只会同时展示其中一个 -->
  <!-- 2. 空状态区域，当搜索结果没有匹配到任何数据时显示（由 isEmpty 动态控制展示）  -->
  <van-empty description="抱歉！暂时没有匹配到相关搜索结果" v-show="isEmpty">
    <van-button round type="primary" class="bottom-button" @click="onClickEmptyReturn">
      返回
    </van-button>
  </van-empty>
  <!-- 3. 中间-默认搜索主页面区域（由 usersList，isEmpty 动态控制展示）-->
  <div v-if="usersList.length === 0 && !isEmpty">
    <!-- 通知条 -->
    <van-notice-bar mode="closeable" color="#1989fa" background="#ecf9ff" left-icon="info-o">
      注意：当选了多个标签时，搜索内容不参与匹配条件
    </van-notice-bar>
    <!-- 搜索历史 -->
    <van-cell center title="搜索历史" value="展开" arrow-direction="down" is-link></van-cell>
    <!-- 分割线 -->
    <van-divider :hairline="true" :style="{ color: '#151313', borderColor: '#a29999' }"
      >已选标签</van-divider
    >
    <!-- 已选标签展示区域 -->
    <van-row justify="space-around">
      <van-space align="center" size="5px" style="padding: 5px" fill wrap>
        <!-- show 指定是否展示标签(默认true), 添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。-->
        <van-tag
          plain
          round
          closeable
          color="#676767"
          size="large"
          @close="onCloseTag(tagName)"
          v-for="tagName in selectedTagsList"
          :key="tagName"
          >{{ tagName }}</van-tag
        >
      </van-space>
    </van-row>
    <!-- 分割线 -->
    <van-divider :hairline="true" :style="{ color: '#151313', borderColor: '#a29999' }" />
    <van-cell title="请选择标签"></van-cell>
    <!-- 标签分类 在标签指定 name 属性的情况下，v-model:active 的值为当前标签的 name（此时无法通过索引值tab index来匹配标签） -->
    <van-tabs v-model:active="activeTabName" type="line" @click-tab="onClickTab" swipeable>
      <!-- 每个tab栏(即所有父标签分类) -->
      <van-tab
        :title="parentTag.tagName"
        :name="parentTag.tagName"
        v-for="parentTag in parentTagsList"
      >
        <van-row justify="space-around">
          <van-space align="center" size="5px" style="padding: 5px" fill wrap>
            <!-- 每个父标签分类下对应其所有的子标签-->
            <van-tag
              plain
              round
              color="#676767"
              size="large"
              v-for="childTag in categoryTagsList"
              @click="onClickAddTag(childTag.tagName)"
              >{{ childTag.tagName }}</van-tag
            >
          </van-space>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
  <!-- 4. 搜索结果页区域（由 usersList，isEmpty 动态控制展示）-->
  <div v-else-if="usersList.length !== 0 && !isEmpty">
    <SearchResult :usersList="usersList"></SearchResult>
  </div>
</template>

<style scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>
