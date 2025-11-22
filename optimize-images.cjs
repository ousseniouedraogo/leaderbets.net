
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = 'assets';

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error(`Error reading assets directory: ${err}`);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const fileExt = path.extname(filePath);

    if (['.png', '.jpg', '.jpeg'].includes(fileExt.toLowerCase())) {
      const webpPath = filePath.replace(/\.[^/.]+$/, ".webp");

      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath, (err, info) => {
          if (err) {
            console.error(`Error converting ${file} to webp: ${err}`);
          } else {
            console.log(`Converted ${file} to webp: ${info}`);
          }
        });
    }
  });
});
