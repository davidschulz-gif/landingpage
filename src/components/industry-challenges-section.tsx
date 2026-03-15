'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Wallet } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function IndustryChallengesSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')

  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-100px' }
  }

  const challenges = [
    {
      id: 'time',
      icon: Clock,
      title: t(`${slug}.IndustryChallenges.cards.time.title`),
      description: t(`${slug}.IndustryChallenges.cards.time.description`),
    },
    {
      id: 'cost',
      icon: Wallet,
      title: t(`${slug}.IndustryChallenges.cards.cost.title`),
      description: t(`${slug}.IndustryChallenges.cards.cost.description`),
    },
    {
      id: 'earlyStages',
      icon: AlertTriangle,
      title: t(`${slug}.IndustryChallenges.cards.earlyStages.title`),
      description: t(`${slug}.IndustryChallenges.cards.earlyStages.description`),
    },
  ]

  return (
    <section className="py-24 px-4 bg-white dark:bg-black border-y border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="max-w-3xl space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryChallenges.title`)}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            {t(`${slug}.IndustryChallenges.subtitle`)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-[#fafafa] dark:bg-neutral-900/40 border border-gray-100 dark:border-neutral-800 p-8 rounded-2xl flex flex-col h-full hover:shadow-sm transition-shadow"
            >
              <div className="w-10 h-10 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 mb-6 shadow-sm">
                <challenge.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                {challenge.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[5rem]">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
