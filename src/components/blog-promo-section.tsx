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

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-20">
            <Link href={`/${locale}/ama-awards`} className="block group">
                <motion.div
                    className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white border-2 border-black p-8 md:p-12 transition-all hover:bg-gray-50 shadow-[8px_8px_0px_#000000] group-hover:shadow-[4px_4px_0px_#000000] group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <div className="border-2 border-black overflow-hidden relative aspect-video shadow-[6px_6px_0px_#e5e7eb]">
                            <Image
                                src="/artical-page/1.jpg"
                                alt={t('title')}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                        <div>
                            <span className="inline-flex items-center px-2 py-0.5 mb-6 border-2 border-black font-bold text-[10px] uppercase tracking-widest bg-white shadow-[2px_2px_0px_#000000]">
                                {t('badge')}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-tighter text-black leading-[0.9] group-hover:text-gray-700 transition-colors">
                                {t('title')}
                            </h2>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                            <span>{t('date').split('·')[0].trim()}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{t('date').split('·')[1].trim()}</span>
                        </div>

                        <div className="pt-6">
                            <span className="inline-flex items-center gap-2 font-black text-sm bg-black text-white border-2 border-black px-8 py-4 uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all shadow-[6px_6px_0px_#ccc] group-hover:shadow-none">
                                {t('readArticle')}
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </section>
    )
}
