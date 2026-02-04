import { cva, type VariantProps } from 'class-variance-authority'

export const buttonStyles = cva(
  'box-border flex cursor-pointer items-center justify-center disabled:cursor-default',
  {
    variants: {
      variant: {
        primary:
          'bg-transparent transition-all duration-100 ease-in hover:translate-y-0.5 active:scale-90',
      },
      size: {
        md: 'size-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonVariantsType = VariantProps<typeof buttonStyles>
