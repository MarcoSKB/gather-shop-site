export const BLOCK_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  QUOTE: 'quote',
  GALLERY: 'gallery',
  HEADER: 'header',
} as const

type BlockType = (typeof BLOCK_TYPE)[keyof typeof BLOCK_TYPE]

interface BaseBlock {
  id: string
  type: BlockType
}

interface TextBlock extends BaseBlock {
  type: BlockType
  data: {
    html: string
    dropCap?: boolean
  }
}

interface ImageBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.IMAGE
  data: {
    url: string
    caption?: string
    aspectRatio?: '16/9' | '4/3' | 'original'
  }
}

interface QuoteBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.QUOTE
  data: {
    text: string
    author?: string
  }
}

interface HeaderBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.HEADER
  data: {
    text: string
  }
}

interface GalleryBlock extends BaseBlock {
  type: typeof BLOCK_TYPE.GALLERY
  data: {
    images: string[]
    columns: number
  }
}

type PostBlock = TextBlock | ImageBlock | QuoteBlock | HeaderBlock | GalleryBlock

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

export interface PreviewPost {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
}
