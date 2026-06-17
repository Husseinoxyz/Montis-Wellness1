import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Phone } from 'lucide-react';
import { screenings } from '../data/screenings';

export default function ScreeningDetail() {
  const { id } = useParams<{ id: string }>();
  const screening = screenings.find((item) => item.id === id);

  if (!screening) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Screening Not Found</h2>
          <Link to="/medical-screening" className="inline-flex items-center gap-2 text-[#007A59] font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Medical Screening
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = screenings.findIndex((item) => item.id === id);
  const prevScreening = currentIndex > 0 ? screenings[currentIndex - 1] : null;
  const nextScreening = currentIndex < screenings.length - 1 ? screenings[currentIndex + 1] : null;

  const features = [
    'Doctor-reviewed screening pathway',
    'Root-cause focused interpretation',
    'Personalised next-step guidance',
    'Designed for early discovery',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={screening.image} alt={screening.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/medical-screening" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              Back to Medical Screening
            </Link>

            <p className="text-lg font-semibold mb-4" style={{ color: '#CDB06A' }}>
              {screening.shortName}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {screening.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {screening.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg max-w-none">{screening.content}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-[#F6F6F2] rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Screen?</h3>
                <p className="text-gray-600 mb-6">
                  Book a screening appointment and let our medical team guide your next steps.
                </p>

                <div className="space-y-4 mb-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#007A59' }} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/appointment" className="block w-full text-center px-6 py-4 rounded-full text-white font-medium transition-all hover:scale-105 mb-4" style={{ backgroundColor: '#007A59' }}>
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Screening
                </Link>
                <a href="tel:+60102648685" className="block w-full text-center px-6 py-4 rounded-full font-medium border-2 transition-all hover:scale-105" style={{ borderColor: '#007A59', color: '#007A59' }}>
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

      <section className="py-12 bg-[#F6F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevScreening ? (
              <Link to={`/medical-screening/${prevScreening.id}`} className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:shadow-md transition-all group">
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#007A59] transition-colors" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Previous</p>
                  <p className="font-medium text-gray-900 group-hover:text-[#007A59] transition-colors">{prevScreening.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextScreening ? (
              <Link to={`/medical-screening/${nextScreening.id}`} className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:shadow-md transition-all group">
                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase">Next</p>
                  <p className="font-medium text-gray-900 group-hover:text-[#007A59] transition-colors">{nextScreening.title}</p>
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
