'use client';

import { motion } from 'framer-motion';
import { Home, Building2, Palette, Eye, Ruler, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Design',
      description: 'Complete home interior design services from concept to completion.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Custom Millwork'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Commercial Design',
      description: 'Professional office and retail space design solutions.',
      features: ['Office Planning', 'Brand Integration', 'Lighting Design', 'Acoustic Solutions'],
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Color Consultation',
      description: 'Expert color guidance to transform your space.',
      features: ['Color Psychology', 'Paint Selection', 'Material Coordination', 'Trend Analysis'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '3D Visualization',
      description: 'Realistic 3D renderings to visualize your space before construction.',
      features: ['Photorealistic Renders', 'Virtual Walkthroughs', 'Material Previews', 'Lighting Studies'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: 'Space Planning',
      description: 'Optimal space utilization and functional layout design.',
      features: ['Floor Plans', 'Traffic Flow', 'Storage Solutions', 'Accessibility Design'],
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Lighting Design',
      description: 'Comprehensive lighting solutions for ambiance and functionality.',
      features: ['Natural Light Optimization', 'Fixture Selection', 'Smart Controls', 'Energy Efficiency'],
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We start with an in-depth discussion about your vision, needs, and budget.',
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our team creates initial design concepts and mood boards for your approval.',
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'We refine the chosen concept with detailed plans and 3D visualizations.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Professional project management ensures smooth execution from start to finish.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive interior design solutions tailored to your unique style and requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial spaces, we provide comprehensive design services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                      <div className={service.color}>{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures your project runs smoothly from concept to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Investment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing packages to suit different project scales and budgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-6">$200</div>
                  <p className="text-gray-600 mb-6">Perfect for getting expert advice on your project</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      2-hour consultation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Design recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Color guidance
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Book Consultation
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 border-orange-500 shadow-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Design Package</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-6">$150<span className="text-lg text-gray-600">/sq ft</span></div>
                  <p className="text-gray-600 mb-6">Complete design service for residential spaces</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Full design concept
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      3D visualizations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Shopping lists
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Full Service</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-6">Custom</div>
                  <p className="text-gray-600 mb-6">End-to-end project management and implementation</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Complete design service
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Project management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Installation oversight
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-50">
                    Request Quote
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your vision and create a customized solution that fits your needs and budget
            </p>
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;