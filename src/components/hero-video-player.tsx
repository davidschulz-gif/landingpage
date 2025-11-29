'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useRef, useState } from 'react'

interface HeroVideoPlayerProps {
  src: string
  className?: string
  ariaLabel?: string
}

export function HeroVideoPlayer({
  src,
  className,
  ariaLabel = 'Hero video',
}: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Error playing video:', error)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    const newMutedState = !isMuted
    video.muted = newMutedState
    setIsMuted(newMutedState)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const newVolume = parseFloat(e.target.value)
    video.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  return (
    <div className={cn('relative group', className)}>
      <video
        ref={videoRef}
        className='w-full h-auto rounded-lg shadow-2xl object-cover'
        src={src}
        loop
        playsInline
        preload='metadata'
        aria-label={ariaLabel}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Custom Controls Overlay */}
      <AnimatePresence>
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg pointer-events-none transition-opacity duration-300 opacity-0',
            {
              'group-hover:opacity-100': isPlaying,
            }
          )}
        >
          {/* Bottom Controls Bar */}
          <div className='absolute bottom-0 left-0 right-0 p-3 md:p-4 pointer-events-auto'>
            <div className='flex items-center gap-2 md:gap-3 bg-black/80 backdrop-blur-sm rounded-none px-3 md:px-4 py-2 md:py-2.5 border border-white/10'>
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white text-black hover:bg-gray-100 transition-all duration-200 flex-shrink-0'
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {isPlaying ? (
                  <Pause
                    className='w-4 h-4 md:w-5 md:h-5'
                    fill='currentColor'
                  />
                ) : (
                  <Play
                    className='w-4 h-4 md:w-5 md:h-5 ml-0.5'
                    fill='currentColor'
                  />
                )}
              </button>

              {/* Volume Control */}
              <div className='flex items-center gap-2 flex-1 min-w-0'>
                <button
                  onClick={toggleMute}
                  className='flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white text-black hover:bg-gray-100 transition-all duration-200 flex-shrink-0'
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className='w-4 h-4 md:w-5 md:h-5' />
                  ) : (
                    <Volume2 className='w-4 h-4 md:w-5 md:h-5' />
                  )}
                </button>
                <div className='flex-1 min-w-0'>
                  <input
                    type='range'
                    min='0'
                    max='1'
                    step='0.01'
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className='w-full h-1.5 bg-white/20 appearance-none cursor-pointer'
                    style={{
                      background: `linear-gradient(to right, white 0%, white ${
                        (isMuted ? 0 : volume) * 100
                      }%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`,
                    }}
                    aria-label='Volume'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>

      {/* Center Play Button (when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={togglePlay}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-black text-white hover:bg-gray-900 transition-all duration-200 flex items-center justify-center shadow-lg pointer-events-auto'
            aria-label='Play video'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <Play className='w-6 h-6 md:w-7 md:h-7 ml-1' fill='currentColor' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
