<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'

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
// 控制提示通知栏是否显示
const show = ref(false)

const showNotify = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}

// tab 标签激活值，默认高亮 name="recommend"的标签
const active = ref('recommend')
// 点击标签触发
const onClickTab = (name: string, title: string, disabled: false) => {
  // console.log('tab 标签点击：',name,title,disabled) // 点击 tab 标签触发事件回调参数
  // console.log(`当前激活标签是${active.value}`);
}

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
    background="#4fc08d"
    placeholder="请输入搜索关键词"
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
    <!-- 推荐伙伴  -->
    <van-tab title="推荐伙伴" name="recommend">
      <!-- 内容展示区域（个人卡片可以抽取成一个组件） -->
      <van-card
        tag="小黑子"
        desc="个人描述信息"
        title="用户名"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        centered
      >
        <!--   自定义描述下方标签区域  -->
        <template #tags>
          <van-space align="center" size="5px" style="padding: 5px" wrap fill>
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
            <van-tag plain round color="red">跑步</van-tag>
            <van-tag plain round color="red">跑步</van-tag>
            <van-tag plain round color="red">跑步</van-tag>
            <van-tag plain round color="red">跑步</van-tag>
            <van-tag plain round color="red">跑步</van-tag>
            <van-tag plain round color="red">跑步</van-tag>
          </van-space>
        </template>
        <!--   自定义数量   -->
        <template #price>
          <div>粉丝数：8</div>
        </template>
        <!--   自定义右下角内容     -->
        <template #footer>
          <van-button size="mini">加好友</van-button>
          <van-button size="mini">邀请入队</van-button>
          <van-button size="mini">更多...</van-button>
        </template>
      </van-card>
    </van-tab>
    <!-- 贴文专区 -->
    <van-tab title="贴文专区" name="article">
      <van-card
        tag="文章分类"
        title="文章标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
        centered
      >
        <!-- 自定义文章标题下方区域 -->
        <template #tags>
          <!-- 最多显示三行 -->
          <div class="van-multi-ellipsis--l3">
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
            这是一段最多显示三行的文字，多余的内容会被省略
          </div>
        </template>
        <!-- 自定义数量 -->
        <template #num>
          <van-icon name="eye">浏览量：8</van-icon>
        </template>
        <!-- 自定义左侧图片 -->
        <template #thumb>
          <van-image
            lazy-load
            width="90"
            height="100"
            fit="cover"
            position="center"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </template>
        <!-- 自定义右下角内容 -->
        <template #footer>
          <!-- 评论 -->
          <van-button size="mini">
            <van-icon name="comment-o" size="20" @click="onClickComment" />
          </van-button>
          <!-- 点赞 -->
          <van-button size="mini">
            <van-rate
              v-model="likeValue"
              @change="onChangeLike"
              color="red"
              void-color="#eee"
              icon="good-job"
              void-icon="good-job"
              :count="1"
              :size="15"
              clearable
            />
          </van-button>
          <!-- 收藏 -->
          <van-button size="mini">
            <van-rate
              v-model="starValue"
              @change="onChangeStar"
              color="#ffd21e"
              void-color="#eee"
              icon="star"
              void-icon="star-o"
              :count="1"
              :size="15"
              clearable
            />
          </van-button>
          <!-- 分享  -->
          <van-button size="mini">
            <van-icon name="share-o" size="20" @click="onClickShare" />
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
