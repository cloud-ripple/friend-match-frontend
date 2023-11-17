<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant'
// 图片预览组件辅助函数
import { showImagePreview } from 'vant'

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

// tab 标签激活值，默认高亮 name="recommend" 推荐标签
const active = ref('recommend')
// 点击标签触发
const onClickTab = (name: string, title: string, disabled: false) => {
  // console.log('tab 标签点击：',name,title,disabled) // 点击 tab 标签触发事件回调参数
  // console.log(`当前激活标签是${active.value}`);
}

// ------- 推荐伙伴 ----------
// 加好友
const onClickAddFriend = () => {
  console.log('点击了添加好友')
}
// 邀请入队
const onClickJoinTeam = () => {
  console.log('点击了邀请入队')
}
// 更多
const onClickMore = () => {
  console.log('点击了更多')
}

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
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg"
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
          </van-space>
        </template>
        <!-- 自定义数量  -->
        <template #num>
          <van-icon name="contact" size="12">粉丝数：8</van-icon>
        </template>
        <!-- 自定义右下角内容 -->
        <template #footer>
          <van-button size="mini" @click="onClickAddFriend">
            <van-icon name="add" size="14">关注</van-icon>
          </van-button>
          <van-button size="mini" @click="onClickJoinTeam">
            <van-icon name="invitation" size="14">邀请入队</van-icon>
          </van-button>
          <van-button size="mini" @click="onClickMore">
            <van-icon name="arrow" size="14">更多...</van-icon>
          </van-button>
        </template>
      </van-card>
    </van-tab>
    <!-- 好友圈 -->
    <van-tab title="好友圈" name="following">
      <van-card centered @click-thumb="onClickViewImage">
        <!-- 自定义卡片标题区域 -->
        <template #title>
          <van-cell title="单元格" is-link arrow-direction="down" value="更多..." center label="">
            <template #title>
              <van-image
                round
                fit="cover"
                width="45"
                height="45"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                @click="onClickUser"
              >
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image>
            </template>
            <template #label>
              <van-space align="center" size="7px" style="padding: 1px" wrap>
                <span> 用户: ripple123</span>
                <span><van-icon name="location" size="12">南京</van-icon></span>
                <span>2023-11-16</span>
              </van-space>
            </template>
          </van-cell>
        </template>
        <!-- 图片预览组件 -->
        <template #bottom>
          <van-image-preview
            v-model:show="isShowImage"
            :images="images"
            @change="onChangeImage"
            :closeable="true"
          >
          </van-image-preview>
        </template>
        <!-- 自定义文章标题下方区域 -->
        <template #desc>
          <!-- 微博文本内容区域（最多显示2行） -->
          <van-text-ellipsis
            rows="2"
            :content="articleText"
            expand-text="展开"
            collapse-text="收起"
            @click-action="onClickExpandOrCollapse"
          />
          <!-- 微博图片展示区域 -->
          <van-grid :gutter="3" :column-num="3" :border="false" :clickable="true" square>
            <van-grid-item v-for="value in 6" :key="value">
              <van-image
                fit="cover"
                width="110"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                @click="onClickImage"
              >
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image>
            </van-grid-item>
          </van-grid>
        </template>

        <!-- 自定义微博浏览数量(点击查看一次图片，浏览量 + 1) -->
        <template #num>
          <van-icon name="eye" size="12">浏览量：8</van-icon>
        </template>
        <!-- 自定义右下角内容 -->
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
        <!-- 自定义左侧图片 -->
        <!--        <template #thumb>-->
        <!--          <van-image-->
        <!--            lazy-load-->
        <!--            width="90"-->
        <!--            height="100"-->
        <!--            fit="cover"-->
        <!--            position="center"-->
        <!--            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"-->
        <!--          >-->
        <!--            <template v-slot:loading>-->
        <!--              <van-loading type="spinner" size="20" />-->
        <!--            </template>-->
        <!--          </van-image>-->
        <!--        </template>-->
        <!-- 自定义右下角内容 -->
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
