'use client'

import styles from './Controls.module.scss'

export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <button type="button" className={styles.control} onClick={toggle} title={label}>
      <span className={styles.srOnly}>{label}</span>

      <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true" className={styles.sun}>
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="10" cy="10" r="3.5" />
          <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6 16 16M16 4l-1.4 1.4M5.4 14.6 4 16" />
        </g>
      </svg>

      <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true" className={styles.moon}>
        <path
          d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
