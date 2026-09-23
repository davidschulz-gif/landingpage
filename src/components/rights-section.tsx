'use client'

import { motion } from 'framer-motion'
import { Briefcase, EyeOff, Shield, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CornerSquares } from './common/corner-squares'

const RightCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description 
}: { 
  icon: any, 
  title: string, 
  subtitle: string, 
  description: string 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col h-full relative group"
    >
      {/* <CornerSquares /> */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </div>

      <div className="mb-4 relative z-10">
        <span className="text-[10px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">{title}</span>
        <h3 className="mt-2 subheading-primary">{subtitle}</h3>
      </div>

      <p className="text-gray-600 dark:text-neutral-300 text-md leading-relaxed relative z-10 break-words font-sans">
        {description}
      </p>
    </motion.div>
  )
}

export const RightsSection = () => {
  const t = useTranslations('Rights')

  const rights = [
    {
      id: 'ownership',
      icon: Shield,
      title: t('cards.ownership.title'),
      subtitle: t('cards.ownership.subtitle'),
      description: t('cards.ownership.description'),
    },
    {
      id: 'dataPrivacy',
      icon: ShieldCheck,
      title: t('cards.dataPrivacy.title'),
      subtitle: t('cards.dataPrivacy.subtitle'),
      description: t('cards.dataPrivacy.description'),
    },
    {
      id: 'privacy',
      icon: EyeOff,
      title: t('cards.privacy.title'),
      subtitle: t('cards.privacy.subtitle'),
      description: t('cards.privacy.description'),
    },
    {
      id: 'commercial',
      icon: Briefcase,
      title: t('cards.commercial.title'),
      subtitle: t('cards.commercial.subtitle'),
      description: t('cards.commercial.description'),
    },
  ]

  return (
    <section id="rights" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#FDFDFD] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto relative z-10 p-6 sm:p-10 bg-white dark:bg-neutral-900/40 shadow-2xs">
        <CornerSquares />
        <div className="mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-gray-900 dark:text-neutral-200 uppercase block mb-3"
          >
            {t('badge')}
          </motion.span>
          <h2 className="text-left heading-primary mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rights.map((right) => (
            <RightCard
              key={right.id}
              icon={right.icon}
              title={right.title}
              subtitle={right.subtitle}
              description={right.description}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          {/* <CornerSquares /> */}
          <div className="flex items-center gap-4">
            <h4 className="subheading-primary">
              {t('banner.privacy')}
            </h4>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900 dark:text-white">{t('banner.hosting')}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t('banner.hostingDetails')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
