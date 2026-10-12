import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BdBauMediaSectionProps {
  locale: string
  t: any
}

export function BdBauMediaSection({ locale, t }: BdBauMediaSectionProps) {
  return (
    <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-12">
      <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-widest uppercase">
        <span>[ SECTION 03 // BDBAU MITGLIEDSCHAFT & PRESSE ]</span>
        <span className="text-neutral-700 dark:text-neutral-300 font-semibold">DIGITALES BAUWESEN DEUTSCHLAND</span>
      </div>

      <div className="w-full space-y-12">
        <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center text-center">
          <div className="w-full h-80 sm:h-96 md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 relative bg-white dark:bg-neutral-900 shadow-md flex items-center justify-center p-6">
            <Image
              src="/research_bdbau_directory.png"
              alt="Bundesverband Digitales Bauwesen - Typus.AI Mitgliedschaft Directory"
              width={850}
              height={620}
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>

          <p
            className="subheading-primary text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl"
            style={{ fontFamily: 'Arial' }}
          >
            <Link href={`/${locale}`} className="text-[#0086bf] hover:underline ">
              TYPUS
            </Link>{' '}
            {t.rich('slide2.bdbauDesc', {
              link: (chunks: React.ReactNode) => (
                <a
                  href="https://bdbau.org/mitglieder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-white transition-all underline-offset-4"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>

          <div className="flex items-center justify-center gap-5 pt-2">
            <a
              href="https://bdbau.org/mitglieder/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image
                src="/bdbau.png"
                alt="Bundesverband Digitales Bauwesen"
                width={450}
                height={200}
                className="h-28 sm:h-36 md:h-44 w-auto object-contain dark:invert"
              />
            </a>
          </div>
        </div>

        {/* Media Press Logos Container Box */}
        <div className="p-8 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md shadow-xs space-y-8">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-neutral-400">
            BEKANNT AUS MEDIEN & FACHPRESSE
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
            <div className="flex items-center justify-center p-4">
              <Image
                src="/logo/konferenzen-logo.png"
                alt="FAZ Konferenzen"
                width={220}
                height={80}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/logo/dab_logo.png"
                alt="Deutsches Architektenblatt"
                width={240}
                height={90}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain invert dark:invert-0"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/logo/80sek_black.png"
                alt="Neues Bauen 80 Sekunden"
                width={260}
                height={100}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src="/logo/baunetz_logo.png"
                alt="BauNetz"
                width={220}
                height={80}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:invert"
              />
            </div>
          </div>

          <p
            className="subheading-primary text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800 pt-6"
            style={{ fontFamily: 'Arial' }}
          >
            {t('slide3.desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
