import Reveal from '@/components/ui/Reveal'
import styles from './SoftSkills.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface SoftSkillsProps {
  locale: Locale
  dict: Dictionary
}

export default function SoftSkills({ locale, dict }: SoftSkillsProps) {
  return (
    <section className={styles.section}>
      <h2>{dict.sections.softSkills.title}</h2>

      <div className={styles.grid}>
        {resume.traits.map((trait, index) => (
          <Reveal key={trait.id} delay={0.05 + index * 0.05}>
            <div className={styles.trait}>
              <h3 className={styles.title}>{trait.title[locale]}</h3>
              <p className={styles.body}>{trait.body[locale]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
