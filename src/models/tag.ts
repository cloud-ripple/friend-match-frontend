/**
 * 标签类别
 */
export type Tag = {
  id: number;
  tagName: string;
  userId: number;
  parentId: number;
  isParent: number;
  createTime: Date;
  updateTime: Date;
  isDelete: number;
}
