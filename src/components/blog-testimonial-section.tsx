'use client'

import { useTranslations } from 'next-intl'
import { Instagram, PlayCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export function BlogTestimonialSection() {
    const t = useTranslations('BlogTestimonial')
    const params = useParams()
    const locale = params.locale as string

    return (
        <article className="w-full max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
                href={`/${locale}`}
                className="inline-flex items-center text-sm font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
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
                    <span>{locale === 'de' ? '20. März 2026' : 'March 20, 2026'}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{locale === 'de' ? '5 Min. Lesezeit' : '5 min read'}</span>
                </div>
            </header>

            {/* Hero Image — Full width, as-is */}
            <div className="w-full mb-16 border-2 border-black shadow-[12px_12px_0px_#000000]">
                <Image
                    src="/artical-page/1.jpg"
                    alt="AMA Awards Architecture"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* Main Content Area */}
            <div className="text-gray-800 leading-relaxed font-medium space-y-16">

                {/* Pull Quote */}
                <p className="text-xl md:text-3xl font-black leading-[1.1] text-black tracking-tight border-l-8 border-black pl-8 py-2">
                    {t('p1')}
                </p>

                {/* Featured On row */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        {locale === 'de' ? 'Vorgestellt auf' : 'As featured on'}
                    </span>
                    <a
                        href="https://www.archdaily.com/985896/a-cliff-house-in-bali-and-a-waterfront-estate-in-greece-9-unbuilt-villas-submitted-to-archdaily"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-gray-800 text-xs font-black uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        ArchDaily
                    </a>
                    <a
                        href="https://www.instagram.com/illustrarch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-gray-800 text-xs font-black uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <Image src="/illustrarch-logo.svg" alt="Illustrarch" width={14} height={14} className="rounded-full" />
                        Illustrarch
                    </a>
                </div>

                {/* Section 1: Text LEFT, Image RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 order-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h2')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p2')}</p>
                    </div>
                    <div className="order-2 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <Image
                            src="/artical-page/0313.00_00_04_10.Standbild003.jpg"
                            alt="AI-Powered Atmospheric Rendering"
                            width={960}
                            height={440}
                            className="w-full h-auto"
                        />
                        <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            AI-Powered Atmospheric Rendering
                        </div>
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
                        className="h-16 w-auto object-contain"
                    />
                    <div className="hidden sm:block h-px flex-1 bg-gray-200" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 max-w-xs text-right hidden sm:block">
                        {locale === 'de' ? 'Kofinanziert durch die Europäische Union' : 'Co-funded by the European Union'}
                    </p>
                </div>

                {/* Instagram Reel 1 */}
                <div>
                    <a
                        href="https://www.instagram.com/reel/DQjbQh4kcWt/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-50 border-2 border-dashed border-gray-300 p-6 md:p-10 transition-all hover:border-black hover:bg-white group"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black text-white">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-base font-black uppercase leading-none mb-1">{t('instagramTitle1')}</h4>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">Instagram Reel · @lucylago_arch</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 font-black text-sm border-2 border-black px-5 py-2.5 uppercase tracking-widest group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0px_#000000]">
                                <PlayCircle className="w-4 h-4" />
                                {t('watchVideo1')}
                            </div>
                        </div>
                    </a>
                </div>

                {/* Section 2: Image LEFT, Text RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="order-2 md:order-1 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <Image
                            src="/artical-page/0313.00_00_06_00.Standbild002.jpg"
                            alt="3D Integration Cloud Concept"
                            width={960}
                            height={540}
                            className="w-full h-auto"
                        />
                        <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            3D Integration Cloud — Coming Soon
                        </div>
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h3')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p3')}</p>
                    </div>
                </div>

                {/* Illustrarch Logo Divider */}
                <div className="flex items-center justify-center gap-6 py-6 border-y border-gray-200 my-4">
                    <div className="hidden sm:block h-px flex-1 bg-gray-200" />
                    <div className="flex items-center gap-3 px-4 py-2 border border-gray-200 bg-white">
                        <Image
                            src="/illustrarch-logo.svg"
                            alt="Illustrarch"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                        <span className="text-sm font-black uppercase tracking-widest text-gray-700">Illustrarch</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 max-w-xs hidden sm:block">
                        {locale === 'de' ? 'Wie von Illustrarch vorgestellt' : 'As featured on Illustrarch'}
                    </p>
                    <div className="hidden sm:block h-px flex-1 bg-gray-200" />
                </div>

                {/* Section 3: Text LEFT, Image RIGHT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 order-1">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{t('h4')}</h2>
                        <p style={{ fontFamily: 'sans-serif' }} className="text-base text-gray-700">{t('p4')}</p>
                    </div>
                    <div className="order-2 border-2 border-black shadow-[6px_6px_0px_#e5e7eb]">
                        <Image
                            src="/artical-page/0313.00_00_13_28.Standbild004.jpg"
                            alt="Design Process"
                            width={960}
                            height={540}
                            className="w-full h-auto"
                        />
                        <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            Reshaping Modern Architecture
                        </div>
                    </div>
                </div>

                {/* Instagram Reel 2 */}
                <div>
                    <a
                        href="https://www.instagram.com/p/DVO_kk0jL86/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black text-white p-6 md:p-10 transition-all hover:bg-gray-900 group shadow-[8px_8px_0px_#e5e7eb]"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white text-black">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-base font-black uppercase leading-none mb-1 text-white">{t('instagramTitle2')}</h4>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">Featured on Illustrarch · @illustrarch</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 font-black text-sm bg-white text-black border-2 border-white px-5 py-2.5 uppercase tracking-widest">
                                <PlayCircle className="w-4 h-4" />
                                {t('watchVideo2')}
                            </div>
                        </div>
                    </a>
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
                        width={400}
                        height={150}
                        className="h-36 w-auto object-contain"
                    />
                    <div className="text-left">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            {locale === 'de'
                                ? 'Kofinanziert durch die Europäische Union'
                                : 'Co-funded by the European Union'}
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
