'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    info: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: Mail,
    title: 'Email',
    info: 'hello@arteriodesign.com',
    link: 'mailto:hello@arteriodesign.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    info: '123 Design Street, Creative City, CC 12345',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    info: 'Mon - Fri: 9AM - 6PM',
    link: '#',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a consultation and
            let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Free Consultation Available
              </h4>
              <p className="text-gray-600">
                Schedule a complimentary consultation to discuss your project
                and explore design possibilities for your space.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}