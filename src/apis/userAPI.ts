// 用户相关接口
import myAxios from '@/apis/request'

/**
 * 根据多个标签搜索用户
 * @param tagNameList 标签列表
 */
export const searchUsersByTags = (tagNameList:any) => {
  return myAxios({
    url: '/user/tags',
    params: {
      tagNameList
    }
  })
}
