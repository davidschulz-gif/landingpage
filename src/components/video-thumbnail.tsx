'use client'

import { Instagram, Play } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface VideoThumbnailProps {
    href: string
    imageSrc: string
    title: string
    subtitle?: string
    handle?: string
}

export function VideoThumbnail({ href, imageSrc, title, subtitle, handle = "@typus.ai" }: VideoThumbnailProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[9/16] w-full max-w-[200px] mx-auto overflow-hidden rounded-[24px] border-2 border-black shadow-[4px_4px_0px_#000000] group bg-gray-100"
            whileHover={{ y: -4, x: -2, boxShadow: "6px_6px_0px_#000000", transition: { duration: 0.2 } }}
        >
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 group-hover:from-black/20 group-hover:to-black/50 transition-colors" />

            {/* Top Right Reel Icon */}
            <div className="absolute top-4 right-4 text-white drop-shadow-md opacity-90">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                >
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                </svg>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Title Overlay */}
                <div className="mt-8">
                    <p className="text-white text-[13px] font-bold leading-tight text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-1">
                        {title}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                    {subtitle && (
                        <p className="text-white text-[11px] font-semibold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-95">
                            {subtitle}
                        </p>
                    )}

                    {/* Handle and Icon */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-white/80 shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                            <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-black text-sm tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{handle}</span>
                    </div>
                </div>
            </div>

            {/* Instagram Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl">
                    <Instagram className="w-6 h-6 text-white" />
                </div>
            </div>
        </motion.a>
    )
}
