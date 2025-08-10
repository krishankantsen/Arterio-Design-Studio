import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">Arterio</h3>
            <p className="text-gray-400 mb-4">
              Transforming spaces with innovative design solutions that reflect your unique style and vision.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Design</li>
              <li>Commercial Design</li>
              <li>Space Planning</li>
              <li>3D Visualization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <span>hello@arteriodesign.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>123 Design St, Creative City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Arterio Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;