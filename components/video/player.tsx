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
}

export function VideoPlayer({ src, title = "Video", poster, height = "h-[400px]", preload = "metadata" }: Props) {
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
  }, [])

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
        "group relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md shadow-2xl",
        isPlaying ? "ring-2 ring-blue-500/40" : "ring-1 ring-white/5",
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
                <Play className="h-8 w-8 text-white drop-shadow" />
                <span className="sr-only">Play</span>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 rounded-full"
                  style={{
                    boxShadow: "0 0 40px 8px rgba(59,130,246,0.35), 0 0 80px 16px rgba(34,211,238,0.2)",
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

      {/* Controls */}
      <AnimatePresence>
        {(isControlsVisible || !isPlaying || isScrubbing) && (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 pb-3 pt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            {/* Progress */}
            <div
              id="progress-bar"
              className="relative mb-3 h-3 w-full cursor-pointer rounded-full bg-white/10"
              onMouseMove={onProgressMouseMove}
              onMouseLeave={onProgressLeave}
              onMouseDown={onProgressMouseDown}
              role="slider"
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={duration || 0}
              aria-valuenow={currentTime}
            >
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 rounded-full bg-white/20"
                style={{ width: `${bufferedPct}%` }}
              />
              <motion.div
                aria-hidden
                className="absolute inset-y-0 left-0 rounded-full bg-blue-500"
                style={{ width: `${progressPct}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
              <motion.div
                aria-hidden
                className="absolute -top-[6px] h-4 w-4 mt-[3px] -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.25)]"
                style={{ left: `calc(${progressPct}% )` }}
              />
              <AnimatePresence>
                {hoverTime !== null && (
                  <motion.div
                    className="absolute -top-8 rounded-md bg-zinc-900 px-2 py-1 text-xs text-white ring-1 ring-white/10"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    style={{
                      left: `max(0px, min(calc(100% - 40px), calc(${((hoverTime / (duration || 1)) * 100).toFixed(
                        2,
                      )}% - 20px)))`,
                    }}
                  >
                    {formatTime(hoverTime)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  title={isPlaying ? "Pause (Space/K)" : "Play (Space/K)"}
                  className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => skip(-10)}
                  aria-label="Rewind 10 seconds"
                  title="Rewind 10s (J/←)"
                  className="h-9 w-9 rounded-full bg-white/5 text-white hover:bg-white/15"
                >
                  <Rewind className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => skip(10)}
                  aria-label="Forward 10 seconds"
                  title="Forward 10s (L/→)"
                  className="h-9 w-9 rounded-full bg-white/5 text-white hover:bg-white/15"
                >
                  <FastForward className="h-5 w-5" />
                </Button>

                <div className="ml-2 hidden items-center gap-2 md:flex">
                  <span className="min-w-[68px] text-xs tabular-nums text-zinc-200">{formatTime(currentTime)}</span>
                  <span className="text-xs text-zinc-400">/</span>
                  <span className="min-w-[68px] text-xs tabular-nums text-zinc-200">{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                  title="Mute (M)"
                  className="h-9 w-9 rounded-full bg-white/5 text-white hover:bg-white/15"
                >
                  {muted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <div className="hidden w-28 md:block">
                  <Slider
                    value={[muted ? 0 : Math.round(volume * 100)]}
                    onValueChange={([v]) => {
                      const nv = (v ?? 0) / 100
                      setVolume(nv)
                      if (nv > 0 && muted) setMuted(false)
                      if (nv === 0) setMuted(true)
                    }}
                    aria-label="Volume"
                  />
                </div>

                <Button
                  variant="ghost"
                  onClick={cycleSpeed}
                  aria-label="Change playback speed"
                  title="Change speed"
                  className="h-9 rounded-full bg-white/5 px-3 text-xs text-white hover:bg-white/15"
                >
                  <Gauge className="mr-1 h-4 w-4 text-cyan-400" />
                  {playbackRate}x
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePiP}
                  aria-label="Picture in Picture"
                  title="Picture in Picture (P)"
                  className="h-9 w-9 rounded-full bg-white/5 text-white hover:bg-white/15"
                >
                  <PictureInPicture2 className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  title="Fullscreen (F)"
                  className="h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
