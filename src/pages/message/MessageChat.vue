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

// 输入框当前值
const fieldText = ref('')
</script>

<template>
  <!-- 顶部导航栏 fixed 自动固定在顶部-->
  <van-nav-bar
    :title="navTitle"
    right-text="按钮"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed
    left-arrow
    placeholder
    safe-area-inset-top
    clickable
  >
    <!--导航栏右侧-内容插槽 -->
    <template #right>
      <van-icon name="ellipsis" size="25" />
    </template>
  </van-nav-bar>
  <div style="background: #f0efef">
    <van-space
      direction="vertical"
      fill
      style="padding: 8px 2px; margin: 10px"
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
            style="margin-left: 4px; padding-top: 20px; fill: #ffffffff"
          ></svg-icon>
        </van-col>
        <van-col span="18">
          <van-notice-bar
            wrapable
            :scrollable="false"
            text="说出口的话、离弦的箭、逝去的生活和失去的机会。"
            style="background: #ffffffff; color: black; border-radius: 10px; font-size: 15px"
          />
        </van-col>
      </van-row>
    </van-space>
  </div>

  <!-- 底部输入框区域 -->
  <van-space direction="vertical" fill style="padding: 8px 2px; margin: 10px">
    <van-row gutter="10">
      <van-col sapn="2">
        <van-icon name="volume-o" size="25" style="margin-top: 10px" />
      </van-col>
      <van-col span="18">
        <van-field
          v-model="fieldText"
          rows="1"
          type="textarea"
          :autosize="{ maxHeight: 100, minHeight: 0 }"
          center
          clearable
          clickable
          autofocus
          placeholder="请输入信息"
          style="background: #f4f3f3"
        >
        </van-field>
      </van-col>
      <van-col span="4">
        <van-button type="primary">发送</van-button>
      </van-col>
    </van-row>
  </van-space>
</template>

<style scoped></style>
