'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import styles from './Portrait.module.scss'
import { resume } from '@/data/resume'

export default function Portrait() {
  const { src, cutout } = resume.portrait

  return (
    <div className={`${styles.wrap} ${cutout ? styles.wrapCutout : ''}`}>
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.orbit} aria-hidden="true">
        {ORBIT.map((mark, index) => (
          <motion.span
            key={mark.name}
            className={[
              styles.mark,
              mark.small && styles.markSmall,
              mark.outer && styles.markOuter,
              mark.darkGlyph && styles.markInvert,
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              left: mark.x,
              top: mark.y,
              ['--float-delay' as string]: `${(index % 5) * 0.9}s`,
              ['--float-shift' as string]: index % 2 ? '7px' : '-9px',
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 0.8, bounce: 0.5, delay: 0.4 + index * 0.05 }}
          >
            <Image src={`/tech/${mark.name}.svg`} alt="" width={40} height={40} />
          </motion.span>
        ))}
      </div>

      {cutout ? (
        <motion.div
          className={styles.stage}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
        >
          <span className={styles.stageOrb} aria-hidden="true" />
          <motion.div
            className={styles.figure}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.9, bounce: 0.25, delay: 0.15 }}
          >
            <Image src={src} alt={resume.name} width={420} height={460} priority />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className={styles.ring}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
        >
          <motion.div
            className={styles.photo}
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.9, bounce: 0.28, delay: 0.15 }}
          >
            <Image src={src} alt={resume.name} width={420} height={420} priority />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

// x/y are percentages of the wrap. `outer` marks the widest ring, which is
// dropped on small screens. `darkGlyph` flags logos drawn in near-black, which
// need inverting to stay visible on the dark surface.
const ORBIT = [
  { name: 'typescript', x: '30%', y: '6%' },
  { name: 'react', x: '60%', y: '4%' },
  { name: 'nextjs', x: '71%', y: '26%', small: true, darkGlyph: true },
  { name: 'nestjs', x: '24%', y: '26%', small: true },
  { name: 'nodejs', x: '18%', y: '50%' },
  { name: 'postgresql', x: '76%', y: '52%' },
  { name: 'prisma', x: '26%', y: '74%', small: true, darkGlyph: true },
  { name: 'graphql', x: '68%', y: '76%', small: true },
  { name: 'sass', x: '7%', y: '22%', small: true, outer: true },
  { name: 'tailwindcss', x: '85%', y: '18%', small: true, outer: true },
  { name: 'git', x: '4%', y: '70%', small: true, outer: true },
  { name: 'docker', x: '86%', y: '72%', small: true, outer: true },
]
