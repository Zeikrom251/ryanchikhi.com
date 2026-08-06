import Link from 'next/link'
import styles from './Button.module.scss'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outlined'
  leading?: React.ReactNode
  download?: boolean
  external?: boolean
}

export default function Button({
  href,
  children,
  variant = 'primary',
  leading,
  download = false,
  external = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`

  const content = (
    <>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span>{children}</span>
    </>
  )

  if (download || external) {
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  )
}
