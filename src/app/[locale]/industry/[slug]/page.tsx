'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { IndustryApplicationsSection } from '@/components/industry-applications-section'
import { IndustryChallengesSection } from '@/components/industry-challenges-section'
import { IndustryFaqSection } from '@/components/industry-faq-section'
import { IndustryFunctionsSection } from '@/components/industry-functions-section'
import { IndustryPopularApplicationsSection } from '@/components/industry-popular-applications-section'
import { IndustrySolutionsSection } from '@/components/industry-solutions-section'
import { IndustryWhyUseSection } from '@/components/industry-why-use-section'
import { motion } from 'framer-motion'
import { UserCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { use } from 'react'

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = useTranslations('IndustrySlugPages')
  const { slug } = use(params)

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-[#0d0e12] min-h-screen font-space-grotesk' style={{ fontFamily: "var(--font-soyuz-grotesk), sans-serif" }}>
      {/* Navbar */}
      <NavbarDemo />

      <main className='flex flex-col w-full pb-20 min-h-[70vh]'>
        {/* Industry Hero Section */}
        <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 px-4'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
              className='space-y-6'
            >
              <div className='inline-flex items-center gap-2 rounded-full border border-gray-200 bg-transparent px-4 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-100 dark:border-gray-800 transition-colors'>
                <UserCheck className="h-4 w-4" />
                <span>{t(`${slug}.Hero.badge`)}</span>
              </div>
              
              <h1 className='text-[40px] md:text-[56px] lg:text-[64px] font-medium tracking-tight text-[#2B2B2B] dark:text-white max-w-3xl leading-[1.1]' style={{ fontFamily: "var(--font-soyuz-grotesk), sans-serif" }}>
                {t(`${slug}.Hero.title`)}
              </h1>
              
              <p className='text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl'>
                {t(`${slug}.Hero.subtitle`)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Challenges Section */}
        <IndustryChallengesSection slug={slug} />

        {/* Industry Solutions Section */}
        <IndustrySolutionsSection slug={slug} />

        {/* Industry Functions Section */}
        <IndustryFunctionsSection slug={slug} />

        {/* Industry Applications Section */}
        <IndustryApplicationsSection slug={slug} />

        {/* Industry Popular Applications Section */}
        <IndustryPopularApplicationsSection slug={slug} />

        {/* Industry Why Use Section */}
        <IndustryWhyUseSection slug={slug} />

        {/* Industry FAQ Section */}
        <IndustryFaqSection slug={slug} />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
