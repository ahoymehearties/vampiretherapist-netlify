const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

const files = fs.readdirSync(imagesDir);
const targets = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

(async () => {
  for (const file of targets) {
    const input = path.join(imagesDir, file);
    const outName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const output = path.join(imagesDir, outName);
    if (fs.existsSync(output)) {
      console.log(`SKIP (exists): ${outName}`);
      continue;
    }
    try {
      const info = await sharp(input).webp({ quality: 85 }).toFile(output);
      const orig = fs.statSync(input).size;
      const pct = Math.round((1 - info.size / orig) * 100);
      console.log(`OK  ${file} → ${outName}  (${Math.round(orig/1024)}KB → ${Math.round(info.size/1024)}KB, -${pct}%)`);
    } catch (e) {
      console.log(`ERR ${file}: ${e.message}`);
    }
  }
})();
