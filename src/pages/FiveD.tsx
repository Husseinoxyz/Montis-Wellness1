import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const dimensions = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Assessment & Diagnosis',
    iconImage: '/5D icons/Discovery.png',
    description: 'The Discovery phase involves comprehensive diagnostics and root-cause assessment. This forms the foundation of every patient journey.',
    highlights: [
      'Comprehensive health profiling',
      'Advanced diagnostic testing',
      'Root-cause identification',
      'Personalized baseline establishment',
    ],
  },
  {
    step: '02',
    title: 'Detox',
    subtitle: 'Cleanse & Optimize',
    iconImage: '/5D icons/Detox.png',
    description: 'The Detox phase focuses on systemic burden reduction and internal environment optimization, preparing the body for regenerative interventions.',
    highlights: [
      'Systemic burden reduction',
      'Internal environment optimization',
      'Cellular cleansing protocols',
      'Preparation for regeneration',
    ],
  },
  {
    step: '03',
    title: 'Defence',
    subtitle: 'Support & Strengthen',
    iconImage: '/5D icons/Defence.png',
    description: 'Defence focuses on immune support, repair, and resilience. This phase ensures regenerative strategies are supported by a robust internal defence system.',
    highlights: [
      'Immune system optimization',
      'Cellular repair mechanisms',
      'Building resilience',
      'Physiological stability restoration',
    ],
  },
  {
    step: '04',
    title: 'Dynamic',
    subtitle: 'Activation & Regeneration',
    iconImage: '/5D icons/Dynamic.png',
    description: 'Dynamic represents the regenerative activation phase, where targeted interventions support cellular renewal, vitality, and anti-aging outcomes.',
    highlights: [
      'Cellular renewal and restoration',
      'Energy and vitality enhancement',
      'Anti-aging interventions',
      'Performance optimization',
    ],
  },
  {
    step: '05',
    title: 'Dietary',
    subtitle: 'Maintenance & Longevity',
    iconImage: '/5D icons/Dietary.png',
    description: 'The Dietary phase ensures regenerative gains are sustained long-term through personalized nutrition, lifestyle optimization, and ongoing support.',
    highlights: [
      'Personalized nutrition strategies',
      'Lifestyle optimization',
      'Habit formation support',
      'Long-term maintenance planning',
    ],
  },
];

const benefits = [
  { iconImage: '/5D icons/Consistent Patient Journeys.png', title: 'Consistent Patient Journeys', description: 'Every patient follows a structured, proven pathway for optimal outcomes.' },
  { iconImage: '/5D icons/Reproducible Clinical Logic.png', title: 'Reproducible Clinical Logic', description: 'Medical clarity before intervention ensures responsible and predictable results.' },
  { iconImage: '/5D icons/Alignment & Governance.png', title: 'Alignment & Governance', description: 'Seamless coordination between doctors, teams, and operations across all centers.' },
  { iconImage: '/5D icons/Scalable Excellence.png', title: 'Scalable Excellence', description: 'Deliver regenerative medicine responsibly at scale without compromising standards.' },
];

export default function FiveD() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Montis 5D Hero.png"
            alt="5D Medical Model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Montis Specialist clinic 5D <span style={{ color: '#CDB06A' }}>Regenerative Model</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A structured framework guiding patient care, clinical decisions, and operational consistency across all Montis Specialist clinic-aligned practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              One Model. <span style={{ color: '#007A59' }}>Consistent Outcomes.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This framework ensures every Montis Specialist clinic-aligned practice delivers consistent, reproducible, and scalable medical outcomes. Medical clarity before intervention, responsible regenerative application, and consistent patient journeys across all centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Five Dimensions */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
          >
            The <span style={{ color: '#007A59' }}>Five Dimensions</span>
          </motion.h2>

          <div className="space-y-12">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: '#CDB06A' }}
                      >
                        {dimension.step}
                      </span>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {dimension.title}
                        </h3>
                        <p className="text-lg text-gray-600 mt-1">
                          {dimension.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {dimension.description}
                    </p>

                    <ul className="space-y-3">
                      {dimension.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1"
                            style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}
                          >
                            <CheckCircle className="w-4 h-4" style={{ color: '#007A59' }} />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon */}
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative"
                    >
                      <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-30"
                        style={{ backgroundColor: '#007A59' }}
                      />
                      <div className="relative w-72 h-72 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-2xl border-4" style={{ borderColor: '#CDB06A' }}>
                        <img src={dimension.iconImage} alt={dimension.title} className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Consistency */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Model Built for <span style={{ color: '#007A59' }}>Medical Consistency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Montis Specialist clinic 5D Model is not a flexible concept — it is a standardised clinical system. Across all Montis Specialist clinic-aligned practices, it ensures medical integrity and reproducible outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F6F6F2] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <img src={benefit.iconImage} alt={benefit.title} className="w-36 h-36 object-contain mb-6" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Platform */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                A Platform for <span style={{ color: '#007A59' }}>Growth</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The 5D Regenerative Model functions as the foundation for institutional growth and expansion, enabling regenerative medicine to be delivered responsibly at scale.
              </p>

              <ul className="space-y-4">
                {[
                  'Clinical training and education',
                  'SOP development and governance',
                  'Multicentre replication and licensing',
                  'Ethical integration of regenerative products and services',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: '#007A59' }}
                    >
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Regenerative medicine carries responsibility. Structure ensures innovation serves patients — not trends.
              </p>
              <div className="border-l-4 border-[#007A59] pl-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  The Montis Specialist clinic 5D Biological Regenerative Medical Model reflects our commitment to medical integrity, patient-centred outcomes, ethical practice, and sustainable, long-term healthcare development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Built on <span style={{ color: '#007A59' }}>Five Pillars</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/5D.png"
              alt="5D Model Framework"
              className="max-w-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
