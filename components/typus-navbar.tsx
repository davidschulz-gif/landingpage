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
import { useState } from "react";
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
          title: "AI Visualization",
          description:
            "Transform your designs into stunning visual representations",
          video: "/ai-visualization-demo.png",
          link: "#ai-visualization",
        },
        {
          title: "Real-time Rendering",
          description:
            "See your ideas come to life instantly with real-time processing",
          video: "/real-time-rendering-demo.png",
          link: "#real-time",
        },
        {
          title: "Style Transfer",
          description: "Apply artistic styles to your architectural designs",
          video: "/style-transfer-demo.png",
          link: "#style-transfer",
        },
      ],
    },
    {
      name: "COMMUNITY",
      link: "#community",
      submenu: [
        {
          title: "Design Gallery",
          description: "Explore amazing creations from our community",
          video: "/design-gallery-showcase.png",
          link: "#gallery",
        },
        {
          title: "Tutorials",
          description: "Learn from expert designers and architects",
          video: "/tutorial-videos.png",
          link: "#tutorials",
        },
        {
          title: "Forums",
          description: "Connect with other creators and share ideas",
          video: "/community-forums.png",
          link: "#forums",
        },
      ],
    },
    {
      name: "LICENSES",
      link: "#licenses",
      submenu: [
        {
          title: "Personal",
          description: "Perfect for individual creators and hobbyists",
          video: "/personal-license-features.png",
          link: "#personal",
        },
        {
          title: "Professional",
          description: "Advanced features for professional designers",
          video: "/professional-license-features.png",
          link: "#professional",
        },
        {
          title: "Enterprise",
          description: "Scalable solutions for large organizations",
          video: "/enterprise-license-features.png",
          link: "#enterprise",
        },
      ],
    },
    {
      name: "ABOUT",
      link: "#about",
      submenu: [
        {
          title: "Our Story",
          description: "Learn about the vision behind Typus.AI",
          video: "/company-story-video.png",
          link: "#story",
        },
        {
          title: "Team",
          description: "Meet the talented people building the future",
          video: "/team-introduction-video.png",
          link: "#team",
        },
        {
          title: "Careers",
          description: "Join us in revolutionizing AI-powered design",
          video: "/typus-careers.png",
          link: "#careers",
        },
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50  w-full p-4">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navItems.map((item, idx) => (
              <div
                key={`nav-item-${idx}`}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.link}
                  className="flex items-center gap-1 text-sm font-normal capitalize text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </a>
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 ${
                    hoveredItem === item.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {item.submenu?.map((subitem, subIdx) => (
                      <a
                        key={`submenu-${idx}-${subIdx}`}
                        href={subitem.link}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200 group/item"
                      >
                        <div className="relative flex-shrink-0 w-16 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden">
                          <img
                            src={subitem.video || "/placeholder.svg"}
                            alt={subitem.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                            <Play className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors duration-200">
                            {subitem.title}
                          </h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                            {subitem.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary" className="whitespace-nowrap">Sign Up</NavbarButton>
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
                        <img
                          src={subitem.video || "/placeholder.svg"}
                          alt={subitem.title}
                          className="w-full h-full object-cover"
                        />
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
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
