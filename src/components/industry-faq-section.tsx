'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function IndustryFaqSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-50px' }
  }

  const faqs = [
    {
      id: 'faq1',
      question: t(`${slug}.IndustryFAQ.faqs.faq1.question`),
      answer: t(`${slug}.IndustryFAQ.faqs.faq1.answer`),
    },
    {
      id: 'faq2',
      question: t(`${slug}.IndustryFAQ.faqs.faq2.question`),
      answer: t(`${slug}.IndustryFAQ.faqs.faq2.answer`),
    },
    {
      id: 'faq3',
      question: t(`${slug}.IndustryFAQ.faqs.faq3.question`),
      answer: t(`${slug}.IndustryFAQ.faqs.faq3.answer`),
    },
    {
      id: 'faq4',
      question: t(`${slug}.IndustryFAQ.faqs.faq4.question`),
      answer: t(`${slug}.IndustryFAQ.faqs.faq4.answer`),
    },
    {
      id: 'faq5',
      question: t(`${slug}.IndustryFAQ.faqs.faq5.question`),
      answer: t(`${slug}.IndustryFAQ.faqs.faq5.answer`),
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#fcfcfd] dark:bg-[#0a0a0c] border-t border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryFAQ.title`)}
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
            {t(`${slug}.IndustryFAQ.subtitle`)}
          </p>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className={cn(
                  "border-b border-gray-100 dark:border-neutral-800 last:border-0",
                  "hover:bg-gray-50/50 dark:hover:bg-neutral-900/30 transition-colors"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full py-6 text-left"
                >
                  <span className="text-[15px] font-bold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-blue-600 dark:text-blue-400"
                    )}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm md:text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[90%]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
