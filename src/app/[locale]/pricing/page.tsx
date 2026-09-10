'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { ManyChatPricingSection } from '@/components/manychat-pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { useState, useEffect, Suspense } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

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

const LinkedinSlideshow = dynamic(
  () =>
    import('@/components/linkedin-slideshow').then(
      mod => mod.LinkedinSlideshow
    ),
  {
    ssr: false,
    loading: () => <div className='h-[620px] bg-neutral-100 dark:bg-neutral-800/40 animate-pulse rounded-3xl max-w-3xl mx-auto' />,
  }
)


function PricingContent() {
    const tHero = useTranslations('Hero')
    const locale = useLocale();
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    // const showBillingToggle = searchParams.get('disscountPlans') === 'true'
    const showBillingToggle = true
    const [viewMode, setViewMode] = useState<'app' | 'education' | 'floorplan'>('app')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash
            const tabParam = searchParams.get('tab') || searchParams.get('mode') || searchParams.get('plan')
            if (hash === '#floorplan' || tabParam === 'floorplan' || tabParam === 'floor-plan') {
                setViewMode('floorplan')
            } else if (hash === '#student-plan' || tabParam === 'education' || tabParam === 'student') {
                setViewMode('education')
            }
        }
    }, [searchParams])

    return (
        <div className='relative w-full bg-[#F2F1ED]'>
            <NavbarDemo />

            <main className="pt-4">

                <div className='max-w-7xl mx-auto px-4 mt-4'>
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center text-sm font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        {locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
                    </Link>
                </div>

                {/* Only show the tab toggle if there is no token (token auto-selects the plan) */}
                {!token && (
                    <div className='flex justify-center mt-2 mb-2 relative z-40 px-4'>
                        <div className='p-1 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-full inline-flex relative'>
                            {['education', 'app', 'floorplan'].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setViewMode(mode as any)}
                                    className={`relative z-10 px-3.5 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors duration-300 ${viewMode === mode ? 'text-black dark:text-white' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400'}`}
                                    style={{ fontFamily: 'Arial' }}
                                >
                                    {viewMode === mode && (
                                        <motion.div
                                            layoutId='pricing-toggle'
                                            className='absolute inset-0 bg-white dark:bg-neutral-800 rounded-full border border-neutral-300 dark:border-neutral-600 shadow-xs'
                                            initial={false}
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className='relative z-20'>
                                        {mode === 'app'
                                              ? tHero('appOfferTitle')
                                              : mode === 'floorplan'
                                                ? 'FLOOR PLAN'
                                                : tHero('educationOfferTitle')}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {viewMode === 'app' ? (
                        <motion.div
                            key="app"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ManyChatPricingSection isStandalone={true} showOnly="regular" verificationToken={token || undefined} showBillingToggle={showBillingToggle} />
                        </motion.div>
                    ) : viewMode === 'floorplan' ? (
                        <motion.div
                            key="floorplan"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ManyChatPricingSection isStandalone={true} showOnly="floorplan" verificationToken={token || undefined} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="education"
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ManyChatPricingSection isStandalone={true} showOnly="educational" verificationToken={token || undefined} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <LinkedinSlideshow />

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
                    transition={{ duration: 0.5, ease: 'easeOut' }}
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

export default function PricingPage() {
    return (
        <Suspense fallback={
            <div className='min-h-screen w-full bg-white flex items-center justify-center'>
                <div className='w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin' />
            </div>
        }>
            <PricingContent />
        </Suspense>
    )
}
