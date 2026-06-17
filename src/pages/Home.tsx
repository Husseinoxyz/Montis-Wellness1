import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { services, testimonials } from '../data/services';
import { team } from '../data/team';

const faqs = [
  {
    question: 'What services does Montis offer?',
    answer:
      'Montis provides health assessments, detox therapies, defence programs, dynamic treatments, dietary support, and specialized programs for hormone balance, heart recovery, weight loss, digestive health, revitalization, and healthy aging.',
  },
  {
    question: 'What is Resonance Scanning at Montis?',
    answer:
      'Resonance Scanning is a non-invasive diagnostic tool used to assess energetic imbalances in the body and help detect potential health concerns early.',
  },
  {
    question: 'What does the Comprehensive Blood Test include?',
    answer:
      'It evaluates multiple blood parameters to provide insight into organ function, nutritional status, inflammation patterns, and potential infections as part of an overall health review.',
  },
  {
    question: 'What is Colon Hydrotherapy at Montis?',
    answer:
      'Colon Hydrotherapy is a gentle detoxification procedure that uses warm water to help flush waste and toxins from the colon while supporting digestive health.',
  },
  {
    question: 'How does Chelation Therapy help?',
    answer:
      'Chelation Therapy uses binding agents to support the removal of heavy metals from the body, helping reduce toxic load where medically appropriate.',
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 xl:px-28 py-24">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Feel Good,{' '}
              <span style={{ color: '#CDB06A' }}>Live Well</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 mb-10 leading-relaxed"
            >
              Montis is your destination for integrative and regenerative medicine, built around the principle that lasting wellness comes from treating root causes, not only symptoms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#007A59' }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:border-white transition-all"
              >
                <Play className="w-5 h-5" />
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Services Overview */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.1fr] gap-8 lg:gap-12 items-start mb-16"
          >
            <div>
              <span className="text-sm font-medium tracking-[0.28em] uppercase" style={{ color: '#CDB06A' }}>
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
                Complete care for
                {' '}
                <span style={{ color: '#007A59' }}>modern wellness</span>
              </h2>
            </div>

            <div className="hidden lg:block w-px h-24 bg-gray-900/80 mx-auto mt-2" />

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Discovery, detoxification, regenerative support, and targeted medical programs presented as one connected wellness journey for long-term vitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-5">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-0 right-8 bottom-0 flex items-end">
                      <div className="w-3 h-14 shrink-0" style={{ backgroundColor: '#CDB06A' }} />
                      <div
                        className="px-6 py-4 text-white font-semibold text-xl leading-tight"
                        style={{
                          backgroundColor: '#007A59',
                          clipPath: 'polygon(0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%)',
                        }}
                      >
                        {service.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-2">
                    {service.subtitle}
                  </p>
                  <div className="flex items-center text-xl font-semibold" style={{ color: '#007A59' }}>
                    Continue Reading
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: '#007A59', color: '#007A59' }}
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden bg-[#F6F6F2] min-h-[560px]">
          <div className="max-w-7xl w-full ml-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 lg:px-12 h-full"
            >
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
                Why Montis
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
                Wellness Built on{' '}
                <span style={{ color: '#007A59' }}>Science</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The body’s natural state is health. When toxins, poor nutrition, stress, genetics, or lifestyle habits disrupt that balance, our role is to identify the deeper cause and help restore the body’s own healing capacity.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Root-Cause Focus', desc: 'We aim to understand the deeper imbalances behind symptoms instead of only suppressing what appears on the surface.' },
                  { title: 'Biological Medicine Principles', desc: 'Our therapies are guided by regenerative and integrative medical thinking designed to support natural restoration.' },
                  { title: 'Advanced Diagnostics', desc: 'Comprehensive testing and assessments help us build treatment pathways with greater clarity and precision.' },
                  { title: 'Long-Term Vitality', desc: 'Every program is shaped to help patients live healthier lives and maintain energy, function, and well-being over time.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                      <span className="text-lg font-bold" style={{ color: '#007A59' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden min-h-[420px] h-full lg:min-h-[560px]"
          >
            <img
              src="/hero-about.png"
              alt="Montis Specialist Clinic Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              What Our <span style={{ color: '#007A59' }}>Clients Say</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: offset === 0 ? 1 : 0, x: offset === 0 ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F6F6F2] rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5" style={{ color: '#CDB06A' }} fill="#CDB06A" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className="transition-all"
                  style={{
                    width: currentTestimonial === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentTestimonial === index ? '#007A59' : '#D1D5DB',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="relative h-[320px] md:h-[480px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/5 D hero.png"
          alt="Montis Specialist Clinic 5D model"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: '#F6F6F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#CDB06A' }}>
              Our Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900">
              Meet the <span style={{ color: '#007A59' }}>Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our panel of international medical professionals brings decades of combined experience in wellness and preventive medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: '#007A59' }}>{member.role}</p>
                <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden bg-[#F6F6F2] min-h-[520px]">
          <div className="max-w-7xl w-full ml-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12 lg:px-12"
            >
              <span className="text-sm font-medium tracking-[0.28em] uppercase" style={{ color: '#CDB06A' }}>
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900 leading-tight">
                Answers for your
                {' '}
                <span style={{ color: '#007A59' }}>wellness journey</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A clearer look at how Montis approaches diagnostics, detoxification, regenerative support, and long-term care planning.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`home-faq-${index}`} className="border-gray-200">
                    <AccordionTrigger className="text-base md:text-lg font-semibold text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden min-h-[420px] h-full lg:min-h-[520px]"
          >
            <img
              src="/hero-contact.png"
              alt="Montis Specialist Clinic consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-services.png"
            alt="Wellness Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.85)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              New guests start with a quick consultation so we can recommend the right plan for your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-gray-900 font-medium transition-all hover:scale-105"
                style={{ backgroundColor: '#CDB06A' }}
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium border-2 border-white/30 hover:border-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
