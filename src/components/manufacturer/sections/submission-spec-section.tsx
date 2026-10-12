import React from 'react'
import Image from 'next/image'
import {
  LayoutGrid,
  Layers,
  Box,
  FileCheck,
  Sparkles,
  Database,
  Building2,
  ShieldCheck,
} from 'lucide-react'

interface SubmissionSpecSectionProps {
  t: (key: string) => string
}

export function SubmissionSpecSection({ t }: SubmissionSpecSectionProps) {
  const inputItems = [
    { icon: LayoutGrid, titleKey: 'slide10.inputs.0.title', descKey: 'slide10.inputs.0.desc' },
    { icon: Layers, titleKey: 'slide10.inputs.1.title', descKey: 'slide10.inputs.1.desc' },
    { icon: Box, titleKey: 'slide10.inputs.2.title', descKey: 'slide10.inputs.2.desc' },
    { icon: FileCheck, titleKey: 'slide10.inputs.3.title', descKey: 'slide10.inputs.3.desc' },
  ]

  return (
    <section className="py-8 border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="w-full">
        <div className="w-full rounded-3xl bg-neutral-950 text-white p-6 sm:p-8 lg:p-10 border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Top Header Logos Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-neutral-800/80">
            <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
              <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                <Image src="/logo/logo_ffplus.svg" alt="Fortissimo Plus" width={140} height={40} className="h-6 sm:h-7 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                <Image src="/logo/logo_eccc.svg" alt="ECCC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                <Image src="/logo/logo_eurohpc.svg" alt="EuroHPC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
              </div>
              <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                <Image src="/logo/logo_chipsju.svg" alt="Chips JU" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-neutral-800 pl-4 hidden sm:flex">
              <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-xs">
                <Image src="/logo/logo_rwth.svg" alt="RWTH Aachen University" width={160} height={40} className="h-6 sm:h-7 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Header Title & Subtitle */}
          <div className="space-y-2">
            <h3
              className="heading-primary text-xl sm:text-2xl md:text-3xl"
              style={{ fontFamily: 'Arial', color: 'white' }}
            >
              {t('slide10.title')}
            </h3>
            <p
              className="subheading-primary text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-4xl"
              style={{ fontFamily: 'Arial', color: '#d4d4d4' }}
            >
              {t('slide10.subtitle')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left Column: 4 Feature Boxes + Quote Banner */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                {inputItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3.5 hover:border-neutral-700 transition"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-200 flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="subheading-primary text-xs sm:text-sm text-white" style={{ fontFamily: 'Arial' }}>
                        {t(item.titleKey)}
                      </div>
                      <div className="subheading-primary text-[11px] sm:text-xs text-neutral-400" style={{ fontFamily: 'Arial' }}>
                        {t(item.descKey)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight Quote Notice Box */}
              <div
                className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-300 leading-relaxed font-medium"
                style={{ fontFamily: 'Arial' }}
              >
                <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>
                  <strong className="text-white block mb-0.5 text-xs">QUALITÄTSHINWEIS:</strong>
                  {t('slide10.notice')}
                </span>
              </div>
            </div>

            {/* Right Column: Hero Material Render Image & 3 Key Badges */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px]">
                <Image
                  src="/material_samples_showcase.png"
                  alt="Digital Material Samples Showcase - High Resolution PBR"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom 3 Standards Badges */}
              <div className="grid grid-cols-3 gap-3 text-center" style={{ fontFamily: 'Arial' }}>
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                  <Database className="w-4 h-4 text-neutral-300 mx-auto" />
                  <div className="text-white text-xs ">{t('slide10.badge1.title')}</div>
                  <div className="text-neutral-400 text-[10px]">{t('slide10.badge1.subtitle')}</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                  <Building2 className="w-4 h-4 text-neutral-300 mx-auto" />
                  <div className="text-white text-xs ">{t('slide10.badge2.title')}</div>
                  <div className="text-neutral-400 text-[10px]">{t('slide10.badge2.subtitle')}</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                  <ShieldCheck className="w-4 h-4 text-neutral-300 mx-auto" />
                  <div className="text-white text-xs ">{t('slide10.badge3.title')}</div>
                  <div className="text-neutral-400 text-[10px]">{t('slide10.badge3.subtitle')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer EU FFplus Funding Tag */}
          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span style={{ fontFamily: 'Arial' }}>
                Gefördert im FFplus Programm der Europäischen Union
              </span>
            </div>
            <div className="text-neutral-500 font-mono text-[10px] hidden sm:block">
              FFPLUS × TYPUS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
