import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FloatingIcons from '@/components/layout/FloatingIcons'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import SmoothScroll from '@/components/layout/SmoothScroll'
import StructuredData from '@/components/layout/StructuredData'
import ThemeScript from '@/components/layout/ThemeScript'
import ThemeSync from '@/components/layout/ThemeSync'
import styles from './layout.module.scss'
import { resume } from '@/data/resume'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { fontVariables } from '@/lib/fonts'
import '@/styles/main.scss'

const SITE_URL = 'https://ryanchikhi.dev'

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
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: { title, description, locale, type: 'website', url: `/${locale}` },
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
