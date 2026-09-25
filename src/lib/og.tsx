import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { zelligeMarkup } from '@/components/ui/Zellige'
import { resume } from '@/data/resume'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

/** Shared by the `opengraph-image` and `twitter-image` routes. */
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const SITE_DOMAIN = 'ryanchikhi.com'

const stack = ['TypeScript', 'React', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma']

export function altText(locale: Locale) {
  return `${resume.name}, ${resume.title[locale]}`
}

const ZELLIGE = {
  ink: '#2e6b4a',
  saffron: '#e7b04b',
  terracotta: '#d9683f',
  ground: '#0e2418',
}

function svgDataUri(markup: string, width: number, height: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${markup}</svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/**
 * The share card: the footer's deep green, the portrait on a saffron disc,
 * and the zellige wall behind it. Satori (behind ImageResponse) supports a
 * subset of CSS, so every element is laid out with explicit flex and inline
 * styles, and the palette is hard-coded rather than read from the CSS custom
 * properties.
 */
export async function renderOgImage(localeParam: string) {
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale
  const dict = await getDictionary(locale)
  const portrait = await readFile(join(process.cwd(), 'public', resume.portrait.src))
  const wall = svgDataUri(zelligeMarkup('z', 120, ZELLIGE), 520, 630)

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#0e2418',
        color: '#eef3ec',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 680,
          padding: '72px 0 64px 72px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 26px',
              borderRadius: 999,
              backgroundColor: 'rgba(231, 176, 75, 0.14)',
              color: '#e7b04b',
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
                backgroundColor: '#e7b04b',
              }}
            />
            {dict.hero.availability}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: '-0.03em' }}>
            {resume.name}
          </div>
          <div style={{ display: 'flex', marginTop: 10, fontSize: 38, color: '#a9bfb1' }}>
            {resume.title[locale]} · Paris
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 36 }}>
            {stack.map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  marginRight: 10,
                  marginBottom: 10,
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: '1px solid rgba(238, 243, 236, 0.18)',
                  color: '#eef3ec',
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 28, fontWeight: 600, color: '#e7b04b' }}>
          {SITE_DOMAIN}
        </div>
      </div>

      <div style={{ display: 'flex', position: 'relative', width: 520, height: 630 }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={wall} width={520} height={630} style={{ position: 'absolute', opacity: 0.6 }} />
        {/* Fades the wall into the green on the text side. */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: 520,
            height: 630,
            backgroundImage: 'linear-gradient(90deg, #0e2418 0%, rgba(14, 36, 24, 0) 45%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            left: 80,
            top: 135,
            width: 360,
            height: 360,
            borderRadius: 999,
            border: '8px solid #e7b04b',
            backgroundColor: '#e7b04b',
            overflow: 'hidden',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={`data:image/png;base64,${portrait.toString('base64')}`}
            width={344}
            height={371}
          />
        </div>
      </div>
    </div>,
    size
  )
}
