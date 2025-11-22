const fs = require('fs');
const path = require('path');
const { MOCK_PREDICTIONS } = require('./data/predictions.cjs');

const DOMAIN = 'https://leaderbets.net';
const PAGES_DIR = path.join(__dirname, 'pages');
const OUTPUT_FILE = path.join(__dirname, 'sitemap.xml');
const TODAY = new Date().toISOString().split('T')[0];

function getRouteFromFilename(filename) {
  const name = path.basename(filename, '.tsx');
  if (name.toLowerCase() === 'homepage') return '/';
  return '/' + name.replace(/page$/i, '').toLowerCase();
}

function generateUrlTag(route, priority = '0.8') {
  return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  // Existing pages
  const files = fs.readdirSync(PAGES_DIR);
  const pageUrls = files
    .filter(f => f.endsWith('.tsx') && !f.startsWith('_'))
    .map(getRouteFromFilename)
    .map(route => generateUrlTag(route, route === '/' ? '1.0' : '0.8'))
    .join('\n');

  // Predictions
  const predictionUrls = MOCK_PREDICTIONS.map(p => {
    const route = `/predictions/${p.id}`; // Or a slugified title
    return generateUrlTag(route, '0.7');
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageUrls}
${predictionUrls}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, sitemap.trim());
  console.log('Sitemap généré dans', OUTPUT_FILE);
}

main();
