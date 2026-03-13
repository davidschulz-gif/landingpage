'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

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
        <span className='text-md md:text-lg font-bold text-gray-900'>{question}</span>
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
    'freeImages',
    'technicalKnowledge',
    'cancellation',
    'customModels',
    'dataSecurity',
    'ownModels',
    'studentDiscount',
    'germanSupport',
    'fileFormats',
  ]

  return (
    <section className='py-24 px-6 bg-white'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight'
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-md md:text-lg text-gray-700 font-medium'
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-0"
        >
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
