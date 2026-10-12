import React from 'react'
import Image from 'next/image'

interface FundingBarSectionProps {
  locale: string
  t: (key: string) => string
}

export function FundingBarSection({ locale, t }: FundingBarSectionProps) {
  return (
    <section className="py-4 border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6 shadow-2xs space-y-3 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-1">
          <Image
            src={
              locale === 'de'
                ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
            }
            alt="Kofinanziert von der Europäischen Union"
            width={220}
            height={55}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
          <Image
            src="/Logo_MWIKE.jpg"
            alt="Ministerium für Wirtschaft, Industrie, Klimaschutz und Energie NRW"
            width={220}
            height={55}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </div>

        <p
          className="subheading-primary text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Arial' }}
        >
          {t('slide4.desc')}
        </p>
      </div>
    </section>
  )
}
