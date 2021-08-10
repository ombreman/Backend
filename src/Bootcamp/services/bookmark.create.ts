import { prisma } from '../../Infrastructures/utils/prisma'
import createBookmarkValidator from '../validators/createBookmark.validator'

export default (DTO: createBookmarkValidator) => {
  const Bookmark = prisma.bootcampBookmark
  return Bookmark.create({ data: DTO })
}