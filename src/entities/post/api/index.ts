import { mapToPreviewPost } from '../lib/mappers'
import { MOCK_POSTS } from '../model/mocks'

export const getPost = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return MOCK_POSTS.find((post) => post.slug === slug)
}

export const getPostsList = async ({
  categoryId,
  excludePostId,
  limit = 6,
}: { limit?: number; categoryId?: string; excludePostId?: string } = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  let filtered = [...MOCK_POSTS]
  if (categoryId) {
    filtered = filtered.filter((post) => post.category.toLowerCase() === categoryId.toLowerCase())
  }
  if (excludePostId) {
    filtered = filtered.filter((post) => post.id !== excludePostId)
  }

  return filtered.slice(0, limit).map(mapToPreviewPost)
}
