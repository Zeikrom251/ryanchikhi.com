import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import styles from './Gallery.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface GalleryProps {
  locale: Locale
  dict: Dictionary
}

export default function Gallery({ locale, dict }: GalleryProps) {
  if (resume.gallery.length === 0) return null

  return (
    <section id="gallery" className={styles.section}>
      <h2>{dict.sections.gallery.title}</h2>

      <div className={styles.grid}>
        {resume.gallery.map((shot, index) => (
          <Reveal
            key={shot.id}
            delay={index * 0.06}
            className={shot.wide ? styles.wide : undefined}
          >
            <figure className={styles.tile}>
              {shot.src ? (
                <Image
                  src={shot.src}
                  alt={shot.alt[locale]}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className={styles.image}
                />
              ) : (
                <span className={styles.placeholder} aria-hidden="true" />
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
