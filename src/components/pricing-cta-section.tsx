'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PricingCTASection() {
    const t = useTranslations('PricingCTA')

    return (
        <section className="py-24 bg-site-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-normal text-black mb-6 tracking-tight" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-space-grotesk">
                        {t('description')}
                    </p>
                    <Link href="/pricing">
                        <Button
                            className="bg-black text-white px-8 py-6 text-lg hover:bg-black transition-all duration-300 rounded-4xl h-auto"
                            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                        >
                            {t('button')}
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
