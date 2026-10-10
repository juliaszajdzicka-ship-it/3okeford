// Regenerates public/qr-peb.svg, the QR code on the follow-up section.
//
// The URL below must stay in step with NEXT_STEPS_URL in src/App.jsx. Change
// both together, then run this from the repo root:
//   npm install --no-save qrcode
//   node assets-source/generate-qr.mjs

import QRCode from 'qrcode'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const URL = 'https://www.nebriefing.org/peb'

const here = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(here, '..', 'public', 'qr-peb.svg')

// Error correction level H so the code still reads when printed small, or
// photographed off a screen at an angle.
await QRCode.toFile(OUT, URL, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 1,
  color: { dark: '#0c0a09', light: '#ffffff' },
})

console.log(`${Math.round(fs.statSync(OUT).size / 1024)} KB  public/qr-peb.svg  ->  ${URL}`)

// Guard against the SVG and src/App.jsx drifting apart.
const app = fs.readFileSync(path.join(here, '..', 'src', 'App.jsx'), 'utf8')
if (!app.includes(URL)) {
  console.warn(`\nWARNING: ${URL} does not appear in src/App.jsx. Update NEXT_STEPS_URL to match.`)
}
