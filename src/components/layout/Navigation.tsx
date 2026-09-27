'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring } from 'motion/react'
import LocaleSwitch from './LocaleSwitch'
import ThemeToggle from './ThemeToggle'
import { lenis } from './SmoothScroll'
import styles from './Navigation.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface NavigationProps {
  locale: Locale
  dict: Dictionary
}

export default function Navigation({ locale, dict }: NavigationProps) {
  const pathname = usePathname()
  const [lifted, setLifted] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 34, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const home = `/${locale}`
  const onHome = pathname === home
  const onProjects = pathname.startsWith(`${home}/projects`)

  // Lights up Contact while the footer is in view, the same way Home does.
  // Only meaningful on the home page, so it is gated there rather than reset.
  const [contactInView, setContactInView] = useState(false)
  const activeSection = onHome && contactInView ? 'contact' : null

  useEffect(() => {
    if (!onHome) return
    const contact = document.getElementById('contact')
    if (!contact) return

    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { rootMargin: '-40% 0px -55% 0px' }
    )

    observer.observe(contact)
    return () => observer.disconnect()
  }, [onHome])

  const scrollToHash = (id: 'contact') => (event: React.MouseEvent) => {
    if (!onHome) return
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    setContactInView(true)
    if (lenis) lenis.scrollTo(target)
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.wrap}>
      <a href="#content" className={styles.skip}>
        {dict.nav.skipToContent}
      </a>

      <nav className={`${styles.pill} ${lifted ? styles.lifted : ''}`} aria-label={dict.nav.menu}>
        <Link
          href={home}
          className={styles.brand}
          onClick={(event) => {
            if (!onHome) return
            event.preventDefault()
            setContactInView(false)
            if (lenis) lenis.scrollTo(0)
            else window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className={styles.avatarWrap}>
            <Image
              src={resume.portrait.src}
              alt=""
              width={128}
              height={128}
              className={styles.avatar}
              priority
            />
            <svg className={styles.ring} viewBox="0 0 40 40" aria-hidden="true">
              <circle className={styles.ringTrack} cx="20" cy="20" r="18.5" pathLength={1} />
              <motion.circle
                className={styles.ringFill}
                cx="20"
                cy="20"
                r="18.5"
                pathLength={1}
                style={{ pathOffset: 0, pathLength: progress }}
              />
            </svg>
          </span>
          <span className={styles.brandName}>{resume.name}</span>
        </Link>

        <div className={styles.links}>
          <Link
            href={home}
            className={`${styles.link} ${onHome && !activeSection ? styles.active : ''}`}
            onClick={() => setContactInView(false)}
          >
            <HomeIcon />
            <span>{dict.nav.home}</span>
          </Link>

          <Link
            href={`${home}/projects`}
            className={`${styles.link} ${onProjects ? styles.active : ''}`}
          >
            <GridIcon />
            <span>{dict.nav.projects}</span>
          </Link>

          <a
            href={`${home}#contact`}
            className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={scrollToHash('contact')}
          >
            <MailIcon />
            <span>{dict.nav.contact}</span>
          </a>
        </div>

        <div className={styles.controls}>
          <LocaleSwitch locale={locale} label={dict.nav.switchLanguage} />
          <ThemeToggle label={dict.nav.toggleTheme} />
        </div>
      </nav>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </g>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3" y="5.5" width="18" height="13" rx="3" />
        <path d="m4 8 7.1 4.6a1.7 1.7 0 0 0 1.8 0L20 8" strokeLinecap="round" />
      </g>
    </svg>
  )
}
