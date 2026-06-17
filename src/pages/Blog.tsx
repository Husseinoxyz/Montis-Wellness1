import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,122,89,0.08) 0%, rgba(205,176,106,0.16) 100%)',
          }}
        />

        <div className="relative w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            We are preparing articles, updates, and expert insights from Montis Specialist Clinic.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
