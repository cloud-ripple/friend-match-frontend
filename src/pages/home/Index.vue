<script setup lang="ts">
import { ref } from 'vue'
import FriendArticle from '@/pages/home/FriendArticle.vue'

// tab 标签激活值，默认高亮 name="recommend" 推荐标签
const activeTabName = ref('recommend')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj: any) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  // console.log(`主页-当前激活标签是${activeTabName.value}`)
}

// ------- 推荐伙伴 ----------

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
      <!--      <UserCard></UserCard>-->
    </van-tab>
    <!-- 好友圈 -->
    <van-tab title="好友圈" name="following">
      <!-- 帖子之间的分割线-上方 -->
      <van-divider :hairline="true" style="border-color: #b5afaf" />
      <FriendArticle v-for="i in 4" :key="i" />
    </van-tab>
  </van-tabs>
</template>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
