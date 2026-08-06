import { Fragment } from 'react'
import LogoTile from '@/components/ui/LogoTile'
import Reveal from '@/components/ui/Reveal'
import styles from './Education.module.scss'
import { resume } from '@/data/resume'
import { formatRange } from '@/lib/dates'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface EducationProps {
  locale: Locale
  dict: Dictionary
}

export default function Education({ locale, dict }: EducationProps) {
  return (
    <section id="education" className={styles.section}>
      <h2>{dict.sections.education.title}</h2>

      <div className={styles.columns}>
        {resume.education.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 && <div className={styles.divider} aria-hidden="true" />}
            <Reveal delay={index * 0.08} className={styles.column}>
              <LogoTile
                logo={entry.logo}
                logoBg={entry.logoBg}
                accent={entry.accent}
                name={entry.school}
              />
              <p className={styles.years}>{formatRange(entry.dates, locale, dict.meta.present)}</p>
              <h3 className={styles.degree}>{entry.degree[locale]}</h3>
              <p className={styles.school}>
                {entry.school}
                <span className={styles.plain}>, {entry.location}</span>
              </p>
              {entry.specialty && <p className={styles.specialty}>{entry.specialty[locale]}</p>}
            </Reveal>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
