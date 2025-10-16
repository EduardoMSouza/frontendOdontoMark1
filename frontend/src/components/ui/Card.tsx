import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}

export function Card({ 
  children, 
  className, 
  hover = true, 
  clickable = false,
  onClick 
}: CardProps) {
  return (
    <motion.div
      className={clsx(
        'card',
        clickable && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -2, scale: 1.02 } : {}}
      whileTap={clickable ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('card-header', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('card-content', className)}>
      {children}
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'positive' | 'negative'
  }
  icon?: React.ReactNode
  className?: string
}

export function StatCard({ title, value, change, icon, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx('stat-card', className)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="stat-label">{title}</h3>
        {icon && (
          <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
            {icon}
          </div>
        )}
      </div>
      
      <div className="stat-value">{value}</div>
      
      {change && (
        <div className={clsx('stat-change', change.type)}>
          <span>
            {change.type === 'positive' ? '↗' : '↘'} {Math.abs(change.value)}%
          </span>
          <span className="text-secondary-500">vs mês anterior</span>
        </div>
      )}
    </motion.div>
  )
}