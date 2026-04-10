'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
// import { SiegristTestimonialSection } from '@/components/siegrist-testimonial-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const SiegristTestimonialSection = dynamic(
    () =>
        import('@/components/siegrist-testimonial-section').then(
            mod => mod.SiegristTestimonialSection
        ),
    {
        ssr: false,
        loading: () => <div className='h-96 bg-gray-100 animate-pulse' />,
    }
)

export default function SiegristPage() {
    return (
        <div className='relative w-full bg-white'>
            <NavbarDemo />

            <main className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SiegristTestimonialSection />
                </motion.div>
            </main>

            <FooterSection />
            <ToastProvider />
        </div>
    )
}
