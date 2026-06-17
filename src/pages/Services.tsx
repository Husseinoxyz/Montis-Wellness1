import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const serviceHighlights: Record<string, string[]> = {
  'heart-recovery-health': [
    'Non-invasive cardiovascular support',
    'Chronic angina recovery pathways',
    'COQ10 and circulation-focused therapy',
    'Structured medical screening before treatment',
  ],
  'hormone-balancing': [
    'Comprehensive hormone profiling',
    'Bioidentical hormone replacement therapy',
    'Men and women treatment planning',
    'Ongoing medical review and adjustment',
  ],
  'inflammation-root-causes': [
    'Inflammation and oxidative stress screening',
    'Antioxidant and oxygen-based therapies',
    'Colon hydrotherapy support',
    'Root-cause treatment planning',
  ],
  'men-vitality-program': [
    'Male vitality and performance support',
    'Hormone imbalance assessment',
    'Natural and therapeutic interventions',
    'Sexual health optimization plans',
  ],
  'menopause-perimenopause': [
    'Perimenopause and menopause symptom relief',
    'Hormone replacement support',
    'Cellular therapy integration',
    'Personalized comfort and longevity planning',
  ],
  'digestive-health': [
    'Digestive disease screening',
    'Detox and colon hydrotherapy support',
    'Gut+ probiotic program integration',
    'Targeted recovery and maintenance plans',
  ],
  'revitalization-healthy-aging': [
    'Stem cell and regenerative support',
    'Beauty IV and immune therapies',
    'Healthy aging optimization',
    'Whole-body vitality planning',
  ],
  'weight-loss': [
    'Medical weight loss pathways',
    'IV weight loss drip support',
    'Hypoxia therapy integration',
    'Customized hormone and detox planning',
  ],
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-services.png"
            alt="Montis Specialist Clinic Services"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              What We <span style={{ color: '#CDB06A' }}>Offer</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A complete wellness and regenerative care offering, from screening and therapy to recovery, vitality, and long-term health planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
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
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={service.iconImage}
                        alt={service.title}
                        className="w-24 h-24 object-cover shrink-0"
                      />
                      <span className="text-sm font-medium tracking-[0.28em] uppercase" style={{ color: '#CDB06A' }}>
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg mt-3" style={{ color: '#007A59' }}>
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mt-6">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {(serviceHighlights[service.id] ?? []).map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#007A59' }} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                        style={{ backgroundColor: '#007A59' }}
                      >
                        Explore Service
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        to="/appointment"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
                        style={{ borderColor: '#007A59', color: '#007A59' }}
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-[360px] md:h-[460px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
