'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Car,
  ChevronRight,
  Hammer,
  Home,
  Paintbrush,
  Palette,
  Users,
  UtensilsCrossed
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const IndustryCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any, 
  title: string, 
  description: string 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
    >
      <div className="mb-6">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
      <p style={{fontFamily:'sans-serif'}} className="text-gray-700 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  )
}

export const IndustrySection = () => {
  const t = useTranslations('Industry')

  const industries = [
    {
      id: 'architects',
      icon: Building2,
      title: t('cards.architects.title'),
      description: t('cards.architects.description'),
    },
    {
      id: 'interiorArchitects',
      icon: Palette,
      title: t('cards.interiorArchitects.title'),
      description: t('cards.interiorArchitects.description'),
    },
    {
      id: 'carpenters',
      icon: Hammer,
      title: t('cards.carpenters.title'),
      description: t('cards.carpenters.description'),
    },
    {
      id: 'kitchenBuilders',
      icon: UtensilsCrossed,
      title: t('cards.kitchenBuilders.title'),
      description: t('cards.kitchenBuilders.description'),
    },
    {
      id: 'painters',
      icon: Paintbrush,
      title: t('cards.painters.title'),
      description: t('cards.painters.description'),
    },
    {
      id: 'furnitureMakers',
      icon: Car, // Using Car for furniture makers as a placeholder if no better icon, but maybe 'Box' or 'Armchair'? Lucas has Sofa but let's see. Lucide doesn't have armchair by default in some versions. Let's use Car for now to match screenshot if it looks like that, wait, screenshot has a car icon for Möbelmacher (Furniture makers/Cabinet makers). Yes, it does look like a car.
      title: t('cards.furnitureMakers.title'),
      description: t('cards.furnitureMakers.description'),
    },
    {
      id: 'developers',
      icon: Users,
      title: t('cards.developers.title'),
      description: t('cards.developers.description'),
    },
    {
      id: 'realEstate',
      icon: Home,
      title: t('cards.realEstate.title'),
      description: t('cards.realEstate.description'),
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#F9F9F9] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
          >
            {t('viewAll')}
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
