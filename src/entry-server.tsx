import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HeadContext, SITE_URL, buildHeadTags, fullTitle, type HeadCollector } from './lib/seo';
import { contactInfo, services } from './data/services';
import { screenings } from './data/screenings';
import { blogPosts } from './data/blog';
import { team } from './data/team';
import { serviceFaqs } from './data/serviceFaqs';

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

/**
 * /llms.txt: a plain-text summary of the clinic with links to every page, in the llmstxt.org
 * format, so AI assistants (ChatGPT, Perplexity, Claude, Gemini) can describe Montis accurately.
 */
export function buildLlmsTxt() {
  const link = (title: string, path: string, note: string) => `- [${title}](${SITE_URL}${encodeURI(path)}): ${note}`;
  return `# Montis Specialist Clinic

> Integrative and regenerative medicine clinic in Bangsar, Kuala Lumpur, Malaysia. Montis treats the root causes of chronic conditions using the Montis 5D model (Discovery, Detox, Defence, Dietary, Dynamic), combining health screening, detox, IV drips, EECP heart therapy, hormone therapy and stem cell programmes.

- Address: ${contactInfo.address}, Malaysia
- Phone and WhatsApp: ${contactInfo.phone}
- Opening hours: daily, 9am to 6pm
- Book an appointment: ${SITE_URL}/appointment
- Also known as: Montis Clinic, Montis Specialist Center, Montis Wellness

## Treatments

${services.map((s) => link(s.seoTitle, `/services/${s.id}`, s.metaDescription)).join('\n')}

## Health screening

${screenings.map((s) => link(s.seoTitle, `/medical-screening/${s.id}`, s.metaDescription)).join('\n')}

## Doctors

${team.map((d) => `- ${d.name}, ${d.role}. ${d.bio}`).join('\n')}

## Health Library articles

${blogPosts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)).join('\n')}

## Common questions

${services
  .flatMap((s) => (serviceFaqs[s.id]?.faqs ?? []).slice(0, 2))
  .map((f) => `- ${f.question} ${f.answer}`)
  .join('\n')}

## Optional

- [About Montis](${SITE_URL}/about): doctors, values and the clinic's root-cause approach
- [The Montis 5D model](${SITE_URL}/5d): Discovery, Detox, Defence, Dietary and Dynamic stages of care
- [Contact](${SITE_URL}/contact): address, map and contact details
`;
}
