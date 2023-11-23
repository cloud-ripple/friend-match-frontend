/**
 * 用户类别
 */
export type User = {
  id: number // id
  username: string // 用户昵称
  userAccount: string // 用户账号
  avatarUrl: string // 用户头像
  gender: number // 用户性别
  userPassword: string //用户密码
  phone: string // 电话
  email: string //邮箱
  userStatus: number //用户状态
  createTime: Date //创建时间
  updateTime: Date //更新时间
  isDelete: number //逻辑删除
  userRole: number //用户角色
  planetCode: number //星球编号
  tags: string //用户所拥有的标签
  area: string //所在地区
  selfDesc: string //自我描述，个性签名
  fansNum: number //粉丝数量
}
