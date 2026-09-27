import { defaultLocale, locales } from '@/i18n/config'

// Must match the primary domain in Vercel: the apex redirects to www, and a
// canonical that points at a redirect is ignored by search engines.
export const SITE_URL = 'https://www.ryanchikhi.com'

/** hreflang map for a path that exists in every locale, e.g. `/projects/undercut`. */
export function languageAlternates(path = '') {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`])),
    'x-default': `/${defaultLocale}${path}`,
  }
}
