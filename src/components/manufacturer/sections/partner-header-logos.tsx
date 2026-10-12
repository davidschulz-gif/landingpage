import React from 'react'
import Image from 'next/image'

export function PartnerHeaderLogos() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-8 pt-4">
      <div className="flex items-center justify-between w-full gap-6 sm:gap-8 md:gap-12 flex-wrap">
        <Image
          src="/logo/logo_ffplus.svg"
          alt="Fortissimo Plus"
          width={360}
          height={140}
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert"
        />
        <Image
          src="/logo/logo_eccc.svg"
          alt="ECCC European Cybersecurity Competence Centre"
          width={400}
          height={140}
          className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert"
        />
        <Image
          src="/logo/logo_eurohpc.svg"
          alt="EuroHPC Joint Undertaking"
          width={420}
          height={140}
          className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert"
        />
        <Image
          src="/logo/logo_chipsju.svg"
          alt="Chips JU"
          width={360}
          height={140}
          className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert"
        />
        <Image
          src="/logo/logo_rwth.svg"
          alt="RWTH Aachen University"
          width={450}
          height={140}
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert"
        />
      </div>
    </div>
  )
}
