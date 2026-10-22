// Runs after `vite build` and the SSR build: writes a fully rendered HTML file for every
// route (so search engines and link previews get real content and meta tags), plus
// sitemap.xml and robots.txt.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_URL = 'https://wellness.montis-clinic.com';
const dist = path.resolve('dist');
const ssrEntry = path.resolve('dist-ssr/entry-server.js');

const { render, routes, blogDates } = await import(pathToFileURL(ssrEntry).href);
const template = await readFile(path.join(dist, 'index.html'), 'utf-8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function page(url) {
  const { html, title, headTags } = render(url);
  let out = template.replace('<!--app-html-->', html).replace('<!--seo-head-->', headTags);
  if (title) out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`);
  return out;
}

for (const url of routes) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url.slice(1), 'index.html');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, page(url));
}

// Vercel serves this with a 404 status for any URL that has no prerendered file.
await writeFile(path.join(dist, '404.html'), page('/__not-found__'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((url) => {
    const loc = `${SITE_URL}${encodeURI(url)}`;
    return `  <url><loc>${loc}</loc><lastmod>${blogDates[url] ?? today}</lastmod></url>`;
  })
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

await rm(path.resolve('dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages, sitemap.xml and robots.txt`);
