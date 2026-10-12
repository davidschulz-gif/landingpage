import React from 'react'
import Image from 'next/image'

interface ResearchPartnersSectionProps {
  t: (key: string) => string
}

export function ResearchPartnersSection({ t }: ResearchPartnersSectionProps) {
  return (
    <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
        <span>[ SECTION 05 // FORSCHUNGSPARTNER & BEGLEITUNG ]</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">EFRE / JTF NRW & FFPLUS</span>
      </div>

      <div className="w-full space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="heading-primary text-2xl sm:text-3xl" style={{ fontFamily: 'Arial' }}>
              {t('slide6.title')}
            </h3>

            <div className="space-y-4 text-xs md:text-sm">
              {/* EFRE / JTF NRW Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo_efre_jtf.png"
                    alt="EFRE JTF NRW 2021-27"
                    width={220}
                    height={80}
                    className="h-14 sm:h-16 md:h-18 w-auto object-contain dark:invert"
                    unoptimized
                  />
                  <div
                    className="text-neutral-900 dark:text-white hidden sm:block text-xs md:text-sm"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide6.efreTitle')}
                  </div>
                </div>
                <span
                  className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs uppercase tracking-wider shrink-0"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide6.statusApproved')}
                </span>
              </div>

              {/* Fortissimo Plus Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 space-y-3 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo_ffplus_card.png"
                      alt="FORTISSIMO PLUS"
                      width={120}
                      height={55}
                      className="h-11 sm:h-13 w-auto object-contain"
                    />
                    <div
                      className="text-neutral-900 dark:text-white text-xs md:text-sm"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide6.ffplusTitle')}
                    </div>
                  </div>
                  <span
                    className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs uppercase tracking-wider shrink-0"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide6.statusApproved')}
                  </span>
                </div>
                <p
                  className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide6.ffplusDesc')}
                </p>
              </div>

              {/* Kooperationen & Partner Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 space-y-4 shadow-sm">
                <div
                  className="uppercase text-xs tracking-wider text-purple-600 dark:text-purple-400"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide6.partnerTitle')}
                </div>

                <div className="flex items-center gap-6 flex-wrap">
                  <Image
                    src="/logo_dfki.png"
                    alt="DFKI German Research Center for AI"
                    width={160}
                    height={50}
                    className="h-10 md:h-12 w-auto object-contain dark:invert"
                    unoptimized
                  />
                  <Image
                    src="/logo_concular.png"
                    alt="Concular"
                    width={120}
                    height={50}
                    className="h-10 md:h-12 w-auto object-contain dark:invert"
                    unoptimized
                  />
                  <Image
                    src="/logo_zukunft_bau.png"
                    alt="Zukunft Bau"
                    width={320}
                    height={100}
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain dark:invert"
                    unoptimized
                  />
                  <Image
                    src="/logo_kmu_innovativ.png"
                    alt="KMU-innovativ"
                    width={200}
                    height={60}
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain dark:invert"
                    unoptimized
                  />
                </div>

                <p
                  className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-3"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide6.partnerDesc')} &bull;{' '}
                  <span className="text-neutral-500 font-semibold">{t('slide6.deadline')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: JUPITER Supercomputer Rack Photo Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-2xl h-[520px] sm:h-[620px] md:h-[680px] lg:h-[720px]">
              <Image
                src="/jupiter_rack_photo.png"
                alt="JUPITER High-Performance Supercomputer Racks at Forschungszentrum Jülich"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

              <div
                className="absolute top-4 right-4 text-xs text-white bg-black/75 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-wider"
                style={{ fontFamily: 'Arial' }}
              >
                {t('slide6.rackTag')}
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div
                  className="text-3xl md:text-4xl lg:text-5xl text-white tracking-widest"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide6.rackTitle')}
                </div>
                <p className="text-xs md:text-sm text-neutral-300 font-mono" style={{ fontFamily: 'Arial' }}>
                  {t('slide6.rackSubtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
