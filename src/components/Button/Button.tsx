import React from 'react'
import { cn } from '../../utils/cn'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        className={cn(
          'scimplify-button',
          `scimplify-button--${variant}`,
          `scimplify-button--${size}`,
          {
            'scimplify-button--loading': loading,
            'scimplify-button--disabled': isDisabled,
          },
          className
        )}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {loading && (
          <span className="scimplify-button__spinner" aria-hidden="true">
            <svg className="scimplify-button__spinner-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {!loading && leftIcon && (
          <span className="scimplify-button__icon scimplify-button__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className="scimplify-button__content">{children}</span>
        {!loading && rightIcon && (
          <span className="scimplify-button__icon scimplify-button__icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
