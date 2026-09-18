'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { appUrl } from '@/lib/constants'
import {
  Mail,
  CloudUpload,
  Layers,
  Sparkles,
  Globe,
  Building2,
  BarChart3,
  CheckCircle2,
  Clock,
  Check,
  ArrowRight,
  ChevronRight,
  FileText,
  ExternalLink,
} from 'lucide-react'

interface ResearchProcessWorkflowProps {
  locale?: string
}

export function ResearchProcessWorkflow({ locale = 'de' }: ResearchProcessWorkflowProps) {
  const isDe = locale.startsWith('de')
  const [activeStep, setActiveStep] = useState<number>(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  // Auto-cycle through steps every 4.2s
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 7 ? 1 : prev + 1))
    }, 4200)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const stepPills = [
    { num: 1, title: isDe ? 'Zahlung & Start' : 'Payment & Kick-off' },
    { num: 2, title: isDe ? 'Daten bereitstellen' : 'Provide Data' },
    { num: 3, title: isDe ? 'KI-Prüfung' : 'AI Verification' },
    { num: 4, title: isDe ? '3D Integration' : '3D Integration' },
    { num: 5, title: isDe ? 'Creator Live' : 'Creator Live' },
    { num: 6, title: isDe ? 'Ausschreibung' : 'Tendering' },
    { num: 7, title: isDe ? 'Analytics' : 'Analytics' },
  ]

  const bullets = [
    isDe ? 'Hochauflösende Produktfotos' : 'High-resolution product photos',
    isDe ? 'PBR-Materialdaten' : 'PBR material data',
    isDe ? 'Material- & Oberflächenaufnahmen' : 'Material & surface captures',
    isDe ? 'BIM- und CAD-Daten' : 'BIM & CAD files',
    isDe ? 'Kataloge und Produktvarianten' : 'Catalogs and product variants',
    isDe ? '3D-Modelle' : '3D models',
    isDe ? 'Farben, Formate, Strukturen' : 'Colors, formats, textures',
    isDe ? 'Technische Produktdatenblätter' : 'Technical data sheets',
    isDe ? 'Nahtlose / tilebare Texturen' : 'Seamless / tileable textures',
    isDe ? 'Optional: EPD / Nachhaltigkeit' : 'Optional: EPD / Sustainability',
  ]

  const signupUrl = `${appUrl}/provider/signup?language=${locale}`
  const loginUrl = `${appUrl}/provider/login?language=${locale}`

  return (
    <div
      className="w-full font-sans text-[#0F172A] my-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* ── Top Step Navigator Pills Bar ── */}
      <div className="mb-6 p-2 rounded-2xl bg-slate-100/90 dark:bg-neutral-900 border border-slate-200/90 dark:border-neutral-800 backdrop-blur-xs">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {stepPills.map((step) => {
            const isActive = activeStep === step.num
            const isPast = activeStep > step.num
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => {
                  setActiveStep(step.num)
                  setIsAutoPlaying(false)
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm scale-102'
                    : isPast
                    ? 'bg-emerald-100/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 hover:bg-emerald-200/80'
                    : 'bg-white dark:bg-neutral-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-neutral-700'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-white text-slate-900'
                      : isPast
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 dark:bg-neutral-700 text-slate-700 dark:text-slate-300'
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
      <div className="space-y-4 text-left">
        {/* ── STEP 01 ── */}
        <div
          onClick={() => {
            setActiveStep(1)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 1
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 1
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                01
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] dark:bg-white shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'IHR SCHRITT' : 'YOUR STEP'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'Auftrag bestätigen & Zahlung' : 'Confirm Order & Payment'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Bestätigen Sie unser Angebot per E-Mail und schließen Sie die Zahlung des Gesamtbetrags von 5.950 € (inkl. 19 % USt.) ab. Die Bearbeitung startet nach Eingang der Zahlung.'
                  : 'Confirm our offer via email and complete payment of the total amount of €5,950 (incl. 19% VAT). Processing starts upon receipt of payment.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shrink-0 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[#64748B] leading-snug">
                      {isDe
                        ? 'Keine separate Unterschrift erforderlich. Die Bestätigung per E-Mail gilt als verbindliche Annahme des Angebots.'
                        : 'No separate signature required. Confirmation by email serves as binding acceptance.'}
                    </p>
                    <div className="pt-2">
                      {activeStep > 1 ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Check size={12} className="text-emerald-600" />
                          {isDe ? 'Bezahlt & Freigegeben' : 'Paid & Approved'}
                        </span>
                      ) : activeStep === 1 ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 animate-pulse">
                          <Clock size={12} className="text-emerald-600" />
                          {isDe ? 'Projektstart aktiv' : 'Kick-off Active'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          {isDe ? 'Zahlung ausstehend' : 'Payment Pending'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <Link
                  href={signupUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
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
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 2
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 2
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3 flex items-center gap-3 pt-1">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                02
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] dark:bg-white shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'IHR SCHRITT' : 'YOUR STEP'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                  {isDe ? 'Produkt- & Materialdaten einreichen' : 'Submit Product & Material Data'}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mt-1">
                  {isDe
                    ? 'Stellen Sie uns Ihre verfügbaren Produkt- und Materialdaten zur Verfügung. Je vollständiger die Daten, desto besser können Ihre Produkte digital abgebildet werden.'
                    : 'Provide us with your available product and material data. The more complete the data, the better your products can be digitally represented.'}
                </p>
              </div>

              {/* 10 Bullets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1 text-xs text-[#334155] dark:text-neutral-300">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] dark:bg-neutral-400 shrink-0" />
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <Link
                href={signupUrl}
                target="_blank"
                className="block p-5 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border-2 border-dashed border-[#CBD5E1] dark:border-neutral-700 hover:border-[#94A3B8] transition-all cursor-pointer text-center group/upload relative overflow-hidden"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-center text-[#0F172A] dark:text-white shadow-2xs group-hover/upload:scale-105 transition-transform mb-2.5">
                  <CloudUpload size={20} />
                </div>
                <h4 className="text-xs font-bold text-[#0F172A] dark:text-white">
                  {isDe ? 'Ihre Daten hochladen' : 'Upload Your Data'}
                </h4>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  {isDe ? 'Dateien hier ablegen oder auswählen' : 'Drop files here or browse'}
                </p>
                <p className="text-[10px] text-[#94A3B8] mt-2">
                  {isDe ? 'Unterstützte Formate: JPG, PNG, PDF, ZIP, FBX, DWG ...' : 'Supported formats: JPG, PNG, PDF, ZIP, FBX, DWG ...'}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-200/80 dark:border-neutral-700 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    {isDe ? '8 Kategorien bereitgestellt' : '8 Categories Supported'}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ── STEP 03 ── */}
        <div
          onClick={() => {
            setActiveStep(3)
            setIsAutoPlaying(false)
          }}
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 3
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 3
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                03
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'UNSERE ARBEIT' : 'OUR WORK'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'Daten prüfen & strukturieren' : 'Review & Structure Data'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Wir prüfen die bereitgestellten Daten und strukturieren die Produkt- und Materialinformationen für die weitere Verarbeitung. Relevante Informationen werden standardisiert und für die digitale sowie KI-gestützte Nutzung aufbereitet.'
                  : 'We review the provided data and structure product and material information for further processing. Relevant details are standardized and prepared for digital and AI-powered usage.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shadow-2xs">
                    <Layers size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      {isDe ? 'Daten standardisiert & validiert' : 'Data Standardized & Validated'}
                    </span>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {isDe ? 'Automatische DIN/ISO-Prüfung' : 'Automated DIN/ISO validation'}
                    </p>
                  </div>
                </div>
                <Link
                  href={signupUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
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
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 4
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 4
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                04
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'UNSERE ARBEIT' : 'OUR WORK'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'Materialien digitalisieren & aufbereiten' : 'Digitize & Prepare Materials'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Ihre Materialien werden aufbereitet und als hochwertige, digital nutzbare Materialdatensätze angelegt. Dazu gehören optische Eigenschaften, PBR-Shader, Texturen und technische Parameter.'
                  : 'Your materials are processed and created as high-quality, digitally usable material data sets, including optical properties, PBR shaders, textures, and technical parameters.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shadow-2xs">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <Check size={12} className="text-emerald-600" />
                      {isDe ? '4K PBR Shader generiert' : '4K PBR Shader Generated'}
                    </span>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {isDe ? 'Fotorealistisch & Raytracing-Ready' : 'Photorealistic & Raytracing-Ready'}
                    </p>
                  </div>
                </div>
                <Link
                  href={signupUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
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
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 5
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 5
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                05
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'UNSERE ARBEIT' : 'OUR WORK'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'Im TYPUS Creator live schalten' : 'Go Live in TYPUS Creator'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Nach erfolgreicher Aufbereitung werden Ihre Materialien im TYPUS Creator veröffentlicht. Architekten und Designer können Ihre Materialien direkt in ihren 3D-Entwürfen und Visualisierungen verwenden.'
                  : 'After successful preparation, your materials are published in the TYPUS Creator. Architects and designers can directly use your materials in their 3D renderings.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shadow-2xs">
                    <Globe size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      {isDe ? 'Live für 15.000+ Architekten' : 'Live for 15,000+ Architects'}
                    </span>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {isDe ? 'Direkt im 3D Creator verfügbar' : 'Available directly in 3D Creator'}
                    </p>
                  </div>
                </div>
                <Link
                  href={signupUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
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
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 6
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : activeStep > 6
              ? 'border-emerald-200/90 bg-emerald-50/10'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                06
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'WIRKUNG' : 'IMPACT'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'In Architekturprojekten platziert werden' : 'Get Specified in Architectural Projects'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Ihre Produkte werden Teil realer Planungsprozesse. Architekten spezifizieren Ihre Materialien direkt in Leistungsverzeichnissen und Bemusterungsphasen.'
                  : 'Your products become part of real planning workflows. Architects specify your materials in bills of quantities and sampling stages.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shadow-2xs">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      {isDe ? 'In 14+ Ausschreibungen' : 'In 14+ Project Tenders'}
                    </span>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {isDe ? 'Direkte Bemusterungs-Anfragen' : 'Direct qualified sampling leads'}
                    </p>
                  </div>
                </div>
                <Link
                  href={signupUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
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
          className={`group rounded-3xl bg-white dark:bg-neutral-900 border transition-all duration-300 p-6 sm:p-8 shadow-xs cursor-pointer ${
            activeStep === 7
              ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/50 dark:bg-neutral-800/60 shadow-md'
              : 'border-[#E2E8F0] dark:border-neutral-800 hover:border-[#CBD5E1]'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-mono font-medium">
                07
              </span>
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#64748B] bg-transparent shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                {isDe ? 'WIRKUNG' : 'IMPACT'}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isDe ? 'Nutzung & Interaktionen auswerten' : 'Analyze Usage & Interactions'}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isDe
                  ? 'Verfolgen Sie über Ihr Hersteller-Dashboard, wie oft Ihre Materialien angesehen, in Projekten verwendet und von Planern heruntergeladen werden.'
                  : 'Track via your manufacturer dashboard how often your materials are viewed, used in projects, and downloaded by architects.'}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-neutral-800/80 border border-[#E2E8F0] dark:border-neutral-700 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-[#E2E8F0] dark:border-neutral-700 text-[#0F172A] dark:text-white shadow-2xs">
                    <BarChart3 size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      {isDe ? '+184 % Interaktionen' : '+184% Interactions'}
                    </span>
                    <p className="text-[11px] text-[#64748B] mt-1">
                      {isDe ? 'Live Analytics & Reporting aktiv' : 'Live Analytics & Reporting active'}
                    </p>
                  </div>
                </div>
                <Link
                  href={loginUrl}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchProcessWorkflow
