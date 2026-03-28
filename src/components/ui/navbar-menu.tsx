'use client'

import { motion } from 'motion/react'
import React, { useEffect, useRef } from 'react'
import { Link } from '@/i18n/navigation'

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: React.Dispatch<React.SetStateAction<string | null>>
  active: string | null
  item: string
  children?: React.ReactNode
  href?: string
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isHoveredRef = useRef(false)

  const clearPendingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleMouseEnter = () => {
    clearPendingTimeout()
    isHoveredRef.current = true
    setActive(item)
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
    timeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setActive(currentActive => {
          return currentActive === item ? null : currentActive
        })
      }
    }, 150)
  }

  const handleTooltipMouseEnter = () => {
    clearPendingTimeout()
    isHoveredRef.current = true
    setActive(item)
  }

  const handleTooltipMouseLeave = () => {
    isHoveredRef.current = false
    timeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setActive(currentActive => {
          return currentActive === item ? null : currentActive
        })
      }
    }, 150)
  }

  useEffect(() => {
    return () => {
      clearPendingTimeout()
    }
  }, [])

  const content = (
    <motion.p
      transition={{ duration: 0.3 }}
      className='cursor-pointer text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800  dark:text-white'
    >
      {item}
    </motion.p>
  )

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative '
    >
      {href ? (
        <Link href={href}>
          {content}
        </Link>
      ) : (
        content
      )}
      {children && active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          {active === item && (
            <div
              className='absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4'
              onMouseEnter={handleTooltipMouseEnter}
              onMouseLeave={handleTooltipMouseLeave}
            >
              <motion.div
                layoutId='active'
                className='bg-white dark:bg-black backdrop-blur-sm  overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl'
              >
                <motion.div layout className='w-max h-full p-4'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  active,
  children,
}: {
  setActive: React.Dispatch<React.SetStateAction<string | null>>
  active: string | null
  children: React.ReactNode
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget
    if (relatedTarget && relatedTarget instanceof Element) {
      const isTooltip = relatedTarget.closest('[class*="backdrop-blur-sm"]')
      if (isTooltip) {
        return
      }
      const isMenuItem = relatedTarget.closest('nav [class*="relative"]')
      if (isMenuItem) {
        return
      }
    }

    timeoutRef.current = setTimeout(() => {
      setActive(null)
    }, 200)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [active])

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative flex justify-center space-x-4 '
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className='shrink-0  shadow-2xl'
      />
      <div>
        <h4 className='text-xl font-bold mb-1 text-black dark:text-white'>
          {title}
        </h4>
        <p className='text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className='text-neutral-700 dark:text-neutral-200 hover:text-black '
    >
      {children}
    </Link>
  )
}


// export const HoveredLinkWITHOUTANC = ({ children, ...rest }: any) => {
//   return (
//     <div
//       {...rest}
//       className='text-neutral-700 dark:text-neutral-200 hover:text-black '
//     >
//       {children}
//     </div>
//   )
// }
