import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Target } from 'lucide-react'
import { CornerSquares } from '@/components/common/corner-squares'

interface ProductsAIModelSectionProps {
  locale: string
  t: (key: string) => string
  viewerShowcaseNode: React.ReactNode
}

export function ProductsAIModelSection({
  locale,
  t,
  viewerShowcaseNode,
}: ProductsAIModelSectionProps) {
  return (
    <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-12">
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
        <span>[ SECTION 06 // MATERIAL KATALOG & DIGITALE SHOWCASE ]</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">ARCHITEXTURES × MATERIAL GUIDE</span>
      </div>

      <div className="w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title, Subtitle, Checklist & Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="heading-primary text-2xl sm:text-3xl" style={{ fontFamily: 'Arial' }}>
              {t('slide7.title')}
            </h3>

            <div className="space-y-3">
              <div
                className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide7.badge')}
              </div>
              <p
                className="subheading-primary text-base md:text-lg lg:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide7.desc')}
              </p>
            </div>

            {/* 4 Checklist Items */}
            <div className="space-y-3 pt-2">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 text-sm md:text-base text-neutral-800 dark:text-neutral-200 font-semibold"
                  style={{ fontFamily: 'Arial' }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{t(`slide8.checklist.${idx}`)}</span>
                </div>
              ))}
            </div>

            {/* 2 Info Cards (Ihr Vorteil & Direkt im Workflow) */}
            <div className="space-y-4 pt-2">
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span
                    className="text-xs text-black dark:text-white uppercase tracking-wider block"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide8.advantageBadge')}
                  </span>
                  <p
                    className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide8.advantageDesc')}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <Image
                    src="/cube_mesh_icon.png"
                    alt="3D Cube Icon"
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain invert dark:invert-0"
                  />
                </div>
                <div className="space-y-1">
                  <span
                    className="text-xs text-black dark:text-white uppercase tracking-wider block"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide8.workflowBadge')}
                  </span>
                  <p
                    className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide8.workflowDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Render Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl h-[480px] sm:h-[600px] md:h-[680px] lg:h-[740px]">
              <Image
                src="/architectural_building_render.png"
                alt="Fotorealistische Fassaden- & Materialvisualisierung - Modern Building Architecture Render"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Interactive Material & Texture Viewer Showcase */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
          {viewerShowcaseNode}
        </div>

        {/* PROMINENT SPOTLIGHT: EINGEBETTETER TYPUS-KONFIGURATOR */}
        <div className="mt-8 relative p-6 sm:p-8 rounded-2xl bg-[#f7f5f0] dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-2xs text-left">
          <CornerSquares />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-md border border-black bg-black text-white text-[10px] uppercase tracking-widest">
                  {locale === 'de' ? 'PRODUKT-FEATURE' : 'PRODUCT FEATURE'}
                </span>
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                  350 € / {locale === 'de' ? 'Monat' : 'month'}
                </span>
              </div>

              <h4
                className="text-xl sm:text-2xl text-neutral-950 dark:text-white tracking-tight"
                style={{ fontFamily: 'Arial' }}
              >
                {locale === 'de'
                  ? 'Eingebetteter TYPUS-Konfigurator für Ihre eigene Website'
                  : 'Embedded TYPUS Configurator for Your Own Website'}
              </h4>

              <p
                className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                style={{ fontFamily: 'Arial' }}
              >
                {locale === 'de'
                  ? 'Integrieren Sie diesen interaktiven 3D- und generativen KI-Konfigurator nahtlos in Ihren eigenen Online-Auftritt. Architekten, Planer und Bauherren konfigurieren Ihre Materialien und Produkte direkt im Entwurf.'
                  : 'Seamlessly embed this interactive 3D and generative AI configurator into your own website. Enable architects, designers, and clients to configure your materials and products directly within active designs.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href={`/${locale}/embedded-configurator`}
                className="py-2.5 px-6 rounded-md bg-black hover:bg-neutral-800 text-white text-xs font-medium tracking-widest uppercase text-center transition-all shadow-2xs inline-flex items-center justify-center gap-2"
                style={{ fontFamily: 'Arial' }}
              >
                <span>{locale === 'de' ? 'Mehr erfahren' : 'Learn More'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-md border border-black dark:border-white text-neutral-900 dark:text-white text-xs font-medium tracking-widest uppercase text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all inline-flex items-center justify-center gap-1.5"
                style={{ fontFamily: 'Arial' }}
              >
                <span>{locale === 'de' ? 'Jetzt testen' : 'Try Now'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
