import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons';

// Profiles without a URL yet (empty href) are hidden.
const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1BzqcxQKBh/', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/montis.specialist/', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@montis.clinic', Icon: TikTokIcon },
].filter((link) => link.href);
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-[#E6F2EC] text-gray-800 border-t border-[#007A59]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Montis Specialist Clinic"
                className="h-16 w-auto object-contain"
              />
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                Montis Specialist Clinic
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              A calm space for recovery, balance, and care—designed around you. We blend hands-on care with thoughtful technology.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Montis Specialist Clinic on ${label}`}
                  className="rounded-full transition-transform hover:scale-110"
                >
                  <Icon className="h-9 w-9" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#007A59' }}>Our Services</h4>
            <ul className="space-y-4">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-700 text-sm hover:text-[#007A59] transition-colors flex items-center gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                      <img src={service.iconImage} alt="" className="h-8 w-8 scale-[2.2] object-contain" />
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#007A59' }}>More Services</h4>
            <ul className="space-y-4">
              {services.slice(6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-700 text-sm hover:text-[#007A59] transition-colors flex items-center gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                      <img src={service.iconImage} alt="" className="h-8 w-8 scale-[2.2] object-contain" />
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ color: '#007A59' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#007A59] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Lot 1.02, Menara BRDB, BSC South Tower, 285, Jalan Maarof, Bangsar, 59000 Kuala Lumpur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#007A59] shrink-0" />
                <a href="tel:+60102648685" className="text-gray-700 text-sm hover:text-[#007A59] transition-colors">
                  +60 10-264 8685
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#007A59] shrink-0" />
                <a href="mailto:Oxyz.rabten@gmail.com" className="text-gray-700 text-sm hover:text-[#007A59] transition-colors">
                  Oxyz.rabten@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#007A59] shrink-0" />
                <a href="https://wa.me/60102648685" className="text-gray-700 text-sm hover:text-[#007A59] transition-colors">
                  WhatsApp: +60 10-264 8685
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#007A59] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Daily: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#007A59]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Montis Specialist Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Heart className="w-4 h-4 text-[#007A59]" />
            <span>Made with care for your wellness</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
