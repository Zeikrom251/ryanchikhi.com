'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import styles from './TechSkills.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface TechSkillsProps {
  locale: Locale
  dict: Dictionary
}

export default function TechSkills({ locale, dict }: TechSkillsProps) {
  const [selected, setSelected] = useState<string | null>(resume.techSkills[0].slug)
  const active = resume.techSkills.find((skill) => skill.slug === selected)

  return (
    <section id="skills" className={styles.section}>
      <h2>{dict.sections.skills.title}</h2>

      <div className={styles.cards}>
        {resume.techSkills.map((skill, index) => (
          <motion.div
            key={skill.slug}
            className={styles.cardWrap}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ type: 'spring', duration: 0.7, delay: 0.05 + index * 0.07 }}
          >
            <button
              type="button"
              className={`${styles.card} ${selected === skill.slug ? styles.cardActive : ''}`}
              aria-expanded={selected === skill.slug}
              aria-controls="skill-detail"
              onClick={() => setSelected(selected === skill.slug ? null : skill.slug)}
            >
              <Image src={skill.icon} alt="" width={44} height={44} className={styles.icon} />
              <span className={styles.cardText}>
                <span className={styles.cardTitle}>{skill.title}</span>
                <span className={styles.cardType}>{skill.type[locale]}</span>
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <div id="skill-detail" className={styles.detailSlot} data-open={Boolean(active)}>
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.slug}
              className={styles.detail}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.15 } }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <Image
                src={active.icon}
                alt=""
                width={56}
                height={56}
                className={styles.detailIcon}
              />
              <h3 className={styles.detailHeadline}>{active.detail.headline[locale]}</h3>
              <p className={styles.detailBody}>{active.detail.body[locale]}</p>
              <ul className={styles.detailPoints}>
                {active.detail.points[locale].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
