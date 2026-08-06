import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: [path.join(process.cwd(), 'src/styles')],
    additionalData: `@use 'abstracts' as *;`,
  },
}

export default nextConfig
