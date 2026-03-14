'use client'

import { motion } from 'framer-motion'
import { Archive, Armchair, ArrowRight, BookOpen, Box, Briefcase, Building2, CheckSquare, ChefHat, FileText, Home, Layers, LayoutDashboard, LayoutTemplate, Map, Megaphone, MonitorPlay, PaintBucket, PenTool, Presentation, Scissors, Sparkles, SunMoon, Trees } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function IndustryPopularApplicationsSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-50px' }
  }

  const getIconsForSlug = (currentSlug: string) => {
    switch (currentSlug) {
      case 'painters': return [Home, PaintBucket, PenTool]
      case 'architects': return [LayoutTemplate, Layers, Presentation]
      case 'interiorArchitects': return [LayoutDashboard, SunMoon, MonitorPlay]
      case 'carpenters': return [Archive, Trees, FileText]
      case 'kitchenBuilders': return [ChefHat, Box, CheckSquare]
      case 'furnitureMakers': return [Armchair, Scissors, BookOpen]
      case 'realEstate': return [Home, Sparkles, Megaphone]
      case 'developers': return [Building2, Map, Briefcase]
      default: return [Home, Layers, Presentation]
    }
  }

  const icons = getIconsForSlug(slug)

  const applications = [
    {
      id: 'feature1',
      icon: icons[0],
      title: t(`${slug}.IndustryPopularApplications.cards.feature1.title`),
      description: t(`${slug}.IndustryPopularApplications.cards.feature1.description`),
    },
    {
      id: 'feature2',
      icon: icons[1],
      title: t(`${slug}.IndustryPopularApplications.cards.feature2.title`),
      description: t(`${slug}.IndustryPopularApplications.cards.feature2.description`),
    },
    {
      id: 'feature3',
      icon: icons[2],
      title: t(`${slug}.IndustryPopularApplications.cards.feature3.title`),
      description: t(`${slug}.IndustryPopularApplications.cards.feature3.description`),
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#fcfcfd] dark:bg-[#0a0a0c] border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="max-w-3xl space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryPopularApplications.title`)}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            {t(`${slug}.IndustryPopularApplications.subtitle`)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <Link key={app.id} href="/register" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 md:p-8 rounded-2xl flex items-start gap-4 h-full hover:shadow-lg transition-all duration-300 group-hover:border-neutral-200 dark:group-hover:border-neutral-700"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-600 dark:text-neutral-300">
                  <app.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="flex-shrink-0 mt-1">
                  <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
