'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function BlogPromoSection() {
    const t = useTranslations('BlogPromo')
    const params = useParams()
    const locale = params.locale as string

    const stories = [
        {
            href: `/${locale}/ama-awards`,
            image: "/artical-page/1.jpg",
            title: t('ama.title'),
            date: t('ama.date'),
        },
        {
            href: `/${locale}/siegrist`,
            image: "/siegrist/saint-aubin.jpg",
            title: t('siegrist.title'),
            date: t('siegrist.date'),
        }
    ]

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-20 space-y-16" id="success-stories">
            <div className="text-center mb-12">
                <span className="inline-flex items-center px-4 py-1 border-2 border-black font-black text-xs uppercase tracking-[0.2em] bg-black text-white shadow-[4px_4px_0px_#ccc]">
                    {t('badge')}
                </span>
            </div>

            {stories.map((story, index) => (
                <Link key={index} href={story.href} className="block group">
                    <motion.div
                        className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white border-2 border-black p-8 md:p-12 transition-all hover:bg-gray-50 shadow-[12px_12px_0px_#000000] group-hover:shadow-[4px_4px_0px_#000000] group-hover:translate-x-[8px] group-hover:translate-y-[8px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full md:w-1/2 flex-shrink-0">
                            <div className="border-2 border-black overflow-hidden relative aspect-video shadow-[8px_8px_0px_#e5e7eb]">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl lg:text-3xl font-normal uppercase tracking-tighter text-black leading-[0.9] group-hover:text-gray-700 transition-colors">
                                    {story.title}
                                </h2>

                                <div className="flex items-center gap-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                                    <span>{story.date.split('·')[0].trim()}</span>
                                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                                    <span>{story.date.split('·')[1].trim()}</span>
                                </div>
                            </div>

                            <div>
                                <span className="inline-flex items-center gap-3 font-black text-sm bg-black text-white border-2 border-black px-10 py-5 uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all shadow-[8px_8px_0px_#ccc] group-hover:shadow-none">
                                    {t('readArticle')}
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </section>
    )
}
