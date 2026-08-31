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

export default function Projects({ locale, dict }: ProjectsProps) {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.grid}>
        {resume.projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06} className={styles.item}>
            <ProjectCard
              project={project}
              locale={locale}
              ctaLabel={dict.sections.projects.viewCase}
              wide={resume.projects.length === 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
