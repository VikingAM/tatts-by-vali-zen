import { globby } from 'globby';
import sharp from 'sharp';
import { basename, dirname, join, extname } from 'node:path';
import { mkdir } from 'node:fs/promises';

const SIZES = {
  // For style cards (425x239 displayed)
  style: [480, 640, 768],
  // For gallery images (358x478 displayed on mobile, larger on desktop)
  gallery: [400, 600, 800, 1200],
  // For about/hero images
  hero: [480, 768, 1024, 1920],
  // For logo (41x41 displayed)
  logo: [48, 96],
};

async function optimizeImage(file, sizes, quality = 80) {
  const dir = dirname(file);
  const name = basename(file, extname(file));
  const ext = extname(file).toLowerCase();
  
  for (const size of sizes) {
    const outputWebp = join(dir, `${name}-${size}w.webp`);
    const outputJpg = join(dir, `${name}-${size}w${ext}`);
    
    try {
      // Create WebP version
      await sharp(file)
        .resize(size, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality })
        .toFile(outputWebp);
      
      console.log(`✓ ${outputWebp}`);
      
      // Create JPG/PNG version as fallback
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(file)
          .resize(size, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality })
          .toFile(outputJpg);
        console.log(`✓ ${outputJpg}`);
      } else if (ext === '.png') {
        await sharp(file)
          .resize(size, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .png({ quality: 80 })
          .toFile(outputJpg);
        console.log(`✓ ${outputJpg}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
}

async function main() {
  console.log('🖼️  Generating responsive image sizes...\n');
  
  // Style images (smaller)
  const styleImages = await globby(['src/assets/style-*.{jpg,jpeg,png}']);
  console.log('📐 Processing style images...');
  for (const file of styleImages) {
    await optimizeImage(file, SIZES.style, 75);
  }
  
  // Gallery images (medium)
  const galleryImages = await globby(['src/assets/{Florale,Skript,Rose,Schmetterling,Maria*}.{JPG,jpg,webp}']);
  console.log('\n🎨 Processing gallery images...');
  for (const file of galleryImages.filter(f => !f.includes('-'))) {
    await optimizeImage(file, SIZES.gallery, 80);
  }
  
  // Hero/About images (large)
  const heroImages = await globby(['src/assets/{Banner,Valerio}.{png,webp}']);
  console.log('\n🌟 Processing hero/about images...');
  for (const file of heroImages.filter(f => !f.includes('-'))) {
    await optimizeImage(file, SIZES.hero, 80);
  }
  
  // Logo (tiny)
  const logoImages = await globby(['src/assets/Logo_Tattsbyvali_Siegel.{png,webp}']);
  console.log('\n🔖 Processing logo...');
  for (const file of logoImages) {
    await optimizeImage(file, SIZES.logo, 90);
  }
  
  console.log('\n✅ Done! Generated responsive image sizes.');
}

main().catch(console.error);

