<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import { searchUsersByTags } from '@/apis/userAPI'
import SearchResult from '@/pages/search/SearchResult.vue'

//  -------搜索历史区域---------

// -------已选标签展示区域-----------
// 已选标签展示列表数据
const selectedTagsList: any = ref([
  // {
  //   id: ,
  //   userId: 1,
  //   tagName: 'ikun',
  //   isShow: true,
  //   isParent: false,
  //   parentId: 1,
  //   category: '热门' //标签分类
  // }
])
// 点击关闭标签时触发
const onCloseTag = (childTag: any) => {
  // console.log(`当前要关闭的标签：`, childTag)
  // 对当前要关闭的标签childTag，通过名字在已选标签列表中进行比对，过滤出不需要关闭的标签，重新赋值数据渲染
  selectedTagsList.value = selectedTagsList.value.filter((tag: any) => {
    return childTag.tagName !== tag.tagName
  })
}

// ------标签分类区域-----
// 当前激活的标签名
const activeTabName = ref('热门')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj: object) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  // console.log(`搜索页-当前激活标签是${activeTabName.value}`)
}
// 标签列表数据
const tagsList = ref([
  {
    id: 1, //标签id
    tagName: '热门', //标签名
    isShow: true, //控制标签是否展示
    isParent: true, //是否为父标签
    parentId: 1,
    category: '热门', //标签分类
    // 子标签
    childTagsList: [
      {
        id: 100,
        userId: 1,
        tagName: 'ikun',
        isShow: true,
        isParent: false,
        parentId: 1,
        category: '热门' //标签分类
      },
      {
        id: 101,
        userId: 1,
        tagName: '萌新',
        isShow: true,
        isParent: false,
        parentId: 1,
        category: '热门' //标签分类
      },
      {
        id: 102,
        userId: 2,
        tagName: '小白',
        isShow: true,
        isParent: false,
        parentId: 1,
        category: '热门' //标签分类
      }
    ]
  },
  {
    id: 2, //标签id
    tagName: '计算机', //标签名
    isShow: true, //控制标签是否展示
    isParent: true, //是否为父标签
    parentId: 2,
    category: '计算机', //标签分类
    // 子标签
    childTagsList: [
      {
        id: 100,
        userId: 3,
        tagName: 'java',
        isShow: true,
        isParent: false,
        parentId: 2,
        category: '计算机' //标签分类
      },
      {
        id: 101,
        userId: 1,
        tagName: 'python',
        isShow: true,
        isParent: false,
        parentId: 2,
        category: '计算机' //标签分类
      },
      {
        id: 102,
        userId: 1,
        tagName: '前端',
        isShow: true,
        isParent: false,
        parentId: 2,
        category: '计算机' //标签分类
      }
    ]
  }
])

// 点击标签时触发 -> 添加到已选标签列表中进行展示
const onClickAddTag = (childTag: any) => {
  // console.log('点击了标签', childTag)
  // 判断当前添加的标签在已选列表中是否存在，如果存在，就不用再次添加了，会造成标签重复展示
  if (!selectedTagsList.value.includes(childTag)) {
    // 将其添加到已选标签列表
    selectedTagsList.value.push(childTag)
  }
}

// --------- 确认搜索后的操作区域--------
// 存放用户数据
const usersList = ref([])
// 确认搜索时触发的回调---获取用户列表-根据多个标签搜索用户
const getUsersList = async (val: any) => {
  console.log('SearchIndex.vue  来自子组件SearchBar传递的搜索值 =', val)
  // 调用后台接口，获取数据
  const result = await searchUsersByTags(val)
  console.log(result.data)
  usersList.value = result.data.data
  console.log('用户数：', usersList.value.length)
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
  <!--            2 3 4 区域互斥，在当前页面中只会同时展示其中一个         -->
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
      提示：您可以选择多个标签来匹配用户
    </van-notice-bar>
    <!-- 搜索历史 -->
    <van-cell center title="搜索历史" value="展开" arrow-direction="down" is-link></van-cell>
    <!-- 分割线 -->
    <van-divider :hairline="true" :style="{ color: '#151313', borderColor: '#a29999' }"
      >已选标签</van-divider
    >
    <!-- 已选标签展示区域 -->
    <van-row justify="space-around" v-model="selectedTagsList">
      <van-space align="center" size="5px" style="padding: 5px" fill wrap>
        <!-- show 指定是否展示标签(默认true), 添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。-->
        <van-tag
          plain
          round
          closeable
          :show="selectedTag.isShow"
          color="#676767"
          size="large"
          @close="onCloseTag(selectedTag)"
          v-for="selectedTag in selectedTagsList"
          :key="selectedTag.id"
          >{{ selectedTag.tagName }}</van-tag
        >
      </van-space>
    </van-row>
    <!-- 分割线 -->
    <van-divider :hairline="true" :style="{ color: '#151313', borderColor: '#a29999' }" />
    <van-cell title="请选择标签"></van-cell>
    <!-- 标签分类 在标签指定 name 属性的情况下，v-model:active 的值为当前标签的 name（此时无法通过索引值tab index来匹配标签） -->
    <van-tabs
      v-model:active="activeTabName"
      type="line"
      @click-tab="onClickTab"
      swipeable
      v-model="tagsList"
    >
      <van-tab :title="tag.tagName" :name="tag.category" v-for="tag in tagsList">
        <van-row justify="space-around">
          <van-space align="center" size="5px" style="padding: 5px" fill wrap>
            <van-tag
              plain
              round
              color="#676767"
              size="large"
              :show="childTag.isShow"
              v-for="childTag in tag.childTagsList"
              @click="onClickAddTag(childTag)"
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