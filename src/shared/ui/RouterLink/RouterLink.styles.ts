import { cva, type VariantProps } from 'class-variance-authority'

export const linkStyles = cva('aria-[current="page"]:pointer-events-none', {
  variants: {
    variant: {
      primary:
        'font-poppins text-primary before:bg-primary relative z-0 py-1.5 text-nowrap transition-opacity before:absolute before:bottom-2 before:left-0 before:h-px before:w-[0%] before:transition-all before:duration-300 before:content-[""] hover:before:w-full active:opacity-50 aria-[current="page"]:before:w-full',
      secondary:
        'font-spectral text-primary text-nowrap transition-opacity duration-150 ease-in hover:opacity-60',
      tertiary:
        'text-primary border-primary hover:bg-primary hover:text-inverse font-poppins box-border flex w-full cursor-pointer items-center justify-center border border-solid px-4 py-2 text-base tracking-[2%] text-nowrap transition-colors duration-250 ease-in disabled:cursor-default lg:px-6',
      plain: '',
    },
    size: {
      md: 'text-base',
      lg: 'text-2xl',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export type LinkStylesType = VariantProps<typeof linkStyles>
