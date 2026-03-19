'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { appUrl } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Check, TrendingUp, X, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const ComparisonSection = () => {
  const t = useTranslations('Comparison')
  const heroT = useTranslations('Hero')
  const isMobile = useIsMobile()

  const rows = [
    { id: 'outside', task: t('rows.outside.task'), traditional: t('rows.outside.traditional'), typus: t('rows.outside.typus') },
    { id: 'interior', task: t('rows.interior.task'), traditional: t('rows.interior.traditional'), typus: t('rows.interior.typus') },
    { id: 'facade', task: t('rows.facade.task'), traditional: t('rows.facade.traditional'), typus: t('rows.facade.typus') },
    { id: 'redesign', task: t('rows.redesign.task'), traditional: t('rows.redesign.traditional'), typus: t('rows.redesign.typus') },
    { id: 'variants', task: t('rows.variants.task'), traditional: t('rows.variants.traditional'), typus: t('rows.variants.typus') },
    { id: 'pitch', task: t('rows.pitch.task'), traditional: t('rows.pitch.traditional'), typus: t('rows.pitch.typus') },
  ]

  const offerCards = [
    {
      title: heroT('appOfferTitle') || 'APP OFFER',
      features: [
        heroT('features.createAccount'),
        heroT('features.downloadPlugins'),
        heroT('features.tutorial'),
        heroT('features.stepByStep'),
        heroT('features.caseStudies'),
        heroT('features.welcomeGift'),
      ],
      href: `${appUrl}`,
      label: heroT('goToApp'),
      cardKey: 'app',
    },
    {
      title: heroT('serviceOfferTitle') || 'SERVICE OFFER',
      features: [
        heroT('features.servicePersonalVisualizer'),
        heroT('features.serviceVideoCall'),
        heroT('features.serviceEmailComm'),
        heroT('features.serviceDetailedFeedback'),
        heroT('features.serviceImageRequest'),
        heroT('features.serviceBookDemo'),
      ],
      href: '/done-for-you',
      label: heroT('doneForYouService'),
      cardKey: 'service',
    },
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header section */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F7F2] text-[#00A878] text-sm font-medium mb-6"
        >
          <TrendingUp size={16} />
          {t('badge')}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-4xl font-bold leading-tight mb-6"
        >
          {t('title').split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-800 max-w-2xl"
        >
          {t('subtitle')}
        </motion.p>
      </div>

      {/* Comparison Table / Mobile Cards */}
      <div className="mb-16">
        {isMobile ? (
          <div className="space-y-4">
            {rows.map((row, i) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">{row.task}</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="text-red-600 w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">{t('columns.traditional')}</p>
                      <p className="text-sm text-gray-700">{row.traditional}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E6F7F2] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-[#00A878] w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#00A878] mb-1">{t('columns.typus')}</p>
                      <p className="text-sm font-bold text-gray-800">{row.typus}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="py-6 font-bold text-gray-700 w-1/3">{t('columns.task')}</th>
                  <th className="py-6 px-6 font-bold text-gray-700 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center border border-red-500 rounded-full">
                        <X size={12} className="text-red-500" />
                      </span>
                      {t('columns.traditional')}
                    </div>
                  </th>
                  <th className="py-6 px-6 font-bold text-gray-800 w-1/3 bg-[#F8F9F9] rounded-t-2xl">
                    <div className="flex items-center gap-2">
                      <Zap size={20} fill="currentColor" />
                      {t('columns.typus')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.id} className="border-b border-gray-100 last:border-0 group">
                    <td className="py-4 font-bold text-md pr-8">{row.task}</td>
                    <td className="py-4 px-6 text-gray-700 relative">
                      <div className="flex gap-3 text-sm items-start">
                        <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-6 bg-[#F8F9F9] ${i === rows.length - 1 ? 'rounded-b-2xl' : ''}`}>
                      <div className="flex gap-3 text-sm items-start">
                        <Check className="text-[#00A878] w-5 h-5 flex-shrink-0 mt-1" />
                        <span className="font-medium text-gray-800">{row.typus}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center text-gray-800 text-sm mt-8">
              {t('marketPrices')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
