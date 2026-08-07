import { notFound } from 'next/navigation'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Place from '@/components/sections/Place'
import Projects from '@/components/sections/Projects'
import SoftSkills from '@/components/sections/SoftSkills'
import TechSkills from '@/components/sections/TechSkills'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale as Locale)
  const props = { locale: locale as Locale, dict }

  return (
    <>
      <Hero {...props} />
      <Projects {...props} />
      <TechSkills {...props} />
      <About locale={locale as Locale} />
      <Place locale={locale as Locale} />
      <Education {...props} />
      <Experience {...props} />
      <SoftSkills {...props} />
    </>
  )
}
