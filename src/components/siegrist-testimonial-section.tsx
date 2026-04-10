'use client'

import { useTranslations } from 'next-intl'
import { Instagram, ArrowLeft, Play, Globe } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { VideoThumbnail } from './video-thumbnail'

export function SiegristTestimonialSection() {
    const t = useTranslations('SiegristTestimonial')
    const params = useParams()
    const locale = params.locale as string

    const ClickableImage = ({
        src,
        alt,
        width,
        height,
        href,
        caption,
        className = "",
        priority = false
    }: {
        src: string,
        alt: string,
        width: number,
        height: number,
        href: string,
        caption?: string,
        className?: string,
        priority?: boolean
    }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative block group overflow-hidden ${className}`}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority={priority}
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
            </div>
            {caption && (
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gray-50 border-t border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-500 text-center">
                    {caption}
                </div>
            )}
        </a>
    )

    return (
        <article className="w-full max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
                href={`/${locale}`}
                className="inline-flex items-center text-sm font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t('backToHome')}
            </Link>

            {/* Article Header */}
            <header className="mb-8">
                <div className="inline-flex items-center px-2 py-0.5 mb-6 border-2 border-black font-bold text-[10px] uppercase tracking-widest w-fit shadow-[2px_2px_0px_#000000]">
                    {t('badge')}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[0.9] tracking-tighter text-gray-900 uppercase">
                    {t('sectionTitle')}
                </h1>

                <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span>{t('dateDisplay')}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{t('readingTime')}</span>
                </div>
            </header>

            {/* Intro Text Block: Pull Quote + Featured On */}
            <div className="space-y-8 mb-12">

                {/* Hero Image — Centered, smaller */}
                <div className="flex justify-center mb-16">
                    <div className="w-full max-w-2xl border-2 border-black shadow-[8px_8px_0px_#000000]">
                        <ClickableImage
                            src="/siegrist/portrait.png"
                            alt="Siegrist Architectes Portrait"
                            width={800}
                            height={440}
                            href="https://siegristarchitectes.ch/en/"
                            priority={true}
                        />
                    </div>
                </div>

                {/* Pull Quote */}
                <p className="text-xl md:text-2xl font-black leading-[1.1] text-black tracking-tight border-l-8 border-black pl-8 py-2">
                    {t('p1')}
                </p>

                {/* Featured On row */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        {t('featuredOn')}
                    </span>
                    <a
                        href="https://siegristarchitectes.ch/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-gray-800 text-xs font-black uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        Siegrist Architectes Website
                    </a>
                    <a
                        href="https://www.instagram.com/siegristarchitectes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-gray-800 text-xs font-black uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <Instagram className="w-3.5 h-3.5" />
                        Instagram
                    </a>
                </div>


            </div>


            {/* Main Content Area */}
            <div className="text-gray-800 leading-relaxed font-medium space-y-16">

                {/* Section 1: Text LEFT, Image RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 order-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h2')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p2')}</p>
                    </div>
                    <div className="order-2 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <ClickableImage
                            src="/siegrist/saint-aubin.png"
                            alt="Saint-Aubin Project Visualization"
                            width={960}
                            height={440}
                            href="https://www.instagram.com/p/DWgGKLNiN9P/"
                            caption={t('caption1')}
                        />
                    </div>
                </div>

                {/* EU Logo Divider */}
                <div className="flex items-center justify-center gap-6 py-6 border-y border-gray-200 my-4">
                    <Image
                        src={
                            locale === 'de'
                                ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                                : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
                        }
                        alt="EU Co-Funded"
                        width={300}
                        height={100}
                        className={`${locale === 'de' ? 'h-[40px]' : 'h-[95px]'} w-auto object-contain`}
                    />
                    <div className="hidden sm:block h-px flex-1 bg-gray-200" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 max-w-xs text-right hidden sm:block">
                        {t('euCoFunded')}
                    </p>
                </div>

                {/* Project Showcase 1: Text RIGHT, Video/Thumbnail LEFT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 flex justify-center">
                        <VideoThumbnail
                            href="https://www.instagram.com/p/DWgGKLNiN9P/"
                            imageSrc="/siegrist/saint-aubin.png"
                            title={t('instagramTitle1')}
                            subtitle={t('reelDescription1')}
                            handle="@siegristarchitectes"
                        />
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('instagramTitle1')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">
                            {t('reelDescription1')}
                        </p>
                    </div>
                </div>

                {/* Section 2: Image LEFT, Text RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <ClickableImage
                            src="/siegrist/venthone.png"
                            alt="Venthône Project Visualization"
                            width={960}
                            height={540}
                            href="https://www.instagram.com/p/DViepQmiAsG/"
                            caption={t('caption2')}
                        />
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h3')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p3')}</p>
                    </div>
                </div>

                {/* Section 3: Text LEFT, Video/Thumbnail RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 order-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('instagramTitle2')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">
                            {t('reelDescription2')}
                        </p>
                    </div>
                    <div className="order-2 flex justify-center">
                        <VideoThumbnail
                            href="https://www.instagram.com/p/DViepQmiAsG/"
                            imageSrc="/siegrist/venthone.png"
                            title={t('instagramTitle2')}
                            subtitle={t('reelDescription2')}
                            handle="@siegristarchitectes"
                        />
                    </div>
                </div>

                <div className="py-6 border-y border-gray-200 my-4 text-center">
                     <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        {t('featuredOnIllustrarch')}
                    </p>
                </div>

                {/* Section 4: Text LEFT, Image RIGHT (Portrait) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 order-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h4')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p4')}</p>
                    </div>
                    <div className="order-2 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <ClickableImage
                            src="/siegrist/portrait.png"
                            alt="Siegrist Architectes Team"
                            width={960}
                            height={540}
                            href="https://siegristarchitectes.ch/en/"
                            caption={t('caption3')}
                        />
                    </div>
                </div>

                {/* Closing statement */}
                <p className="text-4xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                    {t('p5')}
                </p>
            </div>

            {/* Article Footer */}
            <footer className="mt-24 pt-12 border-t-2 border-black flex flex-col items-center text-center">

                {/* EU Funding Attribution */}
                <div className="w-full mb-12 p-6 bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Image
                        src={
                            locale === 'de'
                                ? '/eu-kofinanziert-von-der-europaeischen-union.png'
                                : '/eu-kofinanziert-von-der-europaeischen-union-en.png'
                        }
                        alt="EU Co-Funded"
                        width={300}
                        height={250}
                        className={`${locale === 'de' ? 'h-[40px]' : 'h-[95px]'} w-auto object-contain`}
                    />
                    <div className="text-left">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                             {t('euCoFunded')}
                        </p>
                        <p className="text-xs text-gray-400 mt-1 max-w-xs">
                             {locale === 'de'
                                ? 'Typus wird im Rahmen des EU-geförderten NRW-Programms entwickelt.'
                                : 'Typus is developed under the EU-funded NRW program.'}
                        </p>
                    </div>
                </div>

                <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center font-black text-white text-2xl">T</div>
                <h3 className="font-black text-xl mb-4 uppercase tracking-tight leading-tight max-w-sm">Experience the future of architecture visualization</h3>
                <Link
                    href={`/${locale}`}
                    className="inline-flex items-center gap-2 font-black text-sm bg-black text-white border-2 border-black px-12 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_#ccc] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                    {locale === 'de' ? 'Zur Startseite' : 'SEE THE APP'}
                </Link>
            </footer>
        </article>
    )
}
