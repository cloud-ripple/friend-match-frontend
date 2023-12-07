import { ref } from 'vue'
import { defineStore } from 'pinia'
import { currentUserAPI } from '@/apis/userAPI'
import type { User } from "@/models/user";

// 当前登录用户
export const useCurrentUserStore = defineStore('currentUser', () => {
  const user:any = ref<User>()
  // 获取当前登录用户
  const getCurrentUser = async () => {
    const result = await currentUserAPI()
    user.value = result.data
    // console.log('当前登录用户：', result.data)
    // console.log('当前登录用户：', currentUser.value)
  }

  return { user, getCurrentUser }
})
