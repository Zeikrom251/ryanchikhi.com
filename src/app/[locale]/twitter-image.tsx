// Same card as `opengraph-image`; declared separately because Next only wires
// `twitter:image` from a `twitter-image` file, and the metadata in
// `layout.tsx` asks for a `summary_large_image` card.
import { altText, contentType, renderOgImage, size } from '@/lib/og'
import { defaultLocale, isLocale, locales } from '@/i18n/config'

export { contentType, size }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateImageMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return [
    {
      id: 'card',
      alt: altText(isLocale(locale) ? locale : defaultLocale),
      size,
      contentType,
    },
  ]
}

export default async function TwitterImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderOgImage(isLocale(locale) ? locale : defaultLocale)
}
