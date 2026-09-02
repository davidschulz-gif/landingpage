'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ViewerShowcase } from '@/components/research-viewers/viewer-showcase'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cpu,
  Layers,
  Sparkles,
  Users,
  Database,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Megaphone,
  ShoppingCart,
  Zap,
  Building2,
  FileCheck,
  Trophy,
  Target,
  ExternalLink,
  Handshake,
  Settings,
  Tag,
  Coins,
  Gift,
  Library,
  Brain,
  LayoutGrid,
  Box,
  Plus,
  Play
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

export default function ResearchProjectsPage() {
  const locale = useLocale()
  const t = useTranslations('ResearchPage')
  const isDe = locale === 'de'

  return (
    <div className="relative w-full bg-[#fcfcfd] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white">
      <NavbarDemo />

      <main className="max-w-[1500px] mx-auto px-4 md:px-8 space-y-28 pt-32 pb-24">

        {/* SLIDE 1 SECTION: HERO BRAND & ACTIVE USERS */}
        <section className="py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center justify-center text-center space-y-10"
          >
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/typus_hero_logo.png"
                alt="TYPUS.AI"
                width={360}
                height={110}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain dark:invert"
                priority
              />
            </div>

            {/* Active Users Badge */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white stroke-[1.5]" />
              <p
                className="subheading-primary text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <Link href={`/${locale}`} className="text-[#0086bf] hover:underline font-medium">
                  TYPUS.AI
                </Link>{' '}
                {t('slide1.activeUsers')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 5 SECTION: JUPITER SUPERCOMPUTER ARTICLE */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full space-y-10"
          >
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <span
                className="text-xs uppercase text-emerald-600 dark:text-emerald-400 tracking-widest font-bold block"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.badge')}
              </span>
              <h3
                className="heading-primary"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {t('slide5.title')}
              </h3>
              <p
                className="subheading-primary text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.subtitle')}
              </p>
              <div
                className="text-xs text-neutral-400 pt-1"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide5.dateAuthor')}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 max-w-6xl mx-auto w-full shadow-lg">
              <div className="aspect-[16/9] w-full relative">
                <Image
                  src="/jupiter_inauguration.jpg"
                  alt="Feierliche Einweihung des Supercomputers JUPITER am Forschungszentrum Jülich"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                
                <div
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white text-xs tracking-wider bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 font-bold"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  {t('slide5.tag')}
                </div>

                <div
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-xs text-neutral-300 bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-md"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide5.caption')}
                </div>
              </div>
            </div>

            <div
              className="flex justify-center text-xs md:text-sm"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              <Link
                href="https://www.golem.de/news/supercomputer-jupiter-eingeweiht-europaeisch-ist-hochleistungsrechnen-richtig-gedacht-2509-199789.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 underline flex items-center gap-2"
              >
                <span>{t('slide5.source')}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7B SECTION: PROF. DR. LEIF KOBBELT SCIENTIFIC VIDEO LECTURES */}
        <section className="py-12 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full space-y-12"
          >
            {/* Prof. Dr. Leif Kobbelt Cooperation Card placed above videos (Compact) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-2.5 max-w-xl mr-auto">
              <div
                className="text-[11px] sm:text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide7.coopLabel')}
              </div>
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-xl bg-black text-white flex-shrink-0">
                  <Image src="/cube_mesh_icon.png" alt="Cube Mesh Icon" width={28} height={28} className="w-6 h-6 object-contain" />
                </div>
                <div className="space-y-0.5">
                  <h4
                    className="heading-primary text-base sm:text-lg md:text-xl"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.professorName')}
                  </h4>
                  <p
                    className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.professorTitle')}
                  </p>
                </div>
              </div>
            </div>

            {/* 2-Column Responsive Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Video 1 Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black relative shadow-xs">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/_IZowy8X29c"
                      title={t('videoSlide.video1Title')}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <div
                      className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      RWTH AACHEN VORTRAG
                    </div>
                    <h4
                      className="subheading-primary"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video1Title')}
                    </h4>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video1Desc')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="https://www.youtube.com/watch?v=_IZowy8X29c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline font-bold"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <span>Auf YouTube ansehen</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Video 2 Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 relative shadow-xs group">
                    <Link
                      href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full block relative"
                    >
                      <Image
                        src="https://img.youtube.com/vi/-Ts-IGJiIGI/hqdefault.jpg"
                        alt={t('videoSlide.video2Title')}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl transition transform group-hover:scale-110">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div
                      className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      DFG LEIBNIZ-PREIS PORTRÄT
                    </div>
                    <h4
                      className="subheading-primary "
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video2Title')}
                    </h4>
                    <p
                      className=" text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('videoSlide.video2Desc')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="https://www.youtube.com/watch?v=-Ts-IGJiIGI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-[#0086bf] hover:underline font-bold"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <span>Auf YouTube ansehen</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 2 SECTION: BDBAU MEMBERSHIP */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full space-y-12"
          >
            <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center text-center">
              <div className="w-full h-80 sm:h-96 md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 relative bg-white dark:bg-neutral-900 shadow-xs flex items-center justify-center p-4">
                <Image
                  src="/research_bdbau_directory.png"
                  alt="Bundesverband Digitales Bauwesen - Typus.AI Mitgliedschaft Directory"
                  width={700}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>

              <p
                className="subheading-primary text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                <Link href={`/${locale}`} className="text-[#0086bf] hover:underline font-medium">
                  TYPUS.AI
                </Link>{' '}
                {t('slide2.bdbauDesc')}
              </p>

              <div className="flex items-center justify-center gap-5 pt-4">
                <Image src="/bdbau.png" alt="Bundesverband Digitales Bauwesen" width={450} height={200} className="h-28 sm:h-36 md:h-44 w-auto object-contain dark:invert" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 3 SECTION: MEDIA & PRESS LOGOS */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full space-y-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 items-center justify-center py-4">
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/konferenzen-logo.png" alt="FAZ Konferenzen" width={220} height={80} className="h-14 md:h-18 w-auto object-contain dark:invert" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/dab_logo.png" alt="Deutsches Architektenblatt" width={240} height={90} className="h-14 md:h-18 w-auto object-contain invert dark:invert-0" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/80sek_black.png" alt="Neues Bauen 80 Sekunden" width={260} height={100} className="h-14 md:h-18 w-auto object-contain dark:invert" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/baunetz_logo.png" alt="BauNetz" width={220} height={80} className="h-14 md:h-18 w-auto object-contain dark:invert" />
              </div>
            </div>

            <p
              className="subheading-primary text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              {t('slide3.desc')}
            </p>
          </motion.div>
        </section>

        {/* SLIDE 4 SECTION: EU & NRW STATE FUNDING (ULTRA COMPACT LOGOS) */}
        <section className="py-2.5 sm:py-3 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full space-y-2 sm:space-y-3 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-1">
              <Image
                src={locale === 'de' ? '/eu-kofinanziert-von-der-europaeischen-union.png' : '/eu-kofinanziert-von-der-europaeischen-union-en.png'}
                alt="Kofinanziert von der Europäischen Union"
                width={200}
                height={50}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
              <Image
                src="/Logo_MWIKE.jpg"
                alt="Ministerium für Wirtschaft, Industrie, Klimaschutz und Energie NRW"
                width={200}
                height={50}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>

            <p
              className="subheading-primary text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              {t('slide4.desc')}
            </p>
          </motion.div>
        </section>

        {/* SLIDE 6 SECTION: GEFÖRDERT & WISSENSCHAFTLICH BEGLEITET */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full space-y-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h3
                  className="heading-primary"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {t('slide6.title')}
                </h3>

                <div className="space-y-4 text-xs md:text-sm">
                  {/* EFRE / JTF NRW Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-4">
                      <Image src="/logo_efre_jtf.png" alt="EFRE JTF NRW 2021-27" width={180} height={70} className="h-12 sm:h-14 w-auto object-contain" />
                      <div
                        className="text-neutral-900 dark:text-white hidden sm:block font-bold text-xs md:text-sm"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide6.efreTitle')}
                      </div>
                    </div>
                    <span
                      className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.statusApproved')}
                    </span>
                  </div>

                  {/* Fortissimo Plus Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Image src="/logo_ffplus_card.png" alt="FORTISSIMO PLUS" width={120} height={55} className="h-11 sm:h-13 w-auto object-contain" />
                        <div
                          className="text-neutral-900 dark:text-white font-bold text-xs md:text-sm"
                          style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                        >
                          {t('slide6.ffplusTitle')}
                        </div>
                      </div>
                      <span
                        className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
                        style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide6.statusApproved')}
                      </span>
                    </div>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.ffplusDesc')}
                    </p>
                  </div>

                  {/* Kooperationen & Partner Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-4 shadow-xs">
                    <div
                      className="uppercase text-xs tracking-wider text-purple-600 dark:text-purple-400 font-bold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.partnerTitle')}
                    </div>
                    
                    <div className="flex items-center gap-6 flex-wrap">
                      <Image src="/logo_dfki.png" alt="DFKI German Research Center for AI" width={160} height={50} className="h-10 md:h-12 w-auto object-contain" />
                      <Image src="/logo_concular.png" alt="Concular" width={120} height={50} className="h-10 md:h-12 w-auto object-contain" />
                      <Image src="/logo_zukunft_bau.png" alt="Zukunft Bau" width={160} height={50} className="h-9 md:h-11 w-auto object-contain" />
                      <Image src="/logo_kmu_innovativ.png" alt="KMU-innovativ" width={160} height={50} className="h-9 md:h-11 w-auto object-contain" />
                    </div>

                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-3"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.partnerDesc')} &bull; <span className="text-neutral-500 font-bold">{t('slide6.deadline')}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: JUPITER Supercomputer Rack Photo (Bigger Container) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-lg h-[500px] sm:h-[600px] md:h-[680px] lg:h-[720px]">
                  <Image
                    src="/jupiter_rack_photo.png"
                    alt="JUPITER High-Performance Supercomputer Racks at Forschungszentrum Jülich"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                  
                  <div
                    className="absolute top-4 right-4 text-xs text-white bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 font-bold uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide6.rackTag')}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <div
                      className="text-4xl md:text-5xl font-black text-white tracking-widest"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.rackTitle')}
                    </div>
                    <p
                      className="text-xs md:text-sm text-neutral-300"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide6.rackSubtitle')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7 SECTION: PRODUCTS IN THE AI MODEL */}
        <section className="py-12 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-8">
                <h3
                  className="heading-primary"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
                >
                  {t('slide7.title')}
                </h3>

                <div className="space-y-4">
                  <div
                    className="text-sm sm:text-base uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.badge')}
                  </div>
                  <p
                    className="subheading-primary text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide7.desc')}
                  </p>
                </div>
              </div>

              {/* Right Column: Pure Architectural House Building Render Image (Bigger) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-lg h-[450px] sm:h-[580px] md:h-[640px] lg:h-[680px]">
                  <Image
                    src="/architectural_building_render.png"
                    alt="Fotorealistische Fassaden- & Materialvisualisierung - Modern Building Architecture Render"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

       

        {/* SLIDE 8 SECTION: MATERIAL CATALOG TO PLANNING */}
        <section className="py-12 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full space-y-12"
          >
            <div className="space-y-3">
              <span
                className="text-sm sm:text-base uppercase text-blue-600 dark:text-blue-400 font-bold tracking-widest block"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide8.badge')}
              </span>
              <h3
                className="heading-primary"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {t('slide8.title')}
              </h3>
              <p
                className="subheading-primary text-base md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
                style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
              >
                {t('slide8.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column (Checklist & Ihr Vorteil) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200 font-medium"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{t(`slide8.checklist.${idx}`)}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className="text-xs text-black dark:text-white uppercase tracking-wider font-bold block"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide8.advantageBadge')}
                    </span>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide8.advantageDesc')}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5">
                    <Image src="/cube_mesh_icon.png" alt="3D Cube Icon" width={24} height={24} className="w-5 h-5 object-contain invert dark:invert-0" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className="text-xs text-black dark:text-white uppercase tracking-wider font-bold block"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide8.workflowBadge')}
                    </span>
                    <p
                      className="subheading-primary text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide8.workflowDesc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Laptop Material Catalog UI Image (MUCH LARGER) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl h-[480px] sm:h-[600px] md:h-[680px] lg:h-[750px] flex items-center justify-center p-2">
                  <Image
                    src="/laptop_material_catalog.png"
                    alt="Digital Material Catalog UI on Laptop - Typus.AI Workflow"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Interactive Material & Texture Viewer Showcase */}
            <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
              <ViewerShowcase />
            </div>
          </motion.div>
        </section>

        {/* SLIDE 9 SECTION: ADVANTAGES AT A GLANCE (COMPACT) */}
        <section className="py-6 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full space-y-6"
          >
            <h3
              className="heading-primary"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('slide9.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {[
                { icon: Megaphone },
                { icon: ShoppingCart },
                { icon: Sparkles },
                { icon: Users },
                { icon: ShieldCheck }
              ].map((col, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs flex flex-col justify-between space-y-3.5 text-center hover:shadow-sm transition">
                  <col.icon className="w-6 h-6 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div className="space-y-1">
                    <div
                      className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t(`slide9.items.${idx}.num`)}
                    </div>
                    <div
                      className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t(`slide9.items.${idx}.title`)}
                    </div>
                  </div>
                  <p
                    className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t(`slide9.items.${idx}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SLIDE 10 SECTION: WAS SIE EINREICHEN KÖNNEN (ULTRA COMPACT & REDUCED HEIGHT) */}
        <section className="py-6 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full"
          >
            <div className="w-full rounded-3xl bg-neutral-950 text-white p-5 sm:p-6 md:p-8 border border-neutral-800 shadow-xl space-y-5 relative overflow-hidden">
              
              {/* Top Header Logos Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
                <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                  <div className="bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_ffplus.svg" alt="Fortissimo Plus" width={140} height={40} className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_eccc.svg" alt="ECCC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_eurohpc.svg" alt="EuroHPC" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                  <div className="bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_chipsju.svg" alt="Chips JU" width={140} height={40} className="h-5 sm:h-6 w-auto object-contain" />
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-neutral-800 pl-4 hidden sm:flex">
                  <div className="bg-white rounded-xl px-3.5 py-1.5 flex items-center justify-center shadow-xs">
                    <Image src="/logo/logo_rwth.svg" alt="RWTH Aachen University" width={160} height={40} className="h-6 sm:h-7 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Header Title & Subtitle */}
              <div className="space-y-1.5">
                <h3
                  className="heading-primary text-lg sm:text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-ft-calhern), sans-serif", color: 'white' }}
                >
                  {t('slide10.title')}
                </h3>
                <p
                  className="subheading-primary text-xs sm:text-sm md:text-base text-neutral-300 leading-snug"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif", color: '#d4d4d4' }}
                >
                  {t('slide10.subtitle')}
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
                {/* Left Column: 4 Feature Boxes + Quote Banner */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {[
                      { icon: LayoutGrid, titleKey: 'slide10.inputs.0.title', descKey: 'slide10.inputs.0.desc' },
                      { icon: Layers, titleKey: 'slide10.inputs.1.title', descKey: 'slide10.inputs.1.desc' },
                      { icon: Box, titleKey: 'slide10.inputs.2.title', descKey: 'slide10.inputs.2.desc' },
                      { icon: FileCheck, titleKey: 'slide10.inputs.3.title', descKey: 'slide10.inputs.3.desc' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center gap-3 hover:border-neutral-700 transition"
                      >
                        <div className="p-1.5 rounded-md bg-neutral-800 text-neutral-300 flex-shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div
                            className="subheading-primary text-xs sm:text-sm font-bold text-white"
                            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                          >
                            {t(item.titleKey)}
                          </div>
                          <div
                            className="subheading-primary text-[11px] sm:text-xs text-neutral-400"
                            style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                          >
                            {t(item.descKey)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Quote Notice Box with Neutral Accent */}
                  <div
                    className="p-2.5 sm:p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-300 leading-snug font-medium"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <div className="p-1 rounded-md bg-neutral-800 text-neutral-300 flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      <strong className="text-white font-bold block mb-0.5 text-[11px]">QUALITÄTSHINWEIS:</strong>
                      {t('slide10.notice')}
                    </span>
                  </div>
                </div>

                {/* Right Column: Hero Material Render Image & 3 Key Badges */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                  <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-md h-[200px] sm:h-[240px] md:h-[270px] lg:h-[290px]">
                    <Image
                      src="/material_samples_showcase.png"
                      alt="Digital Material Samples Showcase - High Resolution PBR"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom 3 Standards Badges */}
                  <div
                    className="grid grid-cols-3 gap-2 text-center"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-0.5">
                      <Database className="w-3.5 h-3.5 text-neutral-300 mx-auto" />
                      <div className="text-white text-[11px] sm:text-xs font-bold">{t('slide10.badge1.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge1.subtitle')}</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-0.5">
                      <Building2 className="w-3.5 h-3.5 text-neutral-300 mx-auto" />
                      <div className="text-white text-[11px] sm:text-xs font-bold">{t('slide10.badge2.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge2.subtitle')}</div>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 space-y-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-300 mx-auto" />
                      <div className="text-white text-[11px] sm:text-xs font-bold">{t('slide10.badge3.title')}</div>
                      <div className="text-neutral-400 text-[10px]">{t('slide10.badge3.subtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer EU FFplus Funding Tag */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
                    Gefördert im FFplus Programm der Europäischen Union
                  </span>
                </div>
                <div className="text-neutral-600 font-mono text-[10px] hidden sm:block">
                  FFPLUS × TYPUS.AI
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SLIDE 11 SECTION: WHAT PARTICIPATION INCLUDES (COMPACT) */}
        <section className="py-6 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="w-full space-y-6"
          >
            <h3
              className="heading-primary"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {t('slide11.title')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              {/* Card 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between text-center hover:shadow-sm transition">
                <div className="space-y-3">
                  <Handshake className="w-7 h-7 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div
                    className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card1Title')}
                  </div>
                </div>
                <p
                  className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card1Desc')}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between text-center hover:shadow-sm transition">
                <div className="space-y-3">
                  <Settings className="w-7 h-7 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div
                    className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card2Title')}
                  </div>
                </div>
                <p
                  className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card2Desc')}
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-sm transition">
                <div className="space-y-3 text-center">
                  <Tag className="w-7 h-7 text-blue-600 dark:text-blue-400 mx-auto stroke-[1.5]" />
                  <div
                    className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card3Title')}
                  </div>
                </div>
                <ul
                  className="subheading-primary text-[10px] sm:text-[11px] text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-3.5 text-left leading-snug"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {[0, 1, 2, 3].map((idx) => (
                    <li key={idx}>{t(`slide11.card3List.${idx}`)}</li>
                  ))}
                </ul>
              </div>

              {/* Card 4 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between text-center hover:shadow-sm transition">
                <div className="space-y-3">
                  <Coins className="w-7 h-7 text-amber-500 mx-auto stroke-[1.5]" />
                  <div
                    className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card4Title')}
                  </div>
                </div>
                <p
                  className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug font-medium"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card4Desc')}
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between text-center hover:shadow-sm transition">
                <div className="space-y-3">
                  <Rocket className="w-7 h-7 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[1.5]" />
                  <div
                    className="subheading-primary text-xs sm:text-sm font-bold text-neutral-900 dark:text-white"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide11.card5Title')}
                  </div>
                </div>
                <p
                  className="subheading-primary text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-snug"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide11.card5Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 12 SECTION: INTEGRATION PACKAGES & PRICING (ULTRA COMPACT) */}
        <section className="py-6 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="w-full space-y-6 max-w-4xl mx-auto"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <h3 className="heading-primary" style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>
              {t('slide12.title')}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Main Package (5.000 €) */}
              <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-blue-500/40 dark:border-blue-500/50 shadow-xs space-y-4 relative overflow-hidden flex flex-col justify-between">
                <div
                  className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[9px] sm:text-[10px] uppercase tracking-widest rounded-bl-xl font-bold"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.recommendedBadge')}
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className="subheading-primary text-sm sm:text-base md:text-lg font-bold"
                        style={{ fontFamily: "var(--font-ft-calhern), 'Soyuz Grotesk', sans-serif" }}
                      >
                        {t('slide12.mainTitle')}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2.5 pt-0.5">
                    <span
                      className="text-2xl sm:text-3xl md:text-4xl font-normal text-black dark:text-white tracking-tight"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainPrice')}
                    </span>
                    <span
                      className="text-xs text-neutral-500 dark:text-neutral-400"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainVat')}
                    </span>
                  </div>

                  <div>
                    <span
                      className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/80 text-[10px] sm:text-[11px] uppercase tracking-wider rounded-md inline-block font-bold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.mainScope')}
                    </span>
                  </div>
                </div>

                {/* Feature List with Subtle Horizontal Divider Lines */}
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-xs">
                  {[Sparkles, FileCheck, Library, Brain, ShieldCheck].map((IconComp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 py-1.5 text-neutral-800 dark:text-neutral-200 first:pt-0 last:pb-0">
                      <IconComp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}>{t(`slide12.mainFeatures.${idx}`)}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Gift Box */}
                <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-neutral-950 border border-blue-100 dark:border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-800 dark:text-neutral-200">
                  <Gift className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong
                      className="text-blue-900 dark:text-blue-300 block uppercase tracking-wide text-[10px] sm:text-[11px]"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.bonusTitle')}
                    </strong>
                    <span
                      className="text-neutral-600 dark:text-neutral-400 block text-[10px] sm:text-[11px]"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.bonusDesc')}
                    </span>
                  </div>
                </div>

                <Link
                  href="/book-a-demo"
                  className="w-fit max-w-full mx-auto py-2 px-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs font-medium uppercase tracking-wide shadow-2xs"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.mainCta')}
                </Link>
              </div>

              {/* Single Product Alternative (1.000 €) */}
              <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs space-y-4 flex flex-col justify-between text-center">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <Box className="w-4 h-4" />
                  </div>

                  <div className="space-y-0.5">
                    <span
                      className="text-[9px] sm:text-[10px] uppercase text-blue-600 dark:text-blue-400 tracking-widest block font-bold"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altBadge')}
                    </span>
                    <h4
                      className="heading-primary text-sm sm:text-base md:text-lg font-bold"
                      style={{ fontFamily: "var(--font-ft-calhern), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altTitle')}
                    </h4>
                  </div>

                  <div className="pt-1.5 border-t border-neutral-100 dark:border-neutral-800">
                    <span
                      className="text-xl sm:text-2xl md:text-3xl font-normal text-black dark:text-white tracking-tight"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altPrice')}
                    </span>
                    <span
                      className="text-[11px] text-neutral-500 dark:text-neutral-400 block pt-0.5"
                      style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                    >
                      {t('slide12.altVat')}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 space-y-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </div>
                  <p
                    className="subheading-primary text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                  >
                    {t('slide12.altDesc')}
                  </p>
                </div>

                <Link
                  href="/book-a-demo"
                  className="w-fit max-w-full mx-auto py-2 px-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-center inline-block border border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 text-xs font-medium uppercase tracking-wide shadow-2xs"
                  style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
                >
                  {t('slide12.altCta')}
                </Link>
              </div>
            </div>

            {/* Bottom EU Funding Footer Badge */}
            <div
              className="flex items-center gap-4 text-sm md:text-base text-neutral-500 pt-6 border-t border-neutral-200 dark:border-neutral-800"
              style={{ fontFamily: "var(--font-soyuz-grotesk), 'Soyuz Grotesk', sans-serif" }}
            >
              <span className="w-6 h-6 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-xs flex-shrink-0">
                🇪🇺
              </span>
              <span>{t('slide12.euFunding')}</span>
            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <FooterSection />
    </div>
  )
}
