'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Clock,
  GraduationCap,
  Home,
  Layout,
  LineChart,
  Palette
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { CornerSquares } from './common/corner-squares'

const UseCaseCard = ({ 
  icon: Icon, 
  badge, 
  title, 
  description, 
  benefit, 
  buttonText 
}: { 
  icon: any, 
  badge: string, 
  title: string, 
  description: string, 
  benefit: string, 
  buttonText: string 
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
      <CornerSquares />
      {/* Background Grid Pattern for Card */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity rounded-2xl overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">
          <Layout size={18} />
        </div>
      </div>

      <div className="mb-4 relative z-10">
        <span className="text-[10px] font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">{badge}</span>
        <h3 className="mt-2 subheading-primary">{title}</h3>
      </div>

      <p className="text-gray-800 dark:text-neutral-300 text-md leading-relaxed mb-6 flex-grow relative z-10 break-words font-sans">
        {description}
      </p>

      <div className="flex items-center gap-3 mb-2 relative z-10">
        <div className="w-5 h-5 flex items-center justify-center text-neutral-400">
          <Clock size={20} className='text-black dark:text-white' />
        </div>
        <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">{benefit}</span>
      </div>
    </motion.div>
  )
}

export const UseCasesSection = () => {
  const t = useTranslations('UseCases')

  const cases = [
    {
      id: 'architects',
      icon: Layout,
      title: t('architects.title'),
      description: t('architects.description'),
      benefit: t('architects.benefit'),
    },
    {
      id: 'interiorArchitects',
      icon: Palette,
      title: t('interiorArchitects.title'),
      description: t('interiorArchitects.description'),
      benefit: t('interiorArchitects.benefit'),
    },
    {
      id: 'realEstate',
      icon: Home,
      title: t('realEstate.title'),
      description: t('realEstate.description'),
      benefit: t('realEstate.benefit'),
    },
    {
      id: 'developers',
      icon: Building2,
      title: t('developers.title'),
      description: t('developers.description'),
      benefit: t('developers.benefit'),
    },
    {
      id: 'students',
      icon: GraduationCap,
      title: t('students.title'),
      description: t('students.description'),
      benefit: t('students.benefit'),
    },
    {
      id: 'companies',
      icon: LineChart,
      title: t('companies.title'),
      description: t('companies.description'),
      benefit: t('companies.benefit'),
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#f7f5f0' }}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold leading-tight mb-8 tracking-tight text-gray-900 break-words"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-800 leading-relaxed break-words"
          >
            {t('subtitle')}
          </motion.p>
        </div> */}

         {/* <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4"> */}
          <div className="mb-10">
            <h2 className=" text-left heading-primary mb-4">
              {t('title')}
            </h2>
            <p className="text-gray-500 text-left dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
          {t('subtitle')}
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase) => (
            <UseCaseCard
              key={useCase.id}
              icon={useCase.icon}
              badge={t('badge')}
              title={useCase.title}
              description={useCase.description}
              benefit={useCase.benefit}
              buttonText={t('button')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
