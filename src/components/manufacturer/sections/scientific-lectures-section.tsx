import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Play } from 'lucide-react'

interface ScientificLecturesSectionProps {
  t: (key: string) => string
}

export function ScientificLecturesSection({ t }: ScientificLecturesSectionProps) {
  return (
    <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
        <span>[ SECTION 02 // WISSENSCHAFTLICHE KOOPERATION ]</span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">RWTH AACHEN COMPUTER GRAPHICS</span>
      </div>

      <div className="w-full space-y-10">
        {/* Prof. Dr. Leif Kobbelt Cooperation Card placed above videos */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-3 max-w-2xl">
          <div
            className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'Arial' }}
          >
            {t('slide7.coopLabel')}
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-black text-white flex-shrink-0 shadow-md">
              <Image src="/cube_mesh_icon.png" alt="Cube Mesh Icon" width={32} height={32} className="w-7 h-7 object-contain" />
            </div>
            <div className="space-y-0.5">
              <h4 className="heading-primary text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Arial' }}>
                {t('slide7.professorName')}
              </h4>
              <p className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-snug" style={{ fontFamily: 'Arial' }}>
                {t('slide7.professorTitle')}
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Video 1 Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black relative shadow-inner">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/_IZowy8X29c"
                  title={t('videoSlide.video1Title')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>

              <div className="space-y-2.5 pt-1">
                <div
                  className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400"
                  style={{ fontFamily: 'Arial' }}
                >
                  RWTH AACHEN VORTRAG
                </div>
                <h4 className="subheading-primary text-lg" style={{ fontFamily: 'Arial' }}>
                  {t('videoSlide.video1Title')}
                </h4>
                <p className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" style={{ fontFamily: 'Arial' }}>
                  {t('videoSlide.video1Desc')}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Link
                href="https://www.youtube.com/watch?v=_IZowy8X29c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline"
                style={{ fontFamily: 'Arial' }}
              >
                <span>Auf YouTube ansehen</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Video 2 Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 relative shadow-inner group">
                <Link
                  href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full block relative"
                >
                  <Image
                    src="https://img.youtube.com/vi/-Ts-IGJiIGI/hqdefault.jpg"
                    alt={t('videoSlide.video2Title')}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl transition transform group-hover:scale-110">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="space-y-2.5 pt-1">
                <div
                  className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400"
                  style={{ fontFamily: 'Arial' }}
                >
                  DFG LEIBNIZ-PREIS PORTRÄT
                </div>
                <h4 className="subheading-primary text-lg" style={{ fontFamily: 'Arial' }}>
                  {t('videoSlide.video2Title')}
                </h4>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" style={{ fontFamily: 'Arial' }}>
                  {t('videoSlide.video2Desc')}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Link
                href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline"
                style={{ fontFamily: 'Arial' }}
              >
                <span>Auf YouTube ansehen</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
