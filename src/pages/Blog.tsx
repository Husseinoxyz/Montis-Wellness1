import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import { SITE_NAME, SITE_URL, breadcrumbJsonLd } from '../lib/seo';
import { blogPosts, formatDate, readingMinutes } from '../data/blog';

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [category, setCategory] = useState('All');
  const posts = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Health Library"
        description="Doctor-led guides from Montis Specialist Clinic, Kuala Lumpur: stem cell and cell therapy, IV drips, ozone, chelation, heavy metal detox, colon hydrotherapy, EECP, diabetes and kidney health."
        path="/blog"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${SITE_NAME} Health Library`,
            url: `${SITE_URL}/blog`,
            blogPost: blogPosts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
              datePublished: p.date,
            })),
          },
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Health Library', path: '/blog' },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,122,89,0.08) 0%, rgba(205,176,106,0.16) 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#007A59]"
          >
            Montis Specialist Clinic
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-bold text-gray-900"
          >
            Health Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Clear, balanced guides to regenerative, detox, heart and metabolic treatments, written by
            the medical team at Montis Specialist Clinic, Kuala Lumpur.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === c
                    ? 'bg-[#007A59] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:text-[#007A59] border border-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl bg-[#F6F6F2] p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">More from our wellness blog</h2>
              <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
                Explore in-depth articles on our IV drips such as NAD+ and Myers’ cocktail, screening tests
                like Live Blood Analysis and HRV, and therapies including EECP, IHHT and chelation.
              </p>
            </div>
            <a
              href="https://wellness-blogs.montis-clinic.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#007A59' }}
            >
              Read more
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
      <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="rounded-full bg-[#007A59]/10 px-3 py-1 font-semibold text-[#007A59]">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingMinutes(post)} min read
          </span>
        </div>
        <h2 className="mt-4 text-xl font-semibold leading-snug text-gray-900 group-hover:text-[#007A59] transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-sm">
          <time dateTime={post.date} className="text-gray-400">{formatDate(post.date)}</time>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-[#007A59]"
            aria-label={`Read ${post.title}`}
          >
            Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
