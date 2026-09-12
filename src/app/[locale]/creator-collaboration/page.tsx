'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
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
    <div className='relative w-full min-h-screen bg-[#fafafa] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white font-normal'>
      <NavbarDemo />

      <main className='pt-28 pb-20'>
        {/* Hero Section */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16'>
          <div className='text-center max-w-3xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-normal uppercase tracking-wider text-neutral-700 mb-6'
            >
              <Sparkles className='w-3.5 h-3.5 text-neutral-900' />
              {t('badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 uppercase mb-5'
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 400 }}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='text-base sm:text-lg text-neutral-600 leading-relaxed font-normal'
            >
              {t('subtitle')}
            </motion.p>

            {/* Quick action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mt-8 flex flex-wrap items-center justify-center gap-4'
            >
              <a
                href='https://app.typus.ai/register'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-normal text-sm px-6 py-3 rounded-xl transition-colors shadow-sm'
              >
                {t('cta.registerBtn')}
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='#compensation'
                className='inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-normal text-sm px-6 py-3 rounded-xl border border-neutral-200 transition-colors shadow-sm'
              >
                <DollarSign className='w-4 h-4 text-neutral-600' />
                {t('clauses.section4Title')}
              </a>
              <a
                href='https://instagram.com/typus.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 font-normal text-sm px-5 py-3 rounded-xl border border-neutral-200 transition-colors shadow-sm'
              >
                <Instagram className='w-4 h-4 text-pink-600' />
                {t('cta.instagramBtn')}
              </a>
            </motion.div>
          </div>

          {/* Agreement Parties Card */}
          <div className='mt-12 bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto font-normal'>
            <div className='text-xs font-normal tracking-widest uppercase text-neutral-400 mb-3'>
              {t('partiesTitle')}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/70'>
                <span className='text-xs uppercase font-normal text-neutral-500 block mb-1'>
                  {t('party1Label')}
                </span>
                <div className='text-base font-normal text-neutral-900'>{t('party1Name')}</div>
                <div className='text-xs text-neutral-500 mt-1 font-normal'>
                  <a
                    href='https://typus.ai/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline font-normal'
                  >
                    {t('party1Website')}
                  </a>
                </div>
              </div>

              <div className='p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/70'>
                <span className='text-xs uppercase font-normal text-neutral-500 block mb-1'>
                  {t('party2Label')}
                </span>
                <div className='text-base font-normal text-neutral-900'>{t('party2Name')}</div>
                <div className='text-xs text-neutral-500 mt-1 font-normal'>
                  {t('party2Desc')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How To Start Section */}
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16'>
          <div className='bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden font-normal'>
            {/* Background decoration */}
            <div className='absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none' />

            <div className='relative z-10 max-w-4xl'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-normal uppercase tracking-wider text-neutral-200 mb-4'>
                <Zap className='w-3.5 h-3.5 text-yellow-400' />
                {t('quickStart.badge')}
              </div>
              <h2 className='text-2xl sm:text-3xl font-normal tracking-tight mb-3'>
                {t('quickStart.title')}
              </h2>
              <p className='text-neutral-300 text-sm sm:text-base mb-8 max-w-2xl leading-relaxed font-normal'>
                {t('quickStart.description')}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                {/* Step 1 */}
                <div className='p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between backdrop-blur-sm'>
                  <div>
                    <div className='w-8 h-8 rounded-full bg-white text-neutral-950 font-normal text-sm flex items-center justify-center mb-4'>
                      1
                    </div>
                    <h3 className='font-normal text-lg text-white mb-2'>
                      {t('quickStart.step1Title')}
                    </h3>
                    <p className='text-xs text-neutral-300 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step1Desc')}
                    </p>
                  </div>
                  <a
                    href='https://app.typus.ai/register'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-xs font-normal text-white hover:text-neutral-200 underline'
                  >
                    {t('quickStart.step1Action')} <ExternalLink className='w-3 h-3' />
                  </a>
                </div>

                {/* Step 2 */}
                <div className='p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between backdrop-blur-sm'>
                  <div>
                    <div className='w-8 h-8 rounded-full bg-white text-neutral-950 font-normal text-sm flex items-center justify-center mb-4'>
                      2
                    </div>
                    <h3 className='font-normal text-lg text-white mb-2'>
                      {t('quickStart.step2Title')}
                    </h3>
                    <p className='text-xs text-neutral-300 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step2Desc')}
                    </p>
                  </div>
                  <a
                    href='https://instagram.com/typus.ai'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-xs font-normal text-white hover:text-neutral-200 underline'
                  >
                    {t('quickStart.step2Action')} <ExternalLink className='w-3 h-3' />
                  </a>
                </div>

                {/* Step 3 */}
                <div className='p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between backdrop-blur-sm'>
                  <div>
                    <div className='w-8 h-8 rounded-full bg-white text-neutral-950 font-normal text-sm flex items-center justify-center mb-4'>
                      3
                    </div>
                    <h3 className='font-normal text-lg text-white mb-2'>
                      {t('quickStart.step3Title')}
                    </h3>
                    <p className='text-xs text-neutral-300 leading-relaxed mb-4 font-normal'>
                      {t('quickStart.step3Desc')}
                    </p>
                  </div>
                  <div className='text-xs text-neutral-400 font-mono font-normal'>
                    {t('quickStart.step3Action')}
                  </div>
                </div>
              </div>

              {/* Main Features to Highlight Callout */}
              <div className='bg-white/10 border border-white/15 rounded-2xl p-6'>
                <div className='flex items-center gap-2 text-xs font-normal uppercase tracking-widest text-neutral-300 mb-3'>
                  <Award className='w-4 h-4 text-yellow-400' />
                  {t('quickStart.featuresTitle')}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-normal'>
                  <div className='flex items-start gap-3'>
                    <div className='w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5'>
                      <Box className='w-4 h-4 text-white' />
                    </div>
                    <div>
                      <div className='font-normal text-white'>
                        {t('quickStart.feature1Title')}{' '}
                        <a
                          href={t('quickStart.feature1Url')}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline hover:text-neutral-200'
                        >
                          {t('quickStart.feature1Url')}
                        </a>
                      </div>
                      <p className='text-xs text-neutral-300 mt-0.5 font-normal'>
                        {t('quickStart.feature1Desc')}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5'>
                      <Layers className='w-4 h-4 text-white' />
                    </div>
                    <div>
                      <div className='font-normal text-white'>
                        {t('quickStart.feature2Title')}{' '}
                        <a
                          href={t('quickStart.feature2Url')}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline hover:text-neutral-200'
                        >
                          {t('quickStart.feature2Url')}
                        </a>
                      </div>
                      <p className='text-xs text-neutral-300 mt-0.5 font-normal'>
                        {t('quickStart.feature2Desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Agreement Terms (1 to 8) */}
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-normal'>
          <div className='border-b border-neutral-200 pb-4 mb-8'>
            <h2 className='text-2xl font-normal text-neutral-900 tracking-tight'>
              {t('clauses.sectionTitle')}
            </h2>
          </div>

          {/* 1. Collaboration */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                1
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section1Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-3 font-normal'>
              {t('clauses.section1P1')}
            </p>
            <p className='text-neutral-700 leading-relaxed font-normal'>
              {t('clauses.section1P2')}
            </p>
          </div>

          {/* 2. Content Requirements */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                2
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section2Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-4 font-normal'>
              {t('clauses.section2P1')}
            </p>

            <div className='mb-6'>
              <div className='text-xs font-normal uppercase tracking-wider text-neutral-400 mb-2'>
                {t('clauses.section2ExamplesTitle')}
              </div>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700 font-normal'>
                <li className='flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-100 font-normal'>
                  <span className='text-neutral-400'>•</span>
                  <span>{t('clauses.section2Ex1')}</span>
                </li>
                <li className='flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-100 font-normal'>
                  <span className='text-neutral-400'>•</span>
                  <span>{t('clauses.section2Ex2')}</span>
                </li>
                <li className='flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-100 font-normal'>
                  <span className='text-neutral-400'>•</span>
                  <span>{t('clauses.section2Ex3')}</span>
                </li>
                <li className='flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-100 font-normal'>
                  <span className='text-neutral-400'>•</span>
                  <span>{t('clauses.section2Ex4')}</span>
                </li>
              </ul>
            </div>

            <div className='p-5 rounded-xl bg-neutral-950 text-white font-normal'>
              <div className='text-xs font-normal uppercase tracking-wider text-neutral-400 mb-3'>
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
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                3
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section3Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-4 font-normal'>
              {t('clauses.section3P1')}
            </p>
            <p className='text-neutral-700 leading-relaxed mb-4 font-normal'>
              {t('clauses.section3P2')}
            </p>
            <p className='text-sm text-neutral-700 bg-neutral-50 border border-neutral-200/80 p-4 rounded-xl font-normal'>
              {t('clauses.section3P3')}
            </p>
          </div>

          {/* 4. Compensation */}
          <div
            id='compensation'
            className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm scroll-mt-28 font-normal'
          >
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                4
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section4Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-4 font-normal'>
              {t('clauses.section4Intro')}
            </p>

            <div className='p-4 rounded-xl bg-neutral-900 text-white mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-normal'>
              <div>
                <span className='text-xs uppercase text-neutral-400 font-normal tracking-wider block'>
                  {t('clauses.section4RateLabel')}
                </span>
                <span className='text-2xl font-normal text-white'>USD 20</span>
                <span className='text-neutral-300 text-sm ml-2 font-normal'>
                  {t('clauses.section4RateSub')}
                </span>
              </div>
              <div className='sm:text-right border-t sm:border-t-0 sm:border-l border-neutral-700 pt-3 sm:pt-0 sm:pl-6'>
                <span className='text-xs uppercase text-neutral-400 font-normal tracking-wider block'>
                  {t('clauses.section4MaxLabel')}
                </span>
                <span className='text-2xl font-normal text-emerald-400'>USD 500</span>
                <span className='text-neutral-300 text-sm block font-normal'>
                  {t('clauses.section4MaxSub')}
                </span>
              </div>
            </div>

            <p className='text-neutral-600 text-xs mb-3 italic font-normal'>
              {t('clauses.section4NoGuarantee')}
            </p>

            <div className='text-xs font-normal uppercase tracking-wider text-neutral-400 mb-3'>
              {t('clauses.section4ExamplesTitle')}
            </div>
            <div className='border border-neutral-200 rounded-xl overflow-hidden mb-4 font-normal'>
              <table className='w-full text-left text-sm font-normal'>
                <thead className='bg-neutral-100/80 text-xs font-normal text-neutral-700 uppercase tracking-wider border-b border-neutral-200'>
                  <tr>
                    <th className='py-3 px-4 font-normal'>{t('clauses.tableViewsHeader')}</th>
                    <th className='py-3 px-4 font-normal'>{t('clauses.tableCompHeader')}</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-neutral-200 font-normal'>
                  {compensationTiers.map((tier, idx) => (
                    <tr
                      key={idx}
                      className='hover:bg-neutral-50/50 font-normal'
                    >
                      <td className='py-3 px-4 text-neutral-900 font-normal'>{tier.views}</td>
                      <td className='py-3 px-4 text-neutral-900 font-mono font-normal'>{tier.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className='text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg border border-neutral-200/60 font-normal'>
              {t('clauses.section4CapNote')}
            </p>
          </div>

          {/* 5. View Count */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                5
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section5Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-3 font-normal'>
              {t('clauses.section5P1')}
            </p>
            <p className='text-neutral-700 leading-relaxed mb-3 font-normal'>
              {t('clauses.section5P2')}
            </p>
            <p className='text-neutral-700 leading-relaxed font-normal'>
              {t('clauses.section5P3')}
            </p>
          </div>

          {/* 6. Free Access to Typus.ai */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                6
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section6Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-3 font-normal'>
              {t('clauses.section6P1')}
            </p>
            <p className='text-neutral-700 leading-relaxed font-normal'>
              {t('clauses.section6P2')}
            </p>
          </div>

          {/* 7. Multiple Posts */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                7
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section7Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed mb-3 font-normal'>
              {t('clauses.section7P1')}
            </p>
            <p className='text-neutral-700 leading-relaxed font-normal'>
              {t('clauses.section7P2')}
            </p>
          </div>

          {/* 8. Invoicing and Payment */}
          <div className='bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm font-normal'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 h-8 rounded-xl bg-neutral-950 text-white font-normal text-sm flex items-center justify-center'>
                8
              </span>
              <h3 className='text-xl font-normal text-neutral-950'>
                {t('clauses.section8Title')}
              </h3>
            </div>
            <p className='text-neutral-700 leading-relaxed text-sm mb-5 font-normal'>
              {t('clauses.section8Intro')}
            </p>

            {/* Checklist */}
            <ul className='space-y-2 mb-6 text-sm text-neutral-800 font-normal'>
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item1')}</span>
              </li>
              <li className='flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0 mt-0.5' />
                <div className='font-normal'>
                  <div className='font-normal text-neutral-900'>
                    {t('clauses.section8Item2Title')}
                  </div>
                  <div className='text-xs text-neutral-600 font-mono mt-1 font-normal'>
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
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item3')}</span>
              </li>
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item4')}</span>
              </li>
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item5')}</span>
              </li>
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item6')}</span>
              </li>
              <li className='flex items-center gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/60 font-normal'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 shrink-0' />
                <span className='font-normal'>{t('clauses.section8Item7')}</span>
              </li>
            </ul>

            {/* Billing Address Card with Copy Button */}
            <div className='p-5 rounded-xl bg-neutral-900 text-white relative mb-4 font-normal'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-xs font-normal uppercase tracking-wider text-neutral-400'>
                  {t('billing.title')}
                </span>
                <button
                  type='button'
                  onClick={handleCopyBilling}
                  className='inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded transition-colors font-normal'
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

            <div className='text-xs text-neutral-600 space-y-2 leading-relaxed font-normal'>
              <p>{t('clauses.section8Responsible')}</p>
              <p>{t('clauses.section8ProcessNote')}</p>
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center font-normal'>
          <div className='bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm font-normal'>
            <h2 className='text-2xl sm:text-3xl font-normal text-neutral-950 mb-3'>
              {t('cta.title')}
            </h2>
            <p className='text-neutral-600 max-w-lg mx-auto mb-8 text-sm sm:text-base font-normal'>
              {t('cta.desc')}
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <a
                href='https://app.typus.ai/register'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-normal text-sm px-6 py-3 rounded-xl transition-colors shadow-sm'
              >
                {t('cta.registerBtn')}
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='https://instagram.com/typus.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 font-normal text-sm px-6 py-3 rounded-xl border border-neutral-200 transition-colors shadow-sm'
              >
                <Instagram className='w-4 h-4 text-pink-600' />
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
