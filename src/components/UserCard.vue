<script setup lang="ts">
import type UserListProps from '@/interface/UserListProps'
import type { User } from "@/models/user";
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

// 声明接收父组件传递过来的属性和方法（只能在模板语法中通过参数变量名使用，props父向子传递数据是单向的，数据不能修改，只读）
const props = withDefaults(defineProps<UserListProps>(),{
  // @ts-ignore
  userList:[] as User[]  // 如果父组件传递的数据为空，就给个默认值
})

</script>

<template>
  <!-- 此处的 usersList数据就是SearchResult.vue父组件传递过来的，在上面已经通过defineProps声明接收了-->
  <van-card
    v-for="user in usersList"
    tag="小黑子"
    :desc="user.selfDesc"
    :title="user.username"
    :thumb="user.avatarUrl"
    centered
  >
    <!--   自定义描述下方标签区域  -->
    <template #tags>
      <!--      {{ user.tags }}-->
      <!--      {{ JSON.parse(user.tags) }}-->
      <!--      {{ typeof JSON.parse(user.tags) }}-->
      <!--      {{ JSON.parse(user.tags)[0] }}-->
      <!--      {{ typeof JSON.parse(user.tags)[0] }}-->
      <van-space align="center" size="5px" style="padding: 5px" wrap fill>
        <van-tag
          plain
          round
          color="red"
          size="medium"
          :show="true"
          v-for="tag in JSON.parse(user.tags)"
          :key="tag"
        >
          {{ tag }}
        </van-tag>
      </van-space>
    </template>
    <!-- 自定义数量  -->
    <template #num>
      <van-icon name="contact" size="12">粉丝数：{{ user.fansNum }}</van-icon>
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
        <van-icon name="arrow" size="14">更多</van-icon>
      </van-button>
    </template>
  </van-card>
</template>

<style scoped></style>
