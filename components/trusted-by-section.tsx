'use client'
import Image from 'next/image'
import { useMemo } from 'react'

const getTrustedByItems = () => [
  {
    title: 'CERTIFIED BY',
    logo: (
      <div className='relative w-10 lg:w-12 xl:w-14'>
        <Image
          src='/logo/ihk_logo.avif'
          alt='IHK Logo'
          width={80}
          height={48}
          className='w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300'
        />
      </div>
    ),
  },
  {
    title: 'GPU ENGINE USED',
    logo: (
      <div className='relative w-24 md:w-16 lg:w-20 xl:w-28'>
        <Image
          src='/logo/nvidia_logo.svg'
          alt='NVIDIA Logo'
          width={112}
          height={56}
          className='w-full h-auto'
        />
      </div>
    ),
  },
  {
    title: 'INTEGRATIONS',
    logo: (
      <div className='flex items-center justify-center gap-4 w-full'>
        <a
          href='https://apps.autodesk.com/RVT/en/Detail/Index?id=439862635907036577'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-24 md:w-16 lg:w-20 xl:w-28'
        >
          <Image
            src='/logo/revit_logo.avif'
            alt='Revit'
            width={96}
            height={48}
            className='w-full h-auto'
          />
        </a>
        <a
          href='https://www.food4rhino.com/en/app/typusai'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-15'
        >
          <Image
            src='/logo/rhino_logo.png'
            alt='Rhino'
            width={80}
            height={80}
            className='w-full h-auto'
          />
        </a>
        <div className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-28 md:w-16 lg:w-20 xl:w-32'>
          <Image
            src='/logo/archicad_logo.avif'
            alt='ArchiCAD'
            width={96}
            height={48}
            className='w-full h-auto'
          />
        </div>
        <a
          href='https://extensions.sketchup.com/extension/e6a9ad72-52d1-4c06-96c5-b26e8180db06/typus-ai'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-24 md:w-16 lg:w-20 xl:w-28'
        >
          <Image
            src='/logo/sketchup.png'
            alt='SketchUp'
            width={96}
            height={48}
            className='w-full h-auto'
          />
        </a>
      </div>
    ),
  },
  {
    title: 'AS SEEN ON',
    logo: (
      <div className='flex items-center justify-center gap-4 w-full'>
        <a
          href='https://www.dabonline.de/digital/architektur-visualisierung-ki-bildgeneratoren/'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-20'
        >
          <Image
            src='/logo/dab_logo.png'
            alt='DAB Logo'
            width={80}
            height={48}
            className='w-full h-auto'
          />
        </a>
        <a
          href='https://80-sekunden.de/'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-20'
        >
          <Image
            src='/logo/80sek_black.png'
            alt='80sek Logo'
            width={80}
            height={48}
            className='w-full h-auto'
          />
        </a>
        <div className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-20'>
          <Image
            src='/logo/heinze.png'
            alt='Heinze Logo'
            width={80}
            height={48}
            className='w-full h-auto'
          />
        </div>
        <a
          href='https://www.baunetz.de/newsletter/archiv/show_nl.php?fn=ausgabe_9917426.html&wt_mc=nla.2025-05-09.service.browseransicht&context=2239'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-20'
        >
          <Image
            src='/logo/baunetz-newsletter-logo.png'
            alt='Baunetz Logo'
            width={80}
            height={48}
            className='w-full h-auto'
          />
        </a>
        <a
          href='https://bauforum-innovationen.de/startups/'
          target='_blank'
          rel='noopener noreferrer'
          className='relative flex-shrink-0 transition-all duration-300 hover:scale-105 w-18 md:w-12 lg:w-16 xl:w-24'
        >
          <Image
            src='/logo/konferenzen-logo.png'
            alt='Konferenzen Logo'
            width={80}
            height={48}
            className='w-full h-auto'
          />
        </a>
      </div>
    ),
  },
  {
    title: 'FINALIST FOR TIC\nAWARD 2024.',
    logo: (
      <a
        href='https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?trk=public_post_embed_social-actions-reactions'
        target='_blank'
        rel='noopener noreferrer'
        className='relative cursor-pointer w-12 md:w-12 lg:w-16 xl:w-20'
      >
        <Image
          src='/logo/tic_logo.png'
          alt='TIC Logo'
          width={80}
          height={40}
          className='w-full h-auto'
        />
      </a>
    ),
  },
  {
    title: 'MEMBER OF.',
    logo: (
      <a
        href='https://bdbau.org/mitglieder/'
        target='_blank'
        rel='noopener noreferrer'
        className='relative w-18 md:w-14 lg:w-20 xl:w-24'
      >
        <Image
          src='/logo/lo_bdbau_1c_rz.avif'
          alt='Member Logo'
          width={96}
          height={48}
          className='w-full h-auto'
        />
      </a>
    ),
  },
]

export const TrustedBySection = () => {
  const trustedItems = useMemo(() => getTrustedByItems(), [])

  return (
    <div
      className='w-full bg-[#fcfcfd] backdrop-blur-sm relative z-30'
      style={{ minHeight: '15%', maxHeight: '15%', height: '15%' }}
    >
      <div className='flex justify-center items-start pt-3 md:pb-3 pb-1'>
        <div
          className='hidden lg:flex flex-wrap justify-around gap-y-1 md:gap-y-6'
          style={{ width: '100%' }}
        >
          {getTrustedByItems().map((item, index) => (
            <div
              key={index}
              className='flex flex-col'
              style={{ width: 'max-content' }}
            >
              <div
                className='text-xs font-bold text-center uppercase md:mb-3 mb-1 md:h-[24px]'
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  lineHeight: 1,
                }}
              >
                {item.title}
              </div>

              <div
                className='flex items-center justify-center hover:cursor-pointer'
                style={{ height: '60px' }}
              >
                {[2, 3].includes(index) ? (
                  item.logo
                ) : (
                  <div className='transition-all px-2 duration-300 hover:scale-110'>
                    {item.logo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='lg:hidden relative w-full overflow-hidden'>
          <div className='flex items-center gap-3 animate-marquee whitespace-nowrap'>
            {/* First set of items */}
            {trustedItems.map((item, index) => (
              <div
                key={`first-${index}`}
                className='flex flex-col px-2 flex-shrink-0'
                style={{ width: 'max-content' }}
              >
                <div
                  className='text-xs text-nowrap font-bold text-center uppercase mb-1'
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '1px',
                    fontSize: '8px',
                    lineHeight: 1,
                  }}
                >
                  {item.title}
                </div>

                <div
                  className='flex items-center justify-center hover:cursor-pointer'
                  style={{ height: '60px' }}
                >
                  {[2, 3].includes(index) ? (
                    item.logo
                  ) : (
                    <div className='transition-all px-2 duration-300 hover:scale-110'>
                      {item.logo}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {trustedItems.map((item, index) => (
              <div
                key={`second-${index}`}
                className='flex flex-col px-2 flex-shrink-0'
                style={{ width: 'max-content' }}
              >
                <div
                  className='text-xs text-nowrap font-bold text-center uppercase mb-1'
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '8px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    lineHeight: 1,
                  }}
                >
                  {item.title}
                </div>

                <div
                  className='flex items-center justify-center hover:cursor-pointer'
                  style={{ height: '60px' }}
                >
                  {[2, 3].includes(index) ? (
                    item.logo
                  ) : (
                    <div className='transition-all px-2 duration-300 hover:scale-110'>
                      {item.logo}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
