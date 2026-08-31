// Trims transparent padding, caps the longest edge and recompresses everything
// under public/. Run it after dropping new photos in: source exports are often
// several MB, which bloats the repo even though Next serves resized copies.
//
//   pnpm optimize:images          check only, prints what it would do
//   pnpm optimize:images --write  rewrite the files in place

import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('../public', import.meta.url).pathname
const WRITE = process.argv.includes('--write')
const MAX_EDGE = 1400
const MAX_BYTES = 400 * 1024

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) await walk(full, out)
    else if (['.png', '.jpg', '.jpeg'].includes(extname(entry.name).toLowerCase())) out.push(full)
  }
  return out
}

const files = await walk(ROOT)
let saved = 0

for (const file of files) {
  const before = (await stat(file)).size
  const input = await readFile(file)
  const meta = await sharp(input).metadata()
  const oversized = Math.max(meta.width, meta.height) > MAX_EDGE

  if (!oversized && before <= MAX_BYTES) continue

  let pipeline = sharp(input)
  // Only PNGs carry an alpha channel worth trimming.
  if (meta.hasAlpha) pipeline = pipeline.trim({ threshold: 1 })
  pipeline = pipeline.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })

  const output = meta.hasAlpha
    ? await pipeline.png({ compressionLevel: 9 }).toBuffer()
    : await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer()

  if (output.length >= before) continue

  const name = relative(ROOT, file)
  console.log(
    `${WRITE ? 'wrote ' : 'would '} ${name}: ${(before / 1024).toFixed(0)}kb -> ${(output.length / 1024).toFixed(0)}kb`
  )
  saved += before - output.length
  if (WRITE) await writeFile(file, output)
}

console.log(
  saved > 0
    ? `${WRITE ? 'Saved' : 'Would save'} ${(saved / 1048576).toFixed(2)} MB`
    : 'Nothing to optimise.'
)
