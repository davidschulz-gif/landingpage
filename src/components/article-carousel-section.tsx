'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { BreathingAnimationText } from './breathing-animation-text'

interface Article {
  id: number
  title: string
  excerpt: string
  image: string
  source: string
  link: string
}

const articleData: Article[] = [
  {
    id: 0,
    title: 'WHAT EXPERTS SAY',
    excerpt:
      '"Sehr vielversprechend sieht derzeit die Anwendung Yanus aus. Wenn man dies in Zukunft mit Materialien und deren Herstellung abstimmt, wäre das ein enormer Gewinn. Auch könnte man so entsprechende Moods in Sekunden erstellen."',
    // image: '/blog/dabonline_logo_white.png',
    image: '/blog/blog_1.png',
    source: 'DR. DIETMAR KÖRING - ARPHENOTYPE',
    // link: 'https://www.dabonline.de/digital/ki-in-der-architektur-es-kommen-neue-aufgaben-auf-uns-zu/',
    link: 'https://www.dabonline.de/bueropraxis/ki-in-der-architektur-es-kommen-neue-aufgaben-auf-uns-zu'
  },
   {
    id: 1,
    title: 'KI-generierte architektonische Präzision und visuelle Exzellenz',
    excerpt:
      'Das mit Yanus generierte KI-Bild kann sich nicht nur optisch, sondern auch mit seiner architektonischen Exaktheit sehen lassen. Analysis by industry experts.',
    image: '/blog/dab.png',
    source: 'DAB ONLINE',
    // link: 'https://www.dabonline.de/digital/architektur-visualisierung-ki-bildgeneratoren/',
    link: 'https://www.dabonline.de/bueropraxis/architektur-visualisierung-ki-bildgeneratoren',
  },
  {
    id: 2,
    title:
      'PRÄI: Materialien gezielt steuern – KI-Visualisierung neu definiert',
    excerpt:
      'Innovative AI-powered architectural visualization platform transforming the industry with precision material control and advanced visualization capabilities.',
    image: '/logo/heinze-baunetz.png',
    source: 'Heinze BauNetz-Newsletter',
    link: 'https://www.baunetz.de/newsletter/archiv/show_nl.php?fn=ausgabe_9917426.html&wt_mc=nla.2025-05-09.service.browseransicht&context=2239',
  },
  // {
  //   id: 4,
  //   title: 'Leading Plugin Integrations with Architectural Software',
  //   excerpt:
  //     'It offers seamless plugin integrations with leading architectural software solutions such as Revit, ArchiCAD, Rhino, and SketchUp for enhanced workflow efficiency.',
  //   image: '/logo/addd_logo.png',
  //   source: 'ADDD Platform',
  //   link: 'https://addd.io/product/prai',
  // },
   {
    id: 5,
    title: 'GOOGLE REVIEWS',
    excerpt:
      '"FANTASTIC! GREAT EXPERIENCE AND IMPRESSIVE QUALITY! EASY TO WORK AND FAST OUTPUT!"',
    image: '/logo/google_logo.png',
    source: 'ROLAND WOBORSKY, SELF-EMPLOYED',
    link: 'https://www.google.com/maps/place/TYPUS.AI+formerly+YANUS.AI/@50.93654,6.9045451,662m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bf254b60018897:0xe59bac1b8b968df2!8m2!3d50.93654!4d6.90712!16s%2Fg%2F11w9p4ttwz?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D',
  },

  {
    id: 6,
    title: 'Innovation Forum: Leading Construction Technology Startups',
    excerpt:
      'Featured among the best startups showcasing innovative solutions in construction technology, architectural visualization, and industry advancement.',
    image: '/logo/bauforum_logo.gif',
    source: 'Bauforum Innovation 2025',
    link: 'https://bauforum-innovationen.de/teilnahmeinformationen-vertretene-unternehmen/',
  },
  {
    id: 7,
    title: 'Construction Industry Innovation Showcase',
    excerpt:
      'Participation in leading construction technology conferences, showcasing innovative AI solutions and networking with established technology leaders.',
    image: '/logo/praii_logo.png',
    source: 'F.A.Z. Konferenzen',
    link: 'https://bauforum-innovationen.de/startups/',
  },
  {
    id: 8,
    title: 'DIGITAL INNOVATION AWARD',
    excerpt: 'WE were ONE OF 4 FINALISTS FOR THE DIGITAL INNOVATION AWARD 2024',
    image: '/blog/vote_for_us.png',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?trk=public_post_embed_social-actions-reactions',
    source: 'LinkedIn',
  },
]

//  | NOA NORD ORDINARY ARCHITECTURE

