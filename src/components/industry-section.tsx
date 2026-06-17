'use client'

import { Link } from '@/i18n/navigation'
import { MediaBucketUrl } from '@/lib/constants'
import { motion } from 'framer-motion'
import {
  Building2,
  Car,
  Hammer,
  Home,
  Paintbrush,
  Palette,
  Users,
  UtensilsCrossed
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Compare } from '@/components/ui/compare'
import { useIsMobile } from '@/hooks/use-mobile'
import TypusLogoBlack from './common/typus-logo-black'

const IndustryCard = ({
  icon: Icon,
  title,
  description,
  images
}: {
  icon: any,
  title: string,
  description: string,
  images?: string[]
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
      {images && images.length >= 2 && (
        <div className="w-full h-56 sm:h-52 mb-8 rounded-xl overflow-hidden relative">
          <Compare
            firstImage={images[0]}
            secondImage={images[1]}
            className="w-full h-full object-cover border-none"
            slideMode="hover"
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-xl  text-gray-900">{title}</h3>
      </div>

      <p style={{ fontFamily: 'sans-serif' }} className="text-gray-700 text-sm leading-relaxed flex-grow">
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
      images: [MediaBucketUrl + 'industeries/architects/before.webp', MediaBucketUrl + 'industeries/architects/after.webp'],
    },
    {
      id: 'interiorArchitects',
      icon: Palette,
      title: t('cards.interiorArchitects.title'),
      description: t('cards.interiorArchitects.description'),
      images: [MediaBucketUrl + 'industeries/interior/before.webp', MediaBucketUrl + 'industeries/interior/after.webp'],
    },
    {
      id: 'carpenters',
      icon: Hammer,
      title: t('cards.carpenters.title'),
      description: t('cards.carpenters.description'),
      images: [MediaBucketUrl + 'industeries/carpenters/before.webp', MediaBucketUrl + 'industeries/carpenters/after.webp'],
    },
    {
      id: 'kitchenBuilders',
      icon: UtensilsCrossed,
      title: t('cards.kitchenBuilders.title'),
      description: t('cards.kitchenBuilders.description'),
      images: [MediaBucketUrl + 'industeries/kitchen/before.webp', MediaBucketUrl + 'industeries/kitchen/after.webp'],
    },
    {
      id: 'painters',
      icon: Paintbrush,
      title: t('cards.painters.title'),
      description: t('cards.painters.description'),
      images: [MediaBucketUrl + 'industeries/painters/before.webp', MediaBucketUrl + 'industeries/painters/after.webp'],
    },
    {
      id: 'furnitureMakers',
      icon: Car,
      title: t('cards.furnitureMakers.title'),
      description: t('cards.furnitureMakers.description'),
      images: [MediaBucketUrl + 'industeries/furniture/before.webp', MediaBucketUrl + 'industeries/furniture/after.webp'],
    },
    {
      id: 'developers',
      icon: Users,
      title: t('cards.developers.title'),
      description: t('cards.developers.description'),
      images: [MediaBucketUrl + 'industeries/developers/before.webp', MediaBucketUrl + 'industeries/developers/after.webp'],
    },
    {
      id: 'realEstate',
      icon: Home,
      title: t('cards.realEstate.title'),
      description: t('cards.realEstate.description'),
      images: [MediaBucketUrl + 'industeries/real-estate/before.webp', MediaBucketUrl + 'industeries/real-estate/after.webp'],
    },
  ]

  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div>
      </div>
    )
  }
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
        {/* <div className="text-center mb-16">
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
        </div> */}

         <div className="mb-12 relative z-10 max-w-7xl mx-auto text-left px-4">
          {/* <div className=""> */}
         
               <h2 className="text-2xl text-center sm:text-3xl md:text-[32px] font-normal text-black dark:text-white tracking-tight leading-none mb-4">
             
               {t('title')} 
            </h2>

            <p className="text-gray-500 text-center dark:text-neutral-400 text-sm md:text-base font-medium font-sans">
          {t('subtitle')}
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <Link key={industry.id} href={`/industry/${industry.id}`} className="block h-full">
              <IndustryCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                images={industry.images}
              />
            </Link>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
          >
            {t('viewAll')}
            <ChevronRight size={16} />
          </motion.button>
        </div> */}
      </div>
    </section>
  )
}
