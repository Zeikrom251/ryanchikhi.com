import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Reveal from '@/components/ui/Reveal'
import styles from './projects.module.scss'
import { resume } from '@/data/resume'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { languageAlternates } from '@/lib/site'

type Params = Promise<{ locale: string }>

export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const dict = await getDictionary(locale)
  const { title, intro } = dict.projectsPage
  const { openGraph, twitter } = await parent

  // Setting openGraph/twitter replaces the layout's, so the url and images are
  // spelled out again for this page.
  return {
    title,
    description: intro,
    alternates: { canonical: `/${locale}/projects`, languages: languageAlternates('/projects') },
    openGraph: {
      ...openGraph,
      title: `${title}, ${resume.name}`,
      description: intro,
      url: `/${locale}/projects`,
    },
    twitter: { ...twitter, title: `${title}, ${resume.name}`, description: intro },
  }
}

export default async function ProjectsPage({ params }: { params: Params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale as Locale)

  return (
    <>
      <header className={styles.head}>
        <h1 className={styles.title}>
          <GridIcon />
          {dict.projectsPage.title}
        </h1>
        <p className={styles.intro}>{dict.projectsPage.intro}</p>
      </header>

      <ul className={styles.list}>
        {resume.projects.map((project, index) => {
          const thumb = project.banner ?? project.cover

          return (
            <li key={project.slug}>
              <Reveal delay={index * 0.05}>
                <Link href={`/${locale}/projects/${project.slug}`} className={styles.row}>
                  <div
                    className={styles.thumb}
                    style={thumb ? undefined : { background: project.accent }}
                  >
                    {thumb ? (
                      <Image src={thumb} alt="" fill sizes="(max-width: 767px) 100vw, 220px" />
                    ) : project.logo ? (
                      <Image
                        src={project.logo}
                        alt=""
                        width={64}
                        height={64}
                        className={styles.thumbLogo}
                      />
                    ) : (
                      <span className={styles.thumbMark} aria-hidden="true">
                        {project.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className={styles.body}>
                    <div className={styles.meta}>
                      {project.logo && (
                        <Image
                          src={project.logo}
                          alt=""
                          width={20}
                          height={20}
                          className={styles.logo}
                        />
                      )}
                      <span className={styles.name}>{project.name}</span>
                      <span className={styles.year}>{project.year}</span>
                    </div>
                    <h2 className={styles.tagline}>{project.tagline[locale as Locale]}</h2>
                    <p className={styles.summary}>{project.summary[locale as Locale]}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <g fill="currentColor">
        <rect x="3" y="3" width="8" height="8" rx="2.5" />
        <rect x="13" y="3" width="8" height="8" rx="2.5" />
        <rect x="3" y="13" width="8" height="8" rx="2.5" />
        <rect x="13" y="13" width="8" height="8" rx="2.5" />
      </g>
    </svg>
  )
}
