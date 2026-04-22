'use client'
import { cn } from '@/lib/utils'
import { MediaBucketUrl } from '@/lib/constants'
import { Redo, Undo } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface PhotoStripAnimationProps {
  className?: string
}

export const PhotoStripAnimation = ({
  className,
}: PhotoStripAnimationProps) => {
  const t = useTranslations('Compare')
  const originalImages = [
    MediaBucketUrl + 'before-after/slider_original/3d_original.webp',
    MediaBucketUrl + 'before-after/slider_original/cad_original.webp',
    MediaBucketUrl + 'before-after/slider_original/colormap_original.webp',
    MediaBucketUrl + 'before-after/slider_original/freepik_original.webp',
    MediaBucketUrl + 'before-after/slider_original/sitemodel_original.webp',
    MediaBucketUrl + 'before-after/slider_original/sketch_original.webp',
  ]

  // Result/After images (photorealistic renders)
  const resultImages = [
    MediaBucketUrl + 'before-after/slider_output/3d_result.webp',
    MediaBucketUrl + 'before-after/slider_output/cad_result.webp',
    MediaBucketUrl + 'before-after/slider_output/colormap_result.webp',
    MediaBucketUrl + 'before-after/slider_output/freepik_result.webp',
    MediaBucketUrl + 'before-after/slider_output/sitemodel_result.webp',
    MediaBucketUrl + 'before-after/slider_output/sketch_result.webp',
  ]

  return (
    <div
      className={cn('mt-20 max-w-7xl px-2 sm:px-0 overflow-hidden', className)}
    >
      {/* Desktop Labels */}
      <div className='hidden flex-row justify-between font-medium text-lg md:flex mb-4'>
        <div className='flex flex-1 flex-row items-end justify-start space-x-2 text-black'>
          <span className='pb-[2px] animate-breathe-black-gray'>
            {t('original')}
          </span>
          <Redo className='h-5 w-5' style={{ transform: 'rotate(60deg)' }} />
        </div>
        <div className='flex flex-1 flex-row items-end justify-end space-x-2 text-black'>
          <Undo className='h-5 w-5' style={{ transform: 'rotate(-60deg)' }} />
          <span className='pb-[2px] animate-breathe-black-gray'>
            {t('result')}
          </span>
        </div>
      </div>

      {/* Desktop Photo Strip - Match HTML structure */}
      <div className='relative hidden w-full overflow-x-hidden py-3 md:block'>
        {/* Magic separator */}
        <div className='magic-separator absolute left-1/2 top-0 z-20 h-full w-[2px]  bg-neutral-500'></div>

        {/* Left side - Original images with overflow hidden */}
        <div className='absolute left-0 top-3 z-10 w-1/2 overflow-x-hidden'>
          <div
            className='photo_strip flex flex-row items-center photo_strip_animation'
            style={{ width: '200%' }}
          >
            {/* Render original images twice for seamless loop */}
            {[...originalImages, ...originalImages].map((image, index) => (
              <div
                key={index}
                className='relative aspect-square w-1/2 flex-shrink-0 md:w-1/4'
              >
                <img
                  alt={`photo frame ${index % originalImages.length}`}
                  loading='lazy'
                  width='512'
                  height='512'
                  decoding='async'
                  data-nimg='1'
                  className='checkered h-full w-full  border object-cover sm:'
                  style={{ color: 'transparent' }}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Synchronized result images */}
        <div className='z-0 w-full'>
          <div className='photo_strip flex w-full flex-row items-center photo_strip_animation'>
            {/* Render result images twice for seamless loop, synchronized with originals */}
            {[...resultImages, ...resultImages].map((image, index) => (
              <div
                key={index}
                className='relative aspect-square w-1/2 flex-shrink-0 md:w-1/4'
              >
                <img
                  alt={`photo frame ${index % resultImages.length}`}
                  loading='lazy'
                  width='512'
                  height='512'
                  decoding='async'
                  data-nimg='1'
                  className='checkered h-full w-full  border object-cover sm:'
                  style={{ color: 'transparent' }}
                  src={image}
                />
                <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-center p-2'>
                  <div className='mx-auto bg-black bg-opacity-50 px-2 text-xs text-white md:text-sm'>
                    {t('aiGenerated')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Photo Strip */}
      <div className='relative block w-full overflow-hidden py-3 md:hidden'>
        {/* Magic separator */}
        <div className='magic-separator absolute left-1/2 top-0 z-20 h-full w-[1px]  bg-neutral-500'></div>

        {/* Left side - Original images */}
        <div className='absolute left-0 top-3 z-10 w-1/2 overflow-x-hidden'>
          <div
            className='photo_strip flex flex-row items-center photo_strip_animation_mobile'
            style={{ width: '200%' }}
          >
            {[...originalImages, ...originalImages].map((image, index) => (
              <div
                key={index}
                className='relative aspect-square w-1/2 flex-shrink-0'
              >
                <img
                  alt={`photo frame ${index % originalImages.length}`}
                  loading='lazy'
                  width='512'
                  height='512'
                  decoding='async'
                  data-nimg='1'
                  className='checkered h-full w-full  border object-cover'
                  style={{ color: 'transparent' }}
                  src={image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Synchronized result images */}
        <div className='z-0 w-full'>
          <div className='photo_strip flex w-full flex-row items-center photo_strip_animation_mobile'>
            {[...resultImages, ...resultImages].map((image, index) => (
              <div
                key={index}
                className='relative aspect-square w-1/2 flex-shrink-0'
              >
                <img
                  alt={`photo frame ${index % resultImages.length}`}
                  loading='lazy'
                  width='512'
                  height='512'
                  decoding='async'
                  data-nimg='1'
                  className='checkered h-full w-full  border object-cover'
                  style={{ color: 'transparent' }}
                  src={image}
                />
                <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-center p-2'>
                  <div className='mx-auto bg-black bg-opacity-50 px-2 text-xs text-white'>
                    AI GENERATED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add the CSS animations */}
      <style jsx>{`
        .magic-separator {
          transform: translateX(-50%);
        }

        .photo_strip {
          animation: photo_strip_animation 36s linear infinite;
        }

        .photo_strip_animation {
          animation-duration: 36s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: normal;
          animation-fill-mode: none;
          animation-play-state: running;
          animation-name: photo_strip_animation;
        }

        @keyframes photo_strip_animation {
          0% {
            transform: translateX(-200%);
          }
          to {
            transform: translateX(0);
          }
        }

        .photo_strip_mobile {
          animation: photo_strip_animation_mobile 18s linear infinite;
        }

        .photo_strip_animation_mobile {
          animation-duration: 18s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: normal;
          animation-fill-mode: none;
          animation-play-state: running;
          animation-name: photo_strip_animation_mobile;
        }

        @keyframes photo_strip_animation_mobile {
          0% {
            transform: translateX(-400%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
