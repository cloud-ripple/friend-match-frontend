<script setup lang="ts">
// 获取路由器
import { useRouter } from 'vue-router'

const router = useRouter()
// 点击用户头像
const onClickUser = () => {}

// 点击聊天框时触发
const onClickRow = (val: any) => {
  console.log('点击了聊天框')
  console.log('当前聊天用户：', val)
  // 进入到双方聊天室页面，此处可以路由传参(比如：当前用户个人信息)，也可以通过点击事件传参
  router.push({
    path: '/chat'
  })
}
</script>

<template>
  <!-- 顶部区域-提到、评论、点赞、粉丝、通知互动 -->
  <van-grid icon-size="30px" :column-num="5" :gutter="1" :border="false" :clickable="true" square>
    <van-grid-item icon="chat-o" icon-color="#B7AB6AFF" text="提到"></van-grid-item>
    <van-grid-item icon="comment-o" icon-color="#76BB0DFF" text="评论" />
    <van-grid-item icon="good-job-o" icon-color="#1989fa" text="点赞" />
    <van-grid-item icon="like-o" icon-color="#29A61CFF" text="粉丝" />
    <van-grid-item icon="volume-o" icon-color="#B024C9FF" text="通知互动" />
  </van-grid>
  <!-- 聊天区域 -->
  <van-space
    direction="vertical"
    fill
    style="padding: 5px; margin-bottom: 4px; background: #fbfafa"
    v-for="i in 7"
    :key="i"
  >
    <van-swipe-cell>
      <van-row @click="onClickRow('用户昵称')">
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
        <van-col span="14">
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
            content="在干嘛尼，出来吃饭呀！"
            style="color: #868483; font-size: 14px"
          />
        </van-col>
        <van-col span="4">
          <span class="custom-title" style="display: inline-block; color: #b4b1ad; font-size: 12px"
            >2023-11-20
          </span>
          <van-badge :content="22" max="99" :show-zero="false" :offset="[5, 18]"></van-badge>
        </van-col>
      </van-row>
      <template #left>
        <van-button square type="success" class="button" text="主页" />
      </template>
      <template #right>
        <van-button square type="primary" class="button" text="置顶" />
        <van-button square type="warning" class="button" text="标为未读" />
        <van-button square type="danger" class="button" text="删除" />
      </template>
    </van-swipe-cell>
  </van-space>
</template>

<style scoped>
button {
  height: 100%;
}
</style>




