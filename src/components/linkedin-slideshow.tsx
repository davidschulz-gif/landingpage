'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { IconChevronLeft, IconChevronRight, IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export function LinkedinSlideshow() {
  const t = useTranslations('LinkedinSlideshow')
  const title = t('title')
  const subtitle = t('subtitle')
  const viewOnLinkedin = t('viewOnLinkedin')

  const posts = [
    { id: '7296821603881922560' },
    { id: '7452015727538089985' },
    { id: '7363921514309521408' },
    { id: '7188164717385822208' },
    { id: '7373390579357110273' },     
    { id: '7373390484074811392' },    
    { id: '7373390379523399680' },   
    { id: '7357043618232115202' },  
    { id: '7363554370187108353' }, 
    { id: '7361126961978507264' } 
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
        {/* Title & Header block with premium fonts and breath animation */}
        <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between max-w-7xl mx-auto text-left px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
              {title}
            </h2>
            <p className="text-gray-500 dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
              {subtitle}
            </p>
          </div>
          
          {/* Navigation buttons in the header */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Scroll left"
            >
              <IconChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Scroll right"
            >
              <IconChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Row Container with Horizontal Scroll */}
        <div className="relative w-full overflow-hidden">
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
      </div>
    </section>
  )
}

