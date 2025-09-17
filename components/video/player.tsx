"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  FastForward,
  Rewind,
  PictureInPicture2,
  Gauge,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  src: string
  title?: string
  poster?: string
  height?: string
  preload?: "auto" | "metadata" | "none"
  shouldPlay?: boolean
}

export function VideoPlayer({ src, title = "Video", poster, height = "h-[400px]", preload = "metadata", shouldPlay = false }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isBuffering, setIsBuffering] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [hoverTime, setHoverTime] = React.useState<number | null>(null)
  const [volume, setVolume] = React.useState(0.8)
  const [muted, setMuted] = React.useState(false)
  const [playbackRate, setPlaybackRate] = React.useState(1)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [isControlsVisible, setIsControlsVisible] = React.useState(true)
  const [isScrubbing, setIsScrubbing] = React.useState(false)
  const [bufferedEnd, setBufferedEnd] = React.useState(0)

  // Only autoplay if shouldPlay is true
  React.useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldPlay) return
    
    const attemptPlay = () => {
      video.play().catch(() => {
        // Fallback: try again after user interaction
        const playOnInteraction = () => {
          video.play().catch(() => {})
          document.removeEventListener('click', playOnInteraction)
          document.removeEventListener('touchstart', playOnInteraction)
        }
        document.addEventListener('click', playOnInteraction)
        document.addEventListener('touchstart', playOnInteraction)
      })
    }
    
    if (video.readyState >= 3) {
      attemptPlay()
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true })
    }
  }, [shouldPlay])

  // Auto-hide controls during playback
  React.useEffect(() => {
    if (!isPlaying) {
      setIsControlsVisible(true)
      return
    }
    let timer: number | undefined
    const onMove = () => {
      setIsControlsVisible(true)
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setIsControlsVisible(false), 2500)
    }
    const el = containerRef.current
    el?.addEventListener("mousemove", onMove)
    el?.addEventListener("mouseleave", () => setIsControlsVisible(false))
    onMove()
    return () => {
      if (el) el.removeEventListener("mousemove", onMove)
      window.clearTimeout(timer)
    }
  }, [isPlaying])

  // Auto play when shouldPlay changes
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return
    
    if (shouldPlay && video.paused) {
      video.play().catch(() => {})
    } else if (!shouldPlay && !video.paused) {
      video.pause()
    }
  }, [shouldPlay])

  // Intersection observer for autoplay only if shouldPlay is true
  React.useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldPlay) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldPlay])

  // Media events
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setBuffered = () => {
      try {
        const ranges = video.buffered
        if (ranges.length) {
          const end = ranges.end(ranges.length - 1)
          setBufferedEnd(end)
        }
      } catch {}
    }

    const onLoaded = () => {
      setDuration(video.duration || 0)
      setBuffered()
    }
    const onTime = () => setCurrentTime(video.currentTime)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onWaiting = () => setIsBuffering(true)
    const onCanPlay = () => setIsBuffering(false)

    video.addEventListener("loadedmetadata", onLoaded)
    video.addEventListener("timeupdate", onTime)
    video.addEventListener("play", onPlay)
    video.addEventListener("pause", onPause)
    video.addEventListener("waiting", onWaiting)
    video.addEventListener("canplay", onCanPlay)
    video.addEventListener("progress", setBuffered)

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded)
      video.removeEventListener("timeupdate", onTime)
      video.removeEventListener("play", onPlay)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("waiting", onWaiting)
      video.removeEventListener("canplay", onCanPlay)
      video.removeEventListener("progress", setBuffered)
    }
  }, [src, shouldPlay, preload])

  // Sync state -> element
  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.volume = volume
    video.muted = muted
    video.playbackRate = playbackRate
  }, [volume, muted, playbackRate])

  // Fullscreen state
  React.useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", onFsChange)
    return () => document.removeEventListener("fullscreenchange", onFsChange)
  }, [])

  const formatTime = (t: number) => {
    if (!Number.isFinite(t)) return "0:00"
    const s = Math.floor(t % 60)
    const m = Math.floor((t / 60) % 60)
    const h = Math.floor(t / 3600)
    const pad = (n: number) => String(n).padStart(2, "0")
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
  }

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      try {
        await video.play()
      } catch {}
    } else {
      video.pause()
    }
  }

  const seekTo = (time: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.max(0, Math.min(time, duration || 0))
  }

  const skip = (delta: number) => seekTo(currentTime + delta)

  const onProgressInteract = (clientX: number) => {
    const bar = document.getElementById("progress-bar")
    if (!bar) return { pct: 0, time: 0 }
    const rect = bar.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const time = (duration || 0) * pct
    return { pct, time }
  }

  const onProgressMouseMove = (e: React.MouseEvent) => {
    const { time } = onProgressInteract(e.clientX)
    setHoverTime(time)
  }
  const onProgressLeave = () => setHoverTime(null)
  const onProgressMouseDown = (e: React.MouseEvent) => {
    setIsScrubbing(true)
    const { time } = onProgressInteract(e.clientX)
    seekTo(time)
    const onMove = (ev: MouseEvent) => {
      const { time } = onProgressInteract(ev.clientX)
      seekTo(time)
      setHoverTime(time)
    }
    const onUp = () => {
      setIsScrubbing(false)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  const toggleMute = () => setMuted((m) => !m)

  const cycleSpeed = () => {
    const rates = [0.5, 1, 1.25, 1.5, 2]
    const idx = rates.indexOf(playbackRate)
    setPlaybackRate(rates[(idx + 1) % rates.length])
  }

  const toggleFullscreen = async () => {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) {
      await el.requestFullscreen().catch(() => {})
    } else {
      await document.exitFullscreen().catch(() => {})
    }
  }

  const togglePiP = async () => {
    const video = videoRef.current as any
    if (!video) return
    // @ts-ignore
    if (document.pictureInPictureElement) {
      // @ts-ignore
      await document.exitPictureInPicture().catch(() => {})
    } else if (video.requestPictureInPicture) {
      await video.requestPictureInPicture().catch(() => {})
    }
  }

  // Keyboard shortcuts
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key.toLowerCase() === "k") {
      e.preventDefault()
      togglePlay()
    } else if (e.key.toLowerCase() === "m") {
      toggleMute()
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen()
    } else if (e.key.toLowerCase() === "p") {
      togglePiP()
    } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "j") {
      skip(-10)
    } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "l") {
      skip(10)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setVolume((v) => Math.min(1, v + 0.05))
      setMuted(false)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setVolume((v) => Math.max(0, v - 0.05))
      if (volume - 0.05 <= 0) setMuted(true)
    }
  }

  const progressPct = duration ? (currentTime / duration) * 100 : 0
  const bufferedPct = duration ? (bufferedEnd / duration) * 100 : 0

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md",
      )}
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-label={title}
    >
      {/* Video */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.35))",
          }}
        />

        <video
          ref={videoRef}
          className={`block w-full select-none object-cover ${height}`}
          src={src}
          poster={poster}
          playsInline
          preload={preload}
          controls={false}
          onClick={togglePlay}
          style={{ objectFit: 'cover' }}
          muted
          loop
          autoPlay={shouldPlay}
          webkit-playsinline="true"
        />

        {/* Center Play */}
        <AnimatePresence>
          {!isPlaying && !isBuffering && (
            <motion.button
              aria-label="Play"
              className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 p-6 backdrop-blur-md outline-none ring-1 ring-white/20 hover:bg-white/15"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onClick={togglePlay}
            >
              <div className="relative">
                <Play className="h-8 w-8 text-white" />
                <span className="sr-only">Play</span>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                  style={{
                    boxShadow: "none",
                  }}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 0.3, 0.7] }}
                  transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Buffering */}
        <AnimatePresence>
          {isBuffering && (
            <motion.div
              className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xs text-white ring-1 ring-white/10"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                <span>Buffering…</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </div>
  )
}
