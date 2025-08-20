import React from 'react'
import { cn } from '../../utils/cn'
import './Spinner.css'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the spinner
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Color variant of the spinner
   */
  variant?: 'primary' | 'secondary' | 'white'
  /**
   * Text to display alongside the spinner
   */
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', variant = 'primary', label, ...props }, ref) => {
    return (
      <div
        className={cn(
          'scimplify-spinner-container',
          {
            'scimplify-spinner-container--with-label': !!label,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'scimplify-spinner',
            `scimplify-spinner--${size}`,
            `scimplify-spinner--${variant}`
          )}
          role="status"
          aria-label={label || 'Loading'}
        >
          <svg className="scimplify-spinner__svg" viewBox="0 0 50 50">
            <circle
              className="scimplify-spinner__circle"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
        {label && (
          <span className="scimplify-spinner__label">{label}</span>
        )}
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner
