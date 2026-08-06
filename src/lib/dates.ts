import type { DateRange } from '@/data/types'
import type { Locale } from '@/i18n/config'

interface DurationLabels {
  present: string
  year: string
  years: string
  month: string
  months: string
}

function parse(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`)
}

function formatMonth(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parse(iso))
}

export function formatRange(range: DateRange, locale: Locale, presentLabel: string): string {
  const end = range.end ? formatMonth(range.end, locale) : presentLabel
  return `${formatMonth(range.start, locale)} - ${end}`
}

const DAYS_PER_MONTH = 30.44

function monthsBetween(start: Date, end: Date): number {
  const wholeMonths =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth()) +
    (end.getUTCDate() >= start.getUTCDate() ? 0 : -1)

  const anniversary = new Date(start)
  anniversary.setUTCMonth(anniversary.getUTCMonth() + wholeMonths)
  const remainderDays = (end.getTime() - anniversary.getTime()) / 86_400_000

  return Math.max(1, wholeMonths + Math.round(remainderDays / DAYS_PER_MONTH))
}

export function formatDuration(range: DateRange, labels: DurationLabels): string {
  const total = monthsBetween(parse(range.start), range.end ? parse(range.end) : new Date())
  const years = Math.floor(total / 12)
  const months = total % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? labels.year : labels.years}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? labels.month : labels.months}`)

  return parts.join(' ')
}
