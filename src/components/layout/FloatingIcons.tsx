import Image from 'next/image'
import styles from './FloatingIcons.module.scss'

/**
 * Decorative tech marks that drift in the margins beside the sheet. Purely
 * visual: the layer is hidden from assistive tech, and CSS hides it below the
 * `lg` breakpoint, where there is no margin to put them in.
 *
 * `top` and `side` are percentages of the viewport; `side` is measured from the
 * outer edge, mirrored left and right by the `edge` field.
 */
const marks = [
  { src: '/tech/typescript.svg', edge: 'left', top: 12, side: 3, size: 46, delay: 0 },
  { src: '/tech/nodejs.svg', edge: 'left', top: 38, side: 6, size: 38, delay: -6 },
  { src: '/tech/prisma.svg', edge: 'left', top: 64, side: 4, size: 34, delay: -12 },
  { src: '/tech/docker.svg', edge: 'left', top: 86, side: 7, size: 40, delay: -3 },
  { src: '/tech/nextjs.svg', edge: 'right', top: 18, side: 5, size: 42, delay: -9 },
  { src: '/tech/graphql.svg', edge: 'right', top: 44, side: 3, size: 36, delay: -15 },
  { src: '/tech/sass.svg', edge: 'right', top: 70, side: 6, size: 38, delay: -5 },
  { src: '/tech/git.svg', edge: 'right', top: 92, side: 4, size: 34, delay: -11 },
] as const

export default function FloatingIcons() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {marks.map((mark) => (
        <span
          key={mark.src}
          className={styles.mark}
          style={{
            top: `${mark.top}%`,
            ...(mark.edge === 'left' ? { left: `${mark.side}%` } : { right: `${mark.side}%` }),
            width: mark.size,
            height: mark.size,
            animationDelay: `${mark.delay}s`,
          }}
        >
          <Image src={mark.src} alt="" width={mark.size} height={mark.size} />
        </span>
      ))}
    </div>
  )
}
