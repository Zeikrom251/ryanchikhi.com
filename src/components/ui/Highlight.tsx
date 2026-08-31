'use client'

import { motion } from 'motion/react'
import styles from './Highlight.module.scss'

interface HighlightProps {
  children: React.ReactNode
  variant?: 'solid' | 'soft'
  delay?: number
}

export default function Highlight({ children, variant = 'solid', delay = 0 }: HighlightProps) {
  const className = `${styles.highlight} ${variant === 'soft' ? styles.soft : ''}`

  return (
    <motion.span
      className={className}
      initial={{ scale: 1.3, opacity: 0 }}
      whileInView={{ scale: 1.07, rotate: -1, translateY: -2, opacity: 1 }}
      viewport={{ amount: 0.5, margin: '-10%', once: true }}
      transition={{ type: 'spring', duration: 0.9, bounce: 0.5, delay }}
    >
      {children}
    </motion.span>
  )
}
