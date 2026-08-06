import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import styles from './project.module.scss'
import { getProject, resume } from '@/data/resume'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type Params = Promise<{ locale: string; slug: string }>

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    resume.projects.map((project) => ({ locale, slug: project.slug }))
  )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!project || !isLocale(locale)) return {}

  return {
    title: project.name,
    description: project.tagline[locale],
    alternates: { canonical: `/${locale}/projects/${slug}` },
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const project = getProject(slug)
  if (!project) notFound()

  const dict = await getDictionary(locale as Locale)

  return (
    <article>
      <Link href={`/${locale}#projects`} className={styles.back}>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path
            d="M13 8H3M7 4 3 8l4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {dict.project.backToProjects}
      </Link>

      <header className={styles.head} style={{ background: project.accent }}>
        <span className={styles.mark}>{project.name.charAt(0)}</span>
        <div>
          <p className={styles.kind}>{project.kind[locale]}</p>
          <h1 className={styles.title}>{project.name}</h1>
        </div>
      </header>

      <p className={styles.tagline}>{project.tagline[locale]}</p>

      <dl className={styles.facts}>
        <div>
          <dt>{dict.project.role}</dt>
          <dd>{project.role[locale]}</dd>
        </div>
        <div>
          <dt>{dict.project.year}</dt>
          <dd>{project.year}</dd>
        </div>
      </dl>

      {(project.url || project.repo) && (
        <div className={styles.actions}>
          {project.url && (
            <Button href={project.url} external>
              {dict.sections.projects.liveSite}
            </Button>
          )}
          {project.repo && (
            <Button href={project.repo} variant="outlined" external>
              {dict.sections.projects.sourceCode}
            </Button>
          )}
        </div>
      )}

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{dict.project.overview}</h2>
        <div className={styles.prose}>
          {project.body[locale].map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{dict.project.highlights}</h2>
        <ul className={styles.highlights}>
          {project.highlights[locale].map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{dict.project.stack}</h2>
        <ul className={styles.techs}>
          {project.techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
