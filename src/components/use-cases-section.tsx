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
      className="bg-white/80 backdrop-blur-sm border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full relative group overflow-hidden"
    >
      {/* Background Grid Pattern for Card */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">
          <Layout size={18} />
        </div>
      </div>

      <div className="mb-4 relative z-10">
        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{badge}</span>
        <h3 className="text-2xl mt-2 text-black break-words">{title}</h3>
      </div>

      <p className="text-gray-800 text-md leading-relaxed mb-6 flex-grow relative z-10 break-words">
        {description}
      </p>

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="w-5 h-5 flex items-center justify-center text-gray-400">
          <Clock size={24} className='text-black' />
        </div>
        <span className="text-sm font-semibold text-gray-800">{benefit}</span>
      </div>

        {/* <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:gap-3 transition-all relative z-10">
          {buttonText}
          <ChevronRight size={16} className="text-gray-400 group-hover:text-black" />
        </button> */}
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
    <section className="py-24 px-6 relative overflow-hidden bg-[#FDFDFD]">
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
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-left font-normal text-black dark:text-white  leading-none mb-4">
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
