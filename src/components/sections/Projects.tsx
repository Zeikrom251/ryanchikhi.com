import ProjectCard from '@/components/ui/ProjectCard'
import Reveal from '@/components/ui/Reveal'
import styles from './Projects.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface ProjectsProps {
  locale: Locale
  dict: Dictionary
}

// The home page shows the first few; the full list lives on /projects (reached
// from the header), so order `resume.projects` with the ones to feature first.
const FEATURED = 4

export default function Projects({ locale, dict }: ProjectsProps) {
  const featured = resume.projects.slice(0, FEATURED)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.grid}>
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06} className={styles.item}>
            <ProjectCard
              project={project}
              locale={locale}
              ctaLabel={dict.sections.projects.viewCase}
              wide={featured.length === 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
