// 标签相关接口
import myAxios from '@/apis/request'


/**
 * 查询所有父标签(即所有分类标签)
 */
export const getParentTagsAPI = () => {
  return myAxios({
    url: '/parentTags'
  })
}

/**
 * 根据分类名称来查询该类别下的所有子标签
 */
export const getChildTagsByCategoryAPI = (category: string) => {
  return myAxios({
    url: '/categoryTags',
    params: {
      category
    }
  })
}

/**
 * 查询所有子标签
 */
export const getChildTagsAPI = () => {
  return myAxios({
    url: '/childTags',
  })
}
