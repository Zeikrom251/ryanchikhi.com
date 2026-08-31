'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import Button from '@/components/ui/Button'
import Highlight from '@/components/ui/Highlight'
import Portrait from './Portrait'
import styles from './Hero.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface HeroProps {
  locale: Locale
  dict: Dictionary
}

const stack = [
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'NestJS', icon: '/tech/nestjs.svg' },
  { name: 'Prisma', icon: '/tech/prisma.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
]

const from = { scale: 0.9, opacity: 0, translateY: 40 }
const to = { scale: 1, opacity: 1, translateY: 0 }
const spring = { type: 'spring', duration: 0.9, bounce: 0.5 } as const

export default function Hero({ locale, dict }: HeroProps) {
  const github = resume.contact.find((item) => item.type === 'github')

  return (
    <section className={styles.hero}>
      <Portrait />

      <motion.p
        className={styles.status}
        initial={from}
        animate={to}
        transition={{ ...spring, delay: 0.08 }}
      >
        <span className={styles.dot} aria-hidden="true" />
        {dict.hero.availability}
      </motion.p>

      <motion.h1
        className={styles.title}
        initial={from}
        animate={to}
        transition={{ ...spring, delay: 0.1 }}
      >
        {locale === 'fr' ? (
          <>
            Enchanté, moi c&apos;est <Highlight delay={0.2}>Ryan Chikhi</Highlight>,
            <br />
            <Highlight variant="soft" delay={0.5}>
              développeur
            </Highlight>{' '}
            fullstack à Paris
          </>
        ) : (
          <>
            Hi, I&apos;m <Highlight delay={0.2}>Ryan Chikhi</Highlight>,
            <br />a{' '}
            <Highlight variant="soft" delay={0.5}>
              fullstack
            </Highlight>{' '}
            developer in Paris
          </>
        )}
      </motion.h1>

      <motion.p
        className={styles.intro}
        initial={from}
        animate={to}
        transition={{ ...spring, delay: 0.2 }}
      >
        {resume.intro[locale]}
      </motion.p>

      <div className={styles.actions}>
        <motion.div initial={from} animate={to} transition={{ ...spring, delay: 0.3 }}>
          <Button href={`/${locale}#projects`} leading={<GridIcon />}>
            {dict.hero.viewProjects}
          </Button>
        </motion.div>

        <motion.div initial={from} animate={to} transition={{ ...spring, delay: 0.35 }}>
          <Button href={resume.cv[locale]} variant="outlined" download leading={<FileIcon />}>
            {dict.hero.downloadCv}
          </Button>
        </motion.div>

        {github && (
          <motion.div initial={from} animate={to} transition={{ ...spring, delay: 0.4 }}>
            <Button href={github.href!} variant="outlined" external leading={<GitHubIcon />}>
              GitHub
            </Button>
          </motion.div>
        )}
      </div>

      <motion.div
        className={styles.stack}
        initial={from}
        animate={to}
        transition={{ ...spring, delay: 0.5 }}
      >
        <p className={styles.stackLabel}>{dict.hero.workingWith}</p>
        <ul className={styles.stackList}>
          {stack.map((tech) => (
            <li key={tech.name}>
              <Image src={tech.icon} alt="" width={18} height={18} className={styles.stackIcon} />
              {tech.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </g>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5Z" />
        <path d="M13.5 3v5.5H19" />
      </g>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}
