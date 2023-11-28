<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
import { router } from "@/router";

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
  showNotify()
  showToast(val)
}
// 点击输入框右侧搜索时触发
const onClickSearch = () => {
  showNotify()
  showToast(searchValue.value)
}

// tab 标签激活值，默认高亮 name="recommend"的标签
const active = ref('open-team')
// 点击标签触发
const onClickTab = (name: string, title: string, disabled: false) => {
  // console.log('tab 标签点击：',name,title,disabled) // 点击 tab 标签触发事件回调参数
  // console.log(`当前激活标签是${active.value}`);
}

// ------- 队伍大厅 ----------
// 申请入队
const onClickApplyTeam = () => {
  console.log('点击了申请入队')
}
// 队伍详情
const onClickDetailTeam = () => {
  console.log('点击了队伍详情')
  router.push('/teamInfo')

}

// ------- 我的队伍 ----------
// 退出队伍
const onClickLeaveTeam = () => {
  console.log('点击了退出队伍')
}
// 解散队伍
const onClickDelTeam = () => {
  console.log('点击了解散队伍')
}
</script>

<template>
  <!-- 通知栏 -->
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
  <!-- 搜索框 -->
  <van-search
    v-model="searchValue"
    shape="round"
    show-action
    background="#4fc08d"
    placeholder="搜索队伍"
    @search="onSureSearch"
  >
    <!--  搜索框右侧内容（自定义插槽）  -->
    <template #action>
      <span @click="onClickSearch">搜索</span>
      <van-notify v-model:show="show" type="success">
        <van-icon name="bell" style="margin-right: 4px" />
        <span>查询到如下信息！</span>
      </van-notify>
    </template>
  </van-search>
  <!-- 搜索框下方区域 tab 标签 -->
  <van-tabs v-model:active="active" type="line" @click-tab="onClickTab">
    <!-- 队伍大厅  -->
    <van-tab title="队伍大厅" name="open-team">
      <!-- 队伍展示区域（卡片可以抽取成一个组件） -->
      <van-card
        desc="队伍描述信息"
        title="Java 小分队"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        centered
      >
        <!-- 自定义描述 -->
        <template #desc>
          <van-space size="7px" style="font-size: 13px; color: #4b4949" wrap fill>
            <span>描述：java 技术交流圈子</span>
            <span>状态：<van-tag plain round color="green">已满员</van-tag></span>
            <van-icon name="flag-o" size="13">队长：bobo</van-icon>
          </van-space>
        </template>
        <!-- 自定义数量  -->
        <template #price>
          <van-space size="19px" fill>
            <van-icon name="friends" size="13" color="#4b4949"> 8/30 人</van-icon>
            <van-icon name="location" size="13">江苏</van-icon>
          </van-space>
        </template>
        <!-- 自定义右下角内容 -->
        <template #footer>
          <van-button size="mini" @click="onClickApplyTeam">
            <van-icon name="add" size="13">申请入队</van-icon>
          </van-button>
          <van-button size="mini" @click="onClickDetailTeam">
            <van-icon name="info" size="13">详情</van-icon>
          </van-button>
        </template>
      </van-card>
    </van-tab>
    <!-- 我的队伍 -->
    <van-tab title="我的队伍" name="my-team">
      <!-- 队伍展示区域（卡片可以抽取成一个组件） -->
      <van-card
        desc="队伍描述信息"
        title="Java 小分队"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        centered
      >
        <!-- 自定义描述 -->
        <template #desc>
          <van-space size="7px" style="font-size: 13px; color: #4b4949" wrap fill>
            <span>描述：java 技术交流圈子</span>
            <span>状态：<van-tag plain round color="green">已满员</van-tag></span>
            <van-icon name="flag-o" size="13">队长：bobo</van-icon>
          </van-space>
        </template>
        <!-- 自定义数量  -->
        <template #price>
          <van-space size="19px" fill>
            <van-icon name="friends" size="13" color="#4b4949"> 8/30 人</van-icon>
            <van-icon name="location" size="13">江苏</van-icon>
          </van-space>
        </template>
        <!-- 自定义右下角内容 -->
        <template #footer>
          <van-button size="mini" @click="onClickLeaveTeam">
            <van-icon name="cross" size="14">退出队伍</van-icon>
          </van-button>
          <van-button size="mini" @click="onClickDetailTeam">
            <van-icon name="info" size="13">详情</van-icon>
          </van-button>
          <van-button size="mini" @click="onClickDelTeam">
            <van-icon name="delete" size="14">解散队伍</van-icon>
          </van-button>
        </template>
      </van-card>
    </van-tab>
  </van-tabs>
</template>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
