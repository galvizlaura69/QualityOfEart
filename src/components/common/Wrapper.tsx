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
        'mx-auto w-full px-5 md:max-w-[37rem] lg:max-w-[55rem] xl:max-w-[78rem] 2xl:max-w-[90rem]',
        className
      )}
    >
      {children}
    </div>
  )
}