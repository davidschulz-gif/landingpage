"use client"
import { motion } from "framer-motion"
import { useState } from "react"

interface YouTubeVideoProps {
  videoId: string
  title?: string
  className?: string
}

export const YouTubeVideo = ({ videoId, title, className }: YouTubeVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 z-10 pointer-events-none" />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500" />
        </div>
      )}
    </motion.div>
  )
}
