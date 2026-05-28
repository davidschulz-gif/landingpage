'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronLeft, IconChevronRight, IconBrandLinkedin, IconExternalLink } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { BreathingAnimationText } from './breathing-animation-text'

export function LinkedinSlideshow() {
  const t = useTranslations('LinkedinSlideshow')
  const title = t('title')
  const subtitle = t('subtitle')
  const viewOnLinkedin = t('viewOnLinkedin')

  const posts = [
    // { id: '7363887619878903810' },
    // { id: '7452015727538089985' },
    // { id: '7363655458032586754' },
    // { id: '7361127110196801536' },
    // { id: '7357043695277322240' },
    // { id: '7188164716626616320' },//\\
    { id: '7373390579357110273' },     //
    { id: '7373390484074811392' },    //
    { id: '7373390379523399680' },   //
    { id: '7357043618232115202' },  //
    { id: '7363554370187108353' }, //
    { id: '7361126961978507264' } // 
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const currentPost = posts[currentIndex]
  const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${currentPost.id}`
  const directUrl = `https://www.linkedin.com/feed/update/urn:li:activity:${currentPost.id}`

  return (
    <section className="py-24 bg-[#fcfcfd] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden relative" id="community-feed">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title & Header block with premium fonts and breath animation */}
        <div className="mb-16">
          <BreathingAnimationText animationType="black-gray">
            <h2 
              className="text-2xl sm:text-3xl md:text-[30px] font-normal text-black dark:text-white tracking-tight leading-none mb-4"
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
            >
              {title}
            </h2>
          </BreathingAnimationText>
          
          <p className="text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto text-sm md:text-lg px-4 font-medium font-sans">
            {subtitle}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-16 flex items-center justify-center min-h-[660px]">
          {/* Left Arrow button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 p-3 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-xl border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 z-30 cursor-pointer active:scale-95 shadow-neutral-200/50 dark:shadow-none"
            aria-label="Previous slide"
          >
            <IconChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* Premium Card mockup */}
          <div className="w-full flex justify-center items-center overflow-hidden min-h-[620px] relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPost.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full max-w-[504px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col shadow-neutral-200/60 dark:shadow-black/40"
              >
                {/* Premium Header Bar */}
                <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                      <IconBrandLinkedin size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5 leading-none mb-1">
                        LinkedIn
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3.5" />
                      </div>
                      <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                        Post {currentIndex + 1} of {posts.length}
                      </div>
                    </div>
                  </div>
                  
                  {/* External direct link */}
                  <a
                    href={directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase text-neutral-900 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300 transition-colors"
                  >
                    {viewOnLinkedin}
                    <IconExternalLink size={14} strokeWidth={2.5} />
                  </a>
                </div>

                {/* Embedded post content frame */}
                <div className="p-3 bg-white dark:bg-neutral-900 flex justify-center items-center">
                  <iframe
                    src={embedUrl}
                    height="562"
                    className="w-full rounded-2xl border-0 bg-white"
                    allowFullScreen
                    title="Embedded LinkedIn Post"
                  ></iframe>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 p-3 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-xl border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 z-30 cursor-pointer active:scale-95 shadow-neutral-200/50 dark:shadow-none"
            aria-label="Next slide"
          >
            <IconChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Carousel Paginator dots with custom active state */}
        <div className="flex gap-2.5 items-center justify-center mt-10">
          {posts.map((post, idx) => (
            <button
              key={post.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === idx 
                  ? 'bg-neutral-950 dark:bg-white w-8 shadow-md shadow-neutral-500/20' 
                  : 'bg-neutral-200 dark:bg-neutral-800 w-2 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
