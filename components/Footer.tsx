import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Arterio Design Studio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful, functional spaces that enhance your lifestyle
              and reflect your unique personality.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/arterio_design_studio" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/arteriodesignstudio/" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Residential Design',
                'Commercial Design',
                'Space Planning',
                'Color Consultation',
                'Furniture Selection',
                'Lighting Design',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Vijay Nagar, Indore, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-gray-400">+91 8085193131</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-gray-400">dshivam111213@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Arterio Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}