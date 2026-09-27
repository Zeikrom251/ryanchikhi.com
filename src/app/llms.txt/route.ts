import { resume } from '@/data/resume'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

// Plain-text summary for AI assistants (llmstxt.org), built from `resume.ts`.
export function GET() {
  const profiles = resume.contact.filter((item) => item.href && item.type !== 'email')

  const body = [
    `# ${resume.name}`,
    '',
    `> ${resume.title.en}, based in ${resume.location}. ${resume.intro.en}`,
    '',
    `The site exists in French (${SITE_URL}/fr) and English (${SITE_URL}/en).`,
    '',
    '## Projects',
    '',
    ...resume.projects.map(
      (project) => `- [${project.name}](${SITE_URL}/en/projects/${project.slug}): ${project.summary.en}`
    ),
    '',
    '## Experience',
    '',
    ...resume.experiences.map((experience) => `- ${experience.role.en}, ${experience.company}`),
    '',
    '## Education',
    '',
    ...resume.education.map((school) => `- ${school.degree.en}, ${school.school}`),
    '',
    '## Links',
    '',
    `- [Résumé (PDF)](${SITE_URL}${resume.cv.en})`,
    ...profiles.map((item) => `- [${item.type}](${item.href})`),
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
