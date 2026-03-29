'use client'
import TypusNavbar from '@/components/typus-navbar'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
} from '@/components/ui/resizable-navbar'
import { Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function AdaptiveNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuTopPosition, setMenuTopPosition] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const handleMenuEnter = () => {
    setIsMenuOpen(true)
    updateMenuPosition()
  }

  const handleMenuLeave = () => {
    setIsMenuOpen(false)
  }

  const updateMenuPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setMenuTopPosition(rect.bottom)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items from typus-navbar
  const navItems = [
    {
      name: 'SOLUTIONS',
      link: '#solutions',
      submenu: [
        {
          title: 'Create',
          description:
            'Generate stunning architectural visualizations from scratch with AI',
          link: '#create',
        },
        {
          title: 'Edit',
          description:
            'Transform and modify existing designs with intelligent editing tools',
          link: '#edit',
        },
        {
          title: 'Upscale',
          description:
            'Enhance image resolution and quality with AI-powered upscaling',
          link: '#enhance',
        },
      ],
    },
    {
      name: 'COMMUNITY',
      link: '#community',
      submenu: [
        {
          title: 'Tutorials',
          description: 'Learn from comprehensive guides and video tutorials',
          link: '#tutorials',
        },
        {
          title: 'Press',
          description:
            'Latest news, features, and media coverage about Typus.AI',
          link: '#press',
        },
        {
          title: 'Reviews',
          description: 'Read testimonials and reviews from our community',
          link: '#reviews',
        },
        {
          title: 'Instagram',
          description: 'Follow us for daily inspiration and design showcases',
          link: '#instagram',
        },
        {
          title: 'Linkedin',
          description: 'Connect with us for professional updates and insights',
          link: '#linkedin',
        },
      ],
    },
    {
      name: 'LICENSES',
      link: '#licenses',
      submenu: [
        {
          title: 'Pricing',
          description: 'Choose the perfect plan for your creative needs',
          link: '#pricing',
        },
        {
          title: 'Plugins',
          description:
            'Extend functionality with our professional plugin suite',
          link: '#plugins',
        },
        {
          title: 'Student Access',
          description: 'Special discounted rates for students and educators',
          link: '#student-access',
        },
      ],
    },
    {
      name: 'CONTACT',
      link: '#contact',
      submenu: [
        {
          title: 'Book a Call',
          description: 'Schedule a personalized demo with our team',
          link: '#book-a-call',
        },
      ],
    },
  ]

  return (
    <>
      {isScrolled ? (
        // Use resizable navbar when scrolled
        <>
          {/* Background overlay when menu is open */}
          {isMenuOpen && (
            <div className='fixed inset-0 bg-black/5 backdrop-blur-[2px] z-[45] transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)]' />
          )}

          <div className='fixed z-50 w-full top-0'>
            <Navbar
              isScrolled={isScrolled}
              className={`transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isScrolled || isMenuOpen
                  ? 'bg-white/50 backdrop-blur-xl'
                  : 'bg-transparent backdrop-blur-xl'
                }`}
            >
              {/* Desktop Navigation */}
              <NavBody className='px-6 h-16 py-3 max-w-[80%] mx-auto'>
                <div className='flex items-center justify-between w-full h-full'>
                  <div className='flex items-center h-full'>
                    <div className='hidden md:flex items-center h-full space-x-8'>
                      <div
                        ref={triggerRef}
                        className='relative group h-full flex items-center hover-menu-trigger'
                        onMouseEnter={handleMenuEnter}
                        onMouseLeave={handleMenuLeave}
                      >
                        {navItems.map((item, index) => (
                          <button
                            key={item.name}
                            className='font-medium text-gray-900 h-full px-3 cursor-pointer hover:text-black text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
                          >
                            <span>{item.name}</span>
                          </button>
                        ))}

                        {/* Apple-style mega menu showing all sections */}
                        <div
                          ref={menuRef}
                          className={`fixed left-0 right-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-2xl shadow-black/10 z-[60] transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isMenuOpen
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-2'
                            }`}
                          style={{ top: `${menuTopPosition}px` }}
                          onMouseEnter={handleMenuEnter}
                          onMouseLeave={handleMenuLeave}
                        >
                          <div className='relative overflow-hidden'>
                            {/* Subtle gradient background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/80'></div>

                            <div className='relative max-w-[80%] mx-auto px-8 py-8'>
                              <div className='grid grid-cols-4 gap-8'>
                                {navItems.map((navItem, navIdx) => (
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
                                      <h3 className='text-[10px] md:text-[11px] lg:text-[13px] font-medium text-gray-800 uppercase mb-1'>
                                        {navItem.name}
                                      </h3>
                                      <div className='w-8 h-px bg-gradient-to-r from-black to-gray-800'></div>
                                    </div>
                                    <div className='space-y-3'>
                                      {navItem.submenu?.map(
                                        (subitem, subIdx) => (
                                          <a
                                            key={`submenu-${navIdx}-${subIdx}`}
                                            href={subitem.link}
                                            className='block group/item p-2 -mx-2  hover:bg-gray-50/80 hover:shadow-sm transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)] hover:translate-x-1'
                                          >
                                            <div className='flex-1'>
                                              <h4 className='text-[12px] font-medium text-gray-900 group-hover/item:text-black mb-1 transition-colors duration-200'>
                                                {subitem.title}
                                              </h4>
                                              <p className='text-[11px] text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-200'>
                                                {subitem.description}
                                              </p>
                                            </div>
                                          </a>
                                        )
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Premium bottom section */}
                              {/* Premium bottom section - hidden when menu is open */}
                              <div
                                className={`mt-6 pt-4 border-t border-gray-200/60 transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isMenuOpen
                                    ? 'opacity-0 translate-y-3 hidden'
                                    : 'opacity-100 translate-y-0'
                                  }`}
                                style={{
                                  transitionDelay: isMenuOpen ? '0ms' : '200ms',
                                }}
                              >
                                <div className='flex items-center justify-between'>
                                  <div className='text-[10px] text-gray-500 font-medium tracking-wide'>
                                    Explore our AI-powered architectural
                                    visualization platform
                                  </div>
                                  <div className='flex items-center gap-6'>
                                    <a
                                      href='#demo'
                                      className='inline-flex items-center gap-1.5 text-[11px] text-black hover:text-gray-900 font-medium transition-all duration-200 hover:translate-x-0.5'
                                    >
                                      <Play className='w-3 h-3' />
                                      View Demo
                                    </a>
                                    <a
                                      href='#pricing'
                                      className='text-[11px] text-gray-800 hover:text-gray-900 font-medium px-3 py-1.5  hover:bg-gray-100/60 transition-all duration-200'
                                    >
                                      See Pricing
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavbarLogo visible={isScrolled} />
                  </div>
                  <div className='flex items-center gap-6 h-full'>
                    <a
                      href='https://app.typus.ai/login'
                      className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
                    >
                      LOGIN
                    </a>
                    <a
                      href='https://app.typus.ai/register'
                      className='font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap text-[13px] transition-colors duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]'
                    >
                      SIGN UP
                    </a>
                  </div>
                </div>
              </NavBody>

              {/* Mobile Navigation */}
              <MobileNav>
                <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </MobileNavHeader>
                <MobileNavMenu
                  isOpen={isMobileMenuOpen}
                  onClose={() => setIsMobileMenuOpen(false)}
                >
                  {navItems.map((item, idx) => (
                    <div key={`mobile-item-${idx}`} className='space-y-2'>
                      <a
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='relative text-neutral-600 dark:text-neutral-300 font-medium'
                      >
                        <span className='block'>{item.name}</span>
                      </a>
                      <div className='pl-4 space-y-2'>
                        {item.submenu?.map((subitem, subIdx) => (
                          <a
                            key={`mobile-submenu-${idx}-${subIdx}`}
                            href={subitem.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                          >
                            <div className='w-8 h-5 bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex-shrink-0 mt-0.5'>
                              <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                                <div className='w-2 h-2 bg-black '></div>
                              </div>
                            </div>
                            <div>
                              <div className='font-medium'>{subitem.title}</div>
                              <div className='text-xs opacity-75'>
                                {subitem.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className='flex w-full flex-col gap-4'>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant='secondary'
                      className='w-full min-w-[140px] text-nowrap'
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant='primary'
                      className='w-full min-w-[140px] text-nowrap'
                    >
                      Sign Up
                    </NavbarButton>
                  </div>
                </MobileNavMenu>
              </MobileNav>
            </Navbar>
          </div>
        </>
      ) : (
        // Use original typus navbar when at top
        <TypusNavbar />
      )}
    </>
  )
}
