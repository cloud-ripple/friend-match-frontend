/**
 * 标签类别
 */
export type Tag = {
  id: number //主键id
  tagName: string //标签名
  userId: number //用户id
  parentId: number //父标签id
  category: string //标签分类
  isParent: number //是否为父标签 0-不是，1-是父标签
  createTime: Date
  updateTime: Date
  isDelete: number
}
