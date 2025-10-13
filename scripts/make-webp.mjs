import { globby } from 'globby';
import sharp from 'sharp';
import { basename, dirname, join, extname } from 'node:path';
import { mkdir } from 'node:fs/promises';

const patterns = ['src/assets/**/*.{jpg,jpeg,JPG,png,PNG}'];
const files = await globby(patterns);

for (const file of files) {
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const out = join(dir, `${name}.webp`);
  await mkdir(dir, { recursive: true });
  await sharp(file).webp({ quality: 80 }).toFile(out);
  console.log('→ webp:', out);
}

console.log(`\n✅ Generated ${files.length} WebP files.`);

