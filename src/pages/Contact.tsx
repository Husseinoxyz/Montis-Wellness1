import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/services';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-contact.png"
            alt="Montis Specialist Clinic Contact"
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
              Contact <span style={{ color: '#CDB06A' }}>Us</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Wellness is a journey—start with a single visit. Reach out to our team for any questions or to schedule your consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: MapPin, title: 'Address', content: contactInfo.address, action: null },
              { icon: Phone, title: 'Phone', content: contactInfo.phone, action: `tel:${contactInfo.phone}` },
              { icon: Mail, title: 'Email', content: contactInfo.email, action: contactInfo.email.includes('@') ? `mailto:${contactInfo.email}` : null },
              { icon: MessageCircle, title: 'WhatsApp', content: contactInfo.whatsapp, action: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}` },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F6F6F2] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}
                >
                  <item.icon className="w-7 h-7" style={{ color: '#007A59' }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.action ? (
                  <a
                    href={item.action}
                    className="text-gray-600 hover:text-[#007A59] transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F6F6F2] rounded-2xl p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6" style={{ color: '#007A59' }} />
              <h3 className="text-xl font-semibold text-gray-900">Operating Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { day: 'Monday', hours: contactInfo.hours.monday },
                { day: 'Tuesday', hours: contactInfo.hours.tuesday },
                { day: 'Wednesday', hours: contactInfo.hours.wednesday },
                { day: 'Thursday', hours: contactInfo.hours.thursday },
                { day: 'Friday', hours: contactInfo.hours.friday },
                { day: 'Saturday', hours: contactInfo.hours.saturday },
                { day: 'Sunday', hours: contactInfo.hours.sunday },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700 font-medium">{item.day}</span>
                  <span className="text-gray-500">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a <span style={{ color: '#007A59' }}>Message</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Have questions about our services? Want to learn more about a specific treatment? Fill out the form and our team will get back to you within 2 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: '#007A59' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Free Consultation</h4>
                    <p className="text-gray-500 text-sm">All initial consultations are complimentary. No obligation required.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: '#007A59' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Medical Team Review</h4>
                    <p className="text-gray-500 text-sm">Your inquiry will be reviewed by our panel of international medical professionals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                    <CheckCircle className="w-6 h-6" style={{ color: '#007A59' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Support</h4>
                    <p className="text-gray-500 text-sm">Prefer messaging? Reach us directly on WhatsApp for quick responses.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-[#F6F6F2] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#007A59' }} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our team will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#F6F6F2] rounded-2xl p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                        placeholder="General Inquiry"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: '#007A59' }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
