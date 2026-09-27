import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import styles from './project.module.scss'
import { getProject, resume } from '@/data/resume'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { languageAlternates, SITE_URL } from '@/lib/site'

type Params = Promise<{ locale: string; slug: string }>

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    resume.projects.map((project) => ({ locale, slug: project.slug }))
  )
}

export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!project || !isLocale(locale)) return {}

  const path = `/projects/${slug}`
  const description = project.tagline[locale]
  const { openGraph, twitter } = await parent

  // Whatever is set here replaces the layout's value wholesale, so the language
  // links and the Open Graph url must be spelled out for this page.
  return {
    title: project.name,
    description,
    alternates: { canonical: `/${locale}${path}`, languages: languageAlternates(path) },
    openGraph: {
      title: `${project.name}, ${resume.name}`,
      description,
      type: 'article',
      url: `/${locale}${path}`,
      images: openGraph?.images,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name}, ${resume.name}`,
      description,
      images: twitter?.images,
    },
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const project = getProject(slug)
  if (!project) notFound()

  const dict = await getDictionary(locale as Locale)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.summary[locale as Locale],
    url: `${SITE_URL}/${locale}/projects/${slug}`,
    image: project.cover ? `${SITE_URL}${project.cover}` : undefined,
    dateCreated: project.year,
    inLanguage: locale,
    keywords: project.techs.join(', '),
    author: { '@type': 'Person', name: resume.name, url: `${SITE_URL}/${locale}` },
    sameAs: [project.url, project.repo].filter(Boolean),
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
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

      <header className={styles.head}>
        {project.cover && (
          <div className={styles.banner}>
            <Image
              src={project.cover}
              alt=""
              fill
              sizes="(max-width: 899px) 100vw, 800px"
              className={styles.bannerImage}
              priority
            />
          </div>
        )}

        <div className={`${styles.identity} ${project.cover ? styles.identityOverlap : ''}`}>
          {project.logo ? (
            <Image
              src={project.logo}
              alt=""
              width={150}
              height={150}
              className={styles.mark}
              priority
            />
          ) : (
            <span className={styles.mark} style={{ background: project.accent }} aria-hidden="true">
              {project.name.charAt(0)}
            </span>
          )}

          <div>
            <p className={styles.kind}>{project.kind[locale]}</p>
            <h1 className={styles.title}>{project.name}</h1>
          </div>
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
