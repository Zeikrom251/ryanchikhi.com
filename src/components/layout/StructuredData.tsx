import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'

interface StructuredDataProps {
  locale: Locale
  siteUrl: string
}

/**
 * Person schema, so search engines describe the site as a person rather than a
 * generic page. Every value is read from `resume.ts` — there is nothing to keep
 * in sync by hand.
 */
export default function StructuredData({ locale, siteUrl }: StructuredDataProps) {
  const profiles = resume.contact
    .filter((item) => item.type === 'github' || item.type === 'linkedin')
    .map((item) => item.href)
    .filter((href): href is string => Boolean(href))

  const email = resume.contact.find((item) => item.type === 'email')?.label

  // schema.org reads `worksFor` as present tense, so a finished contract does
  // not belong here. Omitted entirely when nothing is ongoing.
  const current = resume.experiences.filter(
    (experience) => experience.dates.end === null || new Date(experience.dates.end) > new Date()
  )

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resume.name,
    jobTitle: resume.title[locale],
    description: resume.intro[locale],
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}${resume.portrait.src}`,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    knowsLanguage: resume.languages.map((language) => language.name[locale]),
    knowsAbout: resume.skills.flatMap((group) => group.items),
    alumniOf: resume.education.map((school) => ({
      '@type': 'EducationalOrganization',
      name: school.school,
    })),
    worksFor: current.length
      ? current.map((experience) => ({ '@type': 'Organization', name: experience.company }))
      : undefined,
    sameAs: profiles,
  }

  return (
    <script
      type="application/ld+json"
      // The payload is static data from `resume.ts`, but `<` is still escaped so
      // a stray angle bracket in a future edit cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
