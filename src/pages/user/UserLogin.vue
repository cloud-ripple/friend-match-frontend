<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userLoginAPI } from '@/apis/userAPI'
import { showToast } from "vant";
// 用户账号
const userAccount = ref('')
// 用户密码
const userPassword = ref('')

const router = useRouter()

// 表单提交
const onSubmit = () => {}
// 登录
const onClickLogin = async () => {
  const res = await userLoginAPI(userAccount.value, userPassword.value)
  console.log('登录：', res)
  if (res.data.code === 200) {
    showToast({type:'success', message:'登录成功'})
    router.replace('/')
  }
}
// 注册
const onClickRegister = () => {
  router.push({
    path: '/register'
  })
}
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="userAccount"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="userPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <van-row justify="center">
      <van-col span="8">
        <van-button
          @click="onClickLogin"
          style="width: 99px; height: 44px; font-size: 14px"
          type="primary"
          native-type="submit"
        >
          登录
        </van-button>
      </van-col>
      <van-col span="8">
        <van-button
          @click="onClickRegister"
          style="width: 99px; height: 44px; font-size: 14px"
          type="primary"
          native-type="submit"
        >
          注册
        </van-button>
      </van-col>
    </van-row>
  </van-form>
</template>
<style scoped></style>
