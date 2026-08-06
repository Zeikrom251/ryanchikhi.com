'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Controls.module.scss'
import { localeLabels, locales, type Locale } from '@/i18n/config'

interface LocaleSwitchProps {
  locale: Locale
  label: string
}

export default function LocaleSwitch({ locale, label }: LocaleSwitchProps) {
  const pathname = usePathname()
  const other = locales.find((l) => l !== locale) ?? locale
  const href = pathname.replace(`/${locale}`, `/${other}`) || `/${other}`

  return (
    <Link href={href} className={styles.control} title={label} hrefLang={other}>
      <span className={styles.srOnly}>{label}</span>
      <span aria-hidden="true" className={styles.localeLabel}>
        {localeLabels[other]}
      </span>
    </Link>
  )
}
