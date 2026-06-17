import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck, Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Medical Screening', path: '/medical-screening' },
  { label: '5D Model', path: '/5d' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isSolid = scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Montis Specialist Clinic home">
            <img
              src="/logo.png"
              alt="Montis Specialist Clinic"
              className="h-14 lg:h-16 w-auto object-contain"
            />
            <span
              className={`hidden sm:block text-lg lg:text-xl font-semibold tracking-tight transition-colors ${
                isSolid ? 'text-gray-900' : 'text-white'
              }`}
            >
              Montis Specialist Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
              isSolid ? 'bg-gray-100/80' : 'bg-white/10 backdrop-blur-md border border-white/15'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-white text-[#007A59] shadow-sm'
                    : isSolid
                      ? 'text-gray-700 hover:bg-white hover:text-[#007A59]'
                      : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+60102648685"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-105 ${
                isSolid
                  ? 'bg-[#007A59]/10 text-[#007A59] hover:bg-[#007A59]/15'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
              aria-label="Call Montis Specialist Clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#007A59' }}
            >
              <CalendarCheck className="w-4 h-4" />
              Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isSolid ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#007A59] bg-[#007A59]/5'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium ${
                location.pathname === '/appointment'
                  ? 'text-white bg-[#007A59]'
                  : 'text-[#007A59] bg-[#007A59]/10'
              }`}
            >
              <CalendarCheck className="w-4 h-4" />
              Appointment
            </Link>
            <a
              href="tel:+60102648685"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-white mt-3"
              style={{ backgroundColor: '#007A59' }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
