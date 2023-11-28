<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/models/user'
import { useRouter } from 'vue-router'

const router = useRouter()
// 点击导航栏左侧
const onClickLeft = () => {
  history.back()
}

// 点击导航栏右侧
const onClickRight = () => {
  router.push({
    name: 'sousuo'
  })
}

// 队伍信息
const user: any = ref<User>({
  id: 3, // id
  username: '云漪', // 用户昵称
  userAccount: 'ripple', // 用户账号
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg', // 用户头像
  gender: 1, // 用户性别
  userPassword: '11111111', //用户密码
  phone: '13267891234', // 电话
  email: '1493440094@qq.com', //邮箱
  userStatus: 0, //用户状态
  createTime: new Date('2023-11-23'), //创建时间
  updateTime: new Date('2023-11-23'), //更新时间
  isDelete: 0, //逻辑删除
  userRole: 1, //用户角色
  planetCode: 1, //星球编号
  tags: '["java", "网上冲浪"]', //用户所拥有的标签
  area: '苏州市', //所在地区
  selfDesc: '心动不如行动', //自我描述，个性签名
  fansNum: 0 //粉丝数量
})

// 队长头像url
const avatarUrl = ref([{ url: user.value.avatarUrl }])
</script>

<template>
  <!-- 顶部导航栏 -->
  <van-nav-bar
    title="队伍资料"
    left-text="返回"
    right-text="按钮"
    left-arrow
    fixed
    placeholder
    safe-area-inset-top
    clickable
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <!--导航栏右侧-内容插槽 -->
    <template #right>
      <van-icon name="search" size="25" />
    </template>
  </van-nav-bar>

  <!-- 队长头像 -->
  <van-row justify="center">
    <van-uploader
      v-model="avatarUrl"
      preview-size="90"
      accept="image/png, image/jpeg, image/jpg"
      reupload
      :show-upload="false"
      :deletable="false"
    />
  </van-row>

  <van-cell-group inset>
    <!--  队名 -->
    <van-cell title="队名" :value="user.username" size="large" />
    <!--  队伍ID -->
    <van-cell title="队伍ID" :value="user.gender === 1 ? '男' : '女'" size="large" />
    <!--  队伍描述 -->
    <van-cell title="队伍描述" :value="user.selfDesc" size="large" />
    <!--  队长 -->
    <van-cell title="队长" :value="user.gender === 1 ? '男' : '女'" size="large" />
    <!--  人数 -->
    <van-cell title="人数" :value="user.phone" size="large" />
    <!--  创建日期 -->
    <van-cell title="创建日期" :value="user.createTime.toDateString()" size="large" />
    <!--  队伍聊天室 -->
    <van-cell is-link title="队伍聊天室" :value="user.email" size="large" />
  </van-cell-group>
  <!-- 分割线 -->
  <van-divider :style="{ color: '#151313', borderColor: '#a29999' }">成员概览</van-divider>
  <!-- 队伍成员 -->
  <!--  <UserCard />-->
</template>

<style scoped></style>
