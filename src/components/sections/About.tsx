import Highlight from '@/components/ui/Highlight'
import Picture from '@/components/ui/Picture'
import styles from './About.module.scss'
import { resume } from '@/data/resume'
import type { Locale } from '@/i18n/config'

export default function About({ locale }: { locale: Locale }) {
  return (
    <section id="about" className={styles.about}>
      {resume.about.map((block) => (
        <div key={block.id} className={`${styles.row} ${block.flip ? styles.rowFlip : ''}`}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              <Highlight>{block.highlight[locale]}</Highlight> {block.rest[locale]}
            </h2>
            {block.body[locale].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {block.picture && (
            <div className={styles.aside}>
              <Picture
                src={block.picture.src}
                caption={block.picture.caption[locale]}
                width={22}
                rotate={block.flip ? -3 : 3}
                invert={block.flip}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
