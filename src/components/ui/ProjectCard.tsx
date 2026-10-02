'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.scss'
import type { Project } from '@/data/types'
import type { Locale } from '@/i18n/config'

interface ProjectCardProps {
  project: Project
  locale: Locale
  wide?: boolean
}

export default function ProjectCard({ project, locale, wide = false }: ProjectCardProps) {
  function trackPointer(event: React.MouseEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty(
      '--pointer-x',
      `${((event.clientX - bounds.left) / bounds.width) * 100}%`
    )
    event.currentTarget.style.setProperty(
      '--pointer-y',
      `${((event.clientY - bounds.top) / bounds.height) * 100}%`
    )
  }

  const thumb = project.banner ?? project.cover

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className={`${styles.card} ${wide ? styles.wide : ''}`}
      onMouseMove={trackPointer}
    >
      <span className={styles.sheen} aria-hidden="true" />

      <div className={styles.banner} style={thumb ? undefined : { background: project.accent }}>
        {thumb ? (
          <Image src={thumb} alt="" fill sizes="(max-width: 767px) 100vw, 400px" />
        ) : project.logo ? (
          <Image src={project.logo} alt="" width={96} height={96} className={styles.bannerLogo} />
        ) : (
          <span className={styles.bannerMark} aria-hidden="true">
            {project.name.charAt(0)}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {project.logo && (
            <Image src={project.logo} alt="" width={40} height={40} className={styles.mark} />
          )}
          <span className={styles.name}>{project.name}</span>
          <span className={styles.type}>{project.kind[locale]}</span>
        </div>

        <h3 className={styles.headline}>{project.tagline[locale]}</h3>
        <p className={styles.info}>{project.role[locale]}</p>
      </div>
    </Link>
  )
}
