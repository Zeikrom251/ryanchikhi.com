import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FloatingIcons from '@/components/layout/FloatingIcons'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import SmoothScroll from '@/components/layout/SmoothScroll'
import StructuredData from '@/components/layout/StructuredData'
import ThemeScript from '@/components/layout/ThemeScript'
import ThemeSync from '@/components/layout/ThemeSync'
import Zellige from '@/components/ui/Zellige'
import styles from './layout.module.scss'
import { resume } from '@/data/resume'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { fontVariables } from '@/lib/fonts'
import { languageAlternates, SITE_URL } from '@/lib/site'
import '@/styles/main.scss'

// Open Graph wants a full language_TERRITORY tag, not the bare locale.
const ogLocales: Record<Locale, string> = { fr: 'fr_FR', en: 'en_US' }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const title = `${resume.name}, ${resume.title[locale]}`
  const description = resume.intro[locale]

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s, ${resume.name}` },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      title,
      description,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      siteName: resume.name,
      type: 'profile',
      url: `/${locale}`,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale as Locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <noscript>
          <style>{'[style*="opacity:0"]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className={fontVariables}>
        <StructuredData locale={locale as Locale} siteUrl={SITE_URL} />
        <ThemeSync />

        <div className={styles.gradient} aria-hidden="true">
          <span className={styles.blobA} />
          <span className={styles.blobB} />
          <Zellige size={150} className={styles.zellige} />
        </div>

        <FloatingIcons />

        <SmoothScroll>
          <Navigation locale={locale as Locale} dict={dict} />

          <div className={styles.shell}>
            <main id="content" className={styles.sheet}>
              {children}
            </main>
            <Footer locale={locale as Locale} dict={dict} />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
