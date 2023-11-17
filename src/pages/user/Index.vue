<script setup lang="ts">
// 点击用户头像
const onClickUser = () => {
  console.log('个人中心-点击了用户头像')
}
</script>

<template>
  <!-- Layout 布局-row-col组件 每个元素的两侧间隔相等 -->
  <van-row justify="space-around">
    <van-col span="6">
      <!-- 用户头像 -->
      <van-image
        round
        fit="cover"
        width="85"
        height="85"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        @click="onClickUser"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-col>
    <van-col span="18">
      <van-cell center title="单元格" value="内容" label="描述信息" is-link>
        <!-- 自定义单元格title区域 -->
        <template #title>
          <van-row justify="space-between">
            <!-- 用户昵称（最大长度为6） -->
            <span class="custom-title" style="color: #f48d08;font-size: 15px">@cloud-ripple</span>
          </van-row>
        </template>
        <!-- 自定义单元格label区域（用户名下方） -->
        <template #label>
          <van-row justify="space-around">
            <span class="custom-title">用户ID：1493440094</span>
            <span class="custom-title">性别：男</span>
            <van-icon name="location">南京</van-icon>
          </van-row>
        </template>
        <!-- 自定义单元格value区域（最右侧） -->
        <template #value>
          <span class="custom-title">编辑资料</span>
        </template>
      </van-cell>
    </van-col>
  </van-row>
  <van-row justify="space-around">
      <!-- 用户标签 -->
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      我的标签
    </van-divider>
      <van-space align="center" size="5px" style="padding: 5px" fill wrap>


        <van-tag plain round color="red" size="medium" :show="true">java</van-tag>
        <van-tag plain round color="red">python</van-tag>
        <van-tag plain round color="red">大二</van-tag>
        <van-tag plain round color="red">前端</van-tag>
        <van-tag plain round color="red">羽毛球</van-tag>
        <van-tag plain round color="red">跑步</van-tag>
        <van-tag plain round color="red">跑步</van-tag>
        <van-tag plain round color="red">跑步</van-tag>
        <van-tag plain round color="red">跑步</van-tag>
        <van-tag plain round color="red">跑步</van-tag>
      </van-space>
  </van-row>
</template>

<style scoped></style>
