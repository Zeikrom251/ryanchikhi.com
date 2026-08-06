'use client'

import { motion } from 'motion/react'
import styles from './Reveal.module.scss'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ type: 'spring', duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}
