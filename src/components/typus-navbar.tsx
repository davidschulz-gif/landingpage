'use client'
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
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export default function TypusNavbar() {
  const { theme, setTheme } = useTheme()
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
        /* Temporarily disabled until Speckle integration is ready
        {
          title: 'Plugins',
          description:
            'Extend functionality with our professional plugin suite',
          link: '#plugins',
        },
        */
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          // Update menu position on scroll if menu is open
          if (isMenuOpen) {
            updateMenuPosition()
          }
          ticking = false
        })
        ticking = true
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

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

  return (
    <>
      {/* Background overlay when menu is open */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black/5 backdrop-blur-[2px] z-[45] transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)]' />
      )}

      <div className='fixed z-50 w-full top-0'>
        <Navbar
          className={`transition-all duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${isScrolled || isMenuOpen
            ? 'bg-white/95 backdrop-blur-xl'
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
                                  {navItem.submenu?.map((subitem, subIdx) => (
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
                                  ))}
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
                {/* <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2  cursor-pointer bg-gray-100 dark:bg-black hover:bg-gray-200 dark:hover:bg-black transition-colors duration-200"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button> */}
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

          </MobileNav>
        </Navbar>
      </div>

      {/* Break MobileNavMenu out of the Navbar filter boundary to enable true fixed positioning */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className='w-full flex flex-col gap-6 font-sans pb-4'>
          {navItems.map((item, idx) => (
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
                    <a
                      key={`mobile-submenu-${idx}-${subIdx}`}
                      href={subitem.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='flex items-center gap-3 p-2 -mx-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-all duration-200 group'
                    >
                      <div className='flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50/80 dark:bg-neutral-800 border border-gray-200/50 dark:border-neutral-700 shadow-sm group-hover:scale-105 transition-transform'>
                        <div className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-800 dark:group-hover:bg-gray-300 transition-colors' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-medium text-[15px]'>
                          {subitem.title}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Buttons */}
          <div className='flex flex-col gap-3 mt-6 pt-2 font-sans'>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant='dark'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-semibold tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              Login
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant='primary'
              className='w-full rounded-xl py-3 justify-center text-[14px] font-medium border border-gray-200 bg-white hover:bg-gray-50 tracking-wide'
              style={{ fontFamily: 'inherit' }}
            >
              Sign Up
            </NavbarButton>
          </div>
        </div>
      </MobileNavMenu>
    </>
  )
}
