<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FriendArticle from '@/pages/home/FriendArticle.vue'
import { recommendUsersAPI } from '@/apis/userAPI'

// tab 标签激活值，默认高亮 name="recommend" 推荐标签
const activeTabName = ref('recommend')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj: any) => {}

// ------- 推荐伙伴 ----------
// 推荐用户列表
const recommendUsersList: any = ref([])
// 总数
const total = ref(0)
// 总页数
const pages = ref(0)
// 每页大小
const size = ref(5)

// 获取推荐用户-分页查询
const getRecommendUsers = async (size: any, currentPage: any) => {
  const res = await recommendUsersAPI(size, currentPage)
  recommendUsersList.value = res.data.data.records
  total.value = res.data.data.total
  pages.value = res.data.data.pages
  console.log('分页查询：', res.data.data)
}

// 当前页码，默认第一页
const currentPage = ref(1)
// 切换页码
const onChangePage = () => {
  console.log('当前页码：', currentPage.value)
  getRecommendUsers(size.value, currentPage.value)
}
onMounted(() => {
  // 加载推荐用户数据
  getRecommendUsers(size.value, currentPage.value)
  console.log(recommendUsersList.value.length);
})

// ------- 好友圈 ----------
</script>

<template>
  <!-- 通知条 -->
  <van-notice-bar left-icon="volume-o" :scrollable="false" mode="closeable">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="3000"
      :touchable="false"
      :show-indicators="false"
    >
      <van-swipe-item>明月直入，无心可猜。</van-swipe-item>
      <van-swipe-item>仙人抚我顶，结发受长生。</van-swipe-item>
      <van-swipe-item>今人不见古时月，今月曾经照古人。</van-swipe-item>
    </van-swipe>
  </van-notice-bar>

  <!-- tab 标签 -->
  <van-tabs v-model:active="activeTabName" type="line" @click-tab="onClickTab">
    <!-- 推荐伙伴  -->
    <van-tab title="推荐伙伴" name="recommend">
      <!-- 内容展示区域（用户个人卡片可以抽取成一个组件-这里可以单独写一个接口用于展示推荐的用户（比如按照标签数排序推荐）） -->
      <div style="margin-bottom: 42px">
        <UserCard :users-list="recommendUsersList"></UserCard>
      </div>
      <!--  当查看最后一页时，显示-->
      <van-divider v-if="currentPage === pages" style="border-color: #b5afaf; font-size: 14px"
        >暂时没有更多了</van-divider
      >
      <!-- 分页组件 -->
      <van-pagination
        v-if="total > 5"
        v-model="currentPage"
        @change="onChangePage"
        :total-items="total"
        :items-per-page="size"
        :show-page-size="6"
        :page-count="pages"
        style="position: fixed; bottom: 45px; margin: 1px 0; width: 100%"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
    </van-tab>

    <!-- 好友圈 -->
    <van-tab title="好友圈" name="following">
      <!-- 帖子之间的分割线-上方 -->
      <van-divider :hairline="true" style="border-color: #b5afaf" />
      <FriendArticle v-for="i in 2" :key="i" />
    </van-tab>
  </van-tabs>
</template>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
