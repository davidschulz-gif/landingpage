'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronLeft, IconChevronRight, IconBrandLinkedin, IconExternalLink, IconGridDots, IconX } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export function LinkedinSlideshow() {
  const t = useTranslations('LinkedinSlideshow')
  const title = t('title')
  const subtitle = t('subtitle')
  const viewOnLinkedin = t('viewOnLinkedin')

  const params = useParams()
  const locale = params?.locale === 'de' ? 'de' : 'en'

  const localT = {
    en: {
      seeAll: "See All",
      close: "Close",
      wallTitle: "COMMUNITY HUB",
      wallSubtitle: "Explore all recent LinkedIn posts and community updates in a single wall.",
    },
    de: {
      seeAll: "Alle ansehen",
      close: "Schließen",
      wallTitle: "COMMUNITY-HUB",
      wallSubtitle: "Entdecken Sie alle aktuellen LinkedIn-Beiträge und Community-Updates an einer Wand.",
    }
  }[locale]

  const posts = [
    { id: '7357043618232115202' },  
    { id: '7373390484074811392' }, 
    { id: '7296821603881922560' },
    { id: '7452015727538089985' },
    { id: '7363921514309521408' },
    { id: '7188164717385822208' },
    { id: '7373390579357110273' },        
    { id: '7373390379523399680' },   
    { id: '7363554370187108353' }, 
    { id: '7361126961978507264' },
    { id: '7292127211082440706' },  
    { id: '7297566938463928321' }, 
  ]

  const [isWallOpen, setIsWallOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Disable body scroll when full-screen wall is active
  useEffect(() => {
    if (isWallOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isWallOpen])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Scroll by exactly one card width + gap (260px card + 24px gap = 284px)
      const scrollAmount = direction === 'left' ? -284 : 284
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-[#fcfcfd] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden relative" id="community-feed">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Title & Header block */}
        <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4">
          <div className="">
            <h2 className="text-center heading-primary mb-4">
              {title}
            </h2>
            <p className="text-gray-500 text-center dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Row Container with Horizontal Scroll */}
        <div className="relative w-full overflow-hidden">
          {/* Navigation buttons centered vertically on the left and right sides */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 flex items-center justify-center bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black active:scale-95 cursor-pointer"
            aria-label="Scroll left"
          >
            <IconChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16 flex items-center justify-center bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black active:scale-95 cursor-pointer"
            aria-label="Scroll right"
          >
            <IconChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 px-4 md:px-12 py-4 overflow-x-auto justify-start mx-auto w-fit max-w-full scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, idx) => {
              const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.id}`;
              const directUrl = `https://www.linkedin.com/feed/update/urn:li:activity:${post.id}`;
              
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="snap-start flex-shrink-0 w-[260px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[24px] shadow-lg hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Premium Compact Header */}
                  <div className="px-4 py-3 bg-neutral-50/80 dark:bg-neutral-950/80 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white shadow-sm">
                        <IconBrandLinkedin size={18} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1 leading-none mb-0.5">
                          LinkedIn
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block -ml-3" />
                        </div>
                        <div className="text-[9px] text-neutral-400 dark:text-neutral-500 font-medium">
                          Post {idx + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* View external link */}
                    <a
                      href={directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-0.5 text-[9px] font-bold tracking-wide uppercase text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                      title={viewOnLinkedin}
                    >
                      <span>VIEW</span>
                      <IconExternalLink size={12} strokeWidth={2.5} />
                    </a>
                  </div>

                  {/* Embedded post scaled down */}
                  <div className="p-2 bg-white dark:bg-neutral-900 flex justify-center items-center rounded-b-[24px]">
                    <div className="w-full h-[400px] relative overflow-hidden bg-white dark:bg-neutral-900 rounded-xl">
                      <iframe
                        src={embedUrl}
                        className="absolute top-0 left-0 w-[153.84%] h-[615px] border-0 bg-white origin-top-left"
                        style={{ transform: 'scale(0.65)' }}
                        allowFullScreen
                        title={`Embedded LinkedIn Post ${idx + 1}`}
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Center "See All" trigger button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setIsWallOpen(true)}
            className="px-6 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 shadow-md cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <IconGridDots size={15} />
            <span>{localT.seeAll}</span>
          </button>
        </div>

        {/* Immersive Grid Wall Modal Overlay */}
        <AnimatePresence>
          {isWallOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999] overflow-y-auto bg-neutral-100/95 dark:bg-neutral-950/95 backdrop-blur-xl py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
            >
              {/* Close float button */}
              <button
                onClick={() => setIsWallOpen(false)}
                className="absolute top-16 right-6 p-3 rounded-full bg-white dark:bg-neutral-900 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 shadow-md cursor-pointer active:scale-95 z-50 flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider"
              >
                <IconX size={16} strokeWidth={2.5} />
                <span>{localT.close}</span>
              </button>

              {/* Modal Header */}
              <div className="max-w-3xl text-center mb-12 mt-8 px-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] font-bold tracking-widest uppercase mb-4">
                  <IconBrandLinkedin size={14} className="text-blue-600 dark:text-blue-500" />
                  LINKEDIN PORTAL
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-[34px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
                  {localT.wallTitle}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base font-medium font-sans max-w-xl mx-auto">
                  {localT.wallSubtitle}
                </p>
              </div>

              {/* Grid Wall Masonry Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full mt-4 justify-items-center pb-12">
                {posts.map((post, idx) => {
                  const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${post.id}`;
                  const directUrl = `https://www.linkedin.com/feed/update/urn:li:activity:${post.id}`;

                  return (
                    <motion.div
                      key={`wall-${post.id}`}
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 30 }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 100,
                        damping: 18,
                        delay: idx * 0.06 
                      }}
                      className="w-[260px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[24px] shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 overflow-hidden flex flex-col cursor-default"
                    >
                      {/* Grid Card Header */}
                      <div className="px-4 py-3 bg-neutral-50/80 dark:bg-neutral-950/80 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-left">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white shadow-sm">
                            <IconBrandLinkedin size={18} strokeWidth={2} />
                          </div>
                          <div>
                            <div className="text-[12px] font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1 leading-none mb-0.5">
                              LinkedIn
                            </div>
                            <div className="text-[9px] text-neutral-400 dark:text-neutral-500 font-medium">
                              Post {idx + 1}
                            </div>
                          </div>
                        </div>

                        {/* View external link */}
                        <a
                          href={directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-0.5 text-[9px] font-bold tracking-wide uppercase text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                          title={viewOnLinkedin}
                        >
                          <span>VIEW</span>
                          <IconExternalLink size={12} strokeWidth={2.5} />
                        </a>
                      </div>

                      {/* Embedded post scaled down */}
                      <div className="p-2 bg-white dark:bg-neutral-900 flex justify-center items-center rounded-b-[24px]">
                        <div className="w-full h-[400px] relative overflow-hidden bg-white dark:bg-neutral-900 rounded-xl">
                          <iframe
                            src={embedUrl}
                            className="absolute top-0 left-0 w-[153.84%] h-[615px] border-0 bg-white origin-top-left"
                            style={{ transform: 'scale(0.65)' }}
                            allowFullScreen
                            title={`Embedded LinkedIn Grid Post ${idx + 1}`}
                          ></iframe>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
