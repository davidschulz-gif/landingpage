'use client'

import { useTranslations } from 'next-intl'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'

export function TestimonialsSection() {
    const t = useTranslations('Testimonials')

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                {/* Christina Maximowitz Testimonial */}
                <div className="bg-white border-2 border-black rounded-none p-6 relative flex-1 flex flex-col" style={{
                    boxShadow: '8px 8px 0px #000000'
                }}>
                    {/* LinkedIn Logo */}
                    <a
                        href="https://www.linkedin.com/in/christina-maximowitz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    <div className="flex items-start space-x-4 mb-6">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                                src="/testimonials/christina-maximowitz.jpg"
                                alt="Christina Maximowitz"
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1 pr-8">
                            <a
                                href="https://www.linkedin.com/in/christina-maximowitz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t('christina.name')}</h3>
                            </a>
                            <p className="text-sm font-semibold text-gray-800 mb-1">{t('christina.role')}</p>
                            <p className="text-sm text-gray-600 leading-tight mb-2">{t('christina.description')}</p>
                            <div className="flex items-center text-sm text-gray-800 font-medium">
                                <CheckIcon className="h-4 w-4 mr-1 text-blue-600 stroke-[3]" />
                                <span>{t('christina.tag')}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-900 text-lg font-medium mb-6 leading-relaxed flex-grow italic">
                        "{t('christina.content')}"
                    </p>

                    <p className="text-xs text-gray-500 font-medium">{t('christina.date')}</p>
                </div>

                {/* Carsten Ingolf Gösse Testimonial */}
                <div className="bg-white border-2 border-black rounded-none p-6 relative flex-1 flex flex-col" style={{
                    boxShadow: '8px 8px 0px #000000'
                }}>
                    {/* LinkedIn Logo */}
                    <a
                        href="https://www.linkedin.com/in/carsten-ingolf-g%C3%B6ssel-6648ab7a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    <div className="flex items-start space-x-4 mb-6">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                                src="/testimonials/carsten-ingolf-goesse.jpg"
                                alt="Carsten Ingolf Gösse"
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="flex-1 pr-8">
                            <a
                                href="https://www.linkedin.com/in/carsten-ingolf-g%C3%B6ssel-6648ab7a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t('carsten.name')}</h3>
                            </a>
                            <p className="text-sm font-semibold text-gray-800 leading-snug">{t('carsten.role')}</p>
                        </div>
                    </div>

                    <p className="text-gray-900 text-lg font-medium mb-6 leading-relaxed flex-grow italic">
                        "{t('carsten.content')}"
                    </p>

                    <p className="text-xs text-gray-500 font-medium">{t('carsten.date')}</p>
                </div>
            </div>
        </div>
    )
}
