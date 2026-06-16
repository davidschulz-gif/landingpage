'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Instagram, ArrowLeft, Globe } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export function SiegristTestimonialSection() {
    const t = useTranslations('SiegristTestimonial')
    const params = useParams()
    const locale = params.locale as string

    const [activeSlide, setActiveSlide] = useState(0)

    const slides = [
        {
            src: "/siegrist/saint-aubin.jpg",
            alt: t('caption1'),
            caption: t('caption1'),
            credit: t('saintAubinData.imageCredit') || "image @typus.ai",
            href: "https://siegristarchitectes.ch/en/portfolio-item/development-of-the-school-site-saint-aubin-fr/"
        },
        {
            src: "/siegrist/venthone.jpg",
            alt: t('caption2'),
            caption: t('caption2'),
            credit: t('venthoneData.imageCredit') || "image @typus.ai",
            href: "https://siegristarchitectes.ch/en/portfolio-item/renovation-and-expansion-of-the-school-center-venthone-vs/"
        }
    ]

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const renderHighlightedText = (text: string) => {
        const targets = ['mit KI', 'with AI', 'Typus.AI','KI-generiert', 'AI-generated', 'KI-gestützter', 'AI-powered'];
        const regex = new RegExp(`(${targets.join('|')})`, 'g');
        const parts = text.split(regex);
        
        return parts.map((part, idx) => {
            if (targets.includes(part)) {
                return (
                    <span 
                        key={idx} 
                        className="bg-yellow-500 px-1.5 py-0.5 text-black font-black font-rail mx-0.5 select-none"
                    >
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    const ProjectDataSheet = ({ data }: { data: any }) => (
        <div className="py-4 border-y border-neutral-200 font-rail text-xs rounded-none bg-white">
            <div className="font-extrabold uppercase tracking-widest text-[9px] text-gray-400 mb-4 pb-2 border-b border-neutral-100">
                {data.label}
            </div>
            <div className="space-y-3">
                {[
                    { label: locale === 'de' ? 'BAUHERRSCHAFT' : 'CLIENT', value: data.client.split(': ')[1] || data.client },
                    { label: locale === 'de' ? 'JAHR' : 'YEAR', value: data.year.split(': ')[1] || data.year },
                    { label: locale === 'de' ? 'TYPOLOGIE' : 'TYPOLOGY', value: data.typology.split(': ')[1] || data.typology },
                    { label: locale === 'de' ? 'FLÄCHE' : 'SURFACE', value: data.surface.split(': ')[1] || data.surface },
                ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4 border-b border-neutral-100 pb-2">
                        <span className="font-bold uppercase text-[8px] text-gray-400 mt-1 whitespace-nowrap">{item.label}</span>
                        <span className="font-black uppercase text-right leading-tight text-gray-950">{item.value}</span>
                    </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                    <span className="font-bold uppercase text-[9px] text-gray-600">{locale === 'de' ? 'GESAMTKOSTEN' : 'TOTAL COST'}</span>
                    <span className="font-black uppercase text-xl text-right leading-none tracking-tighter text-black">
                        {data.cost.split(': ')[1] || data.cost}
                    </span>
                </div>
            </div>
        </div>
    )

    // Shared Slider Component
    const ImageSliderMarkup = () => (
        <div>
            {/* Pagination with dots above image */}
            <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-neutral-800 font-rail select-none">
                <span className="tracking-wide">
                    {locale === 'de' ? `Bild ${activeSlide + 1} von 2` : `Image ${activeSlide + 1} of 2`}
                </span>
                <div className="flex gap-1.5 items-center">
                    <span className={`w-[9px] h-[9px] rounded-full transition-colors ${activeSlide === 0 ? 'bg-[#fce400]' : 'bg-[#9c9c9c]'}`}></span>
                    <span className={`w-[9px] h-[9px] rounded-full transition-colors ${activeSlide === 1 ? 'bg-[#fce400]' : 'bg-[#9c9c9c]'}`}></span>
                </div>
            </div>

            {/* Image Slider Container with overlays */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 rounded-none group">
                {/* Social Icons Overlay (Top Left) */}
                <div className="absolute top-4 left-4 flex gap-2.5 z-20">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://typus.ai/de/siegrist')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
                        aria-label="Share on Facebook"
                    >
                        <span className="font-sans text-[13px] font-bold select-none leading-none mt-[-1px]">f</span>
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://typus.ai/de/siegrist')}&text=${encodeURIComponent(t('sectionTitle'))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 bg-white rounded-none flex items-center justify-center text-black hover:bg-neutral-100 transition-colors"
                        aria-label="Share on Twitter"
                    >
                        <span className="font-serif text-[13px] font-black select-none leading-none">t</span>
                    </a>
                </div>

                {/* Arrow Overlays (Top Right) */}
                <div className="absolute top-4 right-4 flex gap-6 z-20">
                    <button
                        onClick={(e) => { e.preventDefault(); prevSlide(); }}
                        className="text-white hover:text-gray-300 transition-colors text-3xl font-light leading-none select-none active:scale-95"
                        aria-label="Previous image"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); nextSlide(); }}
                        className="text-white hover:text-gray-300 transition-colors text-3xl font-light leading-none select-none active:scale-95"
                        aria-label="Next image"
                    >
                        &rarr;
                    </button>
                </div>

                {/* Slider Image */}
                <a 
                    href={slides[activeSlide].href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-full relative font-rail"
                >
                    <Image
                        src={slides[activeSlide].src}
                        alt={slides[activeSlide].alt}
                        fill
                        className="object-cover"
                        priority
                    />
                    
                    {/* Bottom Caption overlay inside the image container */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent text-white p-5 pt-12 text-[12.5px] leading-relaxed font-rail rounded-none border-0">
                        <div>{slides[activeSlide].caption}</div>
                        <div className="text-[10px] text-gray-300 font-bold uppercase tracking-wider mt-1.5">
                            {locale === 'de' ? `Foto: ${slides[activeSlide].credit}` : `Photo: ${slides[activeSlide].credit}`}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )


    // Shared Data Sheets Component
    const DataSheetsMarkup = () => (
        <div className="space-y-6">
            <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400">
                {locale === 'de' ? 'PROJEKTDATEN' : 'PROJECT DATA'}
            </h3>
            <ProjectDataSheet data={t.raw('saintAubinData')} />
            <ProjectDataSheet data={t.raw('venthoneData')} />
        </div>
    )

    // Shared About Office Component
    const AboutOfficeMarkup = () => (
        <div className="space-y-4 font-rail">
            <h3 className="font-black text-[10px] uppercase tracking-widest text-neutral-400">
                {locale === 'de' ? 'ÜBER DAS BÜRO' : 'ABOUT THE OFFICE'}
            </h3>
            <div className="relative overflow-hidden rounded-none aspect-[4/3] w-full bg-gray-50">
                <Image 
                    src="/siegrist/office-portrait.jpg" 
                    alt="Siegrist Architectes Team" 
                    fill 
                    className="object-cover"
                />
            </div>
            <div className="mt-2 text-xs text-neutral-800 leading-relaxed font-rail">
                {t('caption3')}
            </div>
        </div>
    )

    return (
        <article className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white text-black font-rail">
            {/* Back Button */}
            <Link
                href={`/${locale}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12 group rounded-none font-rail"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t('backToHome')}
            </Link>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Media, Reels, Data Sheets (Desktop Only) */}
                <div className="hidden lg:block lg:col-span-5 space-y-8 lg:sticky lg:top-8 font-rail">
                    
                    {/* Image Slider */}
                    <ImageSliderMarkup />


                    {/* Data Sheets Stack */}
                    <div className="pt-6">
                        <DataSheetsMarkup />
                    </div>

                    {/* Office Team Section */}
                    <div className="pt-6">
                        <AboutOfficeMarkup />
                    </div>

                </div>

                {/* Right Column: Editorial Text content & Mobile Stack */}
                <div className="lg:col-span-7 space-y-6 font-rail">
                    
                    {/* Title with signature Bauwelt yellow accent underline */}
                    <div className="relative pb-2 mb-6 select-none">
                        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black leading-tight tracking-tight text-neutral-900 font-rail">
                            {t('sectionTitle')}
                        </h1>
                        <div className="w-32 md:w-[450px] h-[6px] bg-yellow-500  mt-3"></div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-neutral-800 font-rail mb-6">
                        {locale === 'de' ? 'So nutzt Siegrist Architects KI für Wettbewerbsvisualisierungen' : 'How Siegrist Architects use AI for competition visualizations'}
                    </h2>

                    {/* Lead Paragraph with thick vertical red line */}
                    <p className="whitespace-pre-line text-[17px] md:text-lg font-bold leading-relaxed text-neutral-950 font-rail mb-4  py-1 select-none">
                        {renderHighlightedText(t('p1'))}
                    </p>

                    {/* Author Credit */}
                    <div className="text-xs font-medium text-neutral-500 font-rail pb-6">
                        <span>{locale === 'de' ? 'Text: Siegrist Architectes & Typus Redaktion' : 'Text: Siegrist Architectes & Typus Editorial'}</span>
                    </div>

                    {/* Mobile-only Image Slider */}
                    <div className="block lg:hidden my-6">
                        <ImageSliderMarkup />
                    </div>

                    {/* Body Paragraphs */}
                    <div className="space-y-10 text-neutral-800 leading-relaxed font-normal font-rail">
                        
                        {/* Section 1 */}
                        <div className="space-y-3">
                            <h2 className="text-base font-bold text-neutral-950 font-rail pt-4">
                                {t('h2')}
                            </h2>
                            <p className="text-base text-neutral-700 leading-relaxed text-justify font-rail">
                                {renderHighlightedText(t('p2'))}
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-3">
                            <h2 className="text-base font-bold text-neutral-950 font-rail pt-4">
                                {t('h3')}
                            </h2>
                            <p className="text-base text-neutral-700 leading-relaxed text-justify font-rail">
                                {renderHighlightedText(t('p3'))}
                            </p>
                        </div>

                        {/* Mobile-only Office Team Portrait Section */}
                        <div className="block lg:hidden my-8 pt-4">
                            <AboutOfficeMarkup />
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-3">
                            <h2 className="text-base font-bold text-neutral-950 font-rail pt-4">
                                {t('h4')}
                            </h2>
                            <p className="text-base text-neutral-700 leading-relaxed text-justify font-rail">
                                {renderHighlightedText(t('p4'))}
                            </p>
                        </div>

                        {/* Mobile-only Project Data Sheets Stack */}
                        <div className="block lg:hidden my-8 pt-4">
                            <DataSheetsMarkup />
                        </div>

                        {/* Section 4 / Closing */}
                        <div className="space-y-3 font-rail">
                            <h2 className="text-base font-bold text-neutral-950 font-rail pt-4">
                                {locale === 'de' ? 'DIE EIGENTLICHE VERÄNDERUNG' : 'THE ACTUAL REVOLUTION'}
                            </h2>
                            <p className="whitespace-pre-line text-base text-neutral-700 leading-relaxed text-justify font-rail">
                                {renderHighlightedText(t('p5'))}
                            </p>
                        </div>


                    </div>

                    {/* EU Funding Attribution Divider */}
                    <div className="w-full mt-12 p-6 bg-neutral-50 border border-neutral-100 rounded-none flex flex-col sm:flex-row items-center justify-center gap-6 font-rail">
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
                        <div className="text-left font-rail">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                {t('euCoFunded')}
                            </p>
                            <p className="text-xs text-neutral-400 mt-1 max-w-xs normal-case">
                                {locale === 'de'
                                    ? 'Typus wird im Rahmen des EU-geförderten NRW-Programms entwickelt.'
                                    : 'Typus is developed under the EU-funded NRW program.'}
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center pt-6 font-rail">
                        <Link
                            href={`/${locale}`}
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-black text-xs bg-black text-white border border-black px-12 py-4 uppercase tracking-widest hover:bg-neutral-100 hover:text-black transition-all shadow-[4px_4px_0px_#ccc] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none rounded-none"
                        >
                            {locale === 'de' ? 'APP ANSEHEN' : 'VIEW THE APP'}
                        </Link>
                    </div>


                </div>

            </div>
        </article>
    )
}
