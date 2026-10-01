'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { ManufacturerHeader } from '@/components/manufacturer/manufacturer-header'
import { FooterSection } from '@/components/footer-section'
import { CornerSquares } from '@/components/common/corner-squares'
import BookingDemoClassFormForPricingPage from '@/components/demo-class-boooking-form-for-pricing-page'
import {
  Database,
  Sparkles,
  FileCheck,
  Library,
  Brain,
  ShieldCheck,
  Gift,
  Box,
  LayoutGrid
} from 'lucide-react'

const PartnerHeaderLogos = () => (
  <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-8 pt-4">
    <div className="flex items-center justify-between w-full gap-6 sm:gap-8 md:gap-12 flex-wrap">
      <Image src="/logo/logo_ffplus.svg" alt="Fortissimo Plus" width={360} height={140} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_eccc.svg" alt="ECCC European Cybersecurity Competence Centre" width={400} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_eurohpc.svg" alt="EuroHPC Joint Undertaking" width={420} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_chipsju.svg" alt="Chips JU" width={360} height={140} className="h-10 sm:h-14 md:h-18 lg:h-22 w-auto object-contain dark:invert" />
      <Image src="/logo/logo_rwth.svg" alt="RWTH Aachen University" width={450} height={140} className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain dark:invert" />
    </div>
  </div>
)

