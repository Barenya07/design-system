import React from 'react'
import { cn } from '../../utils/cn'
import './Input.css'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the input
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Visual state of the input
   */
  state?: 'default' | 'error' | 'success'
  /**
   * Label for the input
   */
  label?: string
  /**
   * Helper text or error message
   */
  helperText?: string
  /**
   * Icon to display on the left side
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display on the right side
   */
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    size = 'md',
    state = 'default',
    label,
    helperText,
    leftIcon,
    rightIcon,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="scimplify-input-group">
        {label && (
          <label htmlFor={inputId} className="scimplify-input__label">
            {label}
          </label>
        )}
        <div className="scimplify-input__wrapper">
          {leftIcon && (
            <span className="scimplify-input__icon scimplify-input__icon--left">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            className={cn(
              'scimplify-input',
              `scimplify-input--${size}`,
              `scimplify-input--${state}`,
              {
                'scimplify-input--with-left-icon': !!leftIcon,
                'scimplify-input--with-right-icon': !!rightIcon,
              },
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className="scimplify-input__icon scimplify-input__icon--right">
              {rightIcon}
            </span>
          )}
        </div>
        {helperText && (
          <span className={cn(
            'scimplify-input__helper-text',
            `scimplify-input__helper-text--${state}`
          )}>
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
