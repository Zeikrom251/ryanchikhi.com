import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // 75 is the default and is fine for photographs, but it smears the fine
    // text in UI screenshots. Picture asks for 90.
    qualities: [75, 90],
  },
  // CSP is left out: the inline theme script and JSON-LD would need nonces.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ]
  },
  sassOptions: {
    loadPaths: [path.join(process.cwd(), 'src/styles')],
    additionalData: `@use 'abstracts' as *;`,
  },
}

export default nextConfig
