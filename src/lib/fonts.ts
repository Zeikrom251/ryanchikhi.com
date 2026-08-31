import { IBM_Plex_Sans, Instrument_Serif } from 'next/font/google'

export const sans = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const serif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
})

export const fontVariables = `${sans.variable} ${serif.variable}`
