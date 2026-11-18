// Nach `ng build`: legt für jede Unterseite eine eigene HTML-Datei an (z. B. kurse.html),
// damit GitHub Pages sie mit Status 200 ausliefert und Google sie mit eigenem Titel findet.
// Erstellt außerdem sitemap.xml und robots.txt. Werte kommen aus src/seo.json.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = process.argv[2] ?? 'dist/dancer-website';
const seo = JSON.parse(readFileSync('src/seo.json', 'utf8'));
const base = readFileSync(join(dist, 'index.html'), 'utf8');
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setTag = (html, re, tag) => {
  if (!re.test(html)) throw new Error('Tag nicht gefunden: ' + re);
  return html.replace(re, tag);
};

for (const r of seo.routes) {
  const url = seo.site + (r.path ? '/' + r.path : '/');
  let html = base;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(r.description)}">`);
  html = setTag(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = setTag(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(r.title)}">`);
  html = setTag(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(r.description)}">`);
  html = setTag(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  writeFileSync(join(dist, r.path ? `${r.path}.html` : 'index.html'), html);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dist, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  seo.routes.map(r => `  <url><loc>${seo.site}${r.path ? '/' + r.path : '/'}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`).join('\n') +
  '\n</urlset>\n');
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${seo.site}/sitemap.xml\n`);

console.log(`SEO: ${seo.routes.length} Seiten, sitemap.xml und robots.txt in ${dist}`);
