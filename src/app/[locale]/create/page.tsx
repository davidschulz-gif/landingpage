'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NavbarDemo } from '@/components/adaptive-navbar-2'
import { FooterSection } from '@/components/footer-section'
import { 
  IconUpload, 
  IconAdjustments, 
  IconBrush, 
  IconArrowRight, 
  IconPhoto, 
  IconLayersIntersect, 
  IconSparkles, 
  IconDeviceLaptop,
  IconCopy,
  IconCheck
} from '@tabler/icons-react'

// Define the 17 upscaler preview images
interface PreviewImage {
  id: number
  titleDe: string
  titleEn: string
  src: string
}

const upscalerPreviews: PreviewImage[] = [
  { id: 1, titleDe: "Moderne Villa", titleEn: "Modern Villa", src: "/upscaler-moblie/image-1.png" },
  { id: 2, titleDe: "Urbanes Loft", titleEn: "Urban Loft", src: "/upscaler-moblie/image-2.png" },
  { id: 3, titleDe: "Penthouse-Terrasse", titleEn: "Penthouse Terrace", src: "/upscaler-moblie/image-3.png" },
  { id: 4, titleDe: "Monolithischer Betonturm", titleEn: "Monolithic Concrete Tower", src: "/upscaler-moblie/image-4.png" },
  { id: 5, titleDe: "Glasfassade", titleEn: "Glass Facade", src: "/upscaler-moblie/image-5.png" },
  { id: 6, titleDe: "Ziegel-Wohnhaus", titleEn: "Brick Residence", src: "/upscaler-moblie/image-6.png" },
  { id: 7, titleDe: "Konzept-Pavillon", titleEn: "Conceptual Pavilion", src: "/upscaler-moblie/image-7.png" },
  { id: 8, titleDe: "Büro am Ufer", titleEn: "Waterfront Office", src: "/upscaler-moblie/image-8.png" },
  { id: 9, titleDe: "Innenhof-Eingang", titleEn: "Courtyard Entrance", src: "/upscaler-moblie/image-9.png" },
  { id: 10, titleDe: "Minimalistische Küche", titleEn: "Minimalist Kitchen", src: "/upscaler-moblie/image-10.png" },
  { id: 11, titleDe: "Historische Sanierung", titleEn: "Historic Renovation", src: "/upscaler-moblie/image-11.png" },
  { id: 12, titleDe: "Mehrfamilienhaus", titleEn: "Apartment building", src: "/upscaler-moblie/image-12.png" },
  { id: 13, titleDe: "Holzdach-Konstruktion", titleEn: "Timber Roof Structure", src: "/upscaler-moblie/image-13.png" },
  { id: 14, titleDe: "Brutalistische Bibliothek", titleEn: "Brutalist Library", src: "/upscaler-moblie/image-14.png" },
  { id: 15, titleDe: "Vorstadt-Reihenhaus", titleEn: "Suburban Townhouse", src: "/upscaler-moblie/image-15.png" },
  { id: 16, titleDe: "Industrielle Werkstatt", titleEn: "Industrial Workshop", src: "/upscaler-moblie/image-16.png" },
  { id: 17, titleDe: "Architektur-Studio", titleEn: "Architectural Studio", src: "/upscaler-moblie/image-17.png" }
]

