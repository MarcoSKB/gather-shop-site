import { cva, type VariantProps } from 'class-variance-authority'

export const inputStyles = cva('font-poppins w-full', {
  variants: {
    variant: {
      primary:
        'placeholder:text-primary border-primary border-b border-solid uppercase placeholder:uppercase focus:outline-0 focus:placeholder:opacity-50',
    },
    size: {
      md: 'py-1.25 text-xs tracking-[10%]',
      lg: 'text-md py-5 leading-5.5 tracking-[2%]',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export type InputVariantsType = VariantProps<typeof inputStyles>
