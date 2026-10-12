import React from 'react'
import { Handshake, Settings, Tag, Coins, Rocket } from 'lucide-react'

interface ParticipationIncludesSectionProps {
  t: (key: string) => string
}

export function ParticipationIncludesSection({ t }: ParticipationIncludesSectionProps) {
  return (
    <section className="py-10 border-t border-neutral-200/80 dark:border-neutral-800 space-y-8">
      <div className="w-full space-y-8">
        <h3 className="heading-primary text-2xl sm:text-3xl" style={{ fontFamily: 'Arial' }}>
          {t('slide11.title')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
            <div className="space-y-2">
              <Handshake className="w-6 h-6 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
              <div
                className="text-xs sm:text-sm text-neutral-900 dark:text-white leading-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide11.card1Title')}
              </div>
            </div>
            <p
              className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {t('slide11.card1Desc')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
            <div className="space-y-2">
              <Settings className="w-6 h-6 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
              <div
                className="text-xs sm:text-sm text-neutral-900 dark:text-white leading-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide11.card2Title')}
              </div>
            </div>
            <p
              className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {t('slide11.card2Desc')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start hover:shadow-lg transition">
            <div className="space-y-2 text-center">
              <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto stroke-[1.5]" />
              <div
                className="text-xs sm:text-sm text-neutral-900 dark:text-white leading-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide11.card3Title')}
              </div>
            </div>
            <ul
              className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 space-y-1 list-disc pl-4 text-left leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {[0, 1].map((idx) => (
                <li key={idx}>{t(`slide11.card3List.${idx}`)}</li>
              ))}
            </ul>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
            <div className="space-y-2">
              <Coins className="w-6 h-6 text-amber-500 mx-auto stroke-[1.5]" />
              <div
                className="text-xs sm:text-sm text-neutral-900 dark:text-white leading-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide11.card4Title')}
              </div>
            </div>
            <p
              className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {t('slide11.card4Desc')}
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xs space-y-3 flex flex-col justify-start text-center hover:shadow-lg transition">
            <div className="space-y-2">
              <Rocket className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[1.5]" />
              <div
                className="text-xs sm:text-sm text-neutral-900 dark:text-white leading-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide11.card5Title')}
              </div>
            </div>
            <p
              className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {t('slide11.card5Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
