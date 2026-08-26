'use client'

import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { useLocale } from 'next-intl'
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
  Plus
} from 'lucide-react'

const PartnerHeaderLogos = () => (
  <div className="flex flex-wrap items-center justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-6 pt-2">
    <div className="flex items-center gap-6 md:gap-10 flex-wrap">
      <Image src="/logo_ffplus_hires.png" alt="Fortissimo Plus" width={200} height={80} className="h-10 md:h-12 w-auto object-contain invert dark:invert-0" />
      <Image src="/logo_eccc_hires.png" alt="ECCC European Cybersecurity Competence Centre" width={240} height={80} className="h-9 md:h-11 w-auto object-contain invert dark:invert-0" />
      <Image src="/logo_eurohpc_hires.png" alt="EuroHPC Joint Undertaking" width={260} height={80} className="h-9 md:h-11 w-auto object-contain invert dark:invert-0" />
      <Image src="/logo_chipsju_hires.png" alt="Chips JU" width={200} height={80} className="h-9 md:h-11 w-auto object-contain invert dark:invert-0" />
      <Image src="/logo_rwth_hires.png" alt="RWTH Aachen University" width={280} height={80} className="h-9 md:h-11 w-auto object-contain invert dark:invert-0" />
    </div>
  </div>
)

export default function ResearchProjectsPage() {
  const locale = useLocale()
  const isDe = locale === 'de'

  return (
    <div className="relative w-full bg-[#fcfcfd] dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-black selection:text-white">
      <NavbarDemo />

      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 pt-32 pb-20">

        {/* SLIDE 1 SECTION: HERO BRAND & ACTIVE USERS */}
        <section className="py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center justify-center text-center space-y-12"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              <div className="size-8 sm:size-10 md:size-12 bg-black dark:bg-white flex-shrink-0" />
              <span
                className="uppercase font-logo text-black dark:text-white text-4xl sm:text-5xl md:text-7xl font-normal tracking-[2.5px]"
                style={{ letterSpacing: '2.5px' }}
              >
                typus.AI
              </span>
            </div>

            {/* Active Users Badge */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white stroke-[1.5]" />
              <p className="subheading-primary text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
                <Link href={`/${locale}`} className="text-[#0086bf] hover:underline font-medium">
                  TYPUS.AI
                </Link>{' '}
                {isDe ? 'hat mehr als 2500 Aktive Nutzer' : 'has more than 2,500 active users'}
              </p>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 2 SECTION: DIGITAL INNOVATION AWARD & BDBAU MEMBERSHIP */}
        <section className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column: Digital Innovation Award 2024 */}
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="w-full h-64 sm:h-72  shadow-xs flex items-center justify-center p-2">
                  <Image
                    src="/research_award_nomination.png"
                    alt="Digitale Innovation Award 2024 Finalist Nomination - Tech in Construction"
                    width={500}
                    height={350}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="subheading-primary text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <Link href={`/${locale}`} className="text-[#0086bf] hover:underline font-medium">
                    TYPUS.AI
                  </Link>{' '}
                  {isDe
                    ? 'wurde bereits in der Pre-Seed-Phase als eines von vier Finalisten für den Digital Innovation Award 2024 ausgewählt. Der Preis wurde vom Bundesverband Digitales Bauwesen (BDBau) vergeben und würdigt herausragende technologische Innovationen in der Bauindustrie. Zudem wurden wir von Tech in Construction entsprechend anerkannt.'
                    : 'was selected during the pre-seed phase as one of four finalists for the Digital Innovation Award 2024 by the Federal Association of Digital Construction (BDBau). The award recognizes outstanding technological innovations in the construction industry. In addition, we were recognized by Tech in Construction.'}
                </p>
              </div>

              {/* Right Column: BDBau Membership */}
              <div className="space-y-6 flex flex-col justify-between h-full border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 pt-8 md:pt-0 md:pl-12">
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 relative bg-white dark:bg-neutral-900 shadow-xs flex items-center justify-center p-2">
                  <Image
                    src="/research_bdbau_directory.png"
                    alt="Bundesverband Digitales Bauwesen - Typus.AI Mitgliedschaft Directory"
                    width={500}
                    height={350}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="subheading-primary text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <Link href={`/${locale}`} className="text-[#0086bf] hover:underline font-medium">
                    TYPUS.AI
                  </Link>{' '}
                  {isDe
                    ? 'ist Mitglied im Bundesverband Digitales Bauwesen. Wir fühlen uns geehrt, zu den Start-ups in Deutschland zu gehören, die die Digitalisierung der Bauindustrie vorantreiben – und dabei als Vertreter im Bereich KI-gestützter Bildgenerierung zu wirken.'
                    : 'is a member of the Federal Association for Digital Construction. We are honored to be among the German start-ups driving the digitization of the construction industry as pioneers in AI-assisted image generation.'}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <Image src="/bdbau.png" alt="Bundesverband Digitales Bauwesen" width={140} height={50} className="h-10 w-auto object-contain" />
                </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center py-4">
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/konferenzen-logo.png" alt="FAZ Konferenzen" width={180} height={60} className="h-12 md:h-16 w-auto object-contain dark:invert" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/dab_logo.svg" alt="Deutsches Architektenblatt" width={180} height={60} className="h-14 md:h-18 w-auto object-contain dark:invert" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/80sek_black.png" alt="Neues Bauen 80 Sekunden" width={180} height={60} className="h-14 md:h-18 w-auto object-contain dark:invert" />
              </div>
              <div className="flex items-center justify-center p-4">
                <Image src="/logo/baunetz_logo.png" alt="BauNetz" width={180} height={60} className="h-12 md:h-14 w-auto object-contain dark:invert" />
              </div>
            </div>

            <p className="subheading-primary text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              {isDe
                ? 'Seither wurde die App in zahlreichen Fachzeitschriften publiziert und auf etablierten Messen vorgestellt.'
                : 'Since then, the app has been published in numerous trade journals and presented at established trade fairs.'}
            </p>
          </motion.div>
        </section>

        {/* SLIDE 4 SECTION: EU & NRW STATE FUNDING */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full space-y-10 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-4">
              <Image
                src={locale === 'de' ? '/eu-kofinanziert-von-der-europaeischen-union.png' : '/eu-kofinanziert-von-der-europaeischen-union-en.png'}
                alt="Kofinanziert von der Europäischen Union"
                width={320}
                height={90}
                className="h-16 md:h-20 w-auto object-contain"
              />
              <Image
                src="/Logo_MWIKE.jpg"
                alt="Ministerium für Wirtschaft, Industrie, Klimaschutz und Energie NRW"
                width={320}
                height={90}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            <p className="subheading-primary text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              {isDe
                ? '2025 wurde ein Förderantrag für eine Kofinanzierung durch das EFRE/JTF-Programm NRW 2021-2027 bewilligt. Europa für Regionale Entwicklung.'
                : 'In 2025, a funding application for co-financing through the EFRE/JTF NRW 2021-2027 program was approved. Europe for Regional Development.'}
            </p>
          </motion.div>
        </section>

        {/* SLIDE 5 SECTION: JUPITER SUPERCOMPUTER ARTICLE */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full space-y-8"
          >
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-widest font-bold">
                SUPERCOMPUTER JUPITER EINGEWEIHT
              </span>
              <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white leading-tight">
                Europäisch ist Hochleistungsrechnen richtig gedacht
              </h3>
              <p className="subheading-primary text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                Am Forschungszentrum Jülich ist der neue Supercomputer eingeweiht worden. Er ist ein europäisches System – und das ist auch für die deutsche Forschung gut.
              </p>
              <div className="text-xs font-mono text-neutral-400 pt-1">
                5. September 2025 um 15:36 Uhr / Von Johannes Hiltscher
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 max-w-4xl mx-auto w-full shadow-md">
              <div className="aspect-[16/9] w-full relative">
                <Image
                  src="/jupiter_inauguration.jpg"
                  alt="Feierliche Einweihung des Supercomputers JUPITER am Forschungszentrum Jülich"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white font-bold text-xs tracking-wider font-mono bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  JÜLICH FORSCHUNGSZENTRUM
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-[11px] font-mono text-neutral-300 bg-black/60 px-3 py-1 rounded-md backdrop-blur-md">
                  Bild: Forschungszentrum Jülich / Ralf-Udo Thiele
                </div>
              </div>
            </div>

            <div className="flex justify-center text-xs font-mono">
              <Link
                href="https://www.golem.de/news/supercomputer-jupiter-eingeweiht-europaeisch-ist-hochleistungsrechnen-richtig-gedacht-2509-199789.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 underline flex items-center gap-1.5"
              >
                <span>Quelle: golem.de / supercomputer-jupiter-eingeweiht</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
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
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
                  Gefördert und wissenschaftlich begleitet
                </h3>

                <div className="space-y-4 text-xs md:text-sm">
                  {/* EFRE / JTF NRW Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between gap-4 shadow-xs">
                    <div className="flex items-center gap-4">
                      <Image src="/logo_efre_jtf.png" alt="EFRE JTF NRW 2021-27" width={160} height={60} className="h-10 w-auto object-contain" />
                      <div className="font-bold text-neutral-900 dark:text-white hidden sm:block">EFRE / JTF NRW 2021–27</div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-lg text-[11px] font-mono font-bold">bewilligt</span>
                  </div>

                  {/* Fortissimo Plus Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Image src="/logo_ffplus_card.png" alt="FORTISSIMO PLUS" width={100} height={50} className="h-10 w-auto object-contain" />
                        <div className="font-bold text-neutral-900 dark:text-white">FORTISSIMO PLUS (FFplus)</div>
                      </div>
                      <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 rounded-lg text-[11px] font-mono font-bold">bewilligt</span>
                    </div>
                    <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400">
                      Kooperation mit dem RWTH Aachen AI Center / Lehrstuhl für Computergraphik, Prof. Dr. rer. nat. Leif Kobbelt
                    </p>
                  </div>

                  {/* Kooperationen & Partner Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-4 shadow-xs">
                    <div className="font-bold uppercase text-xs tracking-wider text-purple-600 dark:text-purple-400 font-mono">Kooperationen & Partner</div>
                    
                    <div className="flex items-center gap-5 flex-wrap">
                      <Image src="/logo_dfki.png" alt="DFKI German Research Center for AI" width={140} height={45} className="h-9 w-auto object-contain" />
                      <Image src="/logo_concular.png" alt="Concular" width={100} height={45} className="h-9 w-auto object-contain" />
                      <Image src="/logo_zukunft_bau.png" alt="Zukunft Bau" width={140} height={45} className="h-8 w-auto object-contain" />
                      <Image src="/logo_kmu_innovativ.png" alt="KMU-innovativ" width={140} height={45} className="h-8 w-auto object-contain" />
                    </div>

                    <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-3">
                      Lehrstuhl Bauinformatik, RWTH Aachen (Prof. Blankenbach) &bull; <span className="font-mono text-neutral-500">Einreichfrist: 15. Oktober</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: JUPITER Supercomputer Rack Photo */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md h-80 sm:h-96">
                  <Image
                    src="/jupiter_rack_photo.png"
                    alt="JUPITER High-Performance Supercomputer Racks at Forschungszentrum Jülich"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                  
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                    SUPERCOMPUTER RACKS
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-widest">
                      JUPITER
                    </div>
                    <p className="text-xs text-neutral-300 font-mono">
                      High-Performance AI-Factory Cluster Jülich × RWTH Aachen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 7 SECTION: PRODUCTS IN THE AI MODEL */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
                  Ihre Produkte werden Teil des KI-Modells
                </h3>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">FFplus × RWTH Aachen</div>
                    <p className="subheading-primary text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Wir entwickeln gemeinsam anwendungsspezifische KI-Modelle für Architekturvisualisierungen und trainieren diese auf JUPITER, einem europäischen AI-Factory-Supercomputer am Forschungszentrum Jülich.
                    </p>
                  </div>
                  {/* Material Swatches Grid Image */}
                  <div className="w-28 h-44 sm:w-32 sm:h-48 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 flex-shrink-0 shadow-xs relative bg-white dark:bg-neutral-900 p-1.5">
                    <Image
                      src="/material_swatches_grid.png"
                      alt="Material Textures Swatches Grid"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">In Kooperation mit</div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-black text-white flex-shrink-0 mt-0.5">
                      <Image src="/cube_mesh_icon.png" alt="Cube Mesh Icon" width={32} height={32} className="w-7 h-7 object-contain" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="heading-primary text-base text-black dark:text-white">Prof. Dr. rer. nat. Leif Kobbelt</h4>
                      <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400">
                        Universitätsprofessor, Lehrstuhl für Computergraphik, Geometrie und Multimedia (Informatik 8), Instituts- und Lehrstuhlleitung RWTH Aachen University
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Pure Architectural House Building Render Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md h-80 sm:h-96">
                  <Image
                    src="/architectural_building_render.png"
                    alt="Fotorealistische Fassaden- & Materialvisualisierung - Modern Building Architecture Render"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 8 SECTION: MATERIAL CATALOG TO PLANNING */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-bold">03</span>
              <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
                Vom Materialkatalog in die Planung
              </h3>
              <p className="subheading-primary text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                Ihre Produkte werden direkt in den digitalen Planungsprozess integriert.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (Checklist & Ihr Vorteil) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-4">
                  {[
                    'Materialien in der Entwurfsphase auswählen',
                    'Reale Texturen und Oberflächen visualisieren',
                    'Produkte direkt in Architekturvisualisierungen einsetzen',
                    'Materialien frühzeitig mit konkreten Bauvorhaben verknüpfen'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider font-mono">Ihr Vorteil</span>
                    <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400">
                      Ihr Produkt wird nicht erst bei der Ausschreibung sichtbar, sondern bereits während der ersten Entwurfsentscheidung.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5">
                    <Image src="/cube_mesh_icon.png" alt="3D Cube Icon" width={24} height={24} className="w-5 h-5 object-contain invert dark:invert-0" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider font-mono">Direkt im Workflow</span>
                    <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400">
                      Ihre Materialien stehen Planenden in allen Phasen zur Verfügung – vom Entwurf bis zur Visualisierung.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Laptop Material Catalog UI Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs h-72 sm:h-80 flex items-center justify-center p-3">
                  <Image
                    src="/laptop_material_catalog.png"
                    alt="Digital Material Catalog UI on Laptop - Typus.AI Workflow"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 9 SECTION: ADVANTAGES AT A GLANCE */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
              Ihre Vorteile auf einen Blick
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { num: '01', title: 'Frühe Produktpräsenz', desc: 'Sichtbarkeit bereits in der Entwurfsphase.', icon: Megaphone },
                { num: '02', title: 'Digitaler Vertriebskanal', desc: 'Direkt im Planungsworkflow integriert.', icon: ShoppingCart },
                { num: '03', title: 'KI-basierte Produktvisualisierung', desc: 'Reale Produkte in generativen Visualisierungen.', icon: Sparkles },
                { num: '04', title: 'Zugang zu Architekt:innen', desc: 'Direkter Kontakt zu einer wachsenden Nutzergruppe.', icon: Users },
                { num: '05', title: 'Zukunftssichere Datenbasis', desc: 'Für BIM-, KI- und Visualisierungsworkflows.', icon: ShieldCheck }
              ].map((col, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-6 text-center hover:shadow-md transition">
                  <col.icon className="w-8 h-8 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div className="space-y-1">
                    <div className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400">{col.num}</div>
                    <div className="heading-primary text-sm text-black dark:text-white">{col.title}</div>
                  </div>
                  <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SLIDE 10 SECTION: WHAT YOU CAN SUBMIT */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <div className="space-y-2">
              <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
                Was Sie einreichen können
              </h3>
              <p className="subheading-primary text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                Hochwertige, digitalisierte Materialdaten als Basis für realitätsnahe KI-Modelle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (Input Types List) */}
              <div className="lg:col-span-6 space-y-4">
                {[
                  { icon: Building2, title: 'Hochauflösende Texturen', desc: 'Nahtlose, fotorealistische Materialtexturen' },
                  { icon: Layers, title: 'Oberflächenmaterialien', desc: 'für Wand, Decke und Fassade' },
                  { icon: Database, title: 'Produktvarianten und relevante Oberflächen', desc: 'Verschiedene Oberflächen- & Farbvarianten' },
                  { icon: FileCheck, title: 'Vorhandene digitale Produktdaten', desc: 'z. B. BIM- oder CAD-Daten, PBR-Maps' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="heading-primary text-sm text-black dark:text-white">{item.title}</div>
                      <div className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}

                {/* Quality Notice Box */}
                <div className="p-4 rounded-3xl bg-blue-50/60 dark:bg-neutral-900 border border-blue-100 dark:border-neutral-800 flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Je besser die digitalen Materialdaten, desto präziser können Ihre Produkte später visualisiert werden.</span>
                </div>
              </div>

              {/* Right Column: Material Samples Showcase Image & 3 Standards Badges */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs h-72 sm:h-80 flex items-center justify-center p-3">
                  <Image
                    src="/material_samples_showcase.png"
                    alt="Digital Material Samples Showcase - High Resolution PBR"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Bottom 3 Standards Badges */}
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-1">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto" />
                    <div className="text-black dark:text-white font-bold text-[11px]">Digital.</div>
                    <div className="text-neutral-500 text-[10px]">Standardisiert.</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-1">
                    <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <div className="text-black dark:text-white font-bold text-[11px]">Planungsgerecht.</div>
                    <div className="text-neutral-500 text-[10px]">BIM-ready.</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-1">
                    <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 mx-auto" />
                    <div className="text-black dark:text-white font-bold text-[11px]">Zukunftsfähig.</div>
                    <div className="text-neutral-500 text-[10px]">Nachhaltig.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 11 SECTION: WHAT PARTICIPATION INCLUDES */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
              Was die Teilnahme beinhaltet
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between text-center hover:shadow-md transition">
                <div className="space-y-4">
                  <Handshake className="w-9 h-9 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div className="heading-primary text-sm font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    Sie stellen bereit
                  </div>
                </div>
                <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Digitale Materialproben und relevante Produktdaten.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between text-center hover:shadow-md transition">
                <div className="space-y-4">
                  <Settings className="w-9 h-9 text-neutral-800 dark:text-neutral-200 mx-auto stroke-[1.5]" />
                  <div className="heading-primary text-sm font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    Wir übernehmen
                  </div>
                </div>
                <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Aufbereitung, Integration und technische Anbindung der Daten an unsere Plattform und das KI-Modell.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition">
                <div className="space-y-4 text-center">
                  <Tag className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto stroke-[1.5]" />
                  <div className="heading-primary text-sm font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    Ihre Produkte erhalten
                  </div>
                </div>
                <ul className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 space-y-2 list-disc pl-4 text-left leading-relaxed">
                  <li>Kostenlose Listung auf der Plattform bis zum Rollout</li>
                  <li>Firmenlogo auf unserer Website</li>
                  <li>Integration in die digitale Materialdatenbank</li>
                  <li>Perspektivisch KI-gestützte Visualisierung Ihrer Produkte</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between text-center hover:shadow-md transition">
                <div className="space-y-4">
                  <Coins className="w-9 h-9 text-amber-500 mx-auto stroke-[1.5]" />
                  <div className="heading-primary text-sm font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    Für die einmalige Aufbereitung und
                  </div>
                </div>
                <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  Integration der Produktdaten fällt eine Setup-Gebühr an.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-4 flex flex-col justify-between text-center hover:shadow-md transition">
                <div className="space-y-4">
                  <Rocket className="w-9 h-9 text-emerald-600 dark:text-emerald-400 mx-auto stroke-[1.5]" />
                  <div className="heading-primary text-sm font-bold text-black dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    Gemeinsam zum Erfolg
                  </div>
                </div>
                <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Stärken Sie die digitale Sichtbarkeit Ihrer Marke und gestalten Sie mit uns die Zukunft der Architekturvisualisierung.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SLIDE 12 SECTION: INTEGRATION PACKAGES & PRICING */}
        <section className="py-8 border-t border-neutral-200/60 dark:border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="w-full space-y-10"
          >
            {/* Partner Logos Header Bar */}
            <PartnerHeaderLogos />

            <h3 className="heading-primary text-2xl md:text-4xl text-black dark:text-white">
              Integration in ein EU-konformes KI-Modell
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Main Package (5.000 €) */}
              <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-blue-600 shadow-lg space-y-8 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 px-6 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                  EMPFEHLUNG
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/80">
                      <Database className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 font-bold block">FÜR DIE GESAMTE PRODUKTPALETTE</span>
                      <h4 className="heading-primary text-xl text-black dark:text-white">Integration in ein EU-konformes KI-Modell</h4>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="text-5xl md:text-6xl font-extrabold text-black dark:text-white font-mono">5.000 €</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">netto zzgl. USt.</span>
                  </div>
                  <p className="subheading-primary text-sm text-neutral-700 dark:text-neutral-300">
                    {isDe
                      ? 'Vollständige Aufbereitung und Integration Ihrer gesamten Materialproduktpalette in unser EU-konformes KI-Modell.'
                      : 'Complete processing and integration of your entire material product palette into our EU-compliant AI model.'}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {[
                    { icon: Sparkles, text: isDe ? 'Aufbereitung der Materialien für die KI-gestützte Visualisierung' : 'Material processing for AI-assisted visualization' },
                    { icon: FileCheck, text: isDe ? 'Strukturierung relevanter Produkt- und Materialdaten' : 'Structuring of product and material data' },
                    { icon: Library, text: isDe ? 'Integration in die TYPUS.AI Materialbibliothek' : 'Integration into TYPUS.AI Material Library' },
                    { icon: Brain, text: isDe ? 'Vorbereitung und Integration der Daten für das anwendungsspezifische KI-Modell' : 'Preparation and integration for application-specific AI model' },
                    { icon: ShieldCheck, text: isDe ? 'Qualitätskontrolle und Abstimmung der Produktdaten' : 'Quality control & alignment of product data' }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-sm text-neutral-800 dark:text-neutral-200">
                      <feat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4.5 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/60 flex items-start gap-3.5 text-xs text-cyan-900 dark:text-cyan-200">
                  <Gift className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="font-bold text-cyan-900 dark:text-cyan-300 block uppercase">INKLUSIVE: KOSTENLOSE LISTUNG AUF TYPUS.AI BIS ZUM ROLLOUT</strong>
                    <span className="text-neutral-600 dark:text-neutral-400 block">Keine zusätzlichen Listungsgebühren während der Entwicklungs- und Integrationsphase.</span>
                  </div>
                </div>

                <Link
                  href="/book-a-demo"
                  className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-center block hover:bg-neutral-800 dark:hover:bg-neutral-200 transition text-base uppercase tracking-wider shadow-md"
                >
                  {isDe ? 'Jetzt Projekt anfragen' : 'Request Project Integration'}
                </Link>
              </div>

              {/* Single Product Alternative (1.000 €) */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-8 flex flex-col justify-between text-center">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/80 flex items-center justify-center mx-auto text-cyan-600 dark:text-cyan-400">
                    <Box className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold tracking-widest block">ALTERNATIVE</span>
                    <h4 className="heading-primary text-lg text-black dark:text-white uppercase tracking-wider">EINZELPRODUKT</h4>
                  </div>

                  <div className="pt-1">
                    <span className="text-4xl font-extrabold text-black dark:text-white font-mono">1.000 €</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 block pt-0.5">netto / Produkt</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 flex items-center justify-center mx-auto">
                    <LayoutGrid className="w-5 h-5" />
                  </div>
                  <p className="subheading-primary text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {isDe
                      ? 'Individuelle Digitalisierung, Aufbereitung und Integration eines einzelnen Produkts in die TYPUS.AI Materialbibliothek und den vorgesehenen KI-Workflow.'
                      : 'Individual digitization, processing, and integration of a single product into the TYPUS.AI material library and AI workflow.'}
                  </p>
                </div>

                <Link
                  href="/book-a-demo"
                  className="w-full py-3.5 rounded-2xl bg-neutral-900 dark:bg-neutral-800 text-white font-bold text-center block hover:bg-black dark:hover:bg-neutral-700 transition text-sm uppercase tracking-wider"
                >
                  {isDe ? 'Einzelprodukt anfragen' : 'Request Single Product'}
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <FooterSection />
    </div>
  )
}
