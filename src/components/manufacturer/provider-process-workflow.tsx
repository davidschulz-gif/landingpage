'use client'

import React, { useState, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  Mail,
  CloudUpload,
  Layers,
  Sparkles,
  Grid,
  CheckCircle2,
  Clock,
  Globe,
  Check,
  Building2,
  X,
} from 'lucide-react'
import { appUrl } from '@/lib/constants'

interface ProviderProcessWorkflowProps {
  isPublic?: boolean
}

export function ProviderProcessWorkflow({
  isPublic = true,
}: ProviderProcessWorkflowProps) {
  const t = useTranslations('provider')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [activeStep, setActiveStep] = useState<number>(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  // Auto-cycle steps smoothly in preview mode
  useEffect(() => {
    if (!isPublic || !isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 7 ? 1 : prev + 1))
    }, 3600)

    return () => clearInterval(interval)
  }, [isPublic, isAutoPlaying])

  const handlePublicAction = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    setShowAuthModal(true)
  }

  const stepPills = [
    { num: 1, title: t('workflow.step1.title') },
    { num: 2, title: t('workflow.step2.title') },
    { num: 3, title: t('workflow.step3.title') },
    { num: 4, title: t('workflow.step4.title') },
    { num: 5, title: t('workflow.step5.title') },
    { num: 6, title: t('workflow.step6.title') },
    { num: 7, title: t('workflow.step7.title') },
  ]

  return (
    <div className="w-full font-sans text-[#0F172A]">
      {/* ── Public Auth Modal ── */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl border border-slate-100 text-left">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors p-1 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {t('process.publicNotice.title')}
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {t('process.publicNotice.desc')}
            </p>
            <div className="space-y-2.5">
              <a
                href={`${appUrl}/provider/signup`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-black text-white text-sm font-medium transition-all shadow-sm"
              >
                {t('process.publicNotice.createAccount')}
                <ArrowRight size={16} />
              </a>
              <a
                href={`${appUrl}/provider/login`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-sm font-medium transition-all"
              >
                {t('process.publicNotice.signIn')}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Step Navigator Pills Bar ── */}
      <div className="mb-6 p-2 rounded-xl bg-neutral-100/90 border border-neutral-200 backdrop-blur-xs">
        <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {stepPills.map((step) => {
            const isActive = activeStep === step.num
            const isPast = activeStep > step.num
            return (
              <button
                key={step.num}
                onClick={() => {
                  setActiveStep(step.num)
                  setIsAutoPlaying(false)
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-2xs scale-105'
                    : isPast
                    ? 'bg-neutral-200 text-black hover:bg-neutral-300'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:text-black border border-neutral-200'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-white text-black'
                      : isPast
                      ? 'bg-black text-white'
                      : 'bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {isPast ? '✓' : step.num}
                </span>
                <span className="hidden md:inline">{step.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── 7-Step Workflow List ── */}
      <section className="space-y-4">
        {/* ── STEP 01 ── */}
        <div
          onClick={() => {
            setActiveStep(1)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-2xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-2xs cursor-pointer ${
            activeStep === 1
              ? 'border-black ring-1 ring-black/10 bg-neutral-50/50 shadow-xs'
              : activeStep > 1
              ? 'border-neutral-300 bg-neutral-50/20'
              : 'border-neutral-200 hover:border-neutral-400'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-light tracking-tight text-black font-mono">
                01
              </span>
              <span className="w-2 h-2 rounded-full bg-black shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {t('process.tagYourStep')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step1Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step1Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shrink-0 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[#64748B] leading-snug">
                      {t('process.step1RightNote')}
                    </p>
                    <div className="pt-2">
                      {activeStep > 1 ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Check size={12} className="text-emerald-600" />
                          {t('process.badges.step1PaidApproved')}
                        </span>
                      ) : activeStep === 1 ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 animate-pulse">
                          <Clock size={12} className="text-amber-600 animate-spin" />
                          {t('process.badges.step1StartActive')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          {t('process.badges.step1Pending')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handlePublicAction}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 02 ── */}
        <div
          onClick={() => {
            setActiveStep(2)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 2
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : activeStep > 2
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 flex items-center gap-3 pt-1">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                02
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagYourStep')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {t('process.step2Title')}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mt-1">
                  {t('process.step2Desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.photo')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.pbr')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.surfaces')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.bimCad')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.catalogs')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.models3d')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.variants')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.specs')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.textures')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                  <span>{t('process.step2Bullets.epd')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div
                onClick={handlePublicAction}
                className="p-5 rounded-2xl bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] hover:border-[#94A3B8] transition-all cursor-pointer text-center group/upload relative overflow-hidden"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shadow-2xs group-hover/upload:scale-105 transition-transform mb-2.5">
                  <CloudUpload size={20} />
                </div>
                <h4 className="text-xs font-bold text-[#0F172A]">
                  {t('process.step2UploadTitle')}
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  {t('process.step2UploadSubtext')}
                </p>
                <p className="text-[10px] text-[#94A3B8] mt-2">
                  {t('process.step2UploadFormats')}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-center">
                  {activeStep > 2 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 size={12} />
                      {t('process.badges.step2CategoriesReady')}
                    </span>
                  ) : activeStep === 2 ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                      {t('process.badges.step2DataTransfer')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      {t('process.badges.step2UploadFiles')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 03 ── */}
        <div
          onClick={() => {
            setActiveStep(3)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 3
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : activeStep > 3
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                03
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagOurWork')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step3Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step3Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-2xs">
                    <Layers size={22} />
                  </div>
                  <div>
                    {activeStep > 3 ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={12} />
                        {t('process.badges.step3Standardized')}
                      </span>
                    ) : activeStep === 3 ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
                        {t('process.badges.step3AiStructuring')}
                      </span>
                    ) : (
                      <span className="text-xs text-[#64748B] font-medium">
                        {t('process.badges.step3Standardization')}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={handlePublicAction}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 04 ── */}
        <div
          onClick={() => {
            setActiveStep(4)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 4
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : activeStep > 4
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                04
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagOurWork')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step4Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step4Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="space-y-1">
                    <div className="aspect-square rounded-xl bg-slate-200 border border-slate-300 overflow-hidden relative shadow-2xs">
                      <img
                        src="/arch_davinci_travertine.jpg"
                        alt="Raw Material"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      {t('process.step4Tile1')}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="aspect-square rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center relative overflow-hidden shadow-2xs">
                      <div className="w-full h-full bg-gradient-to-tr from-purple-200 via-indigo-100 to-slate-200 flex items-center justify-center">
                        <Sparkles size={16} className="text-purple-600 animate-pulse" />
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      {t('process.step4Tile2')}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="aspect-square rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden shadow-2xs">
                      <img
                        src="/architectural_building_render.jpg"
                        alt="AI Ready"
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      {t('process.step4Tile3')}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-center">
                  {activeStep > 4 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 size={12} />
                      {t('process.badges.step4Integrated')}
                    </span>
                  ) : activeStep === 4 ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200 animate-pulse">
                      <Sparkles size={12} className="text-purple-600 animate-spin" />
                      {t('process.badges.step4PbrActive')}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500 font-medium">
                      {t('process.badges.step4Indexing')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 05 ── */}
        <div
          onClick={() => {
            setActiveStep(5)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 5
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : activeStep > 5
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                05
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagOurWork')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step5Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step5Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                    <Grid size={13} className="text-slate-500" />
                    {t('process.step5LibraryTitle')}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      activeStep > 5
                        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                        : activeStep === 5
                        ? 'text-indigo-700 bg-indigo-50 border border-indigo-200 animate-pulse'
                        : 'text-slate-500 bg-slate-100'
                    }`}
                  >
                    {activeStep > 5
                      ? t('process.badges.step5Findable')
                      : activeStep === 5
                      ? t('process.badges.step5LiveArchitects')
                      : t('process.badges.step5Library')}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  <div className="aspect-square rounded-lg bg-slate-200 overflow-hidden border border-slate-300">
                    <img
                      src="/arch_davinci_travertine.jpg"
                      alt="Travertine Material tile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-200 overflow-hidden border border-slate-300">
                    <img
                      src="/arch_royal_cream.jpg"
                      alt="Royal Cream Material tile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-200 overflow-hidden border border-slate-300">
                    <img
                      src="/arch_pearl_grey.jpg"
                      alt="Pearl Grey Material tile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg bg-slate-200 overflow-hidden border border-slate-300">
                    <img
                      src="/concrete-texture-showcase.png"
                      alt="Concrete Surface tile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 06 ── */}
        <div
          onClick={() => {
            setActiveStep(6)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 6
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : activeStep > 6
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                06
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagTogether')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step6Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step6Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="space-y-2">
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-900 aspect-16/7 group/slider">
                  <img
                    src="/architectural_building_render.jpg"
                    alt="Review preview"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs ${
                        activeStep > 6
                          ? 'bg-emerald-500 text-white'
                          : activeStep === 6
                          ? 'bg-blue-600 text-white animate-pulse'
                          : 'bg-black/60 text-white'
                      }`}
                    >
                      {activeStep > 6
                        ? t('process.badges.step6TenderRecorded')
                        : activeStep === 6
                        ? t('process.badges.step6TendersCount')
                        : t('process.badges.step6Tender')}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-2xs">
                    <button
                      onClick={handlePublicAction}
                      className="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-[#0F172A] text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{t('process.step6ReviewButton')}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STEP 07 ── */}
        <div
          onClick={() => {
            setActiveStep(7)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 7
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 shadow-md translate-x-1'
              : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] font-mono">
                07
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {t('process.tagResult')}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A]">
                {t('process.step7Title')}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {t('process.step7Desc')}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shrink-0 shadow-2xs">
                      <Globe size={20} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-[#0F172A]">
                        {t('process.step7CardTitle')}
                      </h5>
                      <ul className="text-[11px] text-[#64748B] space-y-0.5">
                        <li className="flex items-center gap-1.5">
                          <Check size={12} className="text-emerald-600 shrink-0" />
                          <span>{t('process.step7Benefit1')}</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check size={12} className="text-blue-600 shrink-0" />
                          <span>{t('process.step7Benefit2')}</span>
                        </li>
                      </ul>
                      <div className="pt-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                            activeStep === 7
                              ? 'bg-indigo-50 text-indigo-800 border border-indigo-200 animate-pulse'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {activeStep === 7
                            ? t('process.badges.step7Interactions')
                            : t('process.badges.step7Analytics')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handlePublicAction}
                    className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Call To Action Banner ── */}
      <section className="mt-12">
        <div className="rounded-3xl bg-[#F1F5F9] border border-[#E2E8F0] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[11px] font-semibold tracking-widest text-[#64748B] uppercase">
              {t('process.bannerTag')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">
              {t('process.bannerTitle')}
            </h2>
          </div>
          <div className="shrink-0">
            <button
              onClick={handlePublicAction}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-black text-white text-sm font-semibold transition-all shadow-md hover:scale-[1.01] cursor-pointer"
            >
              <span>{t('process.bannerCTA')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ProviderProcessWorkflow