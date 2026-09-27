import styles from './Footer.module.scss'
import Zellige from '@/components/ui/Zellige'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/types'

interface FooterProps {
  locale: Locale
  dict: Dictionary
}

export default function Footer({ locale, dict }: FooterProps) {
  const email = resume.contact.find((item) => item.type === 'email')
  const github = resume.contact.find((item) => item.type === 'github')

  return (
    <footer id="contact" className={styles.footer}>
      <Zellige size={96} className={styles.zellige} />
      <p className={styles.heading}>
        {dict.footer.headingStart}{' '}
        <span className={styles.accent}>{dict.footer.headingAccent}</span> {dict.footer.headingEnd}
      </p>

      <div className={styles.links}>
        {email && (
          <a href={email.href}>
            <MailIcon />
            <span>{email.label}</span>
          </a>
        )}
        <a href={resume.cv[locale]} download>
          <FileIcon />
          <span>{dict.hero.downloadCv}</span>
        </a>
        {github && (
          <a href={github.href} target="_blank" rel="me noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        )}
        <a href={`/${locale}/projects`}>
          <GridIcon />
          <span>{dict.nav.projects}</span>
        </a>
      </div>

      <p className={styles.fine}>
        © {new Date().getFullYear()} {resume.name}
        <br />
        {dict.footer.builtWith}
        <br />
        {dict.footer.designBy}{' '}
        <a
          href="https://vincelinise.com"
          target="_blank"
          rel="noreferrer"
          className={styles.credit}
        >
          Vince Linise
        </a>{' '}
        (
        <a
          href="https://github.com/ecnivtwelve"
          target="_blank"
          rel="noreferrer"
          className={styles.credit}
        >
          @ecnivtwelve
        </a>
        ).
      </p>
    </footer>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3" y="5.5" width="18" height="13" rx="3" />
        <path d="m4 8 7.1 4.6a1.7 1.7 0 0 0 1.8 0L20 8" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5Z" />
        <path d="M13.5 3v5.5H19" />
      </g>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </g>
    </svg>
  )
}
