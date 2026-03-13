'use client'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '@/components/ui/resizable-navbar'
import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar-2'
import { Play } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'

export function NavbarDemo() {
  const t = useTranslations('Navbar')
  const tNav = useTranslations('Navbar.navigation')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [doNotShowMegaMenu, setDoNotShowMegaMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)

  const [appActive, setAppActive] = useState<string | null>(null)
  const pathname = usePathname()
  const isDoneForYou = pathname.includes('/done-for-you')
  const locale = useLocale()
  // Get translated navigation items
  const getTranslatedNavItems = () => {
    return [
      {
        name: t('solutions'),
        link: '#solutions',
        submenu: [
          { title: t('app'), isSection: true },
          {
            title: tNav('solutions.create.title'),
            description: tNav('solutions.create.description'),
            link: '#create',
          },
          {
            title: tNav('solutions.edit.title'),
            description: tNav('solutions.edit.description'),
            link: '#edit',
          },
          {
            title: tNav('solutions.upscale.title'),
            description: tNav('solutions.upscale.description'),
            link: '#upscale',
          },
          { title: t('service'), isSection: true },
          {
            title: tNav('solutions.bilderFlatrate.title'),
            description: tNav('solutions.bilderFlatrate.description'),
            link: '/done-for-you',
          },
        ],
      },
      {
        name: t('community'),
        link: '#community',
        submenu: [
          {
            title: tNav('community.tutorials.title'),
            description: tNav('community.tutorials.description'),
            link: 'https://www.youtube.com/@typus_ai',
            target: '_blank',
          },
          {
            title: tNav('community.press.title'),
            description: tNav('community.press.description'),
            link: '#press',
          },
          {
            title: tNav('community.reviews.title'),
            description: tNav('community.reviews.description'),
            link: '#reviews',
          },
          {
            title: tNav('community.instagram.title'),
            description: tNav('community.instagram.description'),
            link: 'https://www.instagram.com/typus.ai/',
            target: '_blank',
          },
          {
            title: tNav('community.linkedin.title'),
            description: tNav('community.linkedin.description'),
            link: 'https://www.linkedin.com/company/typus-ai/',
            target: '_blank',
          },
        ],
      },
      {
        name: t('licenses'),
        link: '#licenses',
        submenu: [
          {
            title: tNav('licenses.pricing.title'),
            description: tNav('licenses.pricing.description'),
            link: '#pricing',
          },
          {
            title: tNav('licenses.plugins.title'),
            description: tNav('licenses.plugins.description'),
            link: '#plugins',
          },
          {
            title: tNav('licenses.studentAccess.title'),
            description: tNav('licenses.studentAccess.description'),
            link: '#student-access',
          },
        ],
      },
      {
        name: t('contact'),
        link: '#contact',
        submenu: [
          {
            title: tNav('contact.bookCall.title'),
            description: tNav('contact.bookCall.description'),
            link: 'mailto:hello@typus.ai',
            target: '_blank',
          },
        ],
      },
    ]
  }

  const translatedNavItems = getTranslatedNavItems()

  const handleMenuEnter = () => {
    setIsMenuOpen(true)
  }

  const handleMenuLeave = () => {
    setIsMenuOpen(false)
  }

  return (
    <Navbar setDoNotShowMegaMenu={setDoNotShowMegaMenu}>
      {/* Desktop Navigation */}
      <NavBody className='relative z-[60]' visible={!doNotShowMegaMenu}>
        {!doNotShowMegaMenu ? (
          <div className='w-20'></div>
        ) : (
          <NavbarLogo visible />
        )}
        <div
          className='w-fit'
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          {doNotShowMegaMenu ? (
            <Menu setActive={setActive} active={active}>
              {translatedNavItems.map((navItem, idx) => (
                <MenuItem
                  key={`menu-item-${idx}`}
                  setActive={setActive}
                  active={active}
                  item={navItem.name}
                >
                  <div className='flex flex-col space-y-4 text-sm'>
                    {navItem.submenu?.map((subitem: any, subIdx) => (
                      subitem.isSection ? (
                        <div key={`section-label-${idx}-${subIdx}`} className='pt-2 first:pt-0'>
                          <h5 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1'>
                            {subitem.title}
                          </h5>
                        </div>
                      ) : (
                        <HoveredLink
                          key={`hovered-link-${idx}-${subIdx}`}
                          href={subitem.link}
                          target={subitem?.target}
                        >
                          <h1 className='font-semibold'>{subitem.title}</h1>
                          <p>{subitem.description}</p>
                        </HoveredLink>
                      )
                    ))}
                  </div>
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <NavItems items={translatedNavItems} />
          )}
        </div>
        <div className='flex items-center gap-6 h-full'>
          <Link
            href={isDoneForYou ? '/' : '/done-for-you'}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
          </Link>
          {/* <Link
            href={'https://app.typus.ai/login'}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {t('login')}
          </Link>
          <Link
            href={'https://app.typus.ai/register'}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {t('signUp')}
          </Link> */}
          {/* <ActionButton
            href={`https://app.typus.ai/register?language=${locale}`}
            className="!ps-4 !pe-1 transform scale-90 origin-right"
          >
            {t('goToApp')}
          </ActionButton> */}
          <Link
            href={`https://app.typus.ai/register?language=${locale}`}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {t('goToApp')}
          </Link>
        </div>
      </NavBody>
      {!doNotShowMegaMenu && (
        <div
          ref={menuRef}
          className={`fixed left-0 right-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-2xl shadow-black/10 z-[1002] transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
            isMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }`}
          style={{ top: `0px` }}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <div className='relative overflow-hidden flex justify-between items-start py-8 px-3'>
            {/* Subtle gradient background */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/80"></div> */}

            <div className='-mt-3'>
              <NavbarLogo visible />
            </div>

            <div className='relative max-w-[80%] mx-auto px-8 '>
              <div className='relative'>
                <div className='grid grid-cols-4 gap-8'>
                  {translatedNavItems.map((navItem, navIdx) => (
                    <div
                      key={`section-${navIdx}`}
                      className={`space-y-4 transition-all duration-400 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${
                        isMenuOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-3'
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${navIdx * 50}ms`
                          : '0ms',
                      }}
                    >
                      <div className='relative'>
                        <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-1'>
                          {navItem.name}
                        </h3>
                        <div className='w-8 h-px bg-gradient-to-r from-black to-gray-800'></div>
                      </div>
                      <div className='space-y-3'>
                        {navItem.submenu?.map((subitem: any, subIdx) => (
                          subitem.isSection ? (
                            <div key={`section-label-${navIdx}-${subIdx}`} className='pt-4 first:pt-0'>
                              <h5 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2'>
                                {subitem.title}
                              </h5>
                            </div>
                          ) : (
                            <a
                              key={`submenu-${navIdx}-${subIdx}`}
                              href={subitem.link}
                              target={subitem.target ?? '_self'}
                              className='block group/item p-2 -mx-2  hover:bg-gray-50/80 hover:shadow-sm transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)] hover:translate-x-1'
                            >
                              <div className='flex-1'>
                                <h4 className='text-[12px] font-medium text-gray-900 group-hover/item:text-black mb-1 transition-colors duration-200'>
                                  {subitem.title}
                                </h4>
                                <p style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }} className='text-[11px] text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-200'>
                                  {subitem.description}
                                </p>
                              </div>
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className='absolute bottom-0 right-0 gap-4 flex'>
                   <Image
                    className='h-12 w-36'
                    src='/bdbau.png'
                    alt=''
                    width={200}
                    height={200}
                  />
                  <Image
                    className='h-9 w-auto'
                    src={
                      locale === 'de'
                        ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                        : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
                    }
                    alt=''
                    style={{
                      transform: `scale(${locale === 'en' ? '2.5' : '1'})`,
                      padding: locale === 'en' ? '0 38px' : '0',
                    }}
                    width={200}
                    height={200}
                  /> 
                  <Image
                    className='h-9 w-auto'
                    src='/Logo_MWIKE.jpg'
                    alt=''
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              {/* Premium bottom section */}
              {/* Premium bottom section - hidden when menu is open */}
              <div
                className={`mt-6 pt-4 border-t border-gray-200/60 transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]`}
                style={{
                  transitionDelay: isMenuOpen ? '0ms' : '200ms',
                }}
              >
                <div className='flex items-center justify-between'>
                  <div className='text-[10px] text-gray-500 font-medium tracking-wide'>
                    {t('explorePlatform')}
                  </div>
                  <div className='flex items-center gap-6'>
                    <Link
                      href='#demo'
                      className='inline-flex items-center gap-1.5 text-[11px] text-black hover:text-gray-900 font-medium transition-all duration-200 hover:translate-x-0.5'
                    >
                      <Play className='w-3 h-3' />
                      {t('explorePlatform')}
                    </Link>
                    <a
                      href='#pricing'
                      className='text-[11px] text-gray-800 hover:text-gray-900 font-medium px-3 py-1.5  hover:bg-gray-100/60 transition-all duration-200'
                    >
                      {t('seePricing')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6 h-full'>
              <Link
                href={isDoneForYou ? '/' : '/done-for-you'}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
              </Link>
              <Link
                href={`https://app.typus.ai/login`}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {t('login')}
              </Link>
               <Link
                href={`https://app.typus.ai/register?language=${locale}`}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {t('signUp')}
              </Link>
              {/* <div className='relative h-full flex items-center pt-2'>
                <Menu setActive={setAppActive} active={appActive}>
                  <MenuItem setActive={setAppActive} active={appActive} item={t('goToApp')}>
                    <div className='flex flex-col space-y-2 p-1 min-w-[100px]'>
                       <HoveredLink href="https://app.typus.ai/login" className="text-[13px]">{t('login')}</HoveredLink>
                       <HoveredLink href={`https://app.typus.ai/register?language=${locale}`} className="text-[13px]">{t('signUp')}</HoveredLink>
                    </div>
                  </MenuItem>
                </Menu>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo visible />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {translatedNavItems.map((item, idx) => (
            <div key={`mobile-item-${idx}`} className='space-y-2'>
              <a
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className='relative text-neutral-600 dark:text-neutral-300 font-medium'
              >
                <span className='block'>{item.name}</span>
              </a>
              <div className='pl-4 space-y-2 mt-2'>
                {item.submenu?.map((subitem: any, subIdx) => (
                  subitem.isSection ? (
                    <div key={`mobile-section-label-${idx}-${subIdx}`} className='pt-2 first:pt-0'>
                      <h5 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1'>
                        {subitem.title}
                      </h5>
                    </div>
                  ) : (
                    <a
                      key={`mobile-submenu-${idx}-${subIdx}`}
                      href={subitem.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                    >
                      <div>
                        <div className='font-medium'>{subitem.title}</div>
                      </div>
                    </a>
                  )
                ))}
              </div>
            </div>
          ))}
          <div className='flex w-full flex-col gap-4'>
            <NavbarButton
              href={isDoneForYou ? '/' : '/done-for-you'}
              onClick={() => setIsMobileMenuOpen(false)}
              variant='secondary'
              className='w-full min-w-[140px] text-nowrap'
            >
              {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
            </NavbarButton>
            <div className='flex flex-col gap-2 border-t pt-2'>
              <div className='flex gap-2'>
                <NavbarButton
                  href={'https://app.typus.ai/login'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant='secondary'
                  className='w-full text-nowrap'
                >
                  {t('login')}
                </NavbarButton>
                <NavbarButton
                  href={`https://app.typus.ai/register?language=${locale}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant='dark'
                  className='w-full text-nowrap'
                >
                  {t('goToApp')}
                </NavbarButton>
              </div>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
