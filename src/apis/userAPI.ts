// 用户相关接口
import myAxios from '@/apis/request'
import type { User } from '@/models/user'

/**
 * 根据多个标签搜索用户
 * @param tagNameList 标签列表
 */
export const searchUsersByTagsAPI = (tagNameList: any) => {
  return myAxios({
    url: '/user/search/tags',
    params: {
      tagNameList
    }
  })
}

export const updateUserAPI = (user: User) => {
  console.log('更新用户：', user)
  return myAxios({
    url: '/user/update',
    method: 'post',
    data: user
  })
}

export const userLoginAPI = (userAccount: any, userPassword: any) => {
  return myAxios({
    url: '/user/login',
    method: 'post',
    data: {
      userAccount,
      userPassword
    }
  })
}

export const currentUserAPI = () => {
  return myAxios({
    url: '/user/current'
  })
}

// 主页推荐用户（分页查询） - 相似度匹配
export const recommendUsersAPI = (pageSize: number = 5, pageNum: number = 1) => {
  return myAxios({
    url: '/user/recommend',
    params: {
      pageSize,
      pageNum
    }
  })
}
