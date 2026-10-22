import { createContext } from 'react';

export const SITE_URL = 'https://wellness.montis-clinic.com';
export const SITE_NAME = 'Montis Specialist Clinic';
const DEFAULT_IMAGE = '/hero-home.webp';

type JsonLd = Record<string, unknown>;

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: JsonLd | JsonLd[];
  noindex?: boolean;
}

/** Filled during server prerendering so the build script can write each page's <head>. */
export interface HeadCollector {
  seo?: SeoProps;
}

export const HeadContext = createContext<HeadCollector | null>(null);

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${SITE_URL}${encodeURI(path)}`;

export function fullTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

/** Head tags (everything except <title>) for a page; each tag is marked data-seo so it can be swapped on navigation. */
export function buildHeadTags(seo: SeoProps) {
  const url = absoluteUrl(seo.path);
  const image = absoluteUrl(seo.image ?? DEFAULT_IMAGE);
  const title = fullTitle(seo.title);
  const meta = (attr: 'name' | 'property', key: string, content: string) =>
    `<meta data-seo ${attr}="${key}" content="${escapeHtml(content)}">`;

  const tags = [
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'),
    `<link data-seo rel="canonical" href="${escapeHtml(url)}">`,
    meta('property', 'og:type', seo.type ?? 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:title', title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', image),
    meta('property', 'og:locale', 'en_MY'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', image),
  ];

  const jsonLd = seo.jsonLd ? (Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd]) : [];
  for (const data of jsonLd) {
    tags.push(
      `<script data-seo type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    );
  }

  return tags.join('\n    ');
}

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${SITE_URL}/#clinic`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero-home.webp`,
  telephone: '+60102648685',
  email: 'Oxyz.rabten@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lot 1.02, Menara BRDB, BSC South Tower, 285, Jalan Maarof, Bangsar',
    addressLocality: 'Kuala Lumpur',
    postalCode: '59000',
    addressCountry: 'MY',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  medicalSpecialty: ['Cardiovascular', 'Endocrine', 'Gastroenterologic', 'Renal'],
  areaServed: 'Kuala Lumpur, Malaysia',
  sameAs: ['https://www.facebook.com/share/1BzqcxQKBh/', 'https://www.instagram.com/montis.specialist/'],
};
