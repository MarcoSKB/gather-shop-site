import { cva, type VariantProps } from 'class-variance-authority'

export const skeletonStyles = cva('animate-pulse bg-gray-300', {
  variants: {
    shape: {
      rectangle: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
    size: {
      text: 'h-4 w-full',
      title: 'h-5.25 w-3/4',
      image: 'aspect-video h-auto w-full',
      full: 'h-full w-full',
    },
  },
  defaultVariants: {
    shape: 'rectangle',
    size: 'text',
  },
})

export type SkeletonVariantsType = VariantProps<typeof skeletonStyles>
