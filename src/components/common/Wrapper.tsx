import { ReactNode } from 'react'
import { cn } from './Utils'

interface WrapperProps {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-10',
        className
      )}
    >
      {children}
    </div>
  )
}