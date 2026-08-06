import Image from 'next/image'
import styles from './LogoTile.module.scss'

interface LogoTileProps {
  logo?: string
  logoBg?: string
  accent: string
  name: string
}

export default function LogoTile({ logo, logoBg, accent, name }: LogoTileProps) {
  if (logo) {
    return (
      <div className={styles.tile} style={logoBg ? { background: logoBg } : undefined}>
        <Image src={logo} alt={name} width={112} height={112} className={styles.logo} />
      </div>
    )
  }

  return (
    <div className={`${styles.tile} ${styles.fallback}`} style={{ background: accent }}>
      <span aria-hidden="true">{name.charAt(0)}</span>
    </div>
  )
}
