'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ActionButtonProps {
  href: string
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const ActionButton = ({
  href,
  className = '',
  children,
  icon,
  onClick,
}: ActionButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex shrink-0 bg-black justify-between items-center gap-5 rounded-none px-1 ps-5 py-1 text-white leading-none transition-all disabled:opacity-60 disabled:pointer-events-none ${className}`}
    >
      <span className='text-base font-light'>{children}</span>
      <span className='flex aspect-square w-9 shrink-0 items-center justify-center rounded-none bg-white transition-transform group-hover:scale-110 text-black'>
        {icon || <ArrowRight />}
      </span>
    </Link>
  )
}
