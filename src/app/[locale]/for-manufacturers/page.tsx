'use client'

import React, { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { ManufacturerHeader } from '@/components/manufacturer/manufacturer-header'
import { ProviderProcessWorkflow } from '@/components/manufacturer/provider-process-workflow'
import { CornerSquares } from '@/components/common/corner-squares'
import {
  ArrowRight,
  X,
  Mail,
  CheckCircle2,
  Users,
  ExternalLink,
  Box,
  Sparkles,
} from 'lucide-react'
import { appUrl } from '@/lib/constants'

export default function ForManufacturersPage() {
  const t = useTranslations('provider')
  const locale = useLocale()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  return (
    <div
      className="min-h-screen bg-white text-black flex flex-col selection:bg-black selection:text-white"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      {/* ── Public Top Header Navigation (Manufacturer Variant) ── */}
      <ManufacturerHeader onOpenContact={() => setIsContactModalOpen(true)} />

      {/* ── Main Content Container ── */}
      <main className="flex-1 w-full space-y-16">
        {/* ── Hero Brand & Provider Account Box ── */}
        <section className="relative text-center flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-4">
          {/* Top Specification Badge Tag */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs text-xs">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600 font-semibold">
              {t('hero.programmeBadge')}
            </span>
          </div>

          {/* Main Logo Container Box with Corner Squares (borderless) */}
          <div className="relative p-6 sm:p-8 max-w-xl w-full flex flex-col items-center justify-center">
            <CornerSquares />

            <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 py-1 select-none">
              <div className="bg-black w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
              <span
                className="text-black font-normal tracking-[0.1em] uppercase text-2xl sm:text-3xl md:text-4xl leading-none"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}
              >
                TYPUS
              </span>
            </div>
          </div>

          {/* Material Provider & Manufacturer Sign-Up Box with Corner Squares (borderless) */}
          <div className="relative p-6 sm:p-8 max-w-xl w-full flex flex-col items-center justify-center text-center space-y-4">
            <CornerSquares />

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {t('hero.providerBadge')}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                {t('hero.providerTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                {t('hero.providerDesc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-1">
              <a
                href={`${appUrl}/provider/signup`}
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white font-medium text-xs tracking-widest uppercase transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>{t('hero.createAccountBtn')}</span>
                <ArrowRight size={14} />
              </a>

              <a
                href={`${appUrl}/provider/login`}
                className="w-full sm:w-auto px-6 py-2.5 rounded-md border border-black text-neutral-800 font-medium text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>{t('hero.providerLoginBtn')}</span>
                <ExternalLink size={13} className="text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Active Users Metric Card (borderless) */}
          <div className="relative p-6 sm:p-7 space-y-3 max-w-xl w-full text-center">
            <CornerSquares />
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-black flex items-center justify-center mx-auto">
              <Users size={22} className="stroke-[1.75]" />
            </div>
            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
              <strong className="text-black font-semibold">TYPUS</strong>{' '}
              {t('hero.activeUsers')}
            </p>
          </div>
        </section>

        {/* ── Section: App Konfigurator (Warm Beige Accent Section) ── */}
        <div
          id="app-konfigurator"
          style={{ backgroundColor: '#f7f5f0' }}
          className="py-16 md:py-20 border-y border-neutral-200/80 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between text-xs text-neutral-500 font-mono tracking-widest uppercase">
              <span>{t('configuratorSection.tag')}</span>
              <span className="text-neutral-900 font-semibold flex items-center gap-1.5">
                <Box className="w-4 h-4 text-neutral-900" />
                {t('configuratorSection.tagBadge')}
              </span>
            </div>

            <div className="relative p-6 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
              <CornerSquares />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-md border border-black bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                      {t('configuratorSection.badge')}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {t('configuratorSection.price')}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    {t('configuratorSection.title')}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {t('configuratorSection.subtitle')}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 size={16} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>{t('configuratorSection.feature1')}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 size={16} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>{t('configuratorSection.feature2')}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 size={16} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>{t('configuratorSection.feature3')}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 size={16} className="text-neutral-900 shrink-0 mt-0.5" />
                      <span>{t('configuratorSection.feature4')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 shrink-0">
                  <Link
                    href="/embedded-configurator"
                    className="py-2.5 px-6 rounded-md bg-black hover:bg-neutral-800 text-white text-xs font-medium tracking-widest uppercase text-center transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('configuratorSection.ctaRequest')}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://calendar.app.google/q85ip5B1L6vwHs1w7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-6 rounded-md border border-black hover:bg-black hover:text-white text-neutral-900 text-xs font-medium tracking-widest uppercase text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{t('configuratorSection.ctaDemo')}</span>
                    <ExternalLink size={13} className="text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Teilnahmeprozess (7-Step Process Workflow) ── */}
        <section id="teilnahmeprozess" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono tracking-widest uppercase">
            <span>[ SECTION // {t('nav.participationProcess').toUpperCase()} ]</span>
            <span className="text-black font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-black" />
              {t('process.workflowBadge')}
            </span>
          </div>

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-bold uppercase tracking-widest">
              {t('nav.participationProcess')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {t('process.headerTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {t('process.headerSubtitle')}
            </p>
          </div>

          <div className="relative py-4">
            <CornerSquares />
            <ProviderProcessWorkflow isPublic={true} />
          </div>
        </section>
      </main>

      {/* ── Contact Modal ── */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 shadow-2xl border border-slate-100">
            <button
              onClick={() => {
                setIsContactModalOpen(false)
                setContactSubmitted(false)
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X size={20} />
            </button>

            {contactSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{t('landingModal.successTitle')}</h3>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  {t('landingModal.successSubtitle')}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t('landingModal.title')}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {t('landingModal.subtitle')}
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setContactSubmitted(true)
                  }}
                  className="space-y-3 pt-2"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('landingModal.company')}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('landingModal.companyPlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('landingModal.email')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t('landingModal.emailPlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm focus:outline-hidden focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {t('landingModal.message')}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t('landingModal.messagePlaceholder')}
                      className="w-full px-3.5 py-2.5 rounded-md border border-neutral-300 text-sm focus:outline-hidden focus:border-black resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white text-xs font-medium tracking-widest uppercase transition-all shadow-2xs cursor-pointer"
                  >
                    {t('landingModal.submitBtn')}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Public Footer ── */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="h-4 w-4 shrink-0 flex items-center justify-center p-0.5 bg-black">
              <div className="bg-black w-full h-full" />
            </div>
            <span
              className="text-xs text-black uppercase select-none font-normal"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 400,
                letterSpacing: '1.5px',
              }}
            >
              TYPUS
            </span>
            <span className="text-xs text-neutral-400 ml-2">
              © {new Date().getFullYear()} TYPUS.AI. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500">
            <a href={`${appUrl}/provider/terms`} className="text-black font-semibold hover:underline">
              {t('landingFooter.termsProvider')}
            </a>
            <Link href="/privacy" className="hover:text-black transition-colors">
              {t('landingFooter.privacy')}
            </Link>
            <Link href="/privacy" className="hover:text-black transition-colors">
              {t('landingFooter.imprint')}
            </Link>
            <a href={`${appUrl}/provider/login`} className="hover:text-black font-medium transition-colors">
              {t('landingFooter.providerPortal')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}