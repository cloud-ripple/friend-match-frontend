<script setup lang="ts">
import { ref } from 'vue'
// tab 标签激活值，默认高亮 name="friend-apply"
const activeTabName = ref('friend-apply')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj: any) => {}

// 点击用户头像
const onClickUser = () => {
  console.log('点击了用户头像')
}
</script>

<template>
  <!-- tab 标签 -->
  <van-tabs v-model:active="activeTabName" type="line" @click-tab="onClickTab">
    <!-- 帖子之间的分割线-上方 -->
    <van-divider :hairline="true" style="border-color: #b5afaf" />
    <!-- 好友申请  -->
    <van-tab title="好友申请" name="friend-apply">
      <!-- 聊天区域 -->
      <van-space
        direction="vertical"
        fill
        style="padding:5px 15px; margin-bottom: 4px; background: #fbfafa"
        v-for="i in 3"
        :key="i"
      >
        <van-row>
          <van-col span="4">
            <!-- 用户头像-->
            <van-image
              round
              fit="cover"
              width="50"
              height="50"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              @click="onClickUser"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="15" />
              </template>
            </van-image>
          </van-col>
          <van-col span="8">
            <!-- 用户昵称（最大长度为6） -->
            <span
              class="custom-title"
              style="
                display: inline-block;
                color: #191818;
                font-size: 15px;
                margin-bottom: 6px;
                font-weight: 600;
              "
              >哈忘语今天咩来</span
            >
            <van-text-ellipsis
              rows="1"
              content="加个好友吧！"
              style="color: #868483; font-size: 14px"
            />
          </van-col>
          <van-col span="10">
            <van-space fill style="margin-top: 10px;margin-left: 45px;">
              <van-button size="small" color="#7232dd">同意</van-button>
              <van-button size="small" color="#ee0a24">拒绝</van-button>
            </van-space>
          </van-col>
        </van-row>
      </van-space>
    </van-tab>

    <!-- 我的申请 -->
    <van-tab title="我的申请" name="my-apply"> </van-tab>
  </van-tabs>
</template>

<style scoped></style>
