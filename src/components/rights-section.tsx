'use client'

import { motion } from 'framer-motion'
import { Briefcase, EyeOff, Shield, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'

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
      className="bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full relative group overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </div>

      <div className="mb-4 relative z-10">
        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{title}</span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900 break-words">{subtitle}</h3>
      </div>

      <p className="text-gray-600 text-md leading-relaxed relative z-10 break-words">
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
    <section className="py-24 px-6 relative overflow-hidden bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase block mb-4"
          >
            {t('badge')}
          </motion.span>
          {/* <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 break-words"
          >
            {t('title')}
          </motion.h2> */}
          <h2 className="text-2xl text-left sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
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
          className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <h4 className="text-md md:text-xl font-bold text-gray-900">
              {t('banner.privacy')}
            </h4>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">{t('banner.hosting')}</span>
              <span className="text-sm text-gray-500">{t('banner.hostingDetails')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
