import type { Locale } from '@/i18n/config'

export type Localized = Record<Locale, string>

export type LocalizedList = Record<Locale, string[]>

export interface ContactLink {
  type: 'email' | 'github' | 'linkedin' | 'location'
  label: string
  href?: string
}

export interface SkillGroup {
  id: string
  title: Localized
  items: string[]
}

export interface TechSkill {
  slug: string
  icon: string
  title: string
  type: Localized
  detail: {
    headline: Localized
    body: Localized
    points: LocalizedList
  }
}

export interface AboutBlock {
  id: string
  highlight: Localized
  rest: Localized
  body: LocalizedList
  picture?: { src?: string; caption: Localized }
  flip?: boolean
}

export interface GalleryShot {
  id: string
  /** Drop the file in `public/gallery/` and point here. Empty renders a placeholder tile. */
  src?: string
  /** Describes the image for screen readers; never drawn on the page. */
  alt: Localized
  /** Spans two columns instead of one, to break up the grid rhythm. */
  wide?: boolean
}

export interface Location {
  highlight: Localized
  body: LocalizedList
  picture?: { src?: string; caption: Localized }
}

export interface LanguageSkill {
  name: Localized
  level: string
}

export interface DateRange {
  start: string
  end: string | null
}

export interface Experience {
  id: string
  company: string
  role: Localized
  kind: Localized
  dates: DateRange
  summary: Localized
  tasks: LocalizedList
  techs: string[]
  logo?: string
  /** Tile fill behind `logo`, for marks drawn to sit on a dark background. */
  logoBg?: string
  accent: string
}

export interface Trait {
  id: string
  title: Localized
  body: Localized
}

export interface Project {
  slug: string
  name: string
  /** Square mark shown beside the name on the card. */
  logo?: string
  kind: Localized
  banner?: string
  accent: string
  tagline: Localized
  summary: Localized
  body: LocalizedList
  highlights: LocalizedList
  role: Localized
  year: string
  techs: string[]
  repo?: string
  url?: string
}

export interface Education {
  id: string
  school: string
  degree: Localized
  specialty?: Localized
  dates: DateRange
  location: string
  logo?: string
  /** Tile fill behind `logo`, for marks drawn to sit on a dark background. */
  logoBg?: string
  accent: string
}

export interface Portrait {
  src: string
  cutout: boolean
}

export interface Resume {
  name: string
  title: Localized
  location: string
  intro: Localized
  about: AboutBlock[]
  contact: ContactLink[]
  portrait: Portrait
  cv: Record<Locale, string>
  traits: Trait[]
  techSkills: TechSkill[]
  skills: SkillGroup[]
  gallery: GalleryShot[]
  place: Location
  languages: LanguageSkill[]
  experiences: Experience[]
  projects: Project[]
  education: Education[]
}
