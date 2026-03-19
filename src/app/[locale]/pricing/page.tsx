'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { ManyChatPricingSection } from '@/components/manychat-pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <TestimonialsSection />
                </motion.div>
            </main>

            <FooterSection />
            <ToastProvider />
        </div>
    )
}
