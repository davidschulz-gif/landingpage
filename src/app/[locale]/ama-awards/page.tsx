'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { BlogTestimonialSection } from '@/components/blog-testimonial-section'
import { FooterSection } from '@/components/footer-section'
import { ToastProvider } from '@/components/providers/toast-provider'
import { motion } from 'framer-motion'

export default function AmaAwardsPage() {
    return (
        <div className='relative w-full bg-white'>
            <NavbarDemo />

            <main className="pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <BlogTestimonialSection />
                </motion.div>
            </main>

            <FooterSection />
            <ToastProvider />
        </div>
    )
}
