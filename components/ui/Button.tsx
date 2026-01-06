import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/lib/types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps & { asChild?: boolean }>(
  ({ variant = 'primary', size = 'md', className, children, asChild, ...props }, ref) => {
    const baseStyles = cn(
      'font-body font-semibold uppercase tracking-wide rounded transition-all duration-base',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variant === 'primary' && 'bg-muted-gold text-white hover:bg-[#B39055] focus-visible:outline-muted-gold shadow-md hover:shadow-lg',
      variant === 'secondary' && 'bg-transparent text-midnight-blue border-2 border-midnight-blue hover:bg-midnight-blue hover:text-white',
      variant === 'ghost' && 'bg-transparent text-midnight-blue hover:bg-off-white',
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-8 py-4',
      size === 'lg' && 'px-12 py-5 text-lg',
      className
    )

    if (asChild && typeof children === 'object' && children !== null && 'type' in children) {
      const child = children as React.ReactElement
      return (
        <child.type
          {...child.props}
          className={cn(baseStyles, 'inline-block text-center', child.props.className)}
        />
      )
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
