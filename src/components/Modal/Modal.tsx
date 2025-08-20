import React, { useEffect } from 'react'
import { cn } from '../../utils/cn'
import './Modal.css'

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean
  /**
   * Callback when the modal should be closed
   */
  onClose: () => void
  /**
   * Modal title
   */
  title?: string
  /**
   * Modal content
   */
  children: React.ReactNode
  /**
   * Size of the modal
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Whether clicking the overlay closes the modal
   */
  closeOnOverlayClick?: boolean
  /**
   * Whether pressing ESC closes the modal
   */
  closeOnEscape?: boolean
  /**
   * Additional class name
   */
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}) => {
  // Handle ESC key
  useEffect(() => {
    if (!closeOnEscape || !open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeOnEscape, open, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="scimplify-modal-overlay" onClick={handleOverlayClick}>
      <div
        className={cn(
          'scimplify-modal',
          `scimplify-modal--${size}`,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <div className="scimplify-modal__header">
            <h2 id="modal-title" className="scimplify-modal__title">
              {title}
            </h2>
            <button
              className="scimplify-modal__close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71L12 12.01L5.7 5.71L4.29 7.12L10.59 13.42L4.29 19.72L5.7 21.13L12 14.83L18.3 21.13L19.71 19.72L13.41 13.42L19.71 7.12L18.3 5.71Z" />
              </svg>
            </button>
          </div>
        )}
        <div className="scimplify-modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
