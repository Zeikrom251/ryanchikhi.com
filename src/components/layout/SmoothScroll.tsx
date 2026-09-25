'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'motion/react'

// Shared with anchor links (see Navigation) so #hash clicks animate through
// the same smoothing as wheel/touch scrolling instead of jumping instantly.
export let lenis: Lenis | null = null

export default function SmoothScroll({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    lenis = new Lenis({ duration: 1.05, wheelMultiplier: 0.9 })

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis?.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
