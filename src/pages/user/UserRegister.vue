<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 用户账号
const userAccount = ref('')
// 用户密码
const userPassword = ref('')
// 确认密码
const checkPassword = ref('')
// 校验账号
const validAccount = (val: any) => {
  // console.log('账号：', val)
  return true
}
// 校验函数，判断两次输入的密码是否一致，返回 true 代表校验通过
const validPassword = () => {
  return userPassword.value === checkPassword.value
}
// 表单提交
const onSubmit = () => {}
const router = useRouter()

// 注册
const onClickRegister = () => {
  console.log('注册表单：', form.value.getValues())
}
// 返回登录
const onClickReturn = () => {
  router.push({
    path: '/login'
  })
}
// 表单组件实例, 通过 ref="form" 引用
const form = ref()
</script>

<template>
  <van-form @submit="onSubmit" label-align="right" input-align="left" ref="form">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="userAccount"
        label="账号"
        placeholder="请输入账号"
        :rules="[
          {
            required: true,
            message: '请填写账号',
            validator: validAccount
          }
        ]"
      />
      <van-field
        v-model="userPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="checkPassword"
        type="password"
        name="checkPassword"
        label="确认密码"
        placeholder="请确认密码"
        :rules="[{ required: true, message: '两次输入的密码不一致', validator: validPassword }]"
      />
    </van-cell-group>
  </van-form>

  <van-row justify="center">
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
    <van-col span="8">
      <van-button
        @click="onClickReturn"
        style="width: 99px; height: 44px; font-size: 14px"
        type="primary"
        native-type="submit"
      >
        返回登录
      </van-button>
    </van-col>
  </van-row>
</template>

<style scoped></style>
