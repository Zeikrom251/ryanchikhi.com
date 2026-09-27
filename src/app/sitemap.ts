import type { MetadataRoute } from 'next'
import { resume } from '@/data/resume'
import { locales } from '@/i18n/config'
import { languageAlternates, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...resume.projects.map((project) => `/projects/${project.slug}`)]

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, `${SITE_URL}${href}`])
    )
    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages },
    }))
  })
}