export function ArticleCarouselSection() {
  const t = useTranslations('Articles')
  
  return (
    <div
      className='w-full py-20'
      style={{ backgroundColor: '#fcfcfd' }}
      id='press'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <BreathingAnimationText animationType='black-gray'>
            <motion.h2
              className='text-[30px] font-normal text-black mb-4'
              style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('title')}
            </motion.h2>
          </BreathingAnimationText>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full max-w-6xl mx-auto'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {articleData.map((article, index) => (
              <CarouselItem
                key={index}
                className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className='border-0 gap-0 py-0 mb-4 md:ml-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'>
                    <CardContent className='p-0'>
                      <div className='aspect-square relative overflow-hidden '>
                        {/* Conditional rendering based on ID instead of source type */}
                        {[1, 2, 3, 4, 5].includes(article.id) ? (
                          <div className='w-full h-full bg-white flex items-center justify-center p-8'>
                            <img
                              src={article.image}
                              alt={article.title}
                              className='object-contain transition-transform duration-300 hover:scale-105'
                              style={{
                                width:
                                  article.id === 5
                                    ? '122px'
                                    : article.id === 4
                                      ? '86px'
                                      : article.id === 3
                                        ? '73px'
                                        : 'auto',
                                height:
                                  article.id === 5
                                    ? '101px'
                                    : article.id === 4
                                      ? '86px'
                                      : article.id === 3
                                        ? '22px'
                                        : 'auto',
                                maxWidth: '300px',
                                maxHeight: '200px',
                              }}
                            />
                          </div>
                        ) : (
                          <img
                            src={article.image}
                            alt={article.title}
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                          />
                        )}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                        
                        {/* Overlay DAB Online logo on Dr. Dietmar Köring's photo (article ID 0) */}
                        {article.id === 0 && (
                          <div className='absolute bottom-[16%] left-1/2 -translate-x-1/2 pointer-events-none z-10 w-[55%] max-w-[150px] aspect-square'>
                            <img
                              src='/blog/dabonline_logo_white.png'
                              alt='DAB Online Logo'
                              className='w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]'
                            />
                          </div>
                        )}

                        <div className='absolute bottom-4 left-4 right-4'>
                          <span className='text-white uppercase text-xs font-medium bg-black/30 px-2 py-1  backdrop-blur-sm'>
                            {article.source}
                          </span>
                        </div>
                      </div>
                      <div className='p-6'>
                        <BreathingAnimationText animationType='black-gray'>
                          <h3
                            className='text-lg uppercase font-semibold text-gray-900 mb-3 line-clamp-2'
                            style={{
                              fontFamily: "'Soyuz Grotesk', sans-serif",
                            }}
                          >
                            {article.title}
                          </h3>
                        </BreathingAnimationText>
                        {/* Add star rating for Google Reviews */}
                        {article.title === 'GOOGLE REVIEWS' && (
                          <div className='flex items-center mb-3'>
                            <div className='flex items-center'>
                              {[1, 2, 3, 4, 5].map(star => (
                                <svg
                                  key={star}
                                  className={`w-5 h-5 ${
                                    star <= 4
                                      ? 'text-yellow-400'
                                      : star === 5
                                        ? 'text-gray-300'
                                        : 'text-gray-300'
                                  }`}
                                  fill={
                                    star <= 4 || (star === 5 && star <= 4.5)
                                      ? 'currentColor'
                                      : 'none'
                                  }
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                >
                                  {star === 5 ? (
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                      fill='url(#half-star)'
                                    />
                                  ) : (
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                    />
                                  )}
                                </svg>
                              ))}
                              {/* Half star for 4.5 rating */}
                              <svg
                                className='w-5 h-5 text-yellow-400 absolute'
                                style={{ marginLeft: '80px' }}
                              >
                                <defs>
                                  <linearGradient id='half-star'>
                                    <stop
                                      offset='50%'
                                      stopColor='currentColor'
                                    />
                                    <stop offset='50%' stopColor='#d1d5db' />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <BreathingAnimationText animationType='black-gray'>
                              <span className='ml-2 text-sm font-medium text-gray-700'>
                                4.5/5
                              </span>
                            </BreathingAnimationText>
                          </div>
                        )}
                        <BreathingAnimationText animationType='black-gray'>
                          <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>
                            {article.excerpt}
                          </p>
                        </BreathingAnimationText>
                        <BreathingAnimationText animationType='black-gray'>
                          <a
                            href={article.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors'
                            style={{
                              fontFamily: "'Soyuz Grotesk', sans-serif",
                            }}
                          >
                            {t('readFullArticle')}
                            <svg
                              className='ml-2 w-4 h-4'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                              />
                            </svg>
                          </a>
                        </BreathingAnimationText>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95' />
          <CarouselNext className='p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95' />
        </Carousel>

        {/* Company Evolution Note */}
        <div className='text-center my-4'>
          <BreathingAnimationText animationType='black-gray'>
            <p className='text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              {t('companyEvolution')}
            </p>
          </BreathingAnimationText>
        </div>
      </div>
    </div>
  )
}
