import type { Post, PreviewPost } from '../model/types'

export const mapToPreviewPost = (post: Post): PreviewPost => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    subtitle: post.subtitle,
    category: post.category,
    cover: post.cover,
  }
}
