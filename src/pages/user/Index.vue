<script setup lang="ts">
// 获取路由器
import { useRouter } from 'vue-router'
import SvgIcon from '@/assets/icons/SvgIcon.vue'

const router = useRouter()
// 点击用户头像
const onClickUser = () => {
  console.log('个人中心-点击了用户头像')
}

// 修改个人资料
const onClickEditInfo = () => {
  console.log('个人中心-点击了修改资料')
  router.push('/edit')
}
</script>

<template>
  <!-- 第一行（顶部区域） -->
  <van-space
    direction="vertical"
    fill
    style="padding: 0 14px; margin-bottom: 3px; background: #ffffffff"
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
      <van-col span="15">
        <!-- 用户昵称（最大长度为6） -->
        <van-row style="padding-top: 5px" :wrap="false">
          <van-space direction="vertical">
            <span style="color: #2e2e2c; font-size: 16px">哈忘语今天咩来</span>
            <span style="color: #7f7d7c; font-size: 13px">ID：1493440094</span>
          </van-space>
        </van-row>
      </van-col>
      <van-col span="3">
        <!-- 最右侧 > -->
        <van-icon
          @click="onClickEditInfo"
          name="arrow"
          size="17"
          color="#7d7878ff"
          style="margin: 18px 40px"
        />
      </van-col>
    </van-row>
  </van-space>

  <!-- 分割线 -->
  <van-divider :style="{ color: '#151313', borderColor: '#a29999' }">我的标签</van-divider>
  <!-- 第二行（我的标签区域） -->
  <van-row justify="space-around">
    <van-space align="center" size="10px" style="padding: 0 10px" fill wrap>
      <van-tag plain round color="red" size="large" :show="true" v-for="i in 8" :key="i"
        >java</van-tag
      >
      <van-tag plain round color="red" size="large" :show="true" v-for="i in 3" :key="i"
        >网上冲浪</van-tag
      >
    </van-space>
  </van-row>
  <!-- 分割线 -->
  <van-divider :hairline="true" style="border-color: #676767" />
  <van-grid icon-size="30px" :column-num="4" :gutter="1" :border="false" :clickable="true" square>
    <van-grid-item icon="browsing-history" icon-color="#B7AB6AFF" text="浏览历史"></van-grid-item>
    <van-grid-item icon="photo" icon-color="#76BB0DFF" text="我的相册" />
    <van-grid-item icon="bookmark" icon-color="#1989fa" text="我的收藏" />
    <van-grid-item icon="wechat" icon-color="#29A61CFF" text="联系作者" />
    <van-grid-item icon="friends" icon-color="#B024C9FF" text="好友列表" />
    <van-grid-item icon="records" icon-color="#1EAAA9FF" text="我的博文" />
    <van-grid-item icon="setting" icon-color="#6D7FDBFF" text="设置" />
    <van-grid-item icon="question" icon-color="#D4A569FF" text="关于本站" />
  </van-grid>
  <!-- 分割线 -->
  <van-divider style="border-color: #a29999" />
  <!-- 切换账号 -->
  <van-button size="large" icon="" :hairline="true" block text="切换账号" />
  <!-- 退出登录  -->
  <van-button size="large" :hairline="true" block text="退出登录" />
</template>

<style scoped></style>
