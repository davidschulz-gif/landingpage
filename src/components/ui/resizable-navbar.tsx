'use client'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import React, { useEffect, useRef, useState } from 'react'

interface NavbarProps {
  children: React.ReactNode
  className?: string
  isScrolled?: boolean
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className, isScrolled }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 50) {
      // Reduced from 100
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  useEffect(() => {
    if (typeof isScrolled === 'boolean') {
      setVisible(isScrolled)
    }
  }, [isScrolled])

  return (
    <div
      ref={ref}
      className={cn(
        'sticky inset-x-0 top-16 z-40',
        isScrolled ? 'w-[60%] mx-auto mt-4 ' : 'w-full',
        className
      )}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          )
          : child
      )}
    </div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-none flex-row items-center justify-between self-start bg-transparent px-4 py-1 lg:flex dark:bg-transparent h-12',
        visible && 'bg-transparent dark:bg-neutral-950/80',
        className
      )}
    >
      {children}
    </div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className='relative px-4 py-2 text-neutral-600 dark:text-neutral-300'
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId='hovered'
              className='absolute inset-0 h-full w-full  bg-gray-100 dark:bg-neutral-800'
              transition={{ duration: 0.2 }} // Added transition
            />
          )}
          <span className='relative z-20'>{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        'relative z-[1000] mx-auto flex w-full max-w-[calc(100vw)] rounded-2xl flex-col items-center justify-between backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 px-2 py-2 lg:hidden',
        visible && 'bg-white/90 dark:bg-neutral-950/90  shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          className={cn(
            'absolute inset-x-0 top-16 !z-[1000] flex w-full flex-col items-start justify-start gap-4 bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 overflow-y-auto max-h-[calc(100vh-64px)] overscroll-behavior-contain pb-12',
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <IconX className='text-black dark:text-white' onClick={onClick} />
  ) : (
    <IconMenu2 className='text-black dark:text-white' onClick={onClick} />
  )
}

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <a
      href='#'
      className={`relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className='bg-black size-3 m-2.5'></div>
      <span
        className='text-center uppercase'
        style={{
          fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', serif",
          fontSize: '10px',
          fontWeight: 300,
          letterSpacing: '2px',
          lineHeight: '1.3em',
          color: '#000',
          textTransform: 'uppercase',
        }}
      >
        typus.AI
      </span>
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (
    | React.ComponentPropsWithoutRef<'a'>
    | React.ComponentPropsWithoutRef<'button'>
  )) => {
  const baseStyles =
    'px-3 py-1.5  bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-150 inline-block text-center' // Reduced padding and duration

  const variantStyles = {
    primary:
      'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent shadow-none dark:text-white',
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
