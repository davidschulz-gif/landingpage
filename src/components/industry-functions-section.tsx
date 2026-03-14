'use client'

import { motion } from 'framer-motion'
import { Home, Image, Layers, Palette, SunMedium, Wand2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function IndustryFunctionsSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')

  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-100px' }
  }

  const functions = [
    {
      id: 'feature1',
      icon: Home,
      title: t(`${slug}.IndustryFunctions.cards.feature1.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature1.description`),
    },
    {
      id: 'feature2',
      icon: Palette,
      title: t(`${slug}.IndustryFunctions.cards.feature2.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature2.description`),
    },
    {
      id: 'feature3',
      icon: Layers,
      title: t(`${slug}.IndustryFunctions.cards.feature3.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature3.description`),
    },
    {
      id: 'feature4',
      icon: Wand2,
      title: t(`${slug}.IndustryFunctions.cards.feature4.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature4.description`),
    },
    {
      id: 'feature5',
      icon: SunMedium,
      title: t(`${slug}.IndustryFunctions.cards.feature5.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature5.description`),
    },
    {
      id: 'feature6',
      icon: Image,
      title: t(`${slug}.IndustryFunctions.cards.feature6.title`),
      description: t(`${slug}.IndustryFunctions.cards.feature6.description`),
    },
  ]

  return (
    <section className="py-24 px-4 bg-white dark:bg-black border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="max-w-3xl space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryFunctions.title`)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, index) => (
            <motion.div
              key={func.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 md:p-8 rounded-2xl flex flex-col h-full hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-[#fafafa] dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 mb-6 shadow-sm">
                <func.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                {func.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[4rem]">
                {func.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
