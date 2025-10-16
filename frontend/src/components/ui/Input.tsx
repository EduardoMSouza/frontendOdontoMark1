import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    icon,
    iconPosition = 'left',
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400">
              {icon}
            </div>
          )}
          
          <motion.input
            ref={ref}
            id={inputId}
            className={clsx(
              'input',
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              error && 'border-error-500 focus:ring-error-500',
              className
            )}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400">
              {icon}
            </div>
          )}
        </div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-error-600"
          >
            {error}
          </motion.p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-secondary-600">
            {helperText}
          </p>
        )}
      </motion.div>
    )
  }
)

Input.displayName = 'Input'