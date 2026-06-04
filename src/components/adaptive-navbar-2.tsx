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
import { Play, Sparkles, Pencil, Zap, Image as ImageIcon, Youtube, Newspaper, Star, Instagram, Linkedin, Tag, Puzzle, GraduationCap, Mail } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'
import { appUrl } from '@/lib/constants'

export function NavbarDemo() {
  const t = useTranslations('Navbar')
  const tNav = useTranslations('Navbar.navigation')
  const tPricing = useTranslations('Pricing')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [doNotShowMegaMenu, setDoNotShowMegaMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)

  const [appActive, setAppActive] = useState<string | null>(null)
  const pathname = usePathname()
  const isDoneForYou = pathname.includes('/done-for-you')
  const locale = useLocale()
  
  const handleTabClick = (link: string) => {
    if (link.startsWith('/#')) {
      const tabId = link.split('#')[1]
      const validTabs = ['create', 'edit', 'enhance']
      if (validTabs.includes(tabId)) {
        window.dispatchEvent(new CustomEvent('showcase-tab-change', { detail: tabId }))
      }
    }
  }

  const handleGoToAppClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const hasProvided = localStorage.getItem('typus_email_provided')
    if (!hasProvided) {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent('show-email-gate', { detail: { redirectUrl: appUrl } }))
    }
  }

  // Get translated navigation items
  const getTranslatedNavItems = () => {
    return [
      {
        name: t('solutions'),
        link: '/#solutions',
        submenu: [
          { title: t('app'), isSection: true },
          {
            title: tNav('solutions.create.title'),
            description: tNav('solutions.create.description'),
            link: '/create',
            icon: Sparkles,
          },
          {
            title: tNav('solutions.edit.title'),
            description: tNav('solutions.edit.description'),
            link: '/#edit',
            icon: Pencil,
          },
          {
            title: tNav('solutions.upscale.title'),
            description: tNav('solutions.upscale.description'),
            link: '/upscale',
            icon: Zap,
          },
          {
            title: tNav('solutions.overviewOfFeatures.title'),
            description: tNav('solutions.overviewOfFeatures.description'),
            link: '/overview-of-features',
            icon: Play,
          },
          { title: t('service'), isSection: true },
          {
            title: tNav('solutions.bilderFlatrate.title'),
            description: tNav('solutions.bilderFlatrate.description'),
            link: '/done-for-you',
            icon: ImageIcon,
          },
        ],
      },
      {
        name: t('community'),
        link: '/#community',
        submenu: [
          {
            title: tNav('community.tutorials.title'),
            description: tNav('community.tutorials.description'),
            link: 'https://www.youtube.com/@typus_ai',
            target: '_blank',
            icon: Youtube,
          },
          {
            title: tNav('community.press.title'),
            description: tNav('community.press.description'),
            link: '/#press',
            icon: Newspaper,
          },
          {
            title: tNav('community.reviews.title'),
            description: tNav('community.reviews.description'),
            link: '/#reviews',
            icon: Star,
          },
          {
            title: tNav('community.instagram.title'),
            description: tNav('community.instagram.description'),
            link: 'https://www.instagram.com/typus.ai/',
            target: '_blank',
            icon: Instagram,
          },
          {
            title: tNav('community.linkedin.title'),
            description: tNav('community.linkedin.description'),
            link: 'https://www.linkedin.com/company/typus-ai/',
            target: '_blank',
            icon: Linkedin,
          },
        ],
      },
      {
        name: t('licenses'),
        link: '/#licenses',
        submenu: [
          {
            title: tNav('licenses.pricing.title'),
            description: tNav('licenses.pricing.description'),
            link: '/pricing',
            icon: Tag,
          },
          /* Temporarily disabled until Speckle integration is ready
          {
            title: tNav('licenses.plugins.title'),
            description: tNav('licenses.plugins.description'),
            link: '/#plugins',
            icon: Puzzle,
          }, 
          */
          {
            title: tNav('licenses.studentAccess.title'),
            description: tNav('licenses.studentAccess.description'),
            link: '/pricing#student-plan',
            icon: GraduationCap,
          },
        ],
      },
      {
        name: t('contact'),
        link: '/#contact',
        submenu: [
          {
            title: tNav('contact.bookCall.title'),
            description: tNav('contact.bookCall.description'),
            link: 'mailto:hello@typus.ai',
            target: '_blank',
            icon: Mail,
          },
        ],
      },
      {
        name: t('amaAwards'),
        link: '/#success-stories',
        isTestimonials: true,
      },
    ]
  }

  const translatedNavItems = getTranslatedNavItems()

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
                  item={navItem.name.toUpperCase()}
                  href={navItem.link}
                >
                  {navItem.submenu && (
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
                            onClick={() => handleTabClick(subitem.link)}
                          >
                            <div className='flex items-start gap-3'>
                              {subitem.icon && (
                                <div className='mt-0.5 p-1 rounded-lg bg-gray-50 border border-transparent transition-colors'>
                                  <subitem.icon className='w-3.5 h-3.5 text-gray-600' />
                                </div>
                              )}
                              <div className='flex-1'>
                                <h1 className='font-semibold text-[13px]'>{subitem.title}</h1>
                                <p className='text-[11px] text-gray-500 leading-tight'>{subitem.description}</p>
                              </div>
                            </div>
                          </HoveredLink>
                        )
                      ))}
                    </div>
                  )}
                  {navItem.isTestimonials && (
                    <div className='flex flex-col gap-4 text-sm w-72 p-1'>
                      {/* Article Card 1 */}
                      <Link href={`/ama-awards`} className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300">
                          <div className="flex flex-col xl:flex-row">
                              <div className="w-full xl:w-[45%] p-1.5">
                                  <div className="border border-black h-full overflow-hidden relative min-h-[80px]">
                                      <Image
                                          src="/artical-page/1.jpg"
                                          alt="AMA Awards Architecture"
                                          fill
                                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                                      />
                                  </div>
                              </div>
                              <div className="w-full xl:w-[55%] p-2 flex flex-col justify-center">
                                  <h2 className="text-[8px] font-normal uppercase tracking-tighter leading-tight text-black mb-1.5 line-clamp-2">
                                      {locale === 'de' ? 'Solo Architektin gewinnt AMA Award. Ohne team. Nur mit Ki.' : 'Solo architect wins AMA Award. No team. Only AI.'}
                                  </h2>
                                  <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                      <span>{locale === 'de' ? '20. MÄRZ 2026' : 'MARCH 20, 2026'}</span>
                                  </div>
                                  <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2 py-1 uppercase tracking-widest transition-colors">
                                      {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                                  </div>
                              </div>
                          </div>
                      </Link>

                      {/* Article Card 2 */}
                      <Link href={`/siegrist`} className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300">
                          <div className="flex flex-col xl:flex-row">
                              <div className="w-full xl:w-[45%] p-1.5">
                                  <div className="border border-black h-full overflow-hidden relative min-h-[80px]">
                                      <Image
                                          src="/siegrist/saint-aubin.jpg"
                                          alt="Siegrist Architectes"
                                          fill
                                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                                      />
                                  </div>
                              </div>
                              <div className="w-full xl:w-[55%] p-2 flex flex-col justify-center">
                                  <h2 className="text-[8px] font-normal uppercase tracking-tighter leading-tight text-black mb-1.5 line-clamp-2">
                                      {locale === 'de' ? 'SCHWEIZER PRÄZISION TRIFFT KI: SIEGRIST ARCHITECTES' : 'SWISS PRECISION MEETS AI: SIEGRIST ARCHITECTES'}
                                  </h2>
                                  <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                      <span>{locale === 'de' ? '10. APRIL 2026' : 'APRIL 10, 2026'}</span>
                                  </div>
                                  <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2 py-1 uppercase tracking-widest transition-colors">
                                      {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                                  </div>
                              </div>
                          </div>
                      </Link>
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <NavItems items={translatedNavItems} />
          )}
        </div>
        <div className='flex items-center gap-6 h-full'>
          <Link
            href={`/pricing`}
            className='bg-black text-white px-4 py-2 text-[13px] rounded-2xl font-medium hover:bg-black transition-colors duration-200'
          >
            {tPricing('selectPlanCTA')}
          </Link>
          {/* <Link
            href={isDoneForYou ? '/' : '/done-for-you'}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
          </Link> */}
          <Link
            href={`${appUrl}/login`}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {t('login')}
          </Link>
          <Link
            href={`${appUrl}`}
            onClick={handleGoToAppClick}
            className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200'
          >
            {t('goToApp')}
          </Link>
        </div>
      </NavBody>
      {!doNotShowMegaMenu && (
        <div
          ref={menuRef}
          className={`fixed left-0 right-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-2xl shadow-black/10 z-[1002] transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isMenuOpen
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
                <div className='grid grid-cols-5 gap-8'>
                  {translatedNavItems.map((navItem, navIdx) => (
                    <div
                      key={`section-${navIdx}`}
                      className={`space-y-4 transition-all duration-400 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isMenuOpen
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
                        {navItem.submenu ? (
                          <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-1'>
                            {navItem.name}
                          </h3>
                        ) : (
                          <Link href={navItem.link} onClick={handleMenuLeave} className="inline-block hover:opacity-70 transition-opacity">
                            <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-1'>
                              {navItem.name}
                            </h3>
                          </Link>
                        )}
                        <div className='w-8 h-px bg-gradient-to-r from-black to-gray-800'></div>
                      </div>
                      {navItem.isTestimonials ? (
                        <div className='flex flex-col gap-4 pt-2'>
                          {/* Article Card 1 */}
                          <Link href={`/ama-awards`} className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300">
                              <div className="flex flex-col xl:flex-row">
                                  <div className="w-full xl:w-[45%] p-1.5">
                                      <div className="border border-black h-full overflow-hidden relative min-h-[80px]">
                                          <Image
                                              src="/artical-page/1.jpg"
                                              alt="AMA Awards Architecture"
                                              fill
                                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                                          />
                                      </div>
                                  </div>
                                  <div className="w-full xl:w-[55%] p-2 flex flex-col justify-center">
                                      <h2 className="text-[8px] font-normal uppercase tracking-tighter leading-tight text-black mb-1.5 line-clamp-2">
                                          {locale === 'de' ? 'Solo Architektin gewinnt AMA Award. Ohne team. Nur mit Ki.' : 'Solo architect wins AMA Award. No team. Only AI.'}
                                      </h2>
                                      <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                          <span>{locale === 'de' ? '20. MÄRZ 2026' : 'MARCH 20, 2026'}</span>
                                      </div>
                                      <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2 py-1 uppercase tracking-widest transition-colors">
                                          {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                                      </div>
                                  </div>
                              </div>
                          </Link>

                          {/* Article Card 2 */}
                          <Link href={`/siegrist`} className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300">
                              <div className="flex flex-col xl:flex-row">
                                  <div className="w-full xl:w-[45%] p-1.5">
                                      <div className="border border-black h-full overflow-hidden relative min-h-[80px]">
                                          <Image
                                              src="/siegrist/saint-aubin.jpg"
                                              alt="Siegrist Architectes"
                                              fill
                                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                                          />
                                      </div>
                                  </div>
                                  <div className="w-full xl:w-[55%] p-2 flex flex-col justify-center">
                                      <h2 className="text-[8px] font-normal uppercase tracking-tighter leading-tight text-black mb-1.5 line-clamp-2">
                                          {locale === 'de' ? 'SCHWEIZER PRÄZISION TRIFFT KI: SIEGRIST ARCHITECTES' : 'SWISS PRECISION MEETS AI: SIEGRIST ARCHITECTES'}
                                      </h2>
                                      <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                          <span>{locale === 'de' ? '10. APRIL 2026' : 'APRIL 10, 2026'}</span>
                                      </div>
                                      <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2 py-1 uppercase tracking-widest transition-colors">
                                          {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                                      </div>
                                  </div>
                              </div>
                          </Link>
                        </div>
                      ) : (
                        <div className='space-y-3'>
                          {navItem.submenu?.map((subitem: any, subIdx) => (
                            subitem.isSection ? (
                              <div key={`section-label-${navIdx}-${subIdx}`} className='pt-4 first:pt-0'>
                                <h5 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2'>
                                  {subitem.title}
                                </h5>
                              </div>
                            ) : (
                              <Link
                                key={`submenu-${navIdx}-${subIdx}`}
                                href={subitem.link}
                                target={subitem.target ?? '_self'}
                                className='block group/item p-2 -mx-2  hover:bg-gray-50/80 hover:shadow-sm transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)] hover:translate-x-1'
                              >
                                <div className='flex items-start gap-3'>
                                  {subitem.icon && (
                                    <div className='mt-0.5 p-1.5 rounded-lg bg-gray-50 group-hover/item:bg-white border border-transparent group-hover/item:border-gray-100 transition-colors'>
                                      <subitem.icon className='w-4 h-4 text-gray-600 group-hover/item:text-black' />
                                    </div>
                                  )}
                                  <div className='flex-1'>
                                    <h4 className='text-[12px] font-medium text-gray-900 group-hover/item:text-black mb-1 transition-colors duration-200'>
                                      {subitem.title}
                                    </h4>
                                    <p style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }} className='text-[11px] text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-200'>
                                      {subitem.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className='absolute bottom-0 right-0 gap-4 flex items-center'>
                  <Image
                    className='h-12 w-auto object-contain'
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
              {/* <div
                className={`mt-6 pt-4 border-t border-gray-200/60 transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]`}
                style={{
                  transitionDelay: isMenuOpen ? '0ms' : '200ms',
                }}
              >
                <div className='flex items-center justify-between'>
                  <div className='text-[16px] text-gray-500 font-medium tracking-wide'>
                    {t('explorePlatform')}
                  </div>
                  <div className='flex items-center gap-6'>
                    <Link
                      href='#demo'
                      className='inline-flex items-center gap-1.5 text-[16px] text-black hover:text-gray-900 font-medium transition-all duration-200 hover:translate-x-0.5'
                    >
                      <Play className='w-3 h-3' />
                      {t('explorePlatform')}
                    </Link>
                    <a
                      href='/pricing'
                      className='text-[16px] text-gray-800 hover:text-gray-900 font-medium px-3 py-1.5  hover:bg-gray-100/60 transition-all duration-200'
                    >
                      {t('seePricing')}
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            <div className='flex items-center gap-6 h-full'>
              {/* <Link
                href={isDoneForYou ? '/' : '/done-for-you'}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
              </Link> */}
              <Link
                href={`${appUrl}/login`}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {t('login')}
              </Link>
              {/* <Link
                href={`https://app.typus.ai/register?language=${locale}`}
                className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
              >
                {t('signUp')}
              </Link> */}
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
      </MobileNav>

      {/* Break MobileNavMenu out of the MobileNav filter boundary to enable true fixed positioning */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className='w-full flex flex-col gap-6 font-sans pb-4'>
          {translatedNavItems.map((item, idx) => (
            <div key={`mobile-item-${idx}`} className='space-y-4 pb-5 border-b border-gray-100 dark:border-neutral-800 last:border-0 last:pb-0'>
              <a
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className='block relative text-gray-900 dark:text-white font-bold text-[13px] tracking-[0.1em] uppercase'
              >
                {item.name}
              </a>
              
              {item.submenu && (
                <div className='flex flex-col gap-2 pl-2'>
                  {item.submenu.map((subitem: any, subIdx) => (
                    subitem.isSection ? (
                      <div key={`mobile-section-label-${idx}-${subIdx}`} className='pt-3 pb-1'>
                        <h5 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>
                          {subitem.title}
                        </h5>
                      </div>
                    ) : (
                      <Link
                        key={`mobile-submenu-${idx}-${subIdx}`}
                        href={subitem.link}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          handleTabClick(subitem.link)
                        }}
                        className='flex items-center gap-3 p-2 -mx-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-all duration-200 group'
                      >
                        {subitem.icon && (
                          <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50/80 dark:bg-neutral-800 border border-gray-200/50 dark:border-neutral-700 shadow-sm group-hover:scale-105 transition-transform'>
                            <subitem.icon className='w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors' />
                          </div>
                        )}
                        <div className='font-medium text-[15px]'>
                          {subitem.title}
                        </div>
                      </Link>
                    )
                  ))}
                </div>
              )}

              {item.isTestimonials && (
                <div className='flex flex-col gap-4 pl-2 pt-2'>
                  {/* Article Card 1 */}
                  <Link
                    href={`/ama-awards`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    <div className="flex flex-row">
                      <div className="w-[35%] p-1.5">
                        <div className="border border-black overflow-hidden relative min-h-[70px] aspect-square">
                          <Image
                            src="/artical-page/1.jpg"
                            alt="AMA Awards Architecture"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="w-[65%] p-2 flex flex-col justify-center">
                        <h2 className="text-[11px] font-medium text-black uppercase tracking-tight leading-tight mb-1 line-clamp-2">
                          {locale === 'de' ? 'Solo Architektin gewinnt AMA Award. Ohne team. Nur mit Ki.' : 'Solo architect wins AMA Award. No team. Only AI.'}
                        </h2>
                        <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          <span>{locale === 'de' ? '20. MÄRZ 2026' : 'MARCH 20, 2026'}</span>
                        </div>
                        <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2.5 py-1 uppercase tracking-widest transition-colors">
                          {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Article Card 2 */}
                  <Link
                    href={`/siegrist`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group w-full text-left border border-black shadow-[4px_4px_0px_#000000] bg-white hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    <div className="flex flex-row">
                      <div className="w-[35%] p-1.5">
                        <div className="border border-black overflow-hidden relative min-h-[70px] aspect-square">
                          <Image
                            src="/siegrist/saint-aubin.jpg"
                            alt="Siegrist Architectes"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="w-[65%] p-2 flex flex-col justify-center">
                        <h2 className="text-[11px] font-medium text-black uppercase tracking-tight leading-tight mb-1 line-clamp-2">
                          {locale === 'de' ? 'SCHWEIZER PRÄZISION TRIFFT KI: SIEGRIST ARCHITECTES' : 'SWISS PRECISION MEETS AI: SIEGRIST ARCHITECTES'}
                        </h2>
                        <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          <span>{locale === 'de' ? '10. APRIL 2026' : 'APRIL 10, 2026'}</span>
                        </div>
                        <div className="inline-flex items-center w-fit gap-1 font-black text-[8px] bg-black text-white px-2.5 py-1 uppercase tracking-widest transition-colors">
                          {locale === 'de' ? 'ARTIKEL LESEN' : 'READ ARTICLE'} &rarr;
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Buttons */}
          <div className='flex flex-col gap-3 mt-6 pt-2 font-sans'>
            <NavbarButton
              href={`/pricing`}
              onClick={() => setIsMobileMenuOpen(false)}
              variant='dark'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-semibold tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              {tPricing('selectPlanCTA')}
            </NavbarButton>
            {/* <NavbarButton
              href={isDoneForYou ? '/' : '/done-for-you'}
              onClick={() => setIsMobileMenuOpen(false)}
              variant='secondary'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-medium border border-gray-200 bg-white hover:bg-gray-50 tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              {isDoneForYou ? t('returnToHome') : t('doneForYouService')}
            </NavbarButton> */}
            <NavbarButton
              href={`${appUrl}/login`}
              onClick={() => setIsMobileMenuOpen(false)}
              variant='secondary'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-medium border border-gray-200 bg-white hover:bg-gray-50 tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              {t('login')}
            </NavbarButton>
            <NavbarButton
              href={`${appUrl}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                setIsMobileMenuOpen(false)
                handleGoToAppClick(e)
              }}
              variant='primary'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-medium tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              {t('goToApp')}
            </NavbarButton>
          </div>
        </div>
      </MobileNavMenu>
    </Navbar>
  )
}
