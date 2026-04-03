export const BLOCK_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  HEADER: 'header',
  EDITORIAL: 'editorial',
  LINE: 'line',
} as const

type BlockType = (typeof BLOCK_TYPE)[keyof typeof BLOCK_TYPE]

interface BaseBlock {
  id: string
  type: BlockType
}

export interface LineBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.LINE
  data: null
}

export interface TextBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.TEXT
  data: {
    type: 'paragraph' | 'heading' | 'quote'
    content: string
  }
}

export interface ImageBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.IMAGE
  data: {
    url: string
    variant: 'default' | 'small'
    caption?: string
  }
}

export interface HeaderBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.HEADER
  data: {
    title: string
    category: string
    subtitle?: string
    url: string
  }
}

export interface EditorialBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.EDITORIAL
  data: {
    left: ImageBlock
    right: ImageBlock
    center: Array<TextBlock>
  }
}

export type PostBlock = LineBlock | TextBlock | ImageBlock | HeaderBlock | EditorialBlock

export interface Post {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  cover: string
  blocks: PostBlock[]
}

export type PreviewPost = Omit<Post, 'blocks' | 'date'>

export interface GetPostListParams {
  skip?: number
  take?: number
  categoryId?: string
  excludePostId?: string
}
