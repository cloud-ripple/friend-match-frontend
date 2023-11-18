<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
// 图片预览组件辅助函数
import { showImagePreview } from 'vant'
import UserCard from "@/components/UserCard.vue";

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
  // todo  调用搜索接口
  showNotify()
  showToast(val)
}
// 点击输入框右侧取消时触发
const onClickCancel = () => {
  // 清空搜索框
  searchValue.value = ''
}

// tab 标签激活值，默认高亮 name="recommend" 推荐标签
const activeTabName = ref('recommend')
// 点击 tab 标签栏触发
const onClickTab = (tabParamsObj:object) => {
  //console.log(tabParamsObj) //接收到的参数对象 -> {name: 'following', title: '好友圈', event: PointerEvent, disabled: false}
  console.log(`主页-当前激活标签是${activeTabName.value}`);
}

// ------- 推荐伙伴 ----------


// ------- 好友圈 ----------
// 当前微博用户
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

// ------- 贴文专区 ----------
// 文章图片封面部分
const isShowImage = ref(false) //控制是否预览图片
const index = ref(0) //当前图片索引
// 预览的图片
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
]
// 点击封面，预览
const onClickViewImage = () => {
  console.log('点击了封面')
  isShowImage.value = true
  // showImagePreview(images)
}
// 点击整个文章卡片区域时触发
const onClickCard = () => {
  console.log('点击了文章卡片区域')
}

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
// 点击展开 / 收起触发
const onClickExpandOrCollapse = () => {}
// 评论操作
const onClickComment = () => {
  console.log('点击评论了')
}
const likeValue = ref(0) // 点赞分值 0-未点赞，1-点赞
const starValue = ref(0) // 收藏分值 0-未收藏，1-收藏
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
    placeholder="请输入搜索关键词"
    @search="onSureSearch"
  >
    <!--  搜索框右侧内容（自定义插槽）  -->
    <template #action>
      <span @click="onClickCancel">取消</span>
      <van-notify v-model:show="show" type="success">
        <van-icon name="bell" style="margin-right: 4px" />
        <span>查询到如下信息！</span>
      </van-notify>
    </template>
  </van-search>
  <!-- 搜索框下方区域 tab 标签 -->
  <van-tabs v-model:active="activeTabName" type="line" @click-tab="onClickTab">
    <!-- 推荐伙伴  -->
    <van-tab title="推荐伙伴" name="recommend">
      <!-- 内容展示区域（用户个人卡片可以抽取成一个组件） -->
      <UserCard></UserCard>
    </van-tab>
    <!-- 好友圈 -->
    <van-tab title="好友圈" name="following">
      <!-- 帖子之间的分割线-上方 -->
      <van-divider :hairline="true" :style="{ color: '#a29999', borderColor: '#b5afaf' }" />
      <!-- 帖子头部区域 -> 单独抽取成一个用户卡片组件 -->
      <van-row justify="space-around">
        <van-col span="6">
          <!-- 用户头像 -->
          <van-image
            round
            fit="cover"
            width="80"
            height="80"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            @click="onClickUser"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </van-col>
        <van-col span="18">
          <van-cell center title="单元格" value="详情" label="描述信息" is-link>
            <!-- 自定义单元格title区域 -->
            <template #title>
              <van-row justify="space-between">
                <!-- 用户昵称（最大长度为6） -->
                <span class="custom-title" style="color: #f48d08; font-size: 15px"
                  >@cloud-ripple</span
                >
              </van-row>
            </template>
            <!-- 自定义单元格label区域（用户名下方） -->
            <template #label>
              <van-row justify="space-between">
                <van-icon name="clock" size="12" color="#7D7878FF">日期：2023-11-17</van-icon><br />
                <van-icon name="location" size="12" color="#7D7878FF">地点：南京</van-icon>
              </van-row>
            </template>
            <!-- 自定义单元格value区域（最右侧 >） -->
            <template #value>
              <span>详情</span>
            </template>
          </van-cell>
        </van-col>
      </van-row>
      <!-- 图片预览组件 -->
      <van-image-preview
        v-model:show="isShowImage"
        :images="images"
        @change="onChangeImage"
        :closeable="true"
      >
      </van-image-preview>
      <!-- 帖子内容-中心区域（最多显示2行） -->
      <van-row>
        <van-space align="center" size="5px" style="padding: 0 10px" fill wrap>
          <van-text-ellipsis
            rows="2"
            :content="articleText"
            expand-text="展开"
            collapse-text="收起"
            @click-action="onClickExpandOrCollapse"
          />
        </van-space>
      </van-row>
      <!-- 帖子图片展示区域 -->
      <van-row>
        <van-space align="center" size="5px" style="padding: 0 10px" fill wrap>
          <van-image
            fit="cover"
            width="80"
            height="80"
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
      <!-- 帖子底部区域（评论、点赞、收藏、分享） -->
      <van-row gutter="5" justify="space-between" :wrap="false">
        <van-col span="6" offset="1"
          ><!-- 评论 -->
          <van-icon name="comment-o" size="24" @click="onClickComment" />
          <span>2432</span>
        </van-col>
        <van-col span="6"
          ><!-- 点赞 -->
          <van-rate
            v-model="likeValue"
            @change="onChangeLike"
            color="red"
            void-color="black"
            icon="good-job"
            void-icon="good-job-o"
            :count="1"
            :size="24"
            clearable
          />
          <span>124124</span></van-col
        >
        <van-col span="6"
          ><!-- 收藏 -->
          <van-rate
            v-model="starValue"
            @change="onChangeStar"
            color="#ffd21e"
            void-color="black"
            icon="star"
            void-icon="star-o"
            :count="1"
            :size="24"
            clearable
          />
          <span>321421</span></van-col
        >
        <van-col span="6"
          ><!-- 分享  -->
          <van-icon name="share-o" size="24" @click="onClickShare" />
          <span>3.5k</span></van-col
        >
      </van-row>
      <!-- 帖子之间的分割线-下方 -->
      <van-divider :hairline="true" :style="{ color: '#a29999', borderColor: '#b5afaf' }" />
    </van-tab>
    <!-- 贴文专区 -->
    <van-tab title="贴文专区" name="article">
      <van-card
        title="文章标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        centered
        @click-thumb="onClickViewImage"
      >
        <template #bottom>
          <!-- 左侧文章封面图片预览 -->
          <van-image-preview
            v-model:show="isShowImage"
            :images="images"
            @change="onChangeImage"
            :closeable="true"
          >
          </van-image-preview>
        </template>
        <!-- 自定义文章标题下方区域 -->
        <template #tags>
          <!-- 最多显示三行 -->
          <van-text-ellipsis
            rows="3"
            :content="articleText"
            expand-text="展开"
            collapse-text="收起"
            @click-action="onClickExpandOrCollapse"
          />
        </template>
        <!-- 自定义文章浏览数量 -->
        <template #num>
          <van-icon name="eye" size="12">浏览量：8</van-icon>
        </template>
        <template #footer>
          <!-- 评论 -->
          <van-button size="mini">
            <van-icon name="comment-o" size="20" @click="onClickComment" />
          </van-button>
          <span>35</span>
          <!-- 点赞 -->
          <van-button size="mini">
            <van-rate
              v-model="likeValue"
              @change="onChangeLike"
              color="red"
              void-color="black"
              icon="good-job"
              void-icon="good-job-o"
              :count="1"
              :size="15"
              clearable
            />
          </van-button>
          <span>12</span>
          <!-- 收藏 -->
          <van-button size="mini">
            <van-rate
              v-model="starValue"
              @change="onChangeStar"
              color="#ffd21e"
              void-color="black"
              icon="star"
              void-icon="star-o"
              :count="1"
              :size="15"
              clearable
            />
          </van-button>
          <span>3</span>
          <!-- 分享  -->
          <van-button size="mini">
            <van-icon name="share-o" size="20" @click="onClickShare" />
          </van-button>
          <span>3.5k</span>
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
