'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link2, Sliders, ShieldCheck } from 'lucide-react'

const renderLogo = (hasLogo: string) => {
  switch (hasLogo) {
    case 'acc':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-black dark:text-white">
          <path d="M12 2L2 22h4.5l2.5-5.5h6l2.5 5.5H22L12 2zm-2 12.5L12 9l2 5.5H10z" />
        </svg>
      )
    case 'ifc':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      )
    case 'powerbi':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <rect x="3" y="13" width="4" height="8" rx="1" fill="#E2A100" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
          <rect x="17" y="2" width="4" height="19" rx="1" fill="#FFE787" />
        </svg>
      )
    case 'navisworks':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="4" fill="#0072C6" />
          <path d="M6 18V6h3.5l5 7.5V6H18v12h-3.5L9.5 10.5V18H6z" fill="white" />
        </svg>
      )
    case 'grasshopper':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 19l4-4h6l4 4" />
          <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
          <path d="M12 9V3" />
          <path d="M10 5l2-2 2 2" />
        </svg>
      )
    case 'blender':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="#E87D0D" />
          <circle cx="12" cy="12" r="4" fill="#005B94" />
          <path d="M12 4c2 0 4 1 5 3M12 20c-2 0-4-1-5-3M4 12c0-2 1-4 3-5" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      )
    case 'civil3d':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="4" fill="#7030A0" />
          <path d="M17 15.5c-1 1-2.5 1.5-4 1.5-3 0-5.5-2.5-5.5-5.5S10 6 13 6c1.5 0 3 .5 4 1.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'autocad':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="4" fill="#D32F2F" />
          <path d="M6 18L12 6l6 12h-3l-3-6.5L9 18H6z" fill="white" />
        </svg>
      )
    case 'etabs':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <rect width="24" height="24" rx="4" fill="#34495E" />
          <text x="12" y="15" fill="white" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ETABS</text>
        </svg>
      )
    case 'tekla':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="#005A9C" strokeWidth="2">
          <path d="M6 6h12M6 18h12M12 6v12M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'vectorworks':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#ccc" strokeWidth="1" />
          <circle cx="12" cy="12" r="9" fill="white" />
          <path d="M8 8l4 8 4-8" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'databricks':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 3.5L7.5 9v6L12 17.5 16.5 15V9L12 6.5z" fill="#FF3622" />
        </svg>
      )
    case 'snowflake':
      return (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="#29B6F6" strokeWidth="2">
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          <path d="M12 6l-3 3M12 18l3-3M6 12l3 3M18 12l-3-3" />
        </svg>
      )
    default:
      return null
  }
}

const IntegrationCard = ({
  title,
  description,
  hasLogo,
  badge,
  infoIcon,
}: {
  title: string
  description: string
  hasLogo: string
  badge?: string | boolean
  infoIcon?: boolean
}) => {
  const isImgLogo = hasLogo.endsWith('_img')
  const imgPath = isImgLogo
    ? hasLogo === 'revit_img'
      ? '/logo/revit_logo.png'
      : hasLogo === 'rhino_img'
        ? '/logo/rhino_logo.png'
        : hasLogo === 'sketchup_img'
          ? '/logo/sketchup.png'
          : hasLogo === 'archicad_img'
            ? '/logo/archicad_logo.png'
            : ''
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover:opacity-[0.03] transition-opacity">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
      </div>

      {/* Top Section: Logo & Badge */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          {isImgLogo ? (
            <div className="relative w-12 h-12">
              <Image
                src={imgPath}
                alt={title}
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          ) : (
            renderLogo(hasLogo)
          )}
        </div>
        {badge && (
          <span className="bg-black dark:bg-white text-white dark:text-black text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase scale-90 origin-top-right mt-1.5">
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-1.5 relative z-10 font-sans leading-tight">
        {title}
        {infoIcon && (
          <span className="text-neutral-400 dark:text-neutral-500 text-xs select-none">
            ⓘ
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="text-neutral-500 dark:text-neutral-400 text-[13px] leading-relaxed font-sans font-medium flex-grow relative z-10">
        {description}
      </p>
    </motion.div>
  )
}

export const ThreeDIntegrations = () => {
  const t = useTranslations('Integrations')

  const benefits = [
    { key: 'planning', icon: Link2 },
    { key: 'control', icon: Sliders },
    { key: 'security', icon: ShieldCheck },
  ]

  const platforms = [
    { key: 'acc', hasLogo: 'acc' },
    { key: 'ifc', hasLogo: 'ifc' },
    { key: 'revit', hasLogo: 'revit_img' },
    { key: 'powerbi', hasLogo: 'powerbi' },
    { key: 'rhino', hasLogo: 'rhino_img' },
    { key: 'sketchup', hasLogo: 'sketchup_img' },
    { key: 'navisworks', hasLogo: 'navisworks' },
    { key: 'grasshopper', hasLogo: 'grasshopper' },
    { key: 'blender', hasLogo: 'blender' },
    { key: 'archicad', hasLogo: 'archicad_img' },
    { key: 'civil3d', hasLogo: 'civil3d' },
    { key: 'autocad', hasLogo: 'autocad' },
    { key: 'etabs', hasLogo: 'etabs' },
    { key: 'tekla', hasLogo: 'tekla' },
    { key: 'vectorworks', hasLogo: 'vectorworks', infoIcon: true },
    { key: 'databricks', hasLogo: 'databricks', badge: 'New' },
    { key: 'snowflake', hasLogo: 'snowflake', badge: 'New' },
  ]

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-[#FDFDFD] dark:bg-neutral-950/20 border-y border-neutral-100 dark:border-neutral-900">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          <h2 className="heading-primary mb-4 text-left">
            {t('header')}
          </h2>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 pb-12 border-b border-neutral-100 dark:border-neutral-900">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white rounded-xl flex items-center justify-center mb-4 border border-neutral-100/50 dark:border-neutral-800/50">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="subheading-primary mb-2 dark:text-white font-sans ">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-[13px] leading-relaxed font-sans font-medium">
                  {t(`benefits.${benefit.key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <IntegrationCard
              key={platform.key}
              title={t(`${platform.key}.title`)}
              description={t(`${platform.key}.description`)}
              hasLogo={platform.hasLogo}
              badge={platform.badge}
              infoIcon={platform.infoIcon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
