import { altText, contentType, renderOgImage, size } from '@/lib/og'
import { defaultLocale, isLocale, locales } from '@/i18n/config'

export { contentType, size }

// Without this the card is rendered on demand for every crawler that asks.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// Carries the alt text so it follows the page language. A plain `alt` export
// would be a single string shared by both locales.
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

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderOgImage(isLocale(locale) ? locale : defaultLocale)
}
