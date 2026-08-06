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
}

export default function Picture({
  src,
  caption,
  width = 18,
  rotate = 3,
  invert = false,
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
      <div className={styles.frame}>
        {src ? (
          <Image src={src} alt="" fill sizes="(max-width: 1024px) 60vw, 360px" />
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </motion.figure>
  )
}
