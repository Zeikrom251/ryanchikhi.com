import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // 75 is the default and is fine for photographs, but it smears the fine
    // text in UI screenshots. Picture asks for 90.
    qualities: [75, 90],
  },
  sassOptions: {
    loadPaths: [path.join(process.cwd(), 'src/styles')],
    additionalData: `@use 'abstracts' as *;`,
  },
}

export default nextConfig
