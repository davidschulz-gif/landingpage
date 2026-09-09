'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { ManyChatPricingSection } from '@/components/manychat-pricing-section'
import { FloorPlanPricingSection } from '@/components/floor-plan-pricing-section'
import { FloorPlanIframeSection } from '@/components/floor-plan-iframe-section'
import {
  IconWand,
  IconClock,
  IconHome,
  IconArrowRight,
  IconSparkles
} from '@tabler/icons-react'
import { appUrl } from '@/lib/constants'

export default function AIFloorPlanGeneratorLandingPage() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const hasPlans = params.get('plans') === 'true' || params.get('plan') === 'true'
      const hasHash = window.location.hash === '#floor-plan-pricing' || window.location.hash === '#plans'
      if (hasPlans || hasHash) {
        setTimeout(() => {
          const el = document.getElementById('floor-plan-pricing') || document.getElementById('plans')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }
    }
  }, [])

  // Localized copy
  const t = {
    de: {
      heroTitle: 'Sofortige KI-Grundrisse für intelligenteres Wohndesign',
      heroDesc: 'Erstellen Sie genaue, schöne und anpassbare Grundrisse in Minuten mit der bahnbrechenden KI-Technologie von Typus.AI. Egal, ob Sie umbauen, inszenieren oder ein neues Gebäude planen, unser Tool erweckt Ihre Vision zum Leben – keine Designfähigkeiten erforderlich.',
      cta: 'Beginnen Sie mit der Generierung von Grundrissen',
      
      whatIsTitle: 'Was ist der Typus.AI KI-Grundrissgenerator?',
      whatIsDesc: "Typus.AIs KI-Grundrissgenerator verwandelt Ihre Ideen mit nur wenigen Klicks in vollständig detaillierte Grundrisslayouts. Legen Sie Ihre Anforderungen fest, beschreiben Sie Ihre Bedürfnisse, und unsere KI generiert automatisch ein sauberes Layout – komplett mit Raumbezeichnungen und Zonen. Verabschieden Sie sich vom mühsamen Entwurf und begrüßen Sie intelligenteres, schnelleres Planen.",
      
      benefitsTitle: 'Kernvorteile unseres KI-Grundrisserstellers',
      benefitsSub: 'Generieren Sie sofort Designkonzepte mit hochwertigen, architektonischen Visualisierungen. Lassen Sie Ihre Ideen in Sekunden Wirklichkeit werden.',
      benefit1Title: 'KI-gestützte Präzision',
      benefit1Desc: 'Nutzen Sie fortschrittliche Architektur-Logik, um Grundrisse aus Parametern oder Textanweisungen zu erstellen.',
      benefit2Title: 'Blitzschnelle Ergebnisse',
      benefit2Desc: 'Keine Wartezeiten mehr. Generieren Sie detaillierte Layouts in unter 60 Sekunden und nehmen Sie sofort Änderungen an Raumtypen oder Größen vor.',
      benefit3Title: 'Perfekt für jeden Immobilientyp',
      benefit3Desc: 'Unterstützt Layouts für Einfamilienhäuser, Wohnungen, Garagen und mehr – maßgeschneidert für Designer, Immobilienmakler und Hausbesitzer.',

      whoIsTitle: 'Für wen ist es gedacht?',
      who1Title: 'Hausbesitzer & DIY-Renovierer',
      who1Desc: 'Visualisieren Sie sofort neue Layouts und vergleichen Sie Grundrissoptionen, ohne einen professionellen Entwerfer zu beauftragen. Sparen Sie Zeit und vermeiden Sie kostspielige Fehler.',
      who2Title: 'Innendesigner & Architekten',
      who2Desc: 'Beschleunigen Sie Ihren Design-Workflow mit KI-generierten Raumlayouts. Testen Sie verschiedene räumliche Anordnungen und Flusskonzepte mit nur wenigen Klicks.',
      who3Title: 'Immobilienmakler',
      who3Desc: 'Erstellen Sie klare, ansprechende Grundrisse für Immobilienanzeigen und Broschüren. Helfen Sie Käufern, die Funktionalität der Räume zu visualisieren.',

      howTitle: 'So verwenden Sie den KI-Grundriss-Generator',
      how1Title: 'Schritt 1: Beschreiben Sie Ihr Layout',
      how1Desc: 'Geben Sie die Anzahl der Schlafzimmer, Bäder und Extras ein oder beschreiben Sie Ihr ideales Layout.',
      how2Title: 'Schritt 2: Generieren',
      how2Desc: 'Klicken Sie auf Generieren, und unsere KI erstellt automatisch einen klaren, maßstabsgetreuen Grundriss basierend auf Ihren Angaben.',
      how3Title: 'Schritt 3: Überprüfen und Herunterladen',
      how3Desc: 'Wenn Sie nicht zufrieden sind, können Sie es erneut generieren oder feineinstellen. Wenn Sie zufrieden sind, können Sie es direkt herunterladen.',

      faqTitle: 'Häufige Fragen',
      faq1q: 'Kann ich dieses Tool ohne architektonische Erfahrung nutzen?',
      faq1a: 'Ja! Unsere intuitive Benutzeroberfläche ist für alle gemacht - von Anfängern bis hin zu Profis.',
      faq2q: 'Ist dieses Tool mobilfreundlich?',
      faq2a: 'Ja, unsere App ist vollständig für Desktop- und mobile Geräte optimiert.',
      faq3q: 'Kann ich Grundrisse nur durch Beschreibung in Worten generieren?',
      faq3a: 'Ja! Beschreiben Sie einfach Ihr gewünschtes Layout in natürlicher Sprache - wie "eine Zwei-Zimmer-Wohnung mit einer zentralen Küche und einem Balkon" - und unsere KI wird einen Grundriss basierend auf Ihrer Beschreibung erstellen.',
      faq4q: 'Unterstützt es Garagen, Keller oder Außenbereiche?',
      faq4a: 'Absolut. Unsere KI kann Grundrisse mit Garagen, Kellern, Patios, Gärten und mehr erstellen. Fügen Sie einfach diese Merkmale in Ihre Eingabe oder Skizze ein.',
      faq5q: 'Kann ich die generierten Pläne für Genehmigungsanträge verwenden?',
      faq5a: 'Während der AI-Grundrissgenerator von Typus.AI perfekt für Planung und Visualisierung ist, empfehlen wir, das Ergebnis als konzeptionellen Entwurf zu verwenden. Für Genehmigungen sollten Sie einen lizenzierten Architekten oder Ingenieur konsultieren.',
      faq6q: 'Kann ich mehrstöckige Layouts generieren?',
      faq6a: 'Absolut! Fügen Sie einfach neue Etagen hinzu und gestalten Sie jede Etage unabhängig.',

      readyTitle: 'Bereit, das perfekte Layout zu gestalten?',
      readyDesc: 'Schließen Sie sich Tausenden von Benutzern an, die Typus.AI verwenden, um ihre Traumräume mühelos zu visualisieren und zu planen.',

      examplesTag: '3D-Beispiele',
      examplesTitle: 'Hochwertige 3D-Grundrisse',
      examplesSub: 'Entdecken Sie fotorealistische, hochauflösende 3D-Grundrisse, die in Sekundenschnelle mit Typus.AI generiert wurden.',
      examplesCta: 'Eigenen 3D-Grundriss erstellen',
      examplesAction: 'In 3D visualisieren'
    },
    en: {
      heroTitle: 'Instant AI Floor Plans for Smarter Home Design',
      heroDesc: 'Create accurate, beautiful, and customizable floor plans in minutes with the groundbreaking AI technology from Typus.AI. Whether you are remodeling, staging, or planning a new building, our tool brings your vision to life – no design skills required.',
      cta: 'Start generating floor plans',
      
      whatIsTitle: 'What is the Typus.AI AI Floor Plan Generator?',
      whatIsDesc: 'Typus.AI\'s AI floor plan generator turns your ideas into fully detailed floor plan layouts with just a few clicks. Set your requirements, describe your needs, and our AI automatically generates a clean layout – complete with room labels and zoning. Say goodbye to tedious drafting and hello to smarter, faster planning.',
      
      benefitsTitle: 'Core benefits of our AI floor plan creator',
      benefitsSub: 'Instantly generate design concepts with high-quality architectural visualizations. Make your ideas a reality in seconds.',
      benefit1Title: 'AI-powered Precision',
      benefit1Desc: 'Use advanced architectural logic to create floor plans from parameters or text instructions.',
      benefit2Title: 'Lightning Fast Results',
      benefit2Desc: 'No more waiting. Generate detailed layouts in under 60 seconds and instantly make changes to room types or sizes.',
      benefit3Title: 'Perfect for any Property Type',
      benefit3Desc: 'Supports layouts for single-family homes, apartments, garages, and more – tailored for designers, real estate agents, and homeowners.',

      whoIsTitle: 'Who is it for?',
      who1Title: 'Homeowners & DIY Remodelers',
      who1Desc: 'Instantly visualize new layouts and compare floor plan options without hiring a professional designer. Save time and avoid costly mistakes.',
      who2Title: 'Interior Designers & Architects',
      who2Desc: 'Accelerate your design workflow with AI-generated spatial layouts. Test different spatial arrangements and flow concepts with just a few clicks.',
      who3Title: 'Real Estate Agents',
      who3Desc: 'Create clear, engaging floor plans for real estate listings and brochures. Help buyers visualize the functionality of the spaces.',

      howTitle: 'How to use the AI Floor Plan Generator',
      how1Title: 'Step 1: Describe your layout',
      how1Desc: 'Enter the number of bedrooms, bathrooms, and extras, or describe your ideal layout.',
      how2Title: 'Step 2: Generate',
      how2Desc: 'Click generate, and our AI automatically creates a clear, to-scale floor plan based on your inputs.',
      how3Title: 'Step 3: Review and Download',
      how3Desc: 'If you are not satisfied, regenerate or tweak it. If you are happy, download it directly.',

      faqTitle: 'Frequently Asked Questions',
      faq1q: 'Can I use this tool without architectural experience?',
      faq1a: 'Yes! Our intuitive user interface is made for everyone - from beginners to professionals.',
      faq2q: 'Is this tool mobile-friendly?',
      faq2a: 'Yes, our app is fully optimized for both desktop and mobile devices.',
      faq3q: 'Can I generate floor plans just by describing them in words?',
      faq3a: 'Yes! Simply describe your desired layout in natural language - like "a two-bedroom apartment with a central kitchen and a balcony" - and our AI will create a floor plan based on your description.',
      faq4q: 'Does it support garages, basements, or outdoor areas?',
      faq4a: 'Absolutely. Our AI can create floor plans with garages, basements, patios, gardens, and more. Just include these features in your input or sketch.',
      faq5q: 'Can I use the generated plans for permit applications?',
      faq5a: 'While the Typus.AI floor plan generator is perfect for planning and visualization, we recommend using the result as a conceptual draft. For permits, you should consult a licensed architect or engineer.',
      faq6q: 'Can I generate multi-story layouts?',
      faq6a: 'Absolutely! Simply add new floors and design each floor independently.',

      readyTitle: 'Ready to design the perfect layout?',
      readyDesc: 'Join thousands of users who use Typus.AI to effortlessly visualize and plan their dream spaces.',

      examplesTag: '3D Examples',
      examplesTitle: 'High-Quality 3D Floor Plans',
      examplesSub: 'Explore photorealistic, high-resolution 3D floor plans generated in seconds with Typus.AI.',
      examplesCta: 'Create Your 3D Floor Plan',
      examplesAction: 'Visualize in 3D'
    }
  }

  const content = locale === 'de' ? t.de : t.en

  const floorPlanExamples = [
    {
      title: locale === 'de' ? 'Modernes Luxusapartment' : 'Modern Luxury Apartment',
      category: locale === 'de' ? '3D-Schnittansicht' : '3D Cutaway',
      specs: '120 m² • 2 Beds • 2 Baths',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section1_2.webp',
      badge: locale === 'de' ? 'Offener Wohnbereich' : 'Open Living Area',
    },
    {
      title: locale === 'de' ? 'Zeitgenössische Villa' : 'Contemporary Villa Layout',
      category: locale === 'de' ? 'Vogelperspektive' : 'Aerial Perspective',
      specs: '185 m² • 3 Beds • 2.5 Baths',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section2_1_2.webp',
      badge: locale === 'de' ? 'Garten & Terrasse' : 'Garden & Terrace',
    },
    {
      title: locale === 'de' ? 'Skandinavisches Einfamilienhaus' : 'Scandinavian Family Home',
      category: locale === 'de' ? 'Isometrische Ansicht' : 'Isometric View',
      specs: '140 m² • 3 Beds • 2 Baths',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section2_3_2.webp',
      badge: locale === 'de' ? 'Holz & Naturlicht' : 'Warm Wood & Light',
    },
    {
      title: locale === 'de' ? 'Urbane Penthouse-Suite' : 'Urban Penthouse Suite',
      category: locale === 'de' ? 'Architektur-Render' : 'Architectural Render',
      specs: '210 m² • 4 Beds • 3 Baths',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section2_4_2.webp',
      badge: locale === 'de' ? 'En-Suite Bäder' : 'En-suite Baths',
    },
    {
      title: locale === 'de' ? 'Minimalistisches Studio-Loft' : 'Minimalist Studio Loft',
      category: locale === 'de' ? 'Kompakter Grundriss' : 'Compact Layout',
      specs: '65 m² • 1 Bed • 1 Bath',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section2_3_1.webp',
      badge: locale === 'de' ? 'Smarte Raumaufteilung' : 'Smart Space Flow',
    },
    {
      title: locale === 'de' ? 'Offenes Mehrraumkonzept' : 'Open Multi-Room Plan',
      category: locale === 'de' ? 'Raumtiefe & Fluss' : 'Spatial Depth',
      specs: '160 m² • 3 Beds • 2 Baths',
      image: 'https://d38b044pevnwc9.cloudfront.net/site/promeai/config/web/idealhouse/func/ai-tools/ai_plan_visualizer_section2_2_2.webp',
      badge: locale === 'de' ? 'Moderne Möblierung' : 'Full Furnishing',
    },
  ]

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

        {/* HERO SECTION */}
        <section className="bg-neutral-50 dark:bg-neutral-900/20 pt-32 pb-20">
          <div className="mx-auto w-full max-w-5xl px-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="heading-primary">
                {content.heroTitle}
              </h1>
              <p className="subheading-primary max-w-3xl mx-auto">
                {content.heroDesc}
              </p>
              <div className="pt-4">
                <Link
                  href={`${appUrl}/floor-plan`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
                >
                  {content.cta}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image / Mockup Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative border border-neutral-200/50 dark:border-neutral-700/50"
            >
              <img src="https://ideal.house/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai_floor_1.b6b8368b.png&w=3840&q=75" alt="AI Floor Plan Generator Hero" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>

        {/* LIVE IFRAME SHOWCASE SECTION */}
        <FloorPlanIframeSection locale={locale} />

        {/* HIGH-QUALITY 3D FLOOR PLANS EXAMPLES SECTION */}
        <section className="py-20 bg-neutral-900 text-white px-5 relative overflow-hidden border-t border-neutral-800">
          <div className="mx-auto w-full max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/10">
                <IconSparkles className="w-3.5 h-3.5 text-amber-400" />
                {content.examplesTag}
              </span>
              <h2 className="heading-primary text-white">
                {content.examplesTitle}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                {content.examplesSub}
              </p>
            </div>

            {/* Grid of 6 3D Floor Plan Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {floorPlanExamples.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-neutral-800/80 rounded-2xl overflow-hidden border border-neutral-700/60 hover:border-neutral-500 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
                >
                  <div className="relative aspect-[1.45] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/10">
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-black text-[11px] font-bold">
                      {item.badge}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">
                        {item.specs}
                      </p>
                    </div>
                    <Link
                      href={`${appUrl}/floor-plan/plan-visualizer`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-amber-400 transition-colors pt-2 border-t border-neutral-700/50"
                    >
                      <span>{content.examplesAction}</span>
                      <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Link
                href={`${appUrl}/floor-plan`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-neutral-100 text-black rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-xl"
              >
                <span>{content.examplesCta}</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT IS IT */}
        <section className="py-24 bg-white dark:bg-neutral-950 px-5 border-y border-neutral-100 dark:border-neutral-900">
          <div className="mx-auto w-full max-w-6xl text-center space-y-8">
            <h2 className="heading-primary">
              {content.whatIsTitle}
            </h2>
            <p className="subheading-primary max-w-3xl mx-auto">
              {content.whatIsDesc}
            </p>
            <div className="mt-8 max-w-3xl mx-auto h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-neutral-700/50">
              <img
                src="https://ideal.house/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai_floor_2.72fd4780.jpg&w=3840&q=75"
                alt="Floor plan example"
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
          </div>
        </section>

        {/* CORE BENEFITS */}
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/10 px-5">
          <div className="mx-auto w-full max-w-6xl text-center">
            <h2 className="heading-primary mb-4">
              {content.benefitsTitle}
            </h2>
            <p className="subheading-primary mb-16 max-w-2xl mx-auto">
              {content.benefitsSub}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <IconWand size={32} />, title: content.benefit1Title, desc: content.benefit1Desc },
                { icon: <IconClock size={32} />, title: content.benefit2Title, desc: content.benefit2Desc },
                { icon: <IconHome size={32} />, title: content.benefit3Title, desc: content.benefit3Desc },
              ].map((benefit, i) => (
                <div key={i} className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 text-left hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="heading-primary text-xl mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="py-24 bg-white dark:bg-neutral-950 px-5">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="heading-primary text-center mb-16">
              {content.whoIsTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: content.who1Title, desc: content.who1Desc, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
                { title: content.who2Title, desc: content.who2Desc, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
                { title: content.who3Title, desc: content.who3Desc, img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80' },
              ].map((target, i) => (
                <div key={i} className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center">
                  <img src={target.img} alt={target.title} className="h-[200px] w-full object-cover" />
                  <div className="p-8">
                    <h3 className="heading-primary text-xl mb-4">{target.title}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{target.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO USE */}
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/20 px-5 border-t border-neutral-100 dark:border-neutral-900">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="heading-primary text-center mb-16">
              {content.howTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: content.how1Title, desc: content.how1Desc },
                { step: '2', title: content.how2Title, desc: content.how2Desc },
                { step: '3', title: content.how3Title, desc: content.how3Desc },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
                  <div className="w-10 h-10 shrink-0 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-lg font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="heading-primary text-xl mb-4">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* How to use Image */}
            <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-neutral-700/50">
              <img src="https://ideal.house/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai_floor_3.7cd148ba.jpg&w=3840&q=75" alt="How to use AI floor plan generator" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="floor-plan-pricing" className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 scroll-mt-20">
          <div id="plans" />
          <ManyChatPricingSection isStandalone={true} showOnly="floorplan" />
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-white dark:bg-neutral-950 px-5">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="heading-primary text-center mb-16">
              {content.faqTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: content.faq1q, a: content.faq1a },
                { q: content.faq2q, a: content.faq2a },
                { q: content.faq3q, a: content.faq3a },
                { q: content.faq4q, a: content.faq4a },
                { q: content.faq5q, a: content.faq5a },
                { q: content.faq6q, a: content.faq6a },
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-[#f8f9fa] dark:bg-neutral-900 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="heading-primary text-xl mb-4 leading-snug">{faq.q}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[17px]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className="py-24 bg-black dark:bg-white text-white dark:text-black px-5 text-center">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <h2 className="heading-primary text-white dark:text-black">
              {content.readyTitle}
            </h2>
            <p className="subheading-primary text-neutral-400 dark:text-neutral-600">
              {content.readyDesc}
            </p>
            <div className="pt-4">
               <Link
                  href={`${appUrl}/floor-plan`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
                >
                  {content.cta}
                </Link>
            </div>
          </div>
        </section>

      </div>
      <FooterSection />
    </div>
  )
}
