'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { CreatorShowcaseSection } from '@/components/creator-showcase-section'
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Instagram,
  DollarSign,
  Layers,
  Box,
  ExternalLink,
  Award,
  Zap,
} from 'lucide-react'

// ── Corner square markers (TYPUS brand pattern in black) ──────────────────
function CornerSquares({ color = '#000000', size = 'w-2 h-2' }: { color?: string; size?: string }) {
  return (
    <>
      <span
        className={`absolute -top-1 -left-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -top-1 -right-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1 -left-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
      <span
        className={`absolute -bottom-1 -right-1 ${size} pointer-events-none select-none z-20`}
        style={{ backgroundColor: color }}
      />
    </>
  )
}

export default function CreatorCollaborationPage() {
  const t = useTranslations('CreatorCollaboration')
  const [copiedInvoice, setCopiedInvoice] = useState(false)

  const invoiceBillingAddress = `${t('billing.companyName')}\n${t('billing.street')}\n${t('billing.city')}\n${t('billing.country')}\n${t('billing.vatId')}`

  const handleCopyBilling = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(invoiceBillingAddress)
      setCopiedInvoice(true)
      setTimeout(() => setCopiedInvoice(false), 2500)
    }
  }

  const compensationTiers = [
    { views: t('clauses.tiers.tier1Views'), amount: t('clauses.tiers.tier1Comp') },
    { views: t('clauses.tiers.tier2Views'), amount: t('clauses.tiers.tier2Comp') },
    { views: t('clauses.tiers.tier3Views'), amount: t('clauses.tiers.tier3Comp') },
    { views: t('clauses.tiers.tier4Views'), amount: t('clauses.tiers.tier4Comp') },
    { views: t('clauses.tiers.tier5Views'), amount: t('clauses.tiers.tier5Comp'), isMax: true },
  ]

  return (
    <div
      className='relative w-full min-h-screen bg-[#FFFFFF] dark:bg-neutral-950 text-neutral-900 dark:text-white font-sans selection:bg-black selection:text-white'
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <NavbarDemo />

      <main className='pt-32 pb-24'>
        {/* Hero Section */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
          <div className='text-center max-w-3xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider shadow-xs mb-6'
            >
              <span className='w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse' />
              {t('badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white uppercase mb-5'
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 400 }}
            >
              {t('title')}
            </motion.h1>

          

            {/* Quick action buttons (Clean black & neutral styling) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mt-8 flex flex-wrap items-center justify-center gap-3.5'
            >
              <a
                href='https://app.typus.ai/register'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-neutral-900 dark:border-white bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-xs cursor-pointer'
              >
                {t('cta.registerBtn')}
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='#creators'
                className='inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-xs cursor-pointer'
              >
                <Sparkles className='w-4 h-4 text-neutral-900 dark:text-white' />
                {t('cta.showcaseBtn')}
              </a>
              <a
                href='#compensation'
                className='inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-xs cursor-pointer'
              >
                <DollarSign className='w-4 h-4 text-neutral-900 dark:text-white' />
                {t('clauses.section4Title')}
              </a>
              <a
                href='https://instagram.com/typus.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-xs cursor-pointer'
              >
                <Instagram className='w-4 h-4 text-neutral-900 dark:text-white' />
                {t('cta.instagramBtn')}
              </a>
            </motion.div>
          </div>

        </section>

        {/* How To Start Section (Research Page Styling with CornerSquares) */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl p-8 sm:p-12 border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden text-neutral-900 dark:text-white'>
            <CornerSquares size='w-2.5 h-2.5' />
            <div className='absolute top-0 left-0 right-0 h-1 bg-black dark:bg-white' />

            <div className='relative z-10 max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-4 bg-transparent'>
                <Zap className='w-3.5 h-3.5 text-neutral-900 dark:text-white' />
                {t('quickStart.badge')}
              </div>
              <h2 className='text-2xl sm:text-3xl font-normal uppercase tracking-tight mb-3 text-neutral-950 dark:text-white'>
                {t('quickStart.title')}
              </h2>
              <p className='text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-8 max-w-2xl leading-relaxed font-normal'>
                {t('quickStart.description')}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                {/* Step 1 */}
                <div className='relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/90 dark:border-neutral-700 flex flex-col justify-between overflow-hidden shadow-xs'>
                  <CornerSquares size='w-1.5 h-1.5' />
                  <div>
                    <div className='w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center mb-4'>
                      1
                    </div>
                    <h3 className='font-bold text-lg text-neutral-900 dark:text-white mb-2'>
                      {t('quickStart.step1Title')}
                    </h3>
                    <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step1Desc')}
                    </p>
                  </div>
                  <a
                    href='https://app.typus.ai/register'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 py-2 px-4 rounded-full border border-neutral-900 dark:border-white bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer w-fit'
                  >
                    {t('quickStart.step1Action')} <ExternalLink className='w-3.5 h-3.5' />
                  </a>
                </div>

                {/* Step 2 */}
                <div className='relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/90 dark:border-neutral-700 flex flex-col justify-between overflow-hidden shadow-xs'>
                  <CornerSquares size='w-1.5 h-1.5' />
                  <div>
                    <div className='w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center mb-4'>
                      2
                    </div>
                    <h3 className='font-bold text-lg text-neutral-900 dark:text-white mb-2'>
                      {t('quickStart.step2Title')}
                    </h3>
                    <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step2Desc')}
                    </p>
                  </div>
                  <a
                    href='https://instagram.com/typus.ai'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 py-2 px-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer w-fit'
                  >
                    {t('quickStart.step2Action')} <ExternalLink className='w-3.5 h-3.5' />
                  </a>
                </div>

                {/* Step 3 */}
                <div className='relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/90 dark:border-neutral-700 flex flex-col justify-between overflow-hidden shadow-xs'>
                  <CornerSquares size='w-1.5 h-1.5' />
                  <div>
                    <div className='w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center mb-4'>
                      3
                    </div>
                    <h3 className='font-bold text-lg text-neutral-900 dark:text-white mb-2'>
                      {t('quickStart.step3Title')}
                    </h3>
                    <p className='text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step3Desc')}
                    </p>
                  </div>
                  <div className='inline-flex items-center gap-1.5 py-2 px-3 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-mono font-medium w-fit'>
                    {t('quickStart.step3Action')}
                  </div>
                </div>
              </div>

              {/* Main Features to Highlight Callout */}
              <div className='relative bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 overflow-hidden'>
                <CornerSquares size='w-2 h-2' />
                <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-4'>
                  <Award className='w-4 h-4 text-neutral-900 dark:text-white' />
                  {t('quickStart.featuresTitle')}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-normal'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-neutral-900 dark:text-white'>
                      <Box className='w-4 h-4' />
                    </div>
                    <div>
                      <div className='font-bold text-neutral-900 dark:text-white'>
                        {t('quickStart.feature1Title')}{' '}
                        <a
                          href={t('quickStart.feature1Url')}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-neutral-900 dark:text-white underline hover:opacity-80'
                        >
                          {t('quickStart.feature1Url')}
                        </a>
                      </div>
                      <p className='text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-normal'>
                        {t('quickStart.feature1Desc')}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5 text-neutral-900 dark:text-white'>
                      <Layers className='w-4 h-4' />
                    </div>
                    <div>
                      <div className='font-bold text-neutral-900 dark:text-white'>
                        {t('quickStart.feature2Title')}{' '}
                        <a
                          href={t('quickStart.feature2Url')}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-neutral-900 dark:text-white underline hover:opacity-80'
                        >
                          {t('quickStart.feature2Url')}
                        </a>
                      </div>
                      <p className='text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-normal'>
                        {t('quickStart.feature2Desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Showcase Examples Section from Main Landing Page */}
        <section id='creators' className='scroll-mt-28 mb-20'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider shadow-xs'>
              <Sparkles className='w-3.5 h-3.5 text-neutral-900 dark:text-white' />
              {t('showcaseBadge')}
            </div>
          </div>
          <CreatorShowcaseSection
            className='w-full py-2'
            style={{ backgroundColor: 'transparent' }}
            showCollaborationButton={false}
          />
        </section>

        {/* Detailed Agreement Terms (1 to 8) with CornerSquares */}
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-normal'>
          <div className='border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-8'>
            <h2 className='text-2xl font-normal uppercase text-neutral-900 dark:text-white tracking-tight'>
              {t('clauses.sectionTitle')}
            </h2>
          </div>

          {/* 1. Collaboration */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                1
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section1Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 font-normal'>
              {t('clauses.section1P1')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal'>
              {t('clauses.section1P2')}
            </p>
          </div>

          {/* 2. Content Requirements */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                2
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section2Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-normal'>
              {t('clauses.section2P1')}
            </p>

            <div className='mb-6'>
              <div className='text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-3'>
                {t('clauses.section2ExamplesTitle')}
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-neutral-700 dark:text-neutral-300 font-normal'>
                <li className='relative flex items-start gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 font-normal'>
                  <span className='text-neutral-900 dark:text-white font-bold'>•</span>
                  <span>{t('clauses.section2Ex1')}</span>
                </li>
                <li className='relative flex items-start gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 font-normal'>
                  <span className='text-neutral-900 dark:text-white font-bold'>•</span>
                  <span>{t('clauses.section2Ex2')}</span>
                </li>
                <li className='relative flex items-start gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 font-normal'>
                  <span className='text-neutral-900 dark:text-white font-bold'>•</span>
                  <span>{t('clauses.section2Ex3')}</span>
                </li>
                <li className='relative flex items-start gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 font-normal'>
                  <span className='text-neutral-900 dark:text-white font-bold'>•</span>
                  <span>{t('clauses.section2Ex4')}</span>
                </li>
              </ul>

              {/* Live Showcase Inspiration Callout */}
              <div className='relative mt-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 overflow-hidden'>
                <CornerSquares size='w-1.5 h-1.5' />
                <p className='text-xs text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed'>
                  {t('clauses.section2ShowcaseNotice')}
                </p>
                <a
                  href='#creators'
                  className='inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white bg-transparent hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black border border-neutral-900 dark:border-white px-4 py-2 rounded-full transition-all shrink-0 shadow-2xs'
                >
                  <Sparkles className='w-3.5 h-3.5' />
                  {t('clauses.section2ViewShowcaseBtn')}
                </a>
              </div>
            </div>

            <div className='relative p-6 rounded-2xl bg-neutral-950 text-white border border-neutral-800 overflow-hidden shadow-sm'>
              <CornerSquares size='w-1.5 h-1.5' color='#525252' />
              <div className='text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3'>
                {t('clauses.section2MinTitle')}
              </div>
              <p className='text-xs text-neutral-300 mb-3 font-normal'>
                {t('clauses.section2MinIntro')}
              </p>
              <ul className='space-y-2.5 text-sm text-neutral-200 font-normal'>
                <li className='flex items-start gap-2.5 font-normal'>
                  <CheckCircle2 className='w-4 h-4 text-emerald-400 shrink-0 mt-0.5' />
                  <span>{t('clauses.section2Min1')}</span>
                </li>
                <li className='flex items-start gap-2.5 font-normal'>
                  <CheckCircle2 className='w-4 h-4 text-emerald-400 shrink-0 mt-0.5' />
                  <span>
                    {t('clauses.section2Min2Intro')}
                    <ul className='mt-1.5 ml-4 space-y-1 list-disc text-neutral-300 font-normal'>
                      <li>{t('clauses.section2Min2A')}</li>
                      <li>{t('clauses.section2Min2B')}</li>
                    </ul>
                  </span>
                </li>
              </ul>
              <p className='text-xs text-neutral-400 mt-4 border-t border-neutral-800 pt-3 font-normal'>
                {t('clauses.section2MinOutro')}
              </p>
            </div>
          </div>

          {/* 3. Additional Social Media Channels */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                3
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section3Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-normal'>
              {t('clauses.section3P1')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-normal'>
              {t('clauses.section3P2')}
            </p>
            <p className='text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 p-4 rounded-2xl font-normal'>
              {t('clauses.section3P3')}
            </p>
          </div>

          {/* 4. Compensation */}
          <div
            id='compensation'
            className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm scroll-mt-28 overflow-hidden'
          >
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                4
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section4Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 font-normal'>
              {t('clauses.section4Intro')}
            </p>

            {/* Compensation Rate Card with dark background & green money amount */}
            <div className='relative p-5 sm:p-6 rounded-2xl bg-neutral-950 text-white border border-neutral-800 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden shadow-sm'>
              <CornerSquares size='w-1.5 h-1.5' color='#525252' />
              <div>
                <span className='text-xs uppercase text-neutral-400 font-bold tracking-wider block mb-1'>
                  {t('clauses.section4RateLabel')}
                </span>
                <span className='text-2xl sm:text-3xl font-bold text-white'>USD 20</span>
                <span className='text-neutral-300 text-sm ml-2 font-normal'>
                  {t('clauses.section4RateSub')}
                </span>
              </div>
              <div className='sm:text-right border-t sm:border-t-0 sm:border-l border-neutral-800 pt-3 sm:pt-0 sm:pl-6'>
                <span className='text-xs uppercase text-neutral-400 font-bold tracking-wider block mb-1'>
                  {t('clauses.section4MaxLabel')}
                </span>
                <span className='text-2xl sm:text-3xl font-bold text-emerald-400'>USD 500</span>
                <span className='text-neutral-300 text-sm block font-normal mt-0.5'>
                  {t('clauses.section4MaxSub')}
                </span>
              </div>
            </div>

            <p className='text-neutral-500 dark:text-neutral-400 text-xs mb-3 italic font-normal'>
              {t('clauses.section4NoGuarantee')}
            </p>

            <div className='text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-3'>
              {t('clauses.section4ExamplesTitle')}
            </div>
            <div className='border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden mb-4'>
              <table className='w-full text-left text-sm font-normal'>
                <thead className='bg-neutral-100 dark:bg-neutral-800 text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-700'>
                  <tr>
                    <th className='py-3 px-4 font-bold'>{t('clauses.tableViewsHeader')}</th>
                    <th className='py-3 px-4 font-bold text-neutral-900 dark:text-white'>{t('clauses.tableCompHeader')}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-neutral-200 dark:divide-neutral-700'>
                  {compensationTiers.map((tier, idx) => (
                    <tr
                      key={idx}
                      className='hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors'
                    >
                      <td className='py-3 px-4 text-neutral-900 dark:text-neutral-100 font-medium'>{tier.views}</td>
                      <td className='py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold'>{tier.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className='text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/60 p-3.5 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
              {t('clauses.section4CapNote')}
            </p>
          </div>

          {/* 5. View Count */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                5
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section5Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 font-normal'>
              {t('clauses.section5P1')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 font-normal'>
              {t('clauses.section5P2')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal'>
              {t('clauses.section5P3')}
            </p>
          </div>

          {/* 6. Free Access to Typus.ai */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                6
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section6Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 font-normal'>
              {t('clauses.section6P1')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal'>
              {t('clauses.section6P2')}
            </p>
          </div>

          {/* 7. Multiple Posts */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                7
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section7Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3 font-normal'>
              {t('clauses.section7P1')}
            </p>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal'>
              {t('clauses.section7P2')}
            </p>
          </div>

          {/* 8. Invoicing and Payment */}
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 p-6 sm:p-8 shadow-sm overflow-hidden'>
            <CornerSquares />
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-bold text-sm flex items-center justify-center'>
                8
              </span>
              <h3 className='text-xl font-normal text-neutral-950 dark:text-white uppercase'>
                {t('clauses.section8Title')}
              </h3>
            </div>
            <p className='text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm mb-5 font-normal'>
              {t('clauses.section8Intro')}
            </p>

            {/* Checklist */}
            <ul className='space-y-2 mb-6 text-sm text-neutral-800 dark:text-neutral-200 font-normal'>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item1')}</span>
              </li>
              <li className='flex items-start gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5' />
                <div className='font-normal'>
                  <div className='font-bold text-neutral-900 dark:text-white'>
                    {t('clauses.section8Item2Title')}
                  </div>
                  <div className='text-xs text-neutral-600 dark:text-neutral-400 font-mono mt-1 font-normal'>
                    {t('billing.companyName')}
                    <br />
                    {t('billing.street')}
                    <br />
                    {t('billing.city')}
                    <br />
                    {t('billing.country')}
                    <br />
                    {t('billing.vatId')}
                  </div>
                </div>
              </li>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item3')}</span>
              </li>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item4')}</span>
              </li>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item5')}</span>
              </li>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item6')}</span>
              </li>
              <li className='flex items-center gap-2 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item7')}</span>
              </li>
            </ul>

            {/* Billing Address Card with Copy Button */}
            <div className='relative p-5 sm:p-6 rounded-2xl bg-neutral-950 text-white border border-neutral-800 mb-4 overflow-hidden shadow-sm'>
              <CornerSquares size='w-1.5 h-1.5' color='#525252' />
              <div className='flex items-center justify-between mb-2.5'>
                <span className='text-xs font-bold uppercase tracking-wider text-neutral-400'>
                  {t('billing.title')}
                </span>
                <button
                  type='button'
                  onClick={handleCopyBilling}
                  className='inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider border border-neutral-700 hover:border-neutral-500 text-neutral-200 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer shadow-2xs'
                >
                  {copiedInvoice ? (
                    <Check className='w-3 h-3 text-emerald-400' />
                  ) : (
                    <Copy className='w-3 h-3' />
                  )}
                  {copiedInvoice ? t('billing.copied') : t('billing.copyBtn')}
                </button>
              </div>
              <pre className='font-mono text-xs sm:text-sm text-neutral-200 whitespace-pre-wrap leading-relaxed font-normal'>
                {invoiceBillingAddress}
              </pre>
            </div>

            <div className='text-xs text-neutral-500 dark:text-neutral-400 space-y-2 leading-relaxed font-normal'>
              <p>{t('clauses.section8Responsible')}</p>
              <p>{t('clauses.section8ProcessNote')}</p>
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center font-normal'>
          <div className='relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 shadow-sm overflow-hidden'>
            <CornerSquares size='w-2.5 h-2.5' />
            <div className='absolute top-0 left-0 right-0 h-1 bg-black dark:bg-white' />

            <h2 className='text-2xl sm:text-3xl font-normal uppercase text-neutral-950 dark:text-white mb-3'>
              {t('cta.title')}
            </h2>
            <p className='text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto mb-8 text-sm sm:text-base font-normal'>
              {t('cta.desc')}
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='https://app.typus.ai/register'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full border border-neutral-900 dark:border-white bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-sm cursor-pointer'
              >
                {t('cta.registerBtn')}
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='https://instagram.com/typus.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-sm cursor-pointer'
              >
                <Instagram className='w-4 h-4 text-neutral-900 dark:text-white' />
                {t('cta.instagramBtn')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}

