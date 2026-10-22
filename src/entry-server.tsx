import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HeadContext, buildHeadTags, fullTitle, type HeadCollector } from './lib/seo';
import { services } from './data/services';
import { screenings } from './data/screenings';
import { blogPosts } from './data/blog';

/** Every indexable URL; used by scripts/prerender.mjs for static HTML and the sitemap. */
export const routes = [
  '/',
  '/about',
  '/services',
  ...services.map((s) => `/services/${s.id}`),
  '/medical-screening',
  ...screenings.map((s) => `/medical-screening/${s.id}`),
  '/5d',
  '/blog',
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  '/contact',
  '/appointment',
];

export const blogDates = Object.fromEntries(blogPosts.map((p) => [`/blog/${p.slug}`, p.date]));

export function render(url: string) {
  const head: HeadCollector = {};
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
  );
  return {
    html,
    title: head.seo ? fullTitle(head.seo.title) : undefined,
    headTags: head.seo ? buildHeadTags(head.seo) : '',
    noindex: Boolean(head.seo?.noindex),
  };
}
