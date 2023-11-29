/**
 * 分页查询结果类型
 */
export type PageResult = {
  current: number // 当前页码
  pages: number // 总页数
  records: [] // 当前分页的查询数据
  size: number //每页展示记录数
  total: number //查询到的总记录数
}
