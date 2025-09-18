"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function TypusNavbar() {
  const { theme, setTheme } = useTheme();
  const navItems = [
    {
      name: "SOLUTIONS",
      link: "#solutions",
      submenu: [
        {
          title: "Create",
          description:
            "Generate stunning architectural visualizations from scratch with AI",
          link: "#create",
        },
        {
          title: "Edit",
          description:
            "Transform and modify existing designs with intelligent editing tools",
          link: "#edit",
        },
        {
          title: "Upscale",
          description: "Enhance image resolution and quality with AI-powered upscaling",
          link: "#upscale",
        },
      ],
    },
    {
      name: "COMMUNITY",
      link: "#community",
      submenu: [
        {
          title: "Tutorials",
          description: "Learn from comprehensive guides and video tutorials",
          link: "#tutorials",
        },
        {
          title: "Press",
          description: "Latest news, features, and media coverage about Typus.AI",
          link: "#press",
        },
        {
          title: "Reviews",
          description: "Read testimonials and reviews from our community",
          link: "#reviews",
        },
        {
          title: "Instagram",
          description: "Follow us for daily inspiration and design showcases",
          link: "#instagram",
        },
        {
          title: "Linkedin",
          description: "Connect with us for professional updates and insights",
          link: "#linkedin",
        },
      ],
    },
    {
      name: "LICENSES",
      link: "#licenses",
      submenu: [
        {
          title: "Pricing",
          description: "Choose the perfect plan for your creative needs",
          link: "#pricing",
        },
        {
          title: "Plugins",
          description: "Extend functionality with our professional plugin suite",
          link: "#plugins",
        },
        {
          title: "Student Access",
          description: "Special discounted rates for students and educators",
          link: "#student-access",
        },
      ],
    },
    {
      name: "CONTACT",
      link: "#contact",
      submenu: [
        {
          title: "Book a Call",
          description: "Schedule a personalized demo with our team",
          link: "#book-a-call",
        },
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuTopPosition, setMenuTopPosition] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMenuEnter = () => {
    setIsMenuOpen(true);
    updateMenuPosition();
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };

  const updateMenuPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuTopPosition(rect.bottom);
    }
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowNavbar(window.scrollY > 100);
          setIsScrolled(window.scrollY > 50);
          // Update menu position on scroll if menu is open
          if (isMenuOpen) {
            updateMenuPosition();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Background overlay when menu is open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-[45] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
      )}
      
      <div className={`fixed z-50 w-full transition-all duration-500 ease-out ${
        showNavbar ? '-top-4' : 'top-0'
      }`}>
        <Navbar className={`transition-all duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isMenuOpen 
            ? 'bg-white/95 backdrop-blur-2xl' 
            : isScrolled
            ? 'bg-transparent backdrop-blur-xl'
            : 'bg-transparent backdrop-blur-xl'
        }`}>
        {/* Desktop Navigation */}
        <NavBody className={`px-6 transition-all duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled && !isMenuOpen ? 'h-12 py-2' : 'h-16 py-3'
        }`}>
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center h-full">
              <div className="hidden md:flex items-center h-full">
                <div 
                  ref={triggerRef}
                  className="relative group h-full flex items-center hover-menu-trigger"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <button className={`flex items-center gap-2 font-medium text-gray-900 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] h-full px-4 cursor-pointer hover:text-red-600 ${
                    isScrolled && !isMenuOpen ? 'text-[12px]' : 'text-[13px]'
                  }`}>
                    <div className="flex flex-col gap-1">
                      <div className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                      }`}></div>
                      <div className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        isMenuOpen ? 'opacity-0 scale-75' : ''
                      }`}></div>
                      <div className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                      }`}></div>
                    </div>
                    <span>Menu</span>
                  </button>
                  
                  {/* Professional dropdown menu */}
                  <div 
                    ref={menuRef}
                    className={`fixed left-1/2 -translate-x-1/2 w-full bg-white/95 backdrop-blur-2xl ${isScrolled ? 'rounded-2xl border border-gray-200/60 shadow-2xl shadow-black/10' : '' } transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-[60] ${
                      isMenuOpen
                        ? "opacity-100 visible translate-y-2 scale-100"
                        : "opacity-0 invisible translate-y-8 scale-95"
                    }`}
                    style={{ top: `${menuTopPosition}px` }}
                    onMouseEnter={handleMenuEnter}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Subtle gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/80"></div>
                      
                      <div className="relative px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                        {navItems.map((navItem, navIdx) => (
                          <div key={`section-${navIdx}`} className={`space-y-4 transform transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`} style={{ transitionDelay: isMenuOpen ? `${navIdx * 100}ms` : `${(3 - navIdx) * 80}ms` }}>
                            <div className="relative">
                              <h3 className="sm:text-[12px] md:text-[16px] lg:text-[20px] font-medium text-gray-800 uppercase tracking-[0.1em] mb-1">
                                {navItem.name}
                              </h3>
                              <div className="w-8 h-px bg-gradient-to-r from-red-500 to-red-300"></div>
                            </div>
                            <div className="space-y-3">
                              {navItem.submenu?.map((subitem, subIdx) => (
                                <a
                                  key={`submenu-${navIdx}-${subIdx}`}
                                  href={subitem.link}
                                  className="block group/item p-2 -mx-2 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:bg-gray-50/80 hover:shadow-sm"
                                >
                                  <div className="flex-1">
                                    <h4 className="text-[13px] font-medium text-gray-900 group-hover/item:text-red-600 transition-colors duration-300 mb-1">
                                      {subitem.title}
                                    </h4>
                                    <p className="text-[11px] text-gray-600 leading-relaxed group-hover/item:text-gray-700 transition-colors duration-300">
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
                        <div className={`mt-6 pt-4 border-t border-gray-200/60 transform transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`} style={{ transitionDelay: isMenuOpen ? '400ms' : '100ms' }}>
                          <div className="flex items-center justify-between">
                            <div className="text-[10px] text-gray-500 font-medium tracking-wide">
                              Explore our AI-powered architectural visualization platform
                            </div>
                            <div className="flex items-center gap-6">
                              <a href="#demo" className="inline-flex items-center gap-1.5 text-[11px] text-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:translate-x-0.5">
                                <Play className="w-3 h-3" />
                                View Demo
                              </a>
                              <a href="#pricing" className="text-[11px] text-gray-800 hover:text-gray-900 font-medium transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-gray-100/60">
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
              <NavbarLogo visible={showNavbar} className="ml-8" />
            </div>
            <div className="flex items-center gap-6 h-full">
              {/* <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button> */}
              <a
                href="#login"
                className={`font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] whitespace-nowrap ${
                  isScrolled && !isMenuOpen ? 'text-[12px]' : 'text-[13px]'
                }`}
              >
                LOGIN
              </a>
              <a
                href="#signup"
                className={`font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] whitespace-nowrap ${
                  isScrolled && !isMenuOpen ? 'text-[12px]' : 'text-[13px]'
                }`}
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
              <div key={`mobile-item-${idx}`} className="space-y-2">
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300 font-medium"
                >
                  <span className="block">{item.name}</span>
                </a>
                <div className="pl-4 space-y-2">
                  {item.submenu?.map((subitem, subIdx) => (
                    <a
                      key={`mobile-submenu-${idx}-${subIdx}`}
                      href={subitem.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                    >
                      <div className="w-8 h-5 bg-neutral-100 dark:bg-neutral-800 rounded overflow-hidden flex-shrink-0 mt-0.5">
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{subitem.title}</div>
                        <div className="text-xs opacity-75">
                          {subitem.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full min-w-[140px] text-nowrap"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full min-w-[140px] text-nowrap"
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      </div>
    </>
  );
}
