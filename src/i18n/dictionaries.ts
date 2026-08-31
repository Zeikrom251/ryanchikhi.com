import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from './types'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import('./locales/fr.json').then((m) => m.default),
  en: () => import('./locales/en.json').then((m) => m.default),
}

export type { Dictionary }

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
