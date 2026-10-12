import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ShieldCheck } from 'lucide-react'

interface SupercomputerSectionProps {
  t: (key: string) => string
}

export function SupercomputerSection({ t }: SupercomputerSectionProps) {
  return (
    <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
      {/* Section Tag Header */}
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
        <span>[ SECTION 01 // SUPERCOMPUTER & AI MODEL ]</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> FORSCHUNGSZENTRUM JÜLICH
        </span>
      </div>

      <div className="w-full space-y-10">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span
            className="inline-block px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs uppercase tracking-widest"
            style={{ fontFamily: 'Arial' }}
          >
            {t('slide5.badge')}
          </span>
          <h3 className="heading-primary text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: 'Arial' }}>
            {t('slide5.title')}
          </h3>
          <p
            className="subheading-primary text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Arial' }}
          >
            {t('slide5.subtitle')}
          </p>
          <div className="text-xs text-neutral-400 font-mono pt-1" style={{ fontFamily: 'Arial' }}>
            {t('slide5.dateAuthor')}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 max-w-6xl mx-auto w-full shadow-2xl">
          <div className="aspect-[16/9] w-full relative">
            <Image
              src="/jupiter_inauguration.jpg"
              alt="Feierliche Einweihung des Supercomputers JUPITER am Forschungszentrum Jülich"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

            <div
              className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white text-xs tracking-wider bg-black/75 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 uppercase"
              style={{ fontFamily: 'Arial' }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
              {t('slide5.tag')}
            </div>

            <div
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xs text-neutral-200 bg-black/75 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 font-mono"
              style={{ fontFamily: 'Arial' }}
            >
              {t('slide5.caption')}
            </div>
          </div>
        </div>

        <div className="flex justify-center text-xs md:text-sm pt-2" style={{ fontFamily: 'Arial' }}>
          <Link
            href="https://www.golem.de/news/supercomputer-jupiter-eingeweiht-europaeisch-ist-hochleistungsrechnen-richtig-gedacht-2509-199789.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs flex items-center gap-2 transition"
          >
            <span className="font-semibold">{t('slide5.source')}</span>
            <ExternalLink className="w-4 h-4 shrink-0 text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
