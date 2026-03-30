'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const DetailedFeaturesSection = () => {
  const t = useTranslations('DetailedComparison')
  const isMobile = useIsMobile()

  const rowKeys = [
    'time',
    'cost',
    'iterations',
    'learningCurve',
    'outputQuality',
    'hardware',
    'updates',
    // 'setup',
    'control',
    'scalability',
    // 'hybrid',
  ]

  const rows = rowKeys.map((key) => ({
    id: key,
    label: t(`rows.${key}.label`),
    typus: t(`rows.${key}.typus`),
    traditional: t(`rows.${key}.traditional`),
  }))

  const formatText = (text: string) => {
    if (!text) return null;
    const separatorMatch = text.match(/ (\-|–) /);
    if (!separatorMatch) return <span className="font-bold">{text}</span>;

    const separator = separatorMatch[0];
    const parts = text.split(separator);
    const firstPart = parts[0];
    const restPart = parts.slice(1).join(separator);

    return (
      <span>
        <span className="font-bold">{firstPart}</span>
        <span style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }} className="text-sm font-normal">{separator}{restPart}</span>
      </span>
    );
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Grid Pattern (Optional, based on image) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-800"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {isMobile ? (
          <div className="space-y-6">
            {rows.map((row, i) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50/50 border border-gray-100 p-6 rounded-2xl"
              >
                <h3 className="font-bold text-gray-900 mb-4">{row.label}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('columns.typus')}</span>
                    <p className="text-gray-900 mt-1">{formatText(row.typus)}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('columns.traditional')}</span>
                    <p className="text-gray-900 mt-1">{formatText(row.traditional)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="py-6 px-8 text-left text-sm font-bold text-gray-900 uppercase tracking-wider w-1/4">
                    {t('columns.function')}
                  </th>
                  <th className="py-6 px-8 flex items-center gap-2 text-left text-sm font-bold text-gray-900 uppercase tracking-wider w-[37.5%]">
                    <span className="w-5 h-5 flex items-center justify-center border border-red-500 rounded-full">
                      <X size={12} className="text-red-500" />
                    </span>
                    {t('columns.traditional')}
                  </th>
                  <th className="py-6 px-8 text-left text-sm font-bold text-gray-900 uppercase tracking-wider w-[37.5%]">
                    {t('columns.typus')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="group hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="py-5 px-8 font-bold text-gray-900">
                      {row.label}
                    </td>
                    <td className="py-5 px-8 flex items-center gap-2 text-gray-900">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center">
                          <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />
                        </span>
                        {formatText(row.traditional)}
                      </div>
                    </td>
                    <td className="py-5 px-8  text-gray-900">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center">

                          <Check className="text-[#00A878] w-5 h-5 flex-shrink-0 mt-1" />
                        </span>
                        {formatText(row.typus)}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-black italic text-center"
        >
          {t('footer')}
        </motion.p>
      </div>
    </section>
  )
}
