import { useId } from 'react'

// An original tile drawn from Algerian motifs. A diagonal strapwork lattice,
// as on the zellige walls of Tlemcen, holds cells that alternate between the
// eight-point khatam star and the concentric lozenge of Kabyle weaving and
// pottery, so each motif sits on a checkerboard with the other.
//
// One 96-unit tile: a star cell in the middle, and the four corners, which the
// neighbouring tiles complete into whole lozenge cells.
const STAR =
  '0,-26 7.6,-18.4 18.4,-18.4 18.4,-7.6 26,0 18.4,7.6 18.4,18.4 7.6,18.4 0,26 -7.6,18.4 -18.4,18.4 -18.4,7.6 -26,0 -18.4,-7.6 -18.4,-18.4 -7.6,-18.4'
const ROSETTE =
  '0,-11 3.2,-7.8 7.8,-7.8 7.8,-3.2 11,0 7.8,3.2 7.8,7.8 3.2,7.8 0,11 -3.2,7.8 -7.8,7.8 -7.8,3.2 -11,0 -7.8,-3.2 -7.8,-7.8 -3.2,-7.8'
// The lattice, plus the four ties that lock each star's points into it.
const STRAPS = 'M48 0 96 48 48 96 0 48Z M48 0V22 M48 74V96 M0 48H22 M74 48H96'
const CORNERS = [
  [0, 0],
  [96, 0],
  [0, 96],
  [96, 96],
]

export interface ZelligeColours {
  ink: string
  saffron: string
  terracotta: string
  ground: string
}

// On the site the colours are CSS variables, so the tile follows the theme.
const THEMED: ZelligeColours = {
  ink: 'var(--zellige-ink)',
  saffron: 'var(--zellige-saffron)',
  terracotta: 'var(--zellige-terracotta)',
  ground: 'var(--zellige-ground)',
}

const diamond = (r: number) => `M0 ${-r} ${r} 0 0 ${r} ${-r} 0Z`

/**
 * The pattern as SVG markup: a `<pattern>` plus a rect filling the viewport
 * with it. A string rather than JSX so the share card (Satori, which runs no
 * hooks and reads no CSS variables) draws the exact same tile.
 */
export function zelligeMarkup(id: string, size: number, c: ZelligeColours) {
  const fill = (colour: string) => `style="fill:${colour}"`
  const strap = (width: number, colour: string, fillColour = 'none') =>
    `style="fill:${fillColour};stroke:${colour};stroke-width:${width};stroke-linejoin:round"`
  // Kabyle lozenge rings, outermost first.
  const rings: [number, string][] = [
    [34, c.saffron],
    [27, c.ground],
    [20, c.terracotta],
    [13, c.ground],
    [7, c.ink],
  ]
  const lozenges = CORNERS.map(
    ([x, y]) =>
      `<g transform="translate(${x} ${y})">${rings.map(([r, colour]) => `<path d="${diamond(r)}" ${fill(colour)}/>`).join('')}</g>`
  ).join('')

  return `<defs><pattern id="${id}" width="${size}" height="${size}" viewBox="0 0 96 96" patternUnits="userSpaceOnUse">${lozenges}<path d="${STRAPS}" ${strap(5.5, c.ink)}/><path d="${STRAPS}" ${strap(2, c.ground)}/><g transform="translate(48 48)"><polygon points="${STAR}" ${strap(5.5, c.ink, c.ink)}/><polygon points="${STAR}" ${strap(2, c.ground)}/><polygon points="${ROSETTE}" ${fill(c.saffron)}/><path d="${diamond(4)}" ${fill(c.ground)}/></g></pattern></defs><rect width="100%" height="100%" fill="url(#${id})"/>`
}

export default function Zellige({ size = 96, className }: { size?: number; className?: string }) {
  const id = useId()
  return (
    <svg
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: zelligeMarkup(id, size, THEMED) }}
    />
  )
}
