<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

// 控制通知栏是否显示
const show = ref(false)
const showNotify = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}

// 搜索框当前输入值
const searchValue = ref('')
// 输入完关键字后，确认搜索时触发(包括回车)
const onSureSearch = (val: any) => {
  console.log('搜索值', val)
}
// 获取路由器
const router = useRouter()
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
const activeTabName = ref('计算机')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj: object) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  console.log(`搜索页-当前激活标签是${activeTabName.value}`)
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
      <van-notify v-model:show="show" type="success">
        <van-icon name="bell" style="margin-right: 4px" />
        <span>查询到如下信息！</span>
      </van-notify>
    </template>
  </van-search>

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
</template>

<style scoped></style>
