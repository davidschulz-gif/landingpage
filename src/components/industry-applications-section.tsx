'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function IndustryApplicationsSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-50px' }
  }

  const items = [
    t(`${slug}.IndustryApplications.items.item1`),
    t(`${slug}.IndustryApplications.items.item2`),
    t(`${slug}.IndustryApplications.items.item3`),
    t(`${slug}.IndustryApplications.items.item4`),
    t(`${slug}.IndustryApplications.items.item5`),
    t(`${slug}.IndustryApplications.items.item6`),
  ]

  return (
    <section className="py-24 px-4 bg-[#fcfcfd] dark:bg-[#0a0a0c] border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="max-w-3xl space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryApplications.title`)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white dark:bg-neutral-900/60 border border-gray-100 dark:border-neutral-800 p-4 md:p-5 rounded-xl flex items-center gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
