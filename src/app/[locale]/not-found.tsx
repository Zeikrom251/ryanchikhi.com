import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>This page doesn&rsquo;t exist.</h1>
      <p className={styles.body}>
        The link may be out of date, or the page has moved. Cette page n&rsquo;existe pas.
      </p>
      <Link href="/" className={styles.link}>
        Go home · Retour à l&rsquo;accueil
      </Link>
    </div>
  )
}
