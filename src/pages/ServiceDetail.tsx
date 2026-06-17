import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Phone, Clock, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#007A59] font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex((s) => s.id === id);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  const features = [
    'Personalized treatment plan',
    'Comprehensive pre-screening',
    'Expert medical supervision',
    'Ongoing progress monitoring',
    'Post-treatment follow-up',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Services
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={service.iconImage}
                alt={service.title}
                className="w-20 h-20 object-cover shrink-0"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none">
                {service.content}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* CTA Card */}
              <div className="bg-[#F6F6F2] rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book a consultation with our medical team to discuss your personalized treatment plan.
                </p>

                <div className="space-y-4 mb-6">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#007A59' }} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

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
                  Call Us Now
                </a>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Clock className="w-5 h-5" />
                    <span>Response within 2 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevService ? (
              <Link
                to={`/services/${prevService.id}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:shadow-md transition-all group"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#007A59] transition-colors" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Previous</p>
                  <p className="font-medium text-gray-900 group-hover:text-[#007A59] transition-colors">
                    {prevService.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService ? (
              <Link
                to={`/services/${nextService.id}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:shadow-md transition-all group"
              >
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase">Next</p>
                  <p className="font-medium text-gray-900 group-hover:text-[#007A59] transition-colors">
                    {nextService.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#007A59] transition-colors" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
