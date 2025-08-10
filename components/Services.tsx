'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Home, Palette, Layout, Lightbulb, Sofa, Building2 } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Complete home interior design services tailored to your lifestyle and preferences.',
    features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Custom Solutions'],
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Professional commercial spaces that enhance productivity and brand identity.',
    features: ['Office Design', 'Retail Spaces', 'Hospitality', 'Brand Integration'],
  },
  {
    icon: Layout,
    title: 'Space Planning',
    description: 'Optimize your space with strategic layout design and flow optimization.',
    features: ['Floor Plans', 'Traffic Flow', 'Functional Zones', '3D Visualization'],
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color selection to create the perfect atmosphere for your space.',
    features: ['Color Psychology', 'Paint Selection', 'Fabric Coordination', 'Lighting Effects'],
  },
  {
    icon: Sofa,
    title: 'Furniture Selection',
    description: 'Curated furniture and decor pieces that complement your design vision.',
    features: ['Custom Furniture', 'Sourcing', 'Styling', 'Installation'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Comprehensive lighting solutions to enhance ambiance and functionality.',
    features: ['Natural Light', 'Ambient Lighting', 'Task Lighting', 'Smart Controls'],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive interior design services to transform your
            space into something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover-lift group"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-amber-600 group-hover:text-amber-700 transition-colors duration-200" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}