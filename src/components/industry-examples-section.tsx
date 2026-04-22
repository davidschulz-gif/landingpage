'use client'

import { cn } from '@/lib/utils'
import { MediaBucketUrl } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

interface Example {
  id: string
  title: string
  images: string[]
}

const BASE_IMAGE_AWS_URL = "https://prai-vision.s3.eu-central-1.amazonaws.com/industryImageBeforeAfter"

// Industry-specific image pairs [before, after]
// All pairs use dedicated generated images from /before-after/generate/
export const INDUSTRY_IMAGES: Record<string, string[][]> = {
  architects: [
    [`${BASE_IMAGE_AWS_URL}/architects_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/architects_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/architects_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/architects_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/architects_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/architects_example3_after.webp`],
  ],
  interiorArchitects: [
    [`${BASE_IMAGE_AWS_URL}/interiorArchitects_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/interiorArchitects_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/interiorArchitects_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/interiorArchitects_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/interiorArchitects_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/interiorArchitects_example3_after.webp`],
  ],
  carpenters: [
    [`${BASE_IMAGE_AWS_URL}/carpenters_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/carpenters_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/carpenters_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/carpenters_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/carpenters_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/carpenters_example3_after.webp`],
  ],
  kitchenBuilders: [
    [`${BASE_IMAGE_AWS_URL}/kitchenBuilders_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/kitchenBuilders_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/kitchenBuilders_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/kitchenBuilders_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/kitchenBuilders_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/kitchenBuilders_example3_after.webp`],
  ],
  painters: [
    [`${BASE_IMAGE_AWS_URL}/painters_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/painters_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/painters_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/painters_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/painters_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/painters_example3_after.webp`],
  ],
  furnitureMakers: [
    [`${BASE_IMAGE_AWS_URL}/furnitureMakers_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/furnitureMakers_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/furnitureMakers_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/furnitureMakers_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/furnitureMakers_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/furnitureMakers_example3_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/furnitureMakers_example4_before.webp`, `${BASE_IMAGE_AWS_URL}/furnitureMakers_example4_after.webp`],
  ],
  realEstate: [
    [`${BASE_IMAGE_AWS_URL}/realEstate_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/realEstate_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/realEstate_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/realEstate_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/realEstate_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/realEstate_example3_after.webp`],
  ],
  developers: [
    [`${BASE_IMAGE_AWS_URL}/developers_example1_before.webp`, `${BASE_IMAGE_AWS_URL}/developers_example1_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/developers_example2_before.webp`, `${BASE_IMAGE_AWS_URL}/developers_example2_after.webp`],
    [`${BASE_IMAGE_AWS_URL}/developers_example3_before.webp`, `${BASE_IMAGE_AWS_URL}/developers_example3_after.webp`],
  ],
}

const DEFAULT_IMAGES = [
  [MediaBucketUrl + 'before-after/a_before.webp', MediaBucketUrl + 'before-after/a_after.webp'],
  [MediaBucketUrl + 'before-after/b_before.webp', MediaBucketUrl + 'before-after/b_after.webp'],
  [MediaBucketUrl + 'before-after/c_before.webp', MediaBucketUrl + 'before-after/c_after.webp'],
]

export function IndustryExamplesSection({ slug }: { slug: string }) {
  const t = useTranslations('IndustrySlugPages')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
    viewport: { once: true, margin: '-50px' }
  }

  const exampleCounts: Record<string, number> = {
    architects: 3,
    interiorArchitects: 3,
    carpenters: 3,
    kitchenBuilders: 3,
    painters: 3,
    furnitureMakers: 4,
    realEstate: 3,
    developers: 3,
  }

  const slugImages = INDUSTRY_IMAGES[slug] || DEFAULT_IMAGES
  const count = exampleCounts[slug] || 3

  const examples: Example[] = Array.from({ length: count }, (_, i) => {
    const exampleId = `example${i + 1}`
    const imgPair = slugImages[i] || DEFAULT_IMAGES[i % DEFAULT_IMAGES.length]
    return {
      id: exampleId,
      title: t(`${slug}.IndustryExamples.examples.${exampleId}.title`),
      images: imgPair,
    }
  })

  return (
    <section className="py-24 px-4 bg-[#fcfcfd] dark:bg-[#0a0a0c] border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">

        <motion.div {...motionProps} className="space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#2B2B2B] dark:text-white leading-[1.1]">
            {t(`${slug}.IndustryExamples.title`)}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {examples.map((example, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className={cn(
                  "border-t border-gray-100 dark:border-neutral-800",
                  "transition-colors"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full py-6 text-left group"
                >
                  <span className="text-base font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {example.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-blue-600 dark:text-blue-400"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                        {example.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-800">
                            <Image
                              src={img}
                              alt={`${example.title} — ${imgIdx === 0 ? 'Before' : 'After'}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {imgIdx === 0 ? 'Before' : 'After'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
