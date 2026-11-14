// Builds the favicon / app icon set from public/logo.png.
// Small icons use only the dot-and-mountain mark (the "MONTIS" text is unreadable at 16-48px).
// Run with: node scripts/generate-icons.mjs
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const SRC = 'public/logo.png';
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// Crop the mark: everything above the first fully empty row below 60% of the trimmed logo.
const { data, info } = await sharp(SRC).trim().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const rowIsEmpty = (y) => {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * C;
    if (data[i + 3] > 20 && data[i] < 240) return false;
  }
  return true;
};
let gap = Math.round(H * 0.6);
while (gap < H && !rowIsEmpty(gap)) gap++;

const mark = await sharp(SRC).trim().extract({ left: 0, top: 0, width: W, height: gap }).trim().toBuffer();
const trimmedLogo = await sharp(SRC).trim().toBuffer();

/** Centre `input` on a white square with `pad` fraction of padding on each side. */
async function square(input, size, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const fitted = await sharp(input).resize(inner, inner, { fit: 'contain', background: WHITE }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: WHITE } })
    .composite([{ input: fitted, gravity: 'center' }])
    .png()
    .toBuffer();
}

const out = {
  'public/favicon-48x48.png': await square(mark, 48, 0.04),
  'public/favicon-32x32.png': await square(mark, 32, 0.03),
  'public/apple-touch-icon.png': await square(mark, 180, 0.1),
  'public/icon-192.png': await square(mark, 192, 0.1),
  'public/icon-512.png': await square(mark, 512, 0.1),
  // Full logo with name, for Google's Organization logo and link previews.
  'public/logo-512.png': await square(trimmedLogo, 512, 0.06),
};
for (const [file, buf] of Object.entries(out)) await writeFile(file, buf);

// favicon.ico with 16, 32 and 48px PNG frames (PNG-in-ICO is supported by all current browsers).
const frames = await Promise.all([16, 32, 48].map((s) => square(mark, s, s === 16 ? 0 : 0.03)));
const header = Buffer.alloc(6 + frames.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((png, i) => {
  const size = [16, 32, 48][i];
  const e = 6 + i * 16;
  header.writeUInt8(size, e);
  header.writeUInt8(size, e + 1);
  header.writeUInt8(0, e + 2);
  header.writeUInt8(0, e + 3);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(png.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += png.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...frames]));

console.log('Icons written:', ['public/favicon.ico', ...Object.keys(out)].join(', '));
