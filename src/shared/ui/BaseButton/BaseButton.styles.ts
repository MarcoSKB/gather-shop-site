import { cva, type VariantProps } from 'class-variance-authority'

export const buttonStyles = cva(
  'font-poppins box-border flex w-full cursor-pointer items-center justify-center text-base tracking-[2%] transition-colors duration-250 ease-in disabled:cursor-default',
  {
    variants: {
      variant: {
        primary:
          'text-primary border-primary hover:bg-primary hover:text-inverse border border-solid',
        secondary:
          'bg-primary text-inverse hover:bg-inverse border-primary boder-solid hover:text-primary border',
      },
      size: {
        md: 'px-4 py-2 lg:px-6',
        lg: 'p-6',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonVariantsType = VariantProps<typeof buttonStyles>
