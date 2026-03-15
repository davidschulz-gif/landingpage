'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Award, BadgeDollarSign, Banknote, BookOpen, Building, Camera, CameraIcon, Clock, Clock4, Coins, Crosshair, Crown, DollarSign, Expand, Eye, FastForward, Fingerprint, Globe, Handshake, Image, Layers, Library, Lightbulb, Maximize, MessageSquare, PiggyBank, Plus, Presentation, Replace, Rocket, Search, Settings2, Shapes, Shield, ShieldCheck, ShoppingCart, Smile, Sparkles, Target, ThumbsUp, Timer, TimerReset, TrendingUp, Trophy, Tv, Users, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function IndustryWhyUseSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-50px' }
  }

  // Map 6 icons for each industry
  const getIconsForSlug = (currentSlug: string) => {
    switch (currentSlug) {
      case 'painters': 
        return [Clock, Zap, PiggyBank, Smile, Crosshair, Award]
      case 'architects': 
        return [Rocket, Trophy, Coins, Users, Search, Camera]
      case 'interiorArchitects': 
        return [Sparkles, ShieldCheck, Library, FastForward, Lightbulb, ArrowUpRight]
      case 'carpenters': 
        return [MessageSquare, Plus, TrendingUp, Handshake, Maximize, Crown]
      case 'kitchenBuilders': 
        return [Timer, Settings2, Replace, ThumbsUp, Layers, BadgeDollarSign]
      case 'furnitureMakers': 
        return [CameraIcon, Fingerprint, Globe, ShoppingCart, Tv, Shapes]
      case 'realEstate': 
        return [DollarSign, TimerReset, Building, Image, Expand, Eye]
      case 'developers': 
        return [Banknote, Presentation, Target, BookOpen, Clock4, Shield]
      default: 
        return [Clock, Zap, PiggyBank, Smile, Crosshair, Award]
    }
  }

  const icons = getIconsForSlug(slug)

  const features = [
    {
      id: 'feature1',
      icon: icons[0],
      title: t(`${slug}.IndustryWhyUse.cards.feature1.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature1.description`),
    },
    {
      id: 'feature2',
      icon: icons[1],
      title: t(`${slug}.IndustryWhyUse.cards.feature2.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature2.description`),
    },
    {
      id: 'feature3',
      icon: icons[2],
      title: t(`${slug}.IndustryWhyUse.cards.feature3.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature3.description`),
    },
    {
      id: 'feature4',
      icon: icons[3],
      title: t(`${slug}.IndustryWhyUse.cards.feature4.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature4.description`),
    },
    {
      id: 'feature5',
      icon: icons[4],
      title: t(`${slug}.IndustryWhyUse.cards.feature5.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature5.description`),
    },
    {
      id: 'feature6',
      icon: icons[5],
      title: t(`${slug}.IndustryWhyUse.cards.feature6.title`),
      description: t(`${slug}.IndustryWhyUse.cards.feature6.description`),
    },
  ]

  return (
    <section className="py-24 px-4 bg-white dark:bg-black border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div {...motionProps} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryWhyUse.title`)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-6 md:p-8 rounded-2xl flex flex-col items-start gap-4 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#f8f9fa] dark:bg-neutral-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300">
                <feature.icon className="w-5 h-5" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[3rem]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
