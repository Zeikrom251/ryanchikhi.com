import { ImageResponse } from 'next/og'
import { resume } from '@/data/resume'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

/** Shared by the `opengraph-image` and `twitter-image` routes. */
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const SITE_DOMAIN = 'ryanchikhi.dev'

const stack = ['TypeScript', 'React', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL']

export function altText(locale: Locale) {
  return `${resume.name}, ${resume.title[locale]}`
}

/**
 * The share card. Satori (behind ImageResponse) supports a subset of CSS, so
 * every element is laid out with explicit flex and inline styles, and the
 * palette is hard-coded rather than read from the CSS custom properties.
 */
export async function renderOgImage(localeParam: string) {
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale
  const dict = await getDictionary(locale)

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 80,
        color: '#3a1140',
        backgroundColor: '#fffbff',
        backgroundImage:
          'linear-gradient(150deg, #fdc9ff 0%, #f7def9 38%, #fffbff 72%, #fffbff 100%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 26px',
            borderRadius: 999,
            backgroundColor: 'rgba(176, 25, 138, 0.14)',
            color: '#b0198a',
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 14,
              height: 14,
              marginRight: 14,
              borderRadius: 999,
              backgroundColor: '#b0198a',
            }}
          />
          {dict.hero.availability}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, letterSpacing: '-0.03em' }}>
          {resume.name}
        </div>
        <div style={{ display: 'flex', marginTop: 12, fontSize: 44, color: '#7a4a80' }}>
          {resume.title[locale]} · {resume.location}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                marginRight: 12,
                padding: '10px 20px',
                borderRadius: 999,
                backgroundColor: 'rgba(176, 25, 138, 0.1)',
                color: '#b0198a',
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#7a4a80' }}>{SITE_DOMAIN}</div>
      </div>
    </div>,
    size
  )
}
