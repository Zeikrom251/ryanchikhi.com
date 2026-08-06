import LogoTile from '@/components/ui/LogoTile'
import Reveal from '@/components/ui/Reveal'
import styles from './Experience.module.scss'
import { resume } from '@/data/resume'
import { formatDuration, formatRange } from '@/lib/dates'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface ExperienceProps {
  locale: Locale
  dict: Dictionary
}

export default function Experience({ locale, dict }: ExperienceProps) {
  return (
    <section id="work" className={styles.section}>
      <h2>{dict.sections.experience.title}</h2>

      <div className={styles.list}>
        {resume.experiences.map((job, index) => (
          <Reveal key={job.id} delay={index * 0.06}>
            <article className={styles.item}>
              <LogoTile
                logo={job.logo}
                logoBg={job.logoBg}
                accent={job.accent}
                name={job.company}
              />

              <div className={styles.body}>
                <h3>{job.role[locale]}</h3>
                <p className={styles.company}>
                  {job.company}
                  <span className={styles.plain}>, {job.kind[locale]}</span>
                </p>
                <p className={styles.dates}>
                  {formatRange(job.dates, locale, dict.meta.present)}
                  <span className={styles.dot}>·</span>
                  {formatDuration(job.dates, dict.meta)}
                </p>

                <p className={styles.summary}>{job.summary[locale]}</p>

                <ul className={styles.tasks}>
                  {job.tasks[locale].map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                {job.techs.length > 0 && (
                  <ul className={styles.techs} aria-label={dict.meta.stack}>
                    {job.techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
