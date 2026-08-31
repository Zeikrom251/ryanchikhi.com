import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/i18n/config'

function negotiate(request: NextRequest) {
  const header = request.headers.get('accept-language')
  if (!header) return defaultLocale

  const preferred = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.toLowerCase().split('-')[0], quality: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.quality - a.quality)

  return preferred.find((p) => locales.includes(p.tag as never))?.tag ?? defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) return

  const url = request.nextUrl.clone()
  url.pathname = `/${negotiate(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
