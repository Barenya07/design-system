/**
 * Utility function to combine class names
 * A lightweight alternative to clsx/classnames
 */
type ClassValue = string | number | boolean | undefined | null | Record<string, boolean>

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = []
  
  for (const input of inputs) {
    if (!input) continue
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input))
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key)
        }
      }
    }
  }
  
  return classes.join(' ')
}
