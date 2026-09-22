'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CornerSquares } from '@/components/common/corner-squares'

export function PricingCTASection() {
    const t = useTranslations('PricingCTA')

    return (
        <section className="py-20 w-full" style={{ backgroundColor: '#f7f5f0' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="relative text-center p-8 sm:p-12 bg-white border border-neutral-200 dark:border-neutral-800 shadow-xs rounded-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <CornerSquares />
                    <h2 className="heading-primary mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto font-space-grotesk leading-relaxed">
                        {t('description')}
                    </p>
                    <Link href="/pricing">
                        <Button
                            className="bg-black text-white hover:bg-neutral-800 px-8 py-5 text-xs uppercase tracking-widest transition-all duration-300 rounded-md h-auto cursor-pointer"
                            style={{ fontFamily: 'Arial' }}
                        >
                            {t('button')}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
