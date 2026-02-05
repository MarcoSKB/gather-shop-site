import { cva, type VariantProps } from 'class-variance-authority'

export const linkStyles = cva(
  'font-poppins text-nowrap aria-[current="page"]:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'text-primary before:bg-primary relative z-0 py-1.5 transition-opacity before:absolute before:bottom-2 before:left-0 before:h-px before:w-[0%] before:transition-all before:duration-300 before:content-[""] hover:before:w-full active:opacity-50 aria-[current="page"]:before:w-full',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
)

export type LinkStylesType = VariantProps<typeof linkStyles>
