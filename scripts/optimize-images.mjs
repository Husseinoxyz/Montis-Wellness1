// Creates a resized .webp next to every PNG in public/ so pages can ship small images.
// Originals are left untouched. Run with: node scripts/optimize-images.mjs
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public');
const iconDirs = ['service icons', '5D icons', 'About icons'];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.png$/i.test(entry.name)) yield full;
  }
}

for await (const file of walk(root)) {
  const rel = path.relative(root, file);
  const out = file.replace(/\.png$/i, '.webp');
  const isIcon = iconDirs.some((d) => rel.startsWith(d)) || /logo/i.test(rel);
  const isPortrait = rel.startsWith('Team');
  const maxWidth = isIcon ? 256 : isPortrait ? 800 : 1920;
  await sharp(file)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: isIcon ? 90 : 78 })
    .toFile(out);
  const [a, b] = await Promise.all([stat(file), stat(out)]);
  console.log(`${rel}: ${(a.size / 1024).toFixed(0)}KB -> ${(b.size / 1024).toFixed(0)}KB`);
}
