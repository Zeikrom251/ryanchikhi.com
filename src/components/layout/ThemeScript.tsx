import Script from 'next/script'

const script = `
(function () {
  try {
    var stored = localStorage.getItem('theme')
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    var theme = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
  } catch (e) {
    document.documentElement.dataset.theme = 'light'
  }
})()
`

export default function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {script}
    </Script>
  )
}
