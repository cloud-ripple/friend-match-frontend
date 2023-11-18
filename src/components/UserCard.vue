<script setup lang="ts">
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
</script>

<template>
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
</template>

<style scoped>

</style>