'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { ManufacturerHeader } from '@/components/manufacturer/manufacturer-header'
import { FooterSection } from '@/components/footer-section'
import {
  ArrowRight,
  X,
  CheckCircle2,
  Send,
  Loader2
} from 'lucide-react'

export default function ResearchPage() {
  const locale = useLocale()
  const isDe = locale === 'de'
  const t = useTranslations('ResearchInnovation')

  // Modal State for "Kooperation anfragen" / "Kontakt"
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    project: 'FFplus / AI Research',
    message: ''
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 900)
  }

  // 5 Research Projects with keys from translations
  const projectKeys = [
    {
      id: 'efre-nrw',
      key: 'efre',
      status: 'approved',
      statusText: t('projects.status.approved')
    },
    {
      id: 'ffplus',
      key: 'ffplus',
      status: 'approved',
      statusText: t('projects.status.approved')
    },
    {
      id: 'igp-bmwe',
      key: 'igp',
      status: 'inProgress',
      statusText: t('projects.status.inProgress')
    },
    {
      id: 'zukunft-bau',
      key: 'zukunftBau',
      status: 'inProgress',
      statusText: t('projects.status.inProgress')
    },
    {
      id: 'kmu-innovativ',
      key: 'kmu',
      status: 'inDevelopment',
      statusText: t('projects.status.inDevelopment')
    }
  ]

  // 5 Process Steps
  const processStepKeys = [
    { step: '01', key: 'step1' },
    { step: '02', key: 'step2' },
    { step: '03', key: 'step3' },
    { step: '04', key: 'step4' },
    { step: '05', key: 'step5', isCompleted: true }
  ]

  // 4 Network Partners
  const networkPartners = [
    { name: 'RWTH Aachen', role: t('network.partner1Role') },
    { name: 'DFKI', role: t('network.partner2Role') },
    { name: 'Concular', role: t('network.partner3Role') },
    { name: 'Lehrstuhl Bauinformatik', role: t('network.partner4Role') }
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white font-sans antialiased">
      
      {/* ── MANUFACTURER / RESEARCH HEADER ── */}
      <ManufacturerHeader
        onOpenContact={() => {
          setFormSubmitted(false)
          setIsModalOpen(true)
        }}
      />

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 md:pt-16 pb-28 space-y-24 sm:space-y-28">

        {/* ── HERO SECTION ── */}
        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-[11px] font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              {t('hero.tag')}
            </div>

            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-normal text-neutral-950 tracking-tight leading-[1.12]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {t('hero.titleLine1')}<br />
              {t('hero.titleLine2')}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed pt-2">
              {t('hero.subtitle')}
            </p>

            <div className="pt-6 flex items-center gap-3 text-neutral-400 text-[11px] font-mono tracking-[0.15em] uppercase">
              <span className="w-8 h-[1px] bg-neutral-300"></span>
              <span>— {t('hero.divider')}</span>
            </div>
          </motion.div>
        </section>

        {/* ── SECTION: AKTUELLE FORSCHUNGSPROJEKTE ── */}
        <section className="space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                {t('projects.tag')}
              </div>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-950 tracking-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {t('projects.title')}
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed">
              {t('projects.description')}
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {projectKeys.map((proj, idx) => {
              const isWide = proj.id === 'kmu-innovativ'
              const subtag = t(`projects.${proj.key}.subtag` as any)
              const title = t(`projects.${proj.key}.title` as any)
              const subtitle = t(`projects.${proj.key}.subtitle` as any)
              const desc = t(`projects.${proj.key}.description` as any)
              const meta = t(`projects.${proj.key}.meta` as any)

              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative p-6 sm:p-8 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                    isWide ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top subtag & status pill */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-neutral-500 font-mono">
                        {subtag}
                      </span>
                      
                      {/* Status Badge */}
                      {proj.status === 'approved' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase">
                          {proj.statusText}
                        </span>
                      )}
                      {proj.status === 'inProgress' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 uppercase">
                          {proj.statusText}
                        </span>
                      )}
                      {proj.status === 'inDevelopment' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-amber-50 text-amber-800 border border-amber-200/70 uppercase">
                          {proj.statusText}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {title}
                    </h3>

                    {/* Subtitle */}
                    <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                      {subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Meta & Arrow */}
                  <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between text-neutral-500">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 font-medium">
                      {meta}
                    </span>
                    <button
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          project: title,
                          message: `${isDe ? 'Anfrage bezüglich' : 'Inquiry regarding'}: ${title}`
                        }))
                        setFormSubmitted(false)
                        setIsModalOpen(true)
                      }}
                      className="text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 transition duration-200 p-1 cursor-pointer"
                      aria-label="Open project cooperation"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )
            })}

          </div>
        </section>

        {/* ── SECTION: UNSER FORSCHUNGSPROZESS (TIMELINE) ── */}
        <section className="space-y-8 pt-4">
          <div className="flex items-center justify-between text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 uppercase">
            <span>{t('process.tagLeft')}</span>
            <span>{t('process.tagRight')}</span>
          </div>

          {/* Connected timeline steps bar */}
          <div className="relative pt-6 pb-2">
            
            {/* Horizontal Line behind dots (Desktop) */}
            <div className="hidden md:block absolute top-[35px] left-[5%] right-[5%] h-[1.5px] bg-neutral-200 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {processStepKeys.map((stepItem) => {
                const isStep5 = stepItem.isCompleted
                const stepTitle = t(`process.${stepItem.key}.title` as any)
                const stepDesc = t(`process.${stepItem.key}.desc` as any)

                return (
                  <div key={stepItem.step} className="flex flex-col items-start md:items-start space-y-3">
                    {/* Node Dot */}
                    <div className="flex items-center gap-3 md:gap-0">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isStep5 
                          ? 'bg-neutral-900 border-neutral-900 ring-4 ring-neutral-100' 
                          : 'bg-white border-neutral-400'
                      }`} />
                      <span className="md:hidden text-xs font-mono font-semibold text-neutral-400">
                        {t('process.step')} {stepItem.step}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="hidden md:block text-[11px] font-mono text-neutral-400">
                        {stepItem.step}
                      </span>
                      <h4 
                        className="text-base sm:text-lg font-normal text-neutral-950"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
                        {stepTitle}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {stepDesc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION: UNSER FORSCHUNGSNETZWERK ── */}
        <section className="pt-10 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-2">
              <h3 
                className="text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {t('network.title')}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {t('network.subtitle')}
              </p>
            </div>

            {/* Right 4 Partners List */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 items-center sm:divide-x divide-neutral-200">
              {networkPartners.map((partner, pIdx) => (
                <div key={partner.name} className={`space-y-1 ${pIdx > 0 ? 'sm:pl-6' : ''}`}>
                  <h5 
                    className="text-base sm:text-lg font-normal text-neutral-950 tracking-tight leading-snug"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {partner.name}
                  </h5>
                  <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase font-semibold">
                    {partner.role}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA DARK BANNER ── */}
        <section className="pt-4">
          <div className="rounded-2xl bg-[#111827] text-white p-8 sm:p-12 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2">
              <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-semibold">
                {t('cta.tag')}
              </div>
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                {t('cta.title')}
              </h3>
            </div>

            <button
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  project: isDe ? 'Allgemeine Kooperationsanfrage' : 'General Collaboration Inquiry',
                  message: isDe ? 'Wir möchten gerne eine Forschungskooperation anfragen.' : 'We would like to inquire about a research collaboration.'
                }))
                setFormSubmitted(false)
                setIsModalOpen(true)
              }}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-neutral-600 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-200 shrink-0 shadow-sm cursor-pointer"
            >
              <span>{t('cta.button')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      {/* ── STANDARD SITE FOOTER (Same footer as the rest of the site) ── */}
      <FooterSection />

      {/* ── COOPERATION INQUIRY MODAL (Interactive Dialog) ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 
                    className="text-2xl font-normal text-neutral-950"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    {t('modal.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    {t('modal.successDesc')}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition cursor-pointer"
                  >
                    {t('modal.closeButton')}
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                      {t('modal.tag')}
                    </div>
                    <h3 
                      className="text-2xl font-normal text-neutral-950 mt-1"
                      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                      {t('modal.title')}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      {t('modal.desc')}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        {t('modal.nameLabel')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('modal.namePlaceholder')}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:border-neutral-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        {t('modal.institutionLabel')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder={t('modal.institutionPlaceholder')}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:border-neutral-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        {t('modal.emailLabel')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('modal.emailPlaceholder')}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:border-neutral-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        {t('modal.projectLabel')}
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg bg-white focus:outline-hidden focus:border-neutral-900 transition"
                      >
                        <option value="FFplus / Generative AI">FFplus / Generative AI</option>
                        <option value="EFRE NRW / BIM & Cloud">EFRE NRW / BIM & Cloud</option>
                        <option value="IGP BMWE / Nachhaltiges Wohnen">IGP BMWE / Sustainable Living</option>
                        <option value="Zukunft Bau / Semantische Produktdaten">Zukunft Bau / Semantic Product Data</option>
                        <option value="KMU innovativ / Zirkuläres Bauen">KMU innovativ / Circular Building</option>
                        <option value="Initiativ-Kooperation">{isDe ? 'Initiativ-Kooperation' : 'New Collaboration Proposal'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        {t('modal.messageLabel')}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('modal.messagePlaceholder')}
                        className="w-full px-3.5 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:border-neutral-900 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium tracking-wide transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>{t('modal.submittingButton')}</span>
                        </>
                      ) : (
                        <>
                          <span>{t('modal.submitButton')}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
