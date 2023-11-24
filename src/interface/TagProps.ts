import { Tag } from '@/models/tag'

export default interface TagProps {
  selectedTagsList: string[]
  childTagsList: Tag[]
}
