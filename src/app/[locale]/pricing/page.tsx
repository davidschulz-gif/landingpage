'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { ManyChatPricingSection } from '@/components/manychat-pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

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


export default function PricingPage() {
    const t = useTranslations('Pricing')

    return (
        <div className='relative w-full bg-white'>
            <NavbarDemo />

            <main className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ManyChatPricingSection isStandalone={true} />
                </motion.div>

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
