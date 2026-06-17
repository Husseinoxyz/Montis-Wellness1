import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight, Stethoscope } from 'lucide-react';
import { contactInfo, services } from '../data/services';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [step] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService = services.find((service) => service.id === formData.service);
    const appointmentMessage = [
      'Hello Montis Specialist Clinic, I would like to request an appointment.',
      '',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Service: ${selectedService?.title ?? formData.service}`,
      `Preferred Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
      `Additional Notes: ${formData.notes || 'None'}`,
    ].join('\n');

    const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, '');
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(appointmentMessage)}`;
    setSubmitted(true);
  };

  const steps = [
    { icon: Stethoscope, label: 'Select Service' },
    { icon: Calendar, label: 'Pick Date & Time' },
    { icon: User, label: 'Your Details' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-appointment.png"
            alt="Book Appointment"
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
              Request an <span style={{ color: '#CDB06A' }}>Appointment</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We'll confirm within 2 hours. New guests start with a quick consultation so we can recommend the right plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F6F6F2] rounded-3xl p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: 'rgba(0, 122, 89, 0.1)' }}>
                <CheckCircle className="w-10 h-10" style={{ color: '#007A59' }} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appointment Requested!
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
                Thank you for booking with Montis Specialist Clinic. Our team will review your request and confirm your appointment within 2 hours via email or phone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: '#007A59' }}
                >
                  Back to Home
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border-2 transition-all hover:scale-105"
                  style={{ borderColor: '#007A59', color: '#007A59' }}
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Steps */}
              <div className="flex items-center justify-center gap-4 mb-12">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all ${
                        step >= i + 1
                          ? 'text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                      style={step >= i + 1 ? { backgroundColor: '#007A59' } : {}}
                    >
                      <s.icon className="w-5 h-5" />
                      <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="bg-[#F6F6F2] rounded-3xl p-8 md:p-12 space-y-8">
                {/* Step 1: Service Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    1. Select a Service
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.service === service.id
                            ? 'border-[#007A59] bg-white'
                            : 'border-transparent bg-white/50 hover:bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          required
                          checked={formData.service === service.id}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="sr-only"
                        />
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                          <img
                            src={service.iconImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{service.title}</p>
                          <p className="text-sm text-gray-500">{service.subtitle}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Step 3: Personal Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    3. Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007A59] focus:ring-2 focus:ring-[#007A59]/20 outline-none transition-all resize-none"
                      placeholder="Any specific concerns or requirements..."
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                      By submitting, you agree to our terms and privacy policy.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: '#007A59' }}
                    >
                      <Calendar className="w-5 h-5" />
                      Request Appointment
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
