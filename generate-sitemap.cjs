const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://leaderbets.net';
const PAGES_DIR = path.join(__dirname, 'pages');
const OUTPUT_FILE = path.join(__dirname, 'sitemap.xml');
const TODAY = new Date().toISOString().split('T')[0];

function getRouteFromFilename(filename) {
  const name = path.basename(filename, '.tsx');
  if (name.toLowerCase() === 'homepage') return '/';
  return '/' + name.replace(/page$/i, '').toLowerCase();
}

function generateUrlTag(route) {
  return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}

function main() {
  const files = fs.readdirSync(PAGES_DIR);
  const urls = files
    .filter(f => f.endsWith('.tsx') && !f.startsWith('_'))
    .map(getRouteFromFilename)
    .map(generateUrlTag)
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, sitemap.trim());
  console.log('Sitemap généré dans', OUTPUT_FILE);
}

main();
