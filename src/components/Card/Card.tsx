import React from 'react'
import { cn } from '../../utils/cn'
import './Card.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the card
   */
  variant?: 'default' | 'bordered' | 'elevated'
  /**
   * Padding size for the card content
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /**
   * Whether the card is hoverable
   */
  hoverable?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', hoverable = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'scimplify-card',
          `scimplify-card--${variant}`,
          `scimplify-card--padding-${padding}`,
          {
            'scimplify-card--hoverable': hoverable,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