export default function ForManufacturersPricingPage() {
  const locale = useLocale()
  const t = useTranslations('ResearchPage')
  const isDe = locale === 'de'

  return (
    <div className="research-page-scope relative w-full bg-[#FFFFFF] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white">
      <ManufacturerHeader />

      <main className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-10 space-y-16 md:space-y-24 pt-12 md:pt-16 pb-28">

        {/* ── SECTION: INTEGRATION PACKAGES & PRICING ── */}
        <section id="pricing" className="py-6 space-y-8 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full space-y-8 max-w-7xl mx-auto px-2 sm:px-4"
          >
            {/* Partner Logos Header Bar */}
            {/* <PartnerHeaderLogos /> */}

            <h1 className="heading-primary text-3xl sm:text-4xl lg:text-5xl text-center" style={{ fontFamily: 'Arial' }}>
              {t('slide12.title')}
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto">
              {/* Main Package (5.000 €) */}
              <div className="flex-1 min-w-0 max-w-xl p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-blue-500/40 dark:border-blue-500/50 shadow-lg space-y-6 relative overflow-hidden flex flex-col justify-between">
                <div
                  className="absolute top-0 right-0 px-4 py-1.5 bg-blue-600 text-white text-xs uppercase tracking-widest rounded-bl-2xl "
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide12.recommendedBadge')}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h2
                        className="subheading-primary text-lg sm:text-xl "
                        style={{ fontFamily: 'Arial' }}
                      >
                        {t('slide12.mainTitle')}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 pt-1">
                    <span
                      className="text-3xl sm:text-4xl md:text-5xl  text-black dark:text-white tracking-tight"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.mainPrice')}
                    </span>
                    <span
                      className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.mainVat')}
                    </span>
                  </div>

                  <div>
                    <span
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/80 text-xs uppercase tracking-wider rounded-lg inline-block "
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.mainScope')}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-xs sm:text-sm">
                  {[Sparkles, FileCheck, Library, ShieldCheck].map((IconComp, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 text-neutral-800 dark:text-neutral-200 first:pt-0 last:pb-0 font-medium">
                      <IconComp className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span style={{ fontFamily: 'Arial' }}>{t(`slide12.mainFeatures.${idx}`)}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Gift Box */}
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-neutral-950 border border-blue-100 dark:border-neutral-800 flex items-start gap-3 text-xs text-neutral-800 dark:text-neutral-200">
                  <Gift className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong
                      className="text-blue-900 dark:text-blue-300 block uppercase tracking-wide text-xs "
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.bonusTitle')}
                    </strong>
                    <span
                      className="text-neutral-600 dark:text-neutral-400 block text-xs"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.bonusDesc')}
                    </span>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit max-w-full mx-auto py-3 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs  uppercase tracking-wide shadow-md"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide12.mainCta')}
                </Link>
              </div>

              {/* Single Product Alternative (1.000 €) */}
              {/* <div className="md:col-span-1 lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-6 flex flex-col justify-between text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-xs">
                    <Box className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span
                      className="text-xs uppercase text-blue-600 dark:text-blue-400 tracking-widest block "
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.altBadge')}
                    </span>
                    <h2
                      className="heading-primary text-base sm:text-lg md:text-xl "
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.altTitle')}
                    </h2>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span
                      className="text-2xl sm:text-3xl md:text-4xl  text-black dark:text-white tracking-tight"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.altPrice')}
                    </span>
                    <span
                      className="text-xs text-neutral-500 dark:text-neutral-400 block pt-0.5 font-semibold"
                      style={{ fontFamily: 'Arial' }}
                    >
                      {t('slide12.altVat')}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <p
                    className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {t('slide12.altDesc')}
                  </p>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit max-w-full mx-auto py-3 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs  uppercase tracking-wide shadow-md"
                  style={{ fontFamily: 'Arial' }}
                >
                  {t('slide12.altCta')}
                </Link>
              </div> */}

              {/* Advisor & Custom Offer Booking Form Card */}
              <div className="flex-1 min-w-0 max-w-xl p-4 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xs relative overflow-hidden flex flex-col justify-between">
                <CornerSquares />
                <BookingDemoClassFormForPricingPage className="p-0 pb-0 max-w-none w-full" />
              </div>
            </div>


            {/* Bottom EU Funding Footer Badge */}
            <div
              className="flex items-center justify-center gap-3 text-xs sm:text-sm text-neutral-500 pt-6 border-t border-neutral-200 dark:border-neutral-800"
              style={{ fontFamily: 'Arial' }}
            >
              <span className="w-6 h-6 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-xs flex-shrink-0">
                🇪🇺
              </span>
              <span>{t('slide12.euFunding')}</span>
            </div>
          </motion.div>
        </section>

        {/* ── SECTION: MANUFACTURER PRICING PLANS ── */}
        <section className="py-12 border-t border-neutral-200/80 dark:border-neutral-800 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full space-y-10 max-w-7xl mx-auto px-2 sm:px-4"
          >
            {/* Header */}
            <div className="space-y-2 text-center max-w-3xl mx-auto">
              <h2
                className="heading-primary text-2xl sm:text-3xl md:text-4xl"
                style={{ fontFamily: 'Arial' }}
              >
                {t('plans.sectionTitle')}
              </h2>
              <p
                className="subheading-primary text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                style={{ fontFamily: 'Arial' }}
              >
                {t('plans.sectionSubtitle')}
              </p>
            </div>

            {/* 4 Pricing Cards Grid with Corner Squares */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Card 1: Essential */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-lg transition"
                style={{ fontFamily: 'Arial' }}
              >
                <CornerSquares />

                <div className="space-y-4 text-left">
                  <h3 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.essential')}
                  </h3>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      125 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      50
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.hatch')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      30 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.monthlySummary')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-black dark:border-white text-neutral-900 dark:text-white text-center text-xs font-medium tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all mt-6 inline-block"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 2: Standard */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-lg transition"
                style={{ fontFamily: 'Arial' }}
              >
                <CornerSquares />

                <div className="space-y-4 text-left">
                  <h3 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.standard')}
                  </h3>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      275 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      150
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-neutral-400 font-normal">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      90 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.brandPage')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.artxPromotion')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-black dark:border-white text-neutral-900 dark:text-white text-center text-xs font-medium tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all mt-6 inline-block"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 3: Advanced */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-black dark:border-white flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition overflow-hidden"
                style={{ fontFamily: 'Arial' }}
              >
                {/* Top-Right Blue Ribbon Badge */}
                <div
                  className="absolute top-0 right-0 px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs uppercase tracking-widest rounded-bl-2xl z-30"
                  style={{ fontFamily: 'Arial' }}
                >
                  {isDe ? 'BESTES ANGEBOT' : 'BEST OFFER'}
                </div>

                <CornerSquares />

                <div className="space-y-4 text-left">
                  <h3 className="text-xl sm:text-2xl text-neutral-900 dark:text-white flex items-center justify-between">
                    <span>{t('plans.advanced')}</span>
                  </h3>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      495 €{t('plans.perMonth')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      500
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      180 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.brandPage')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.artxPromotion')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.homepageFeature')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md bg-black text-white hover:bg-neutral-800 text-center text-xs font-medium tracking-widest uppercase transition-all shadow-2xs mt-6 inline-block"
                >
                  {t('plans.getStarted')}
                </Link>
              </div>

              {/* Card 4: Custom */}
              <div
                className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-lg transition"
                style={{ fontFamily: 'Arial' }}
              >
                <CornerSquares />

                <div className="space-y-4 text-left">
                  <h3 className="text-xl sm:text-2xl  text-neutral-900 dark:text-white">
                    {t('plans.custom')}
                  </h3>

                  {/* Price */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.priceLabel')}
                    </span>
                    <span className="text-lg sm:text-xl  text-black dark:text-white block">
                      {t('plans.speakToSales')}
                    </span>
                  </div>

                  {/* Published Textures */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.publishedTexturesLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      {t('plans.unlimited')}
                    </span>
                  </div>

                  {/* File Formats */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.fileFormatsLabel')}
                    </span>
                    <ul className="text-xs space-y-0.5">
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.highRes')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.hatch')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.formats.pbr')}</li>
                    </ul>
                  </div>

                  {/* Analytics */}
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.analyticsLabel')}
                    </span>
                    <span className="text-sm  text-black dark:text-white block">
                      365 {t('plans.days')}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block ">
                      {t('plans.featuresLabel')}
                    </span>
                    <ul className="text-xs space-y-1">
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.leadCapture')}</li>
                      <li className="text-black dark:text-white font-semibold">{t('plans.features.customApp')}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md border border-black dark:border-white text-neutral-900 dark:text-white text-center text-xs font-medium tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all mt-6 inline-block"
                >
                  {t('plans.contactSales')}
                </Link>
              </div>
            </div>

            {/* SUBSCRIPTION ADD-ONS SECTION */}
            <div
              className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-4"
              style={{ fontFamily: 'Arial' }}
            >
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {t('plans.addonsHeader')}
                </span>
                <div className="w-2 h-2 bg-black dark:bg-white shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {/* Add-on 1 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-2xs">
                  <CornerSquares size="w-1.5 h-1.5" />
                  <div className="space-y-1 text-left">
                    <h3 className="text-sm text-neutral-900 dark:text-white">
                      {t('plans.addons.extraTextures.title')}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {t('plans.addons.extraTextures.desc')}
                    </p>
                  </div>
                  <div className="text-xs text-black dark:text-white pt-2 border-t border-neutral-100 dark:border-neutral-800 font-semibold">
                    {t('plans.addons.extraTextures.price')}
                  </div>
                </div>

                {/* Add-on 2 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-2xs">
                  <CornerSquares size="w-1.5 h-1.5" />
                  <div className="space-y-1 text-left">
                    <h3 className="text-sm text-neutral-900 dark:text-white">
                      {t('plans.addons.scanning.title')}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {t('plans.addons.scanning.desc')}
                    </p>
                  </div>
                  <div className="text-xs text-black dark:text-white pt-2 border-t border-neutral-100 dark:border-neutral-800 font-semibold">
                    {t('plans.addons.scanning.price')}
                  </div>
                </div>

                {/* Add-on 3 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-2xs">
                  <CornerSquares size="w-1.5 h-1.5" />
                  <div className="space-y-1 text-left">
                    <h3 className="text-sm text-neutral-900 dark:text-white">
                      {t('plans.addons.pimIntegration.title')}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {t('plans.addons.pimIntegration.desc')}
                    </p>
                  </div>
                  <div className="text-xs text-black dark:text-white pt-2 border-t border-neutral-100 dark:border-neutral-800 font-semibold">
                    {t('plans.addons.pimIntegration.price')}
                  </div>
                </div>

                {/* Add-on 4 */}
                <div className="relative p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-3 shadow-2xs">
                  <CornerSquares size="w-1.5 h-1.5" />
                  <div className="space-y-1 text-left">
                    <h3 className="text-sm text-neutral-900 dark:text-white">
                      {t('plans.addons.whiteLabel.title')}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {t('plans.addons.whiteLabel.desc')}
                    </p>
                  </div>
                  <div className="text-xs text-black dark:text-white pt-2 border-t border-neutral-100 dark:border-neutral-800 font-semibold">
                    {t('plans.addons.whiteLabel.price')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <FooterSection />
    </div>
  )
}
