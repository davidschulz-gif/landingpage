'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { CornerSquares } from './common/corner-squares'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className='border-b border-gray-100 last:border-0'>
      <button
        onClick={onClick}
        className='flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gray-600'
      >
        <span className='subheading-primary'>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='text-black'
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden'
          >
            <p className='pb-6 text-gray-800 leading-relaxed text-base md:text-sm'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQSection = () => {
  const t = useTranslations('FAQ')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const questionKeys = [
    'setupTime',
    // 'freeImages',
    'technicalKnowledge',
    // 'cancellation',
    // // 'customModels',
    'dataSecurity',
    // // 'ownModels',
    'studentDiscount',
    'germanSupport',
    'fileFormats',
  ]

  return (
    <section className='py-24 px-6' style={{ backgroundColor: '#f7f5f0' }}>
      <div className='mx-auto max-w-4xl'>

         <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4">
          <div>
            <h2 className="text-center heading-primary mb-4">
             {t('title')}
            </h2>
            <p className="text-gray-500 text-center dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
               {t('subtitle')}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-xs"
        >
          <CornerSquares />
          {questionKeys.map((key, index) => (
            <FAQItem
              key={key}
              question={t(`questions.${key}.question`)}
              answer={t(`questions.${key}.answer`)}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
