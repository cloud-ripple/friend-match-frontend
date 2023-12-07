<script setup lang="ts">
import { showImagePreview } from 'vant'
import { ref } from 'vue'

// 当前帖子用户头像
const onClickUser = () => {
  console.log('好友圈，点击了用户头像')
}
// 点击图片时触发
const onClickImage = () => {
  console.log('好友圈,点击了图片')
  // 此函数用于立即触发预览图片，并支持传入图片数组等多个参数
  showImagePreview([
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg'
  ])
}

//控制是否预览图片
const isShowImage = ref(false)
//当前图片索引
const index = ref(0)
// 预览的图片
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
]
// 切换图片时触发
const onChangeImage = (newIndex: any) => {
  index.value = newIndex
}
// 文章内容
const articleText =
  '那一天我二十一岁，在我一生的黄金时代。' +
  '我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。' +
  '后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，' +
  '奢望也一天天消失，最后变得像挨了锤的牛一样。' +
  '可是我过二十一岁生日时没有预见到这一点。' +
  '我觉得自己会永远生猛下去，什么也锤不了我。'
// 点击 展开/收起
const onClickExpandOrCollapse = () => {}
// 评论操作
const onClickComment = () => {
  console.log('点击评论了')
}
// 点赞分值 0-未点赞，1-点赞
const likeValue = ref(0)
// 收藏分值 0-未收藏，1-收藏
const starValue = ref(0)
// 点赞操作
const onChangeLike = (val: number) => {
  console.log(val === 1 ? '点赞了' : '未点赞')
}
// 收藏操作
const onChangeStar = (val: number) => {
  console.log(val === 1 ? '收藏了' : '未收藏')
}
// 分享操作
const onClickShare = () => {
  console.log('点击了分享')
}
</script>

<template>
  <!-- 帖子头部区域 -->
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
            <span style="color: #f48d08; font-size: 16px">哈忘语今天咩来</span>
            <van-icon name="clock" size="14" color="#7d7878ff">2023-11-17</van-icon>
          </van-space>
        </van-row>
      </van-col>
      <van-col span="3">
        <!-- 最右侧 > -->
        <van-icon name="arrow" size="13" color="#7d7878ff" style="margin: 18px 40px" />
      </van-col>
    </van-row>
  </van-space>
  <!-- 帖子内容-中心区域（最多显示2行） -->
  <van-row>
    <van-space align="center" size="5px" style="padding: 0 15px" fill wrap>
      <van-text-ellipsis
        rows="3"
        :content="articleText"
        expand-text="展开"
        collapse-text="收起"
        @click-action="onClickExpandOrCollapse"
        style="color: #645f5f; font-size: 15px"
      />
    </van-space>
  </van-row>
  <!-- 帖子图片展示区域 -->
  <van-row>
    <van-space size="2px" style="margin-bottom: 12px; padding: 0 15px" fill wrap>
      <van-image
        fit="cover"
        width="100"
        height="100"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        @click="onClickImage"
        v-for="i in 9"
        :key="i"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-space>
  </van-row>
  <!-- 图片预览组件 -->
  <van-image-preview
    v-model:show="isShowImage"
    :images="images"
    @change="onChangeImage"
    :closeable="true"
  >
  </van-image-preview>
  <!-- 帖子底部区域（评论、点赞、收藏、分享） -->
  <van-row
    gutter="5"
    justify="space-between"
    :wrap="false"
    style="font-size: 13px; color: #7d7878ff; margin: 0 12px"
  >
    <van-col span="6" offset="1"
      ><!-- 评论 -->
      <van-icon color="#7d7878ff" name="comment-o" size="20" @click="onClickComment">
        <span style="font-size: 14px; color: #7d7878ff; margin: 0 4px">2024</span>
      </van-icon>
    </van-col>
    <van-col span="6"
      ><!-- 点赞 -->
      <van-rate
        v-model="likeValue"
        @change="onChangeLike"
        color="red"
        void-color="#7d7878ff"
        icon="good-job"
        void-icon="good-job-o"
        :count="1"
        :size="20"
        clearable
      />
      <span style="font-size: 14px; color: #7d7878ff; margin: 0 4px">202423</span>
    </van-col>
    <van-col span="6"
      ><!-- 收藏 -->
      <van-rate
        v-model="starValue"
        @change="onChangeStar"
        color="#ffd21e"
        void-color="#7d7878ff"
        icon="star"
        void-icon="star-o"
        :count="1"
        :size="20"
        clearable
      />
      <span style="font-size: 14px; color: #7d7878ff; margin: 0 4px">20324</span></van-col
    >
    <van-col span="6"
      ><!-- 分享  -->
      <van-icon name="share-o" size="20" @click="onClickShare" style="margin-top: 1px" />
      <span style="font-size: 14px; color: #7d7878ff; margin: 0 4px">2024</span>
    </van-col>
  </van-row>
  <!-- 帖子之间的分割线-下方 -->
  <van-divider :hairline="true" style="border-color: #b5afaf" />
</template>

<style scoped></style>
