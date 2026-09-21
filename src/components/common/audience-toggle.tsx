'use client'

import React from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

interface AudienceToggleProps {
  className?: string
  mobileFullWidth?: boolean
}

export function AudienceToggle({
  className = '',
  mobileFullWidth = false,
}: AudienceToggleProps) {
  const pathname = usePathname()
  const locale = useLocale()
  const isGerman = locale === 'de'

  // If path is for-manufacturers, configurator, or research, manufacturer is selected
  const isManufacturer = pathname
    ? pathname.startsWith('/for-manufacturers') ||
      pathname.startsWith('/embedded-configurator') ||
      pathname.startsWith('/configurator') ||
      pathname.startsWith('/research')
    : false

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100/90 dark:bg-neutral-900/90 select-none shadow-2xs ${
        mobileFullWidth ? 'w-full justify-between' : ''
      } ${className}`}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* Option 1: Für Architekten */}
      <Link
        href="/"
        className={`flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap cursor-pointer ${
          mobileFullWidth ? 'flex-1' : ''
        } ${
          !isManufacturer
            ? 'bg-black text-white font-bold shadow-xs'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-medium hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
        }`}
      >
        <span>{isGerman ? 'Für Architekten' : 'For Architects'}</span>
      </Link>

      {/* Option 2: Für Hersteller */}
      <Link
        href="/for-manufacturers"
        className={`flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap cursor-pointer ${
          mobileFullWidth ? 'flex-1' : ''
        } ${
          isManufacturer
            ? 'bg-black text-white font-bold shadow-xs'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-medium hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
        }`}
      >
        <span>{isGerman ? 'Für Hersteller' : 'For Manufacturers'}</span>
      </Link>
    </div>
  )
}

export default AudienceToggle