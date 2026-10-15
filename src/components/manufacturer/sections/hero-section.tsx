import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { CornerSquares } from '@/components/common/corner-squares'
import { AnimatedStatNumber } from '@/components/manufacturer/animated-stat-number'
import { TestimonialMontageVideo, TESTIMONIAL_MONTAGE_URL } from '@/components/testimonial-montage-video'

interface HeroSectionProps {
  locale: string
  t: (key: string) => string
}

export function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <section className="relative py-12 text-center">
      <div className="w-full flex flex-col items-center justify-center text-center space-y-10">
        {/* Top Specification Badge Tag */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs text-xs">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 dark:text-neutral-300 font-semibold">
            EU FFPLUS RESEARCH PROGRAMME &bull; DIGITALE MATERIAL- & TEXTURFÖRDERUNG
          </span>
        </div>

        {/* Main Logo Container Box with Corner Squares */}
        <div className="relative p-6 sm:p-8 max-w-xl w-full flex flex-col items-center justify-center">
          <CornerSquares />
          <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 py-1 select-none">
            <div className="bg-black dark:bg-white w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
            <span
              className="text-black dark:text-white font-normal tracking-[0.1em] uppercase text-2xl sm:text-3xl md:text-4xl leading-none"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              TYPUS
            </span>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="flex justify-center w-full z-10 my-2 relative">
          <Link
            href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 sm:px-10 rounded-full bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2.5 border border-neutral-800 dark:border-neutral-200 cursor-pointer"
            style={{ fontFamily: 'Arial' }}
          >
            <span>{locale === 'de' ? 'Kostenloses Beratungsgespräch buchen' : 'Book a free consultation'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Material Provider & Manufacturer Sign-Up Box */}
        <div className="relative p-6 sm:p-7 max-w-xl w-full flex flex-col items-center justify-center text-center space-y-4">
          <CornerSquares />
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t('providerBox.badge')}
            </div>
            <h4 className="text-lg sm:text-xl text-neutral-900 dark:text-white" style={{ fontFamily: 'Arial' }}>
              {t('providerBox.title')}
            </h4>
            <p
              className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: 'Arial' }}
            >
              {t('providerBox.desc')}
            </p>
          </div>
        </div>

        {/* ── HERO VIDEO SHOWCASE (TESTIMONIALS MONTAGE & TYPUS V9) ── */}
        <div className="w-full max-w-4xl mx-auto my-2">
          <TestimonialMontageVideo
            tabs={[
              {
                label: locale === 'de' ? '★ Kundenstimmen (Montage)' : '★ Testimonials Montage',
                url: TESTIMONIAL_MONTAGE_URL,
              },
              {
                label: locale === 'de' ? 'Plattform-Demo (V9)' : 'Platform Demo (V9)',
                url: 'https://typus-ai.s3.eu-central-1.amazonaws.com/landingpage/public/video/TYPUS+V9.mp4',
              },
            ]}
            badge={locale === 'de' ? 'KUNDENSTIMMEN & PRAXIS' : 'CLIENT EXPERIENCES'}
            title={locale === 'de' ? 'Was Architekten & Hersteller über Typus sagen' : 'What Architects & Manufacturers Say About Typus'}
          />
        </div>

        {/* Active Users Metric Card */}
        <div className="relative p-6 sm:p-8 space-y-3 max-w-2xl w-full">
          <CornerSquares />
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center mx-auto">
            <Users className="w-6 h-6 stroke-[1.75]" />
          </div>
          <p
            className="subheading-primary text-base sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
            style={{ fontFamily: 'Arial' }}
          >
            <Link href={`/${locale}`} className="text-[#0086bf] hover:underline ">
              TYPUS
            </Link>{' '}
            {t('slide1.activeUsers')}
          </p>
        </div>

        {/* STATS BANNER SECTION */}
        <div
          className="relative w-full rounded-2xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-2xs overflow-hidden my-4 py-8 sm:py-10 px-6 sm:px-10 max-w-4xl mx-auto"
          style={{ fontFamily: 'Arial' }}
        >
          <CornerSquares />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 dark:divide-neutral-800">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center space-y-1.5 pt-4 sm:pt-0 sm:px-4">
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-white leading-none"
                style={{ fontFamily: 'Arial' }}
              >
                <AnimatedStatNumber value={t('stats.visitorsValue')} />
              </span>
              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal tracking-wide">
                {t('stats.visitorsLabel')}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center space-y-1.5 pt-4 sm:pt-0 sm:px-4">
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-white leading-none"
                style={{ fontFamily: 'Arial' }}
              >
                <AnimatedStatNumber value={t('stats.subscribersValue')} />
              </span>
              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal tracking-wide">
                {t('stats.subscribersLabel')}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center space-y-1.5 pt-4 sm:pt-0 sm:px-4">
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-white leading-none"
                style={{ fontFamily: 'Arial' }}
              >
                <AnimatedStatNumber value={t('stats.generationsValue')} />
              </span>
              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal tracking-wide">
                {t('stats.generationsLabel')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
