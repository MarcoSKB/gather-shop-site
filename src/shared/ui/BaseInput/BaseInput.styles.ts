import { cva, type VariantProps } from 'class-variance-authority'

export const inputStyles = cva('font-poppins w-full', {
  variants: {
    variant: {
      primary:
        'placeholder:text-primary border-primary border-b border-solid uppercase placeholder:uppercase focus:outline-0 focus:placeholder:opacity-50',
      secondary: 'border-primary placeholder:text-primary border',
    },
    size: {
      sm: 'py-1.25 text-xs tracking-[10%]',
      md: 'text-md py-5 leading-5.5 tracking-[2%]',
      lg: 'placeholder:text-primary/70 px-3 py-2 text-lg leading-6.25 placeholder:text-lg',
    },
  },
  defaultVariants: { variant: 'primary', size: 'sm' },
})

export type InputVariantsType = VariantProps<typeof inputStyles>
