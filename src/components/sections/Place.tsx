import Highlight from '@/components/ui/Highlight'
import Picture from '@/components/ui/Picture'
import styles from './Place.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'

export default function Place({ locale }: { locale: Locale }) {
  const { highlight, body, picture } = resume.place

  return (
    <section className={styles.place}>
      {picture && (
        <div className={styles.aside}>
          <Picture src={picture.src} caption={picture.caption[locale]} width={20} rotate={3} />
        </div>
      )}

      <div className={styles.text}>
        <h2 className={styles.title}>
          <Highlight>{highlight[locale]}</Highlight>
        </h2>
        {body[locale].map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
