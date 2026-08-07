'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import styles from './Picture.module.scss'

interface PictureProps {
  src?: string
  caption: string
  width?: number
  rotate?: number
  invert?: boolean
  aspect?: string
}

export default function Picture({
  src,
  caption,
  width = 18,
  rotate = 3,
  invert = false,
  aspect,
}: PictureProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', '65vh end'] })

  // Only position is scroll-linked. Fading on scroll progress would leave the
  // photo invisible whenever progress sits at 0, which is the case for anything
  // below the fold and for anyone who does not scroll it into view.
  const x = useTransform(scrollYProgress, [0, 1], [invert ? -220 : 220, 0])
  const tilt = useTransform(scrollYProgress, [0, 1], [invert ? -rotate * 3 : rotate * 3, rotate])

  return (
    <motion.figure
      ref={ref}
      className={styles.picture}
      style={{ width: `${width}rem`, rotate: tilt, translateX: x }}
    >
      <div
        className={styles.frame}
        style={aspect ? ({ '--picture-aspect': aspect } as React.CSSProperties) : undefined}
      >
        {src ? (
          // The frame is `width` minus the 1rem padding on each side. Both
          // callers hide the figure below `lg`, so that is its only rendered
          // size — a vw-based hint here just made Next serve the wrong variant.
          // These render at ~320px, so the extra quality costs very little and
          // keeps the fine text in the UI screenshot from smearing.
          <Image src={src} alt="" fill sizes={`${width * 16 - 32}px`} quality={90} />
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </motion.figure>
  )
}
