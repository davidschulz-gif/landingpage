'use client'

import { useTranslations } from 'next-intl'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

interface TestimonialData {
    key: string;
    profileUrl: string;
    imageUrl?: string;
    initials: string;
    gradientClass: string;
    hasTagAndDesc: boolean;
    commentLink: string;
}

export function TestimonialsSection() {
    const t = useTranslations('Testimonials')

    const testimonials: TestimonialData[] = [
        {
            key: 'christina',
            profileUrl: 'https://www.linkedin.com/in/christina-maximowitz',
            imageUrl: '/testimonials/christina-maximowitz.jpg',
            initials: 'CM',
            gradientClass: 'from-neutral-900 to-neutral-700',
            hasTagAndDesc: true,
            commentLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287191797840866664449%2Curn%3Ali%3Aactivity%3A7188164717385822208%29',
        },
        {
            key: 'carsten',
            profileUrl: 'https://www.linkedin.com/in/carsten-ingolf-gössel-6648ab7a',
            imageUrl: '/testimonials/carsten-ingolf-goesse.jpg',
            initials: 'CG',
            gradientClass: 'from-neutral-800 to-neutral-600',
            hasTagAndDesc: false,
            commentLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287188457579973423105%2Curn%3Ali%3Aactivity%3A7188164717385822208%29',
        },
         {
            key: 'wiebke',
            profileUrl: 'https://www.linkedin.com/in/wiebke-ahues-6433bb76',
           imageUrl: '/testimonials/wiebke.jpeg',
            initials: 'WA',
            gradientClass: 'from-neutral-950 via-neutral-900 to-neutral-800',
            hasTagAndDesc: false,
            commentLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287192197014808387584%2Curn%3Ali%3Aactivity%3A7188164717385822208%29',
        },
         {
            key: 'killian',
            profileUrl: 'https://www.linkedin.com/in/kilianeckle',
            imageUrl: '/testimonials/kilianeckle.jpeg',
            initials: 'KE',
            gradientClass: 'from-neutral-900 via-neutral-800 to-neutral-700',
            hasTagAndDesc: false,
            commentLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287188441609112334336%2Curn%3Ali%3Aactivity%3A7188164717385822208%29',
        },
         {
            key: 'lena',
            profileUrl: 'https://www.linkedin.com/in/lena-keilhofer-a29017235',
            imageUrl: '/testimonials/lena.jpeg',
            initials: 'LK',
            gradientClass: 'from-neutral-950 via-neutral-900 to-neutral-800',
            hasTagAndDesc: false,
            commentLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7188164717385822208/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287190285063580717057%2Curn%3Ali%3Aactivity%3A7188164717385822208%29',
        },
    ]

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
                {testimonials.map((item) => (
                    <div 
                        key={item.key}
                        className="bg-white dark:bg-neutral-950/40 border-2 border-black dark:border-neutral-800 rounded-none p-5 lg:p-4 relative flex flex-col transition-all duration-300 hover:-translate-y-1" 
                        style={{
                            boxShadow: '8px 8px 0px #000000'
                        }}
                    >
                        {/* LinkedIn Logo Link */}
                        <a
                            href={item.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 hover:opacity-80 transition-opacity z-10"
                            aria-label={`${t(`${item.key}.name`)} LinkedIn Profile`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        <div className="flex items-start space-x-3 lg:space-x-2 mb-6">
                            <div className="relative w-12 h-12 lg:w-10 lg:h-10 flex-shrink-0">
                                {item.imageUrl ? (
                                    <Image
                                        src={item.imageUrl}
                                        alt={t(`${item.key}.name`)}
                                        fill
                                        className="rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
                                    />
                                ) : (
                                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradientClass} flex items-center justify-center text-white font-bold text-sm lg:text-xs tracking-wider border border-neutral-800/10 shadow-inner`}>
                                        {item.initials}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 pr-4 lg:pr-1 min-w-0">
                                <a
                                    href={item.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline inline-block max-w-full"
                                >
                                    <h3 className="font-bold text-gray-900 dark:text-neutral-100 text-base lg:text-sm mb-0.5 truncate">
                                        {t(`${item.key}.name`)}
                                    </h3>
                                </a>
                                <p className="text-xs font-semibold text-gray-800 dark:text-neutral-300 leading-snug line-clamp-2">
                                    {t(`${item.key}.role`)}
                                </p>
                                {item.hasTagAndDesc && (
                                    <>
                                        <p  className="text-xs text-gray-600 dark:text-neutral-400 leading-tight mt-1 truncate">
                                            {t(`${item.key}.description`)}
                                        </p>
                                        <div className="flex items-center text-xs text-gray-800 dark:text-neutral-300 font-medium mt-1.5">
                                            <CheckIcon className="h-3 w-3 mr-1 text-black dark:text-white stroke-[3]" />
                                            <span>{t(`${item.key}.tag`)}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <a
                            href={item.commentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-neutral-100 text-sm lg:text-xs font-medium mb-6 leading-relaxed flex-grow italic"
                            >
                            "{t(`${item.key}.content`)}"
                        </a>

                        <p className="text-[10px] text-gray-500 dark:text-neutral-500 font-medium mt-auto">
                            {t(`${item.key}.date`)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
