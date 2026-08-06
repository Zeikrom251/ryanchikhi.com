'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default function ThemeSync() {
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    const stored = localStorage.getItem('theme')
    const theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'

    if (document.documentElement.dataset.theme !== theme) {
      document.documentElement.dataset.theme = theme
    }
  }, [pathname])

  return null
}
