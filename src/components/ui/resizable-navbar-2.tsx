'use client'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'

import { Link } from '@/i18n/navigation'
import React, { useRef, useState } from 'react'

interface NavbarProps {
  children: React.ReactNode
  className?: string
  setDoNotShowMegaMenu?: any
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

export const Navbar = ({
  children,
  className,
  setDoNotShowMegaMenu,
}: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 100) {
      if (setDoNotShowMegaMenu) {
        setDoNotShowMegaMenu(true)
      }
      setVisible(true)
    } else {
      if (setDoNotShowMegaMenu) {
        setDoNotShowMegaMenu(false)
      }
      setVisible(false)
    }
  })

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn(
        'sticky inset-x-0 top-2 z-[1000] w-full px-4',
        {
          '-top-4': !visible,
        },
        className
      )}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child) : child
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? 'blur(20px) saturate(180%)'
          : 'blur(12px) saturate(180%)',
        boxShadow: visible
          ? 'none'
          : '0 4px 24px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)',
        width: visible ? '95%' : '100%',
        y: visible ? 20 : 0,
        borderRadius: visible ? '0px' : '24px',
        borderWidth: visible ? '1px' : '0px',
        borderColor: visible
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(255, 255, 255, 0)',
        height: 'auto',
      }}
      transition={{
        backdropFilter: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        boxShadow: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        width: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        y: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        borderRadius: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        borderWidth: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        borderColor: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
        height: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      layout
      style={{
        minWidth: '800px',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between bg-white/70 dark:bg-neutral-950/70 lg:flex',
        'shadow-lg',
        'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible
          ? 'border border-white/20 dark:border-neutral-800/50 px-6 py-3'
          : 'border border-transparent px-6 py-3',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        ' hidden flex-1 space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
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
            />
          )}
          <span className='relative z-20'>{item.name}</span>
        </Link>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: visible ? '90%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: visible ? '4px' : '2rem',
        y: visible ? 20 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
        visible && 'bg-white/80 dark:bg-neutral-950/80',
        className
      )}
    >
      {children}
    </motion.div>
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={cn(
            'absolute right-0 top-16 z-50 flex w-full max-w-sm flex-col items-start justify-start gap-4  bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
    <Link
      href='/'
      className={`relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className='bg-black size-4 m-3'></div>
      <span
        className='text-center uppercase'
        style={{
          fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', serif",
          fontSize: '18px',
          fontWeight: 300,
          letterSpacing: '2.5px',
          lineHeight: '1.3em',
          color: '#000',
          textTransform: 'uppercase',
        }}
      >
        typus.AI
      </span>
    </Link>
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
    'px-4 py-2  bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center'

  const variantStyles = {
    primary:
      'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent shadow-none dark:text-white',
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  }

  return (
    <Link
      href={href || '#'}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...(props as any)}
    >
      {children}
    </Link>
  )
}
