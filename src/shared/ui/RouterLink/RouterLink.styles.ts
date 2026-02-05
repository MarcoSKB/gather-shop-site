import { cva, type VariantProps } from 'class-variance-authority'

export const linkStyles = cva('text-nowrap aria-[current="page"]:pointer-events-none', {
  variants: {
    variant: {
      primary:
        'font-poppins text-primary before:bg-primary relative z-0 py-1.5 transition-opacity before:absolute before:bottom-2 before:left-0 before:h-px before:w-[0%] before:transition-all before:duration-300 before:content-[""] hover:before:w-full active:opacity-50 aria-[current="page"]:before:w-full',
      secondary:
        'font-spectral text-primary transition-opacity duration-150 ease-in hover:opacity-60',
    },
    size: {
      md: 'text-base',
      lg: 'text-2xl',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export type LinkStylesType = VariantProps<typeof linkStyles>
