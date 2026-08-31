import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['src/components/layout/ThemeScript.tsx'],
    rules: {
      // The rule predates the App Router, where the root layout is the
      // documented place for a beforeInteractive script.
      '@next/next/no-before-interactive-script-outside-document': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
