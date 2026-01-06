import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/lib/types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'font-body font-semibold uppercase tracking-wide rounded transition-all duration-base',
          'focus-visible:outline-2 focus-visible:outline-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variants
          variant === 'primary' && 'bg-muted-gold text-white hover:bg-[#B39055] focus-visible:outline-muted-gold shadow-md hover:shadow-lg',
          variant === 'secondary' && 'bg-transparent text-midnight-blue border-2 border-midnight-blue hover:bg-midnight-blue hover:text-white',
          variant === 'ghost' && 'bg-transparent text-midnight-blue hover:bg-off-white',

          // Sizes
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'px-8 py-4',
          size === 'lg' && 'px-12 py-5 text-lg',

          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
