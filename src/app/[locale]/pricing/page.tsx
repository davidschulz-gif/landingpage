'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { ManyChatPricingSection } from '@/components/manychat-pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const ComparisonSection = dynamic(
    () => import('@/components/comparison-section').then(mod => mod.ComparisonSection),
    {
        ssr: false,
        loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
    }
)

const DetailedFeaturesSection = dynamic(
    () => import('@/components/detailed-features-section').then(mod => mod.DetailedFeaturesSection),
    {
        ssr: false,
        loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
    }
)
const ReviewsSection = dynamic(
    () => import('@/components/reviews-section').then(mod => mod.ReviewsSection),
    {
        ssr: false,
        loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
    }
)

const ConciergePricingSection = dynamic(
    () =>
        import('@/components/concierge-pricing-section').then(
            mod => mod.ConciergePricingSection
        ),
    {
        ssr: false,
        loading: () => <div className='h-96 bg-gray-100 dark:bg-neutral-800 animate-pulse' />,
    }
)


export default function PricingPage() {
    const tHero = useTranslations('Hero')
    const locale = useLocale();
    const [viewMode, setViewMode] = useState<'app' | 'done-for-you'>('app')

    useEffect(() => {
        if (window.location.hash === '#student-plan') {
            setViewMode('app')
        }
    }, [])

    return (
        <div className='relative w-full bg-white'>
            <NavbarDemo />

            <main className="pt-4">
                {/* Announcement Marquee */}
                <div className='relative bg-black  md:mt-[10px] py-2 overflow-hidden  border-b border-white/10'>
                    <div className='flex items-center'>
                        <motion.div
                            animate={{ x: [0, -2000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: 'linear'
                            }}
                            className='flex whitespace-nowrap text-white text-[11px] font-bold uppercase tracking-[0.1em] gap-8'
                            style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <span key={i} className='flex gap-8 items-center'>
                                    <span className='text-emerald-400'>| FIRST BUYER DISCOUNT €70 OFF |</span>
                                    <span>NEW MODELS: RUNWAY GEN-4.5 • GROK IMAGINE VIDEO • GPT IMAGE 2 • GOOGLE IMAGEN 4 ULTRA • SEEDREAM 5.0 LITE • KLING V3 VIDEO • KLING V3 OMNI VIDEO • GOOGLE VEO 3.1 • WAN VIDEO 2.2 • GOOGLE/UPSCALER • RECRAFT-AI/RECRAFT-CRISP-UPSCALE • SORA 2 • SORA 2 PRO • FLUX 2 PRO • RUNWAY GEN-4.5 • GROK IMAGINE VIDEO</span>
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Fixed View Now Button */}
                    <div className='absolute right-0 top-0 bottom-0 flex items-center px-8 z-20 bg-black shadow-[-20px_0_30px_rgba(0,0,0,0.8)]'>
                        <Button
                            className='bg-white text-black hover:bg-gray-100 text-[10px] font-black tracking-widest px-6 py-2 rounded-none uppercase transition-all'
                            style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                        >
                            VIEW NOW
                        </Button>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-4 mt-4'>
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center text-sm font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        {locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
                    </Link>
                </div>

                <div className='flex justify-center mt-2 mb-2 relative z-40 px-4'>
                    <div className='p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-full inline-flex relative'>
                        {['app', 'done-for-you'].map((mode) => (
                            <button
                                key={mode}
                                onClick={() => setViewMode(mode as any)}
                                className={`relative z-10 px-8 py-3.5 sm:px-12 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-widest rounded-full transition-colors duration-300 ${viewMode === mode ? 'text-black' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400'}`}
                                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                            >
                                {viewMode === mode && (
                                    <motion.div
                                        layoutId='pricing-toggle'
                                        className='absolute inset-0 bg-white rounded-full shadow-md'
                                        initial={false}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className='relative z-20'>
                                    {mode === 'app' ? tHero('appOfferTitle') : tHero('serviceOfferTitle')}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {viewMode === 'app' ? (
                        <motion.div
                            key="app"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ManyChatPricingSection isStandalone={true} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="done-for-you"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ConciergePricingSection />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <ComparisonSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <DetailedFeaturesSection />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }} // Reduced from 0.8s
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <ReviewsSection />
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <TestimonialsSection />
                </motion.div> */}
            </main>

            <FooterSection />
            <ToastProvider />
        </div>
    )
}
