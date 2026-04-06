import { mapToPreviewPost } from '../lib/mappers'
import { MOCK_POSTS } from '../model/mocks'
import type { GetPostListParams } from '../model/types'

export const getPost = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return MOCK_POSTS.find((post) => post.slug === slug)
}

export const getPostsList = async ({
  skip = 0,
  take = 6,
  categoryId,
  excludePostId,
}: GetPostListParams = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let filtered = [...MOCK_POSTS]
  if (categoryId) {
    filtered = filtered.filter((post) => post.category.toLowerCase() === categoryId.toLowerCase())
  }
  if (excludePostId) {
    filtered = filtered.filter((post) => post.id !== excludePostId)
  }

  return filtered.slice(skip, take).map(mapToPreviewPost)
}
