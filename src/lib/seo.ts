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
  imageAlt?: string;
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

/** Google cuts titles at roughly 60 characters, so the brand suffix is only added when it fits. */
const MAX_TITLE = 62;

export function fullTitle(title: string) {
  if (title.includes(SITE_NAME)) return title;
  const withBrand = `${title} | ${SITE_NAME}`;
  if (withBrand.length <= MAX_TITLE) return withBrand;
  const withShortBrand = `${title} | Montis Clinic`;
  return withShortBrand.length <= MAX_TITLE ? withShortBrand : title;
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
    meta('property', 'og:image:alt', seo.imageAlt ?? title),
    meta('property', 'og:locale', 'en_MY'),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', image),
    meta('name', 'twitter:image:alt', seo.imageAlt ?? title),
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
  alternateName: ['Montis Clinic', 'Montis Specialist Center', 'Montis Wellness'],
  description:
    'Integrative and regenerative medicine clinic in Bangsar, Kuala Lumpur offering heart recovery (EECP), diabetes care, detox, hormone therapy, IV drips and health screening.',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-512.png`, width: 512, height: 512 },
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
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Montis+Specialist+Clinic+Menara+BRDB+Bangsar+Kuala+Lumpur',
  areaServed: [
    { '@type': 'City', name: 'Kuala Lumpur' },
    { '@type': 'AdministrativeArea', name: 'Selangor' },
    { '@type': 'Country', name: 'Malaysia' },
  ],
  availableService: [
    'EECP heart therapy',
    'Diabetes management',
    'Weight loss',
    'Detox and cleansing',
    'Hormone balancing (BHRT)',
    'Menopause care',
    "Men's health",
    'Digestive health and colon hydrotherapy',
    'Healthy aging',
    'Health screening',
  ].map((name) => ({ '@type': 'MedicalTherapy', name })),
  sameAs: ['https://www.facebook.com/share/1BzqcxQKBh/', 'https://www.instagram.com/montis.specialist/', 'https://www.tiktok.com/@montis.clinic'],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: 'Montis Clinic',
  url: `${SITE_URL}/`,
  inLanguage: 'en-MY',
  publisher: { '@id': `${SITE_URL}/#clinic` },
};
