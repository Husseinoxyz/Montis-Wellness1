import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ChevronDown, Clock, ExternalLink, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import { SITE_NAME, SITE_URL, absoluteUrl, breadcrumbJsonLd } from '../lib/seo';
import RichText from '../components/RichText';
import NotFound from './NotFound';
import { BlogCard } from './Blog';
import { blogPosts, formatDate, readingMinutes, type Block } from '../data/blog';
import { services } from '../data/services';

function BodyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 pt-6">{block.text}</h2>;
    case 'h3':
      return <h3 className="text-xl font-semibold text-[#007A59] pt-2">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CDB06A]" />
              <span><RichText text={item} /></span>
            </li>
          ))}
        </ul>
      );
    case 'note':
      return (
        <aside className="rounded-2xl bg-gray-50 p-5 text-gray-700">
          <p className="mb-1 text-sm font-semibold text-gray-900">Good to know</p>
          <p className="leading-relaxed"><RichText text={block.text} /></p>
        </aside>
      );
    default:
      return <p className="text-gray-700 text-lg leading-relaxed"><RichText text={block.text} /></p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const service = services.find((s) => s.id === post.relatedService);
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={post.seoTitle}
        description={post.description}
        path={path}
        image={post.image}
        type="article"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: absoluteUrl(post.image),
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: absoluteUrl(path),
            articleSection: post.category,
            author: { '@type': 'Organization', name: `${SITE_NAME} Medical Team`, url: SITE_URL },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Health Library', path: '/blog' },
            { name: post.title, path },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white">Health Library</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{post.category}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readingMinutes(post)} min read
              </span>
              <span>By the {SITE_NAME} medical team</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 space-y-6">
            {post.body.map((block, i) => (
              <BodyBlock key={i} block={block} />
            ))}

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 pt-6">Frequently asked questions</h2>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
              {post.faqs.map((faq) => (
                <details key={faq.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-gray-900">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#007A59] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>

            {post.furtherReading && (
              <div className="rounded-2xl bg-[#F6F6F2] p-6">
                <h2 className="text-lg font-semibold text-gray-900">Further reading</h2>
                <ul className="mt-4 space-y-3">
                  {post.furtherReading.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 text-[#007A59] font-medium hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="border-t border-gray-200 pt-6 text-sm text-gray-500 leading-relaxed">
              This article is for general information only and is not a substitute for personal medical
              advice. Treatments described may not be suitable for everyone. Please consult a qualified
              doctor before starting any treatment.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-[#F6F6F2] rounded-2xl p-8 lg:sticky lg:top-28">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Talk to our doctors</h2>
              <p className="text-gray-600 mb-6">
                Find out whether this treatment is right for you with a consultation at our Bangsar clinic.
              </p>
              <Link
                to="/appointment"
                className="block w-full text-center px-6 py-4 rounded-full text-white font-medium transition-all hover:scale-105 mb-4"
                style={{ backgroundColor: '#007A59' }}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Appointment
              </Link>
              <a
                href="tel:+60102648685"
                className="block w-full text-center px-6 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: '#007A59', color: '#007A59' }}
              >
                <Phone className="w-5 h-5 inline mr-2" />
                +60 10-264 8685
              </a>
              {service && (
                <Link
                  to={`/services/${service.id}`}
                  className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-6 group"
                >
                  <img src={service.iconImage} alt="" className="h-12 w-12 shrink-0" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-gray-400">Related service</span>
                    <span className="font-semibold text-gray-900 group-hover:text-[#007A59]">{service.title}</span>
                  </span>
                </Link>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Related articles</h2>
            <Link to="/blog" className="inline-flex items-center gap-2 font-medium text-[#007A59]">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
