<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from '@/assets/icons/SvgIcon.vue'

const router = useRouter()
// 导航栏左侧
const onClickLeft = () => history.back()
// 导航栏右侧
const onClickRight = () => {}
// 顶部导航栏中间标题
const navTitle = ref('当前用户昵称')

// 输入框当前值  e9e7e7
const fieldText = ref('')
</script>

<template>
  <!-- 顶部导航栏 fixed 自动固定在顶部-->
  <van-nav-bar
    :title="navTitle"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    left-arrow
    placeholder
    safe-area-inset-top
    clickable
    fixed
  >
    <!--导航栏右侧-内容插槽 -->
    <template #right>
      <van-icon name="ellipsis" size="25" />
    </template>
  </van-nav-bar>

  <!-- 整个聊天区域 -->
  <div style="overflow-y: auto; height: 100%" id="chat-container">
    <!--  聊天类容区域  -->
    <div id="chat-content" style="margin-bottom: 120px; height: 100%">
      <!-- 对方聊天消息条 -->
      <div style="padding-right: -20px">
        <van-space
          direction="vertical"
          fill
          style="padding: 5px 2px; margin: 20px 15px"
          v-for="i in 3"
          :key="i"
        >
          <van-row gutter="1">
            <van-col span="3">
              <!-- 用户头像-->
              <van-image
                round
                fit="cover"
                width="50"
                height="50"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              >
                <template v-slot:loading>
                  <van-loading type="spinner" size="15" />
                </template>
              </van-image>
            </van-col>
            <van-col span="1">
              <svg-icon
                icon-class="left-chat"
                style="margin-left: 3px; padding-top: 20px; fill: #efbcf2"
              ></svg-icon>
            </van-col>
            <van-col span="18">
              <van-notice-bar
                wrapable
                :scrollable="false"
                text="说出口的话、离弦的箭、逝去的生活和失去的机会。"
                style="background: #efbcf2; color: black; border-radius: 10px; font-size: 15px"
              />
            </van-col>
          </van-row>
          <!-- 时间戳 -->
          <span style="display: block; color: #a4a3a2; text-align: center; margin-top: 13px"
            >2023-11-23 12:05</span
          >
        </van-space>
      </div>
      <!-- 自己聊天消息条 -->
      <div style="padding-left: 55px">
        <van-space
          direction="vertical"
          fill
          style="padding: 5px 2px; margin-right: -15px; margin-top: 20px; margin-bottom: 20px"
          v-for="i in 2"
          :key="i"
        >
          <van-row gutter="1">
            <van-col span="18">
              <van-notice-bar
                wrapable
                :scrollable="false"
                text="说出口的话、离弦的箭、逝去的生活和失去的机会。"
                style="background: #6de975; color: black; border-radius: 10px; font-size: 15px"
              />
            </van-col>
            <van-col span="1">
              <svg-icon
                icon-class="right-chat"
                style="margin-left: -7px; padding-top: 20px; fill: #6de975"
              >
              </svg-icon>
            </van-col>
            <van-col span="3">
              <!-- 用户头像-->
              <van-image
                round
                fit="cover"
                width="50"
                height="50"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              >
                <template v-slot:loading>
                  <van-loading type="spinner" size="15" />
                </template>
              </van-image>
            </van-col>
          </van-row>
          <!-- 时间戳 -->
          <span
            style="
              display: block;
              color: #a4a3a2;
              text-align: center;
              margin-top: 13px;
              margin-right: 75px;
            "
            >2023-11-23 12:05</span
          >
        </van-space>
      </div>
    </div>
    <!-- 下方输入框区域   -->
    <van-space
      direction="vertical"
      fill
      style="position: fixed; bottom: -5px; padding: 5px 2px; margin: 0; width: 100%"
      v-if="true"
    >
      <van-row gutter="10" style="background-color: #ffffffff">
        <van-col sapn="1">
          <van-icon name="add-o" size="35" color="#996AE6FF" style="margin-top: 8px" />
        </van-col>
        <van-col span="17">
          <van-field
            v-model="fieldText"
            rows="1"
            type="textarea"
            :autosize="{ maxHeight: 100, minHeight: 0 }"
            center
            clearable
            clickable
            autofocus
            placeholder="快来聊天吧..."
            style="background: #ffffffff"
          >
          </van-field>
        </van-col>
        <van-col span="3">
          <van-button
            color="linear-gradient(to right, #996AE6FF, #D93D97FF)"
            style="margin-top: 3px"
          >
            <template #icon>
              <van-icon name="guide-o" size="27"></van-icon>
            </template>
          </van-button>
        </van-col>
      </van-row>
    </van-space>
  </div>

  <!--  底部功能选择区域-->
  <!--  <van-grid icon-size="30px" :column-num="4" :gutter="1" :clickable="true" square>-->
  <!--    <van-grid-item icon="photo" icon-color="#444343" text="相册" />-->
  <!--    <van-grid-item icon="photograph" icon-color="#444343" text="拍摄" />-->
  <!--    <van-grid-item icon="location" icon-color="#444343" text="位置" />-->
  <!--    <van-grid-item icon="phone" icon-color="#444343" text="电话" />-->
  <!--    <van-grid-item icon="contact" icon-color="#444343" text="名片" />-->
  <!--    <van-grid-item icon="card" icon-color="#444343" text="文件" />-->
  <!--    <van-grid-item icon="bookmark" icon-color="#444343" text="我的收藏" />-->
  <!--    <van-grid-item icon="more" icon-color="#444343" text="更多" />-->
  <!--  </van-grid>-->
</template>

<style scoped></style>
