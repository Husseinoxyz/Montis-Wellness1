import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { screenings } from '../data/screenings';

const screeningHighlights: Record<string, string[]> = {
  'bio-resonance-scanning': [
    'Non-invasive and radiation-free',
    'Detects functional imbalances early',
    'Supports personalised wellness planning',
    'Part of the D1 Discovery stage',
  ],
  'heart-rate-variability': [
    'Assesses stress and recovery balance',
    'Reveals nervous-system resilience',
    'Supports burnout prevention',
    'Guides sleep, breathwork, and recovery plans',
  ],
  'dried-layer-blood-encryption': [
    'Maps immune and inflammation patterns',
    'Reviews oxidative stress indicators',
    'Supports D2 Detox and D3 Defence planning',
    'Uses a small capillary blood sample',
  ],
  'live-blood-analysis': [
    'Shows living blood cells in real time',
    'Reviews cellular terrain and toxicity',
    'Supports nutrient and immune insights',
    'Provides immediate visual feedback',
  ],
};

export default function MedicalScreening() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/screening/Medical Screening Hero.png"
            alt="Montis health screening consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full px-4 py-2 mb-6 text-sm font-semibold text-white border border-[#CDB06A]/40 bg-[#CDB06A]/20">
              Up to 65% OFF
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Health Screening <span style={{ color: '#CDB06A' }}>at Montis</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive screening gives you a complete picture of your health, enabling early detection, prompt treatment, and a much greater chance of a successful outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Why Comprehensive <span style={{ color: '#007A59' }}>Screening Matters</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Most diseases do not announce themselves. By the time symptoms appear, a condition may already be well advanced. That is why comprehensive health screening is one of the most important investments you can make in your long-term health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                A basic screening only tells part of the story. Conditions like diabetes, hypertension, high cholesterol, fatty liver, breast cancer, prostate cancer, colorectal cancer, and hormone imbalances often develop silently, with no obvious signs or symptoms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Without the right tests, they go undetected until they become significantly harder to treat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden bg-[#F6F6F2] min-h-[620px]">
          <div className="max-w-7xl w-full ml-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 lg:px-12 h-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span style={{ color: '#007A59' }}>Approach</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Montis, screening is not just about running tests. Our doctors focus on understanding your risk factors and identifying root causes, not simply reacting to symptoms.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                A single screening session is also not enough. Health changes over time, and conditions that are not present today may develop later. Regular, thorough screening ensures nothing is missed.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden min-h-[420px] h-full lg:min-h-[620px]"
          >
            <img
              src="/approach.png"
              alt="Montis medical screening approach"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Our Screening <span style={{ color: '#007A59' }}>Packages</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer packages to suit your needs. Please find the details below.
            </p>
          </motion.div>

          <div className="space-y-20">
            {screenings.map((card, index) => (
              <motion.div
                key={card.shortName}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                  }`}
                >
                  <div>
                    <span className="text-sm font-medium tracking-[0.28em] uppercase" style={{ color: '#CDB06A' }}>
                      Screening {String(index + 1).padStart(2, '0')} / {card.shortName}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-5">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mt-6">
                      {card.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {(screeningHighlights[card.id] ?? []).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#007A59' }} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to={`/medical-screening/${card.id}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                        style={{ backgroundColor: '#007A59' }}
                      >
                        Explore Screening
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        to="/appointment"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
                        style={{ borderColor: '#007A59', color: '#007A59' }}
                      >
                        Book Screening
                      </Link>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[360px] md:h-[460px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Screening Package <span style={{ color: '#007A59' }}>Details</span>
            </h2>
            <div className="overflow-hidden">
              <img
                src="/screening/Screening Packages.png"
                alt="Montis screening package details"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
