'use client'

import React, { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { appUrl } from '@/lib/constants'
import { AudienceToggle } from '@/components/common/audience-toggle'
import {
  Navbar,
  NavbarLogo,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '@/components/ui/resizable-navbar-2'

interface ManufacturerHeaderProps {
  onOpenContact?: () => void
}

export function ManufacturerHeader({ onOpenContact }: ManufacturerHeaderProps) {
  const t = useTranslations('provider')
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isManufacturerLanding =
    pathname === '/for-manufacturers' ||
    pathname.endsWith('/for-manufacturers') ||
    pathname === '/research' ||
    pathname.endsWith('/research')

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact()
    } else {
      window.location.href = 'mailto:hello@typus.ai'
    }
  }

  return (
    <Navbar>
      {/* Desktop Navigation - Exact styling & fonts matching main navbar */}
      <NavBody className="relative z-[60]" visible={true}>
        <NavbarLogo visible />

        {/* Center Nav Links */}
        <div className="w-fit shrink-0">
          <nav className="flex items-center space-x-6 xl:space-x-8">
            {isManufacturerLanding ? (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                {t('nav.aiModel')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers"
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {t('nav.aiModel')}
              </Link>
            )}
            <Link
              href="/embedded-configurator"
              className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {t('nav.appConfigurator')}
            </Link>
            {isManufacturerLanding ? (
              <button
                onClick={() => scrollToSection('teilnahmeprozess')}
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                {t('nav.participationProcess')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers#teilnahmeprozess"
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {t('nav.participationProcess')}
              </Link>
            )}
            {isManufacturerLanding ? (
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                {t('nav.pricing')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers#pricing"
                className="text-xs xl:text-[13px] font-medium uppercase tracking-wider text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {t('nav.pricing')}
              </Link>
            )}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 xl:gap-6 h-full shrink-0">
          <button
            onClick={handleContactClick}
            className="bg-black text-white hover:bg-neutral-800 px-4 py-2 text-[13px] rounded-2xl font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>{t('process.nav.contact')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={`${appUrl}/provider/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 shrink-0"
          >
            {t('process.nav.login')}
          </a>
          <AudienceToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo visible />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
      </MobileNav>

      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="w-full flex flex-col gap-6 font-sans pb-4">
          <div className="pb-2 pt-1 border-b border-gray-100 dark:border-neutral-800 flex justify-center">
            <AudienceToggle mobileFullWidth />
          </div>
          <div className="flex flex-col space-y-3">
            {isManufacturerLanding ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-left text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1 cursor-pointer"
              >
                {t('nav.aiModel')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1"
              >
                {t('nav.aiModel')}
              </Link>
            )}
            <Link
              href="/embedded-configurator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1"
            >
              {t('nav.appConfigurator')}
            </Link>
            {isManufacturerLanding ? (
              <button
                onClick={() => scrollToSection('teilnahmeprozess')}
                className="text-left text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1 cursor-pointer"
              >
                {t('nav.participationProcess')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers#teilnahmeprozess"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1"
              >
                {t('nav.participationProcess')}
              </Link>
            )}
            {isManufacturerLanding ? (
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1 cursor-pointer"
              >
                {t('nav.pricing')}
              </button>
            ) : (
              <Link
                href="/for-manufacturers#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-medium uppercase tracking-wider text-neutral-700 hover:text-black py-1"
              >
                {t('nav.pricing')}
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-neutral-800">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                handleContactClick()
              }}
              className="w-full bg-black text-white text-[13px] py-2.5 rounded-2xl font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{t('process.nav.contact')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`${appUrl}/provider/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-[13px] font-medium text-gray-700"
            >
              {t('process.nav.login')}
            </a>
          </div>
        </div>
      </MobileNavMenu>
    </Navbar>
  )
}