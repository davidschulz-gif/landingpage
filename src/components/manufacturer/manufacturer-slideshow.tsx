'use client'

import React from 'react'
import Image from 'next/image'

const images = [
  '/hersteller/0c59ccec-a782-4900-b310-0c3c1d51ab07.jpg',
  '/hersteller/9c582008-39e9-43bd-a10c-3b5733eb4659.jpg',
  '/hersteller/f50b89af-9f0f-4875-bd44-2bbf278820b8.jpg',
  '/hersteller/typus-airefine-image-1791274833564.jpg',
  '/hersteller/prediction-8av22w8k9srmw0cygz9vbkkzx8.png',
  '/hersteller/prediction-cecmtn8qq5rmy0cygyxrndemcg.png',
  '/hersteller/prediction-e76q9cvbynrmr0cygy4afb13fr.png',
  '/hersteller/prediction-h71ac7x22xrmw0cygxqrehwypw.png',
  '/hersteller/prediction-h785r30bt1rmw0cygz0sdqw32r.png',
  '/hersteller/prediction-hywt9y7ak1rmt0cygy18vd0dq8.png',
  '/hersteller/prediction-jqyf483s9drmy0cygz6rt8p08g.png',
  '/hersteller/prediction-pht52dcp0srmr0cygz6tjtxvmg.png',
  '/hersteller/prediction-rr8jrjn4hxrmy0cygys9s3ykfg.png',
  '/hersteller/prediction-t7258ddszxrmw0cygydtgyw62c.png',
  '/hersteller/prediction-vhfc3w3vjhrmt0cygyw95xmw8m.png',
  '/hersteller/prediction-vrz0y04cfhrmy0cygz080gmwq4.png',
]

export function ManufacturerSlideshow() {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-transparent flex items-center">
      <div className="flex w-max animate-infinite-scroll gap-6 px-3 hover:[animation-play-state:paused]">
        {/* Double the array to create a seamless infinite loop */}
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative w-[320px] sm:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-md border border-neutral-200/50 dark:border-neutral-800"
          >
            <Image
              src={src}
              alt="TYPUS AI Visualization"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 320px, 400px"
              unoptimized
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
      `}</style>
    </div>
  )
}