export default function CreateFeatureLandingPage() {
  const locale = useLocale()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Localized copy
  const t = {
    de: {
      subtitle: 'ERSTELLEN-FEATURE',
      heroTitle: 'KI-BILDER FÜR ARCHITEKTUR. ENDLICH MIT KONTROLLE.',
      heroSub: 'Die meisten KI-Tools sind großartig. Bis es präzise werden muss. Heute nutzen Architekt:innen täglich KI-Bildgeneratoren für Entwürfe, Atmosphären und schnelle Iterationen.',
      heroIntro: 'In wenigen Sekunden entstehen beeindruckende Bilder. Ideen werden sichtbar. Varianten lassen sich schneller testen als je zuvor. Doch sobald ein Projekt konkreter wird, beginnt das eigentliche Problem:',
      heroFlaws: [
        'Die Geometrie verändert sich.',
        'Materialien werden falsch interpretiert.',
        'Fassaden bekommen plötzlich andere Texturen.',
        'Wände werden zu Fenstern.',
        'Böden verschwinden.'
      ],
      heroSolution: 'Je wichtiger das Projekt wird, desto weniger Kontrolle bieten klassische KI-Bildgeneratoren. Genau dafür wurde typus.ai entwickelt.',
      heroSlogan: 'Typus.ai verbindet die kreative Freiheit moderner KI mit der Präzision, die Architekturprojekte benötigen.',
      heroNoPrompts: [
        'Keine generischen Prompts.',
        'Keine zufälligen Materialentscheidungen.',
        'Keine ungewollten Veränderungen Ihrer Planung.'
      ],
      heroTarget: 'Stattdessen erhalten Sie ein System, das Ihre Entwurfsabsicht versteht und präzise umsetzt.',
      // ctaButton: 'Jetzt kostenlos starten',
      pricingButton: 'Preise ansehen',

      // Section 1: Basisbild
      sec1Title: 'Laden Sie Ihr Basisbild hoch.',
      sec1Desc: 'Ob Screenshot aus Rhino, Revit, Archicad, SketchUp oder eine einfache CAD-Ansicht: Ihr Ausgangsbild bleibt die Grundlage. Die Geometrie bleibt erhalten. Sie bestimmen, was verändert wird – und was nicht.',

      // Section 2: Definieren
      sec2Title: 'Beschreiben Sie Ihr Projekt nicht. Definieren Sie es.',
      sec2Desc: 'Wählen Sie einfach passende Keywords für Atmosphäre, Nutzung, Stil und Charakter. Typus.ai analysiert Ihre Auswahl und erstellt automatisch einen projektspezifischen Prompt. Kein Prompt Engineering. Kein stundenlanges Experimentieren. Nur präzise Eingaben für präzise Ergebnisse.',

      // Section 3: Inspiration
      sec3Title: 'Inspiration, wenn Sie sie brauchen.',
      sec3Desc: 'Während Ihr Prompt entsteht, schlägt Typus.ai passende Referenzbilder vor. Nutzen Sie diese als zusätzliche Inspirationsquelle. Oder laden Sie Ihre eigenen Referenzen hoch. Sie müssen jedoch keine Referenzbilder verwenden. Bereits die Kombination aus Keywords und automatisch generiertem Prompt liefert überzeugende Ergebnisse.',

      // Section 4: Materialien
      sec4Title: 'Materialien dort zuweisen, wo sie hingehören.',
      sec4Highlight: 'Der entscheidende Unterschied.',
      sec4Desc: 'Mit Typus.ai wählen Sie Materialien und Texturen gezielt aus und weisen diese bestimmten Flächen zu. Holz bleibt Holz, Beton bleibt Beton, Naturstein bleibt Naturstein. Definieren Sie Wandoberflächen, Bodenbeläge und weitere Eigenschaften direkt innerhalb des Projekts. Auch daraus erstellt Typus.ai automatisch einen hochpräzisen Prompt, der Ihre Materialentscheidungen berücksichtigt. Eigene Texturen können selbstverständlich ebenfalls hochgeladen werden. Das Ergebnis sind Visualisierungen, die Ihrer Planung folgen – nicht den Vermutungen einer KI.',

      // Section 5: Generieren
      sec5Title: 'Generieren. Vergleichen. Entscheiden.',
      sec5Desc: 'Wählen Sie Ihr bevorzugtes KI-Modell. Bestimmen Sie Auflösung und Variantenanzahl. Klicken Sie auf «Generieren». Innerhalb weniger Augenblicke erhalten Sie mehrere hochwertige Visualisierungen Ihres Projekts – mit deutlich mehr Kontrolle als bei herkömmlichen KI-Bildgeneratoren.',

      // Section 6: Präsentationsset
      sec6Title: 'Aus einem Bild wird ein vollständiges Präsentationsset.',
      sec6Desc1: 'Die meisten KI-Tools erzeugen einzelne Bilder. Typus.ai erzeugt ein konsistentes Projekt. Mit nur einem Klick generieren Sie aus einer einzigen Visualisierung automatisch mehrere Kameraperspektiven Ihres Entwurfs. Innen- und Außenansichten, Detailblicke und alternative Blickwinkel bleiben dabei stilistisch, atmosphärisch und materiell konsistent. Was sonst Stunden manueller Nachbearbeitung erfordert, entsteht innerhalb weniger Minuten.',
      sec6Desc2: 'Doch damit nicht genug. Aus derselben Grundlage erzeugt Typus.ai automatisch Axonometrien, Explosionszeichnungen, analytische Diagramme, Konzeptgrafiken und weitere Darstellungsformen – alles im selben visuellen Stil und mit derselben architektonischen Sprache. So entsteht nicht nur ein einzelnes Rendering, sondern ein vollständiges Set aus Perspektiven, Diagrammen und Präsentationsgrafiken.',
      sec6Footer: 'Ein Projekt. Ein Stil. Unzählige Darstellungen.',

      // Section 7: Feinschliff
      sec7Title: 'Feinschliff statt Neustart.',
      sec7Desc: 'Möchten Sie einzelne Bereiche gezielt anpassen? Klicken Sie einfach auf «Bearbeiten». Beschreiben Sie Änderungen in natürlicher Sprache. Korrigieren Sie Materialien. Optimieren Sie Vegetation. Verändern Sie Atmosphäre oder Lichtstimmung. Bearbeiten Sie gezielt einzelne Bereiche, ohne das gesamte Bild neu generieren zu müssen. Ihre Visualisierung entwickelt sich Schritt für Schritt weiter – genau wie Ihr Entwurf.',

      // Section 8: Upscaler
      sec8Title: 'Bereit für Wettbewerb und Druck.',
      sec8Desc: 'Wenn das Ergebnis steht, senden Sie das Bild direkt an den integrierten Upscaler. Die Auflösung wird automatisch erhöht und für große Präsentationstafeln, Wettbewerbsabgaben, Drucke oder Marketingmaterialien optimiert. So erhalten Sie nicht nur schnelle Entwürfe, sondern präsentationsreife Ergebnisse in professioneller Qualität.',
      sec8Badge: 'INTEGRIERTE 8K HOCHSKALIERUNG',

      // Interactive Viewers CTA
      interactiveHeading: 'Möchten Sie die 8K Texturverfeinerung interaktiv erleben?',
      interactiveDesc: 'Tragen Sie Ihre E-Mail ein, um Zugang zu unserer hochauflösenden Zoom- und Schieberegler-Präsentation (optimiert für Desktop) zu erhalten, oder vergleichen Sie unsere Lizenzmodelle.',
      btnInteractive: 'Interaktive Bildschau öffnen',
      btnPricing: 'Tarife ansehen',

      // Outro
      outroTitle: 'MEHR KONTROLLE. WENIGER ZUFALL.',
      outroDesc: 'KI sollte Ihre Entwurfsabsicht verstärken – nicht verändern. Typus.ai wurde für Architekt:innen entwickelt, die die Geschwindigkeit moderner KI nutzen möchten, ohne die Kontrolle über Geometrie, Materialien und Darstellung zu verlieren. Visualisierungen, Diagramme und Axonometrien, die aussehen wie Ihr Projekt – nicht wie die Interpretation einer KI.',
    },
    en: {
      subtitle: 'CREATE FEATURE',
      heroTitle: 'AI IMAGES FOR ARCHITECTURE. FINALLY WITH CONTROL.',
      heroSub: 'Most AI tools are great. Until precision is required. Today, architects use AI image generators daily for designs, atmospheres, and quick iterations.',
      heroIntro: 'In a few seconds, impressive images are created. Ideas become visible. Variations can be tested faster than ever before. But as soon as a project becomes more concrete, the real problem begins:',
      heroFlaws: [
        'Geometry changes.',
        'Materials are misinterpreted.',
        'Facades suddenly get different textures.',
        'Walls turn into windows.',
        'Floors disappear.'
      ],
      heroSolution: 'The more important the project becomes, the less control traditional AI image generators offer. That is exactly why typus.ai was developed.',
      heroSlogan: 'Typus.ai connects the creative freedom of modern AI with the precision that architectural projects require.',
      heroNoPrompts: [
        'No generic prompts.',
        'No random material decisions.',
        'No unwanted changes to your planning.'
      ],
      heroTarget: 'Instead, you get a system that understands your design intent and executes it precisely.',
      // ctaButton: 'Get started for free',
      pricingButton: 'View Pricing',

      // Section 1: Basisbild
      sec1Title: 'Upload your base image.',
      sec1Desc: 'Whether it is a screenshot from Rhino, Revit, Archicad, SketchUp, or a simple CAD view: your starting image remains the foundation. The geometry is preserved. You determine what changes – and what does not.',

      // Section 2: Definieren
      sec2Title: 'Do not describe your project. Define it.',
      sec2Desc: 'Simply choose suitable keywords for atmosphere, use case, style, and character. Typus.ai analyzes your selection and automatically generates a project-specific prompt. No prompt engineering. No hours of experimenting. Just precise inputs for precise results.',

      // Section 3: Inspiration
      sec3Title: 'Inspiration when you need it.',
      sec3Desc: "As your prompt is generated, Typus.ai suggests fitting reference images. Use them as an additional source of inspiration, or upload your own references. However, you don't have to use reference images. The combination of keywords and the automatically generated prompt already delivers convincing results.",

      // Section 4: Materialien
      sec4Title: 'Assign materials where they belong.',
      sec4Highlight: 'The key difference.',
      sec4Desc: 'With Typus.ai, you select specific materials and textures and assign them to specific areas. Wood remains wood. Concrete remains concrete. Natural stone remains natural stone. Define wall surfaces, floor coverings, and other properties directly within the project. Typus.ai automatically generates a highly precise prompt from this, incorporating your material choices. Naturally, you can also upload your own textures. The result: visualizations that follow your planning – not the assumptions of an AI.',

      // Section 5: Generieren
      sec5Title: 'Generate. Compare. Decide.',
      sec5Desc: "Select your preferred AI model. Determine resolution and number of variations. Click 'Generate'. In just a few moments, you will receive multiple high-quality visualizations of your project – with significantly more control than conventional AI image generators.",

      // Section 6: Präsentationsset
      sec6Title: 'One image becomes a complete presentation set.',
      sec6Desc1: 'Most AI tools generate single images. Typus.ai creates a consistent project. With just one click, automatically generate multiple camera perspectives of your design from a single visualization. Interior and exterior views, detail shots, and alternative angles remain stylistically, atmospherically, and materially consistent. What normally takes hours of manual editing is created in a few minutes.',
      sec6Desc2: 'But that is not all. From the same base, Typus.ai automatically generates axonometrics, exploded views, analytical diagrams, concept graphics, and other presentation styles – all in the same visual style and architectural language. This results in not just a single rendering, but a complete set of perspectives, diagrams, and presentation graphics.',
      sec6Footer: 'One project. One style. Countless representations.',

      // Section 7: Feinschliff
      sec7Title: 'Refinement instead of restarting.',
      sec7Desc: "Want to adjust specific areas? Simply click 'Edit'. Describe changes in natural language. Correct materials. Optimize vegetation. Change the atmosphere or lighting mood. Edit specific areas selectively without regenerating the entire image. Your visualization evolves step by step – just like your design.",

      // Section 8: Upscaler
      sec8Title: 'Ready for competition and print.',
      sec8Desc: 'Once you have the final result, send the image directly to the integrated upscaler. The resolution is automatically increased and optimized for large presentation boards, competition entries, prints, or marketing materials. This gives you not just fast drafts, but presentation-ready results in professional quality.',
      sec8Badge: 'INTEGRATED 8K UPSCALING',

      // Interactive Viewers CTA
      interactiveHeading: 'Want to experience the 8K detail zoom interactively?',
      interactiveDesc: 'Submit your email to access our high-resolution interactive showcase (optimized for desktop), or explore our pricing plans.',
      btnInteractive: 'Open Interactive Showcase',
      btnPricing: 'View Pricing',

      // Outro
      outroTitle: 'MORE CONTROL. LESS RANDOMNESS.',
      outroDesc: "AI should enhance your design intent – not change it. Typus.ai was developed for architects who want to utilize the speed of modern AI without losing control over geometry, materials, and representation. Visualizations, diagrams, and axonometrics that look like your project – not an AI's interpretation.",
    }
  }

  const content = locale === 'de' ? t.de : t.en

  return (
    <div className='relative w-full bg-[#fcfcfd] dark:bg-neutral-950 min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-black selection:text-white'>
      <div>
        <NavbarDemo />

        {/* 1. HERO SECTION */}
        <div className="pt-32 pb-16 px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em]">
              <span>{content.subtitle}</span>
            </div>

            {/* Main Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-[46px] font-normal text-black dark:text-white tracking-tight leading-[1.05]" 
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {content.heroTitle}
            </h1>

            {/* Introduction Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-neutral-100 dark:border-neutral-900">
              <div className="space-y-4 text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                <p className="font-semibold">{content.heroSub}</p>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">{content.heroIntro}</p>
                
                <ul className="space-y-2 pl-4 list-disc text-black font-medium">
                  {content.heroFlaws.map((flaw, idx) => (
                    <li key={idx}>
                      <span className="text-neutral-800 dark:text-neutral-200 font-normal">{flaw}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-neutral-50 dark:bg-neutral-900/40 p-6 border border-neutral-100 dark:border-neutral-900/60 rounded-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-neutral-950 dark:text-white font-medium leading-relaxed">
                    {content.heroSolution}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {content.heroSlogan}
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs font-mono uppercase tracking-wider text-black">
                    {content.heroNoPrompts.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span>•</span>
                        <span className="text-neutral-800 dark:text-neutral-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                  {content.heroTarget}
                </div>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center">
              {/* <a
                href="https://app.typus.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                <span>{content.ctaButton}</span>
                <IconArrowRight size={14} />
              </a> */}

              <Link
                href={`/${locale}/pricing`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                <span>{content.pricingButton}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 2. BASE IMAGE SECTION */}
        <div className="py-16 bg-[#fcfcfd] dark:bg-neutral-950/20 border-t border-b border-neutral-100 dark:border-neutral-900 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconUpload className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec1Title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                {content.sec1Desc}
              </p>
            </div>

            {/* Embedded Screenshot 1 */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-lg bg-neutral-100 dark:bg-neutral-900">
              <img 
                src="/create/Screenshot 2026-06-03 at 21.28.31.png" 
                alt="Upload Base Image Workspace" 
                className="w-full h-auto object-cover max-h-[360px]"
              />
            </div>
          </div>
        </div>

        {/* 3. DEFINE SECTION */}
        <div className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Embedded Screenshot 4 */}
            <div className="order-2 lg:order-1 relative w-full rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-lg bg-neutral-100 dark:bg-neutral-900">
              <img 
                src="/create/Screenshot 2026-06-03 at 21.44.00.png" 
                alt="Define project parameters and prompt creation" 
                className="w-full h-auto object-cover max-h-[360px]"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 text-left">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconAdjustments className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec2Title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                {content.sec2Desc}
              </p>
            </div>
          </div>
        </div>

        {/* 4. INSPIRATION SECTION */}
        <div className="py-16 bg-[#fcfcfd] dark:bg-neutral-950/20 border-t border-b border-neutral-100 dark:border-neutral-900 px-4">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconSparkles className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec3Title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {content.sec3Desc}
            </p>
          </div>
        </div>

        {/* 5. MATERIAL ASSIGNMENT SECTION */}
        <div className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconBrush className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-black rounded-full text-[10px] font-bold uppercase tracking-wider">
                {content.sec4Highlight}
              </span>
              <h2 
                className="text-2xl sm:text-3xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec4Title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                {content.sec4Desc}
              </p>
            </div>

            {/* Embedded Screenshots 2 & 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-md bg-neutral-100 dark:bg-neutral-900">
                <img 
                  src="/create/Screenshot 2026-06-03 at 21.32.43.png" 
                  alt="Materials wall and floor selection popup" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-md bg-neutral-100 dark:bg-neutral-900">
                <img 
                  src="/create/Screenshot 2026-06-03 at 21.32.58.png" 
                  alt="Material texture grid detail view" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6. GENERATION CONTROL */}
        <div className="py-16 bg-[#fcfcfd] dark:bg-neutral-950/20 border-t border-b border-neutral-100 dark:border-neutral-900 px-4">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconLayersIntersect className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              </div>
              <h2 
                className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec5Title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {content.sec5Desc}
            </p>
          </div>
        </div>

        {/* 7. PRESENTATION SETS SECTION */}
        <div className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Embedded Screenshot 5 */}
            <div className="order-2 lg:order-1 relative w-full rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-lg bg-neutral-100 dark:bg-neutral-900">
              <img 
                src="/create/Screenshot 2026-06-03 at 21.54.06.png" 
                alt="Exploded Axonometric Diagrams and presentation layout" 
                className="w-full h-auto object-cover max-h-[380px]"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 text-left">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800">
                <IconPhoto className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
              </div>
              <h2 
                className="text-2xl sm:text-3xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec6Title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>{content.sec6Desc1}</p>
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{content.sec6Desc2}</p>
              </div>
              <div className="pt-2 text-xs font-mono uppercase tracking-wider text-black font-bold">
                {content.sec6Footer}
              </div>
            </div>
          </div>
        </div>

        {/* 8. FEINSCHLIFF SECTION */}
        <div className="py-16 bg-[#fcfcfd] dark:bg-neutral-950/20 border-t border-b border-neutral-100 dark:border-neutral-900 px-4">
          <div className="max-w-5xl mx-auto text-left space-y-6">
            <h2 
              className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {content.sec7Title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {content.sec7Desc}
            </p>
          </div>
        </div>

        {/* 9. UPSCALER GRID SECTION */}
        <div className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white dark:bg-white dark:text-black text-[9px] font-bold uppercase tracking-[0.2em]">
                {content.sec8Badge}
              </span>
              <h2 
                className="text-3xl font-normal text-black dark:text-white tracking-tight"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.sec8Title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                {content.sec8Desc}
              </p>
            </div>

            {/* 17 Mobile Preview Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
              {upscalerPreviews.map((img) => (
                <div 
                  key={img.id} 
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-md bg-neutral-100 dark:bg-neutral-900 group"
                >
                  <img 
                    src={img.src} 
                    alt={locale === 'de' ? img.titleDe : img.titleEn} 
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-left">
                    <span className="text-[8px] text-neutral-400 font-mono">
                      REF #{img.id.toString().padStart(2, '0')}
                    </span>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider line-clamp-1 mt-0.5">
                      {locale === 'de' ? img.titleDe : img.titleEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Showcase CTA Card */}
            <div className="mt-16 max-w-2xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-[32px] p-8 shadow-xl relative overflow-hidden text-left">
              {/* Glow effect */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-50 dark:bg-neutral-950 rounded-xl flex items-center justify-center border border-neutral-100 dark:border-neutral-800">
                  <IconDeviceLaptop className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  {locale === 'de' ? 'EXKLUSIVES FEATURE' : 'EXCLUSIVE FEATURE'}
                </h3>
              </div>

              <h3 
                className="text-xl sm:text-2xl font-normal text-black dark:text-white tracking-tight mb-3"
                style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
              >
                {content.interactiveHeading}
              </h3>
              
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8">
                {content.interactiveDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    const targetUrl = `/${locale}/upscale`
                    const hasEmail = localStorage.getItem('typus_email_provided')
                    if (hasEmail) {
                      window.location.href = targetUrl
                    } else {
                      window.dispatchEvent(new CustomEvent('show-email-gate', { detail: { redirectUrl: targetUrl } }))
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto flex-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer"
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  <IconDeviceLaptop size={14} />
                  <span>{content.btnInteractive}</span>
                  <IconArrowRight size={14} />
                </button>

                <Link
                  href={`/${locale}/pricing`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/60 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto flex-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                  style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                >
                  <span>{content.btnPricing}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 10. FINAL OUTRO SECTION */}
        <div className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/20 border-t border-neutral-100 dark:border-neutral-900">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 
              className="text-3xl sm:text-4xl font-normal text-black dark:text-white tracking-tight"
              style={{ fontFamily: "var(--font-ft-calhern), sans-serif" }}
            >
              {content.outroTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {content.outroDesc}
            </p>

            {/* <div className="pt-4 flex justify-center">
              <a
                href="https://app.typus.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              >
                <span>{content.ctaButton}</span>
                <IconArrowRight size={14} />
              </a>
            </div> */}
          </div>
        </div>

      </div>

      <FooterSection />
    </div>
  )
}
