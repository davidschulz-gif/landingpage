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
import { Instagram } from 'lucide-react'
import TypusLogoBlack from './common/typus-logo-black'

interface CreatorVideo {
    id: number
    src: string
    link: string
    likes: string
    comments: number
}

const creatorVideos: CreatorVideo[] = [
    // { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DUnbsnMjBWD/media/?size=l', id: 20, link: 'https://www.instagram.com/reel/DUnbsnMjBWD/', likes: '19.8k', comments: 312 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DXMg5yoDPf-/media/?size=l', id: 21, link: 'https://www.instagram.com/reel/DXMg5yoDPf-/', likes: '10.5k', comments: 150 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DYW7sTtqOtX/media/?size=l', id: 22, link: 'https://www.instagram.com/reel/DYW7sTtqOtX/', likes: '14.2k', comments: 210 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DYndENNsHkW/media/?size=l', id: 23, link: 'https://www.instagram.com/reel/DYndENNsHkW/', likes: '8.9k', comments: 120 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DYrz0Plx95u/media/?size=l', id: 24, link: 'https://www.instagram.com/reel/DYrz0Plx95u/', likes: '21.3k', comments: 340 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DYFhvurIp1i/media/?size=l', id: 26, link: 'https://www.instagram.com/reel/DYFhvurIp1i/', likes: '17.8k', comments: 260 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DYUV6ztTd3L/media/?size=l', id: 25, link: 'https://www.instagram.com/reel/DYUV6ztTd3L/', likes: '5.6k', comments: 80 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DXysyBezoO4/media/?size=l', id: 27, link: 'https://www.instagram.com/reel/DXysyBezoO4/', likes: '11.1k', comments: 175 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DW4XXNBjGEw/media/?size=l', id: 28, link: 'https://www.instagram.com/reel/DW4XXNBjGEw/', likes: '9.4k', comments: 135 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DH6GJ96CLvm/media/?size=l', id: 29, link: 'https://www.instagram.com/reel/DH6GJ96CLvm/', likes: '13.2k', comments: 195 },

    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DJEMfELAcwF/media/?size=l', id: 1, link: 'https://www.instagram.com/reel/DJEMfELAcwF/', likes: '12.4k', comments: 142 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DILOHVlog-p/media/?size=l', id: 2, link: 'https://www.instagram.com/reel/DILOHVlog-p/', likes: '8.2k', comments: 89 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVYkIIwCbMP/media/?size=l', id: 4, link: 'https://www.instagram.com/reel/DVYkIIwCbMP/', likes: '6.7k', comments: 56 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVL3Ir8CLaS/media/?size=l', id: 5, link: 'https://www.instagram.com/reel/DVL3Ir8CLaS/', likes: '22.0k', comments: 412 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVYw17tiGBe/media/?size=l', id: 6, link: 'https://www.instagram.com/reel/DVYw17tiGBe/', likes: '4.5k', comments: 34 },
    // { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVYu2XiCr1t/media/?size=l', id: 7, link: 'https://www.instagram.com/reel/DVYu2XiCr1t/', likes: '10.9k', comments: 156 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVYi9cKiHfX/media/?size=l', id: 8, link: 'https://www.instagram.com/reel/DVYi9cKiHfX/', likes: '3.2k', comments: 28 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVEnRTRCBLA/media/?size=l', id: 9, link: 'https://www.instagram.com/reel/DVEnRTRCBLA/', likes: '18.4k', comments: 287 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVTpYsWiB1d/media/?size=l', id: 10, link: 'https://www.instagram.com/reel/DVTpYsWiB1d/', likes: '7.8k', comments: 92 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVYPW-UDWYY/media/?size=l', id: 11, link: 'https://www.instagram.com/reel/DVYPW-UDWYY/', likes: '9.3k', comments: 114 },
    // { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DU_rpVTERC-/media/?size=l', id: 12, link: 'https://www.instagram.com/reel/DU_rpVTERC-/', likes: '5.1k', comments: 45 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DU0nz_3DD4K/media/?size=l', id: 13, link: 'https://www.instagram.com/reel/DU0nz_3DD4K/', likes: '13.7k', comments: 167 },
    // { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVQjaPBDB5Z/media/?size=l', id: 14, link: 'https://www.instagram.com/reel/DVQjaPBDB5Z/', likes: '11.2k', comments: 123 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVEBRJ9jGoo/media/?size=l', id: 15, link: 'https://www.instagram.com/reel/DVEBRJ9jGoo/', likes: '25.6k', comments: 534 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVUY0fADDct/media/?size=l', id: 16, link: 'https://www.instagram.com/p/DVUY0fADDct/', likes: '4.8k', comments: 39 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DU5vy-bjJF4/media/?size=l', id: 17, link: 'https://www.instagram.com/reel/DU5vy-bjJF4/', likes: '16.9k', comments: 245 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DUqAGTNDs0I/media/?size=l', id: 18, link: 'https://www.instagram.com/reel/DUqAGTNDs0I/', likes: '8.5k', comments: 78 },
    // { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVH01T2jjFJ/media/?size=l', id: 19, link: 'https://www.instagram.com/reel/DVH01T2jjFJ/', likes: '14.2k', comments: 189 },
    { src: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DVbI4GVAEDM/media/?size=l', id: 3, link: 'https://www.instagram.com/reel/DVbI4GVAEDM/', likes: '15.1k', comments: 234 }, 
   ]

export function CreatorShowcaseSection() {
    const t = useTranslations('CreatorShowcase')

    return (
        <div
            className='w-full py-20'
            style={{ backgroundColor: '#fcfcfd' }}
            id='creators'
        >
            <div className='max-w-7xl mx-auto px-4'>
                <div className='text-center mb-16'>
                    <BreathingAnimationText animationType='black-gray'>
                        <motion.h2
                            className='text-2xl md:text-[30px] font-normal text-black mb-4'
                            style={{ fontFamily: "'Soyuz Grotesk', sans-serif" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {t('title')}
                        </motion.h2>
                    </BreathingAnimationText>
                    <BreathingAnimationText animationType='black-gray'>
                        <motion.p
                            className='text-gray-500 max-w-2xl mx-auto text-sm md:text-lg px-4 font-medium'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {t('subtitle')}
                        </motion.p>
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
                        {creatorVideos.map((video, index) => (
                            <CarouselItem
                                key={index}
                                className='pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <a href={video.link} target='_blank' rel='noopener noreferrer' className='block group'>
                                        <Card className='border-0 overflow-hidden shadow-xl rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-black'>
                                            <CardContent className='p-0 relative'>
                                                <div className='aspect-[9/16] relative overflow-hidden'>
                                                    <img
                                                        src={video.src}
                                                        alt={`Creator Video ${video.id}`}
                                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
                                                    />

                                                    {/* Top Overlay: Reels Icon */}
                                                    <div className='absolute top-4 right-4 text-white drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity'>
                                                        <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                                                            <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
                                                            <path d='M7 3v18M17 3v18M3 7h4M3 17h4M17 7h4M17 17h4' />
                                                        </svg>
                                                    </div>

                                                    {/* Bottom Gradient for readability */}
                                                    <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent' />

                                                    {/* Bottom Overlay: Dummy Info */}
                                                    <div className='absolute bottom-5 left-5 right-5 text-white flex flex-col gap-2'>
                                                        {/* <div className='flex items-center gap-2'> */}
                                                            {/* <div className='relative'> */}
                                                               
                                                                <div className='absolute -bottom-1 -left-1 w-[18px] h-[18px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-white flex items-center justify-center shadow-sm'>
                                                                    <Instagram className='w-[10px] h-[10px] text-white' strokeWidth={2.5} />
                                                                </div>
                                                            {/* </div> */}
                                                            <div className='absolute -bottom-1 left-6 text-xs font-semibold drop-shadow-sm'>@typus.ai</div>
                                                        {/* </div> */}
                                                    </div>

                                                    {/* Play Button Center Overlay */}
                                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                        <div className='w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 scale-75 group-hover:scale-100 transition-transform duration-500'>
                                                            <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                                                <path d='M8 5v14l11-7z' />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95' />
                    <CarouselNext className='p-2.5 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 rounded-full shadow-md border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 cursor-pointer active:scale-95' />
                </Carousel>
            </div>
        </div>
    )
}
