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
        <section className="w-full max-w-4xl mx-auto px-4 py-10 md:py-14 space-y-5" id="success-stories">
            <div className="text-center mb-6">
                <span className="inline-flex items-center px-3.5 py-1 border border-[#e5e7eb] dark:border-neutral-800 font-bold text-[11px] uppercase tracking-[0.2em] bg-transparent text-neutral-800 dark:text-neutral-200 rounded-full">
                    {t('badge')}
                </span>
            </div>

            {stories.map((story, index) => (
                <Link key={index} href={story.href} className="block group">
                    <motion.div
                        className="flex flex-col md:flex-row gap-5 md:gap-6 items-center bg-white dark:bg-neutral-900 border border-[#e5e7eb] dark:border-neutral-800 rounded-2xl p-4 sm:p-5 transition-all hover:bg-neutral-50/80 dark:hover:bg-neutral-800/80"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full md:w-[240px] lg:w-[260px] flex-shrink-0">
                            <div className="border border-[#e5e7eb] dark:border-neutral-800 rounded-xl overflow-hidden relative aspect-[16/10]">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 260px"
                                />
                            </div>
                        </div>

                        <div className="w-full flex-1 flex flex-col justify-between py-1 space-y-3">
                            <div className="space-y-2">
                                <h2 className="text-base sm:text-lg md:text-xl font-normal uppercase tracking-tight text-black dark:text-white leading-snug group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                    {story.title}
                                </h2>

                                <div className="flex items-center gap-3 text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                                    <span>{story.date.split('·')[0].trim()}</span>
                                    <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></span>
                                    <span>{story.date.split('·')[1].trim()}</span>
                                </div>
                            </div>

                            <div className="pt-1">
                                <span className="inline-flex items-center gap-2 font-bold text-xs bg-transparent text-black dark:text-white border border-[#e5e7eb] dark:border-neutral-700 px-4 py-2 rounded-lg uppercase tracking-wider group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-colors">
                                    {t('readArticle')}
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
