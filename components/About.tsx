'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import Image from 'next/image';

const stats = [

  { icon: Clock, label: 'Years Experience', value: '4+' },
  { icon: Star, label: 'Projects Completed', value: '50+' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About Arterio Design Studio
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded with a passion for creating beautiful, functional spaces,
              Arterio Design Studio has been transforming homes and commercial
              spaces for over 4 years. We believe that great design has the
              power to improve lives and create lasting memories.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced designers works closely with each client
              to understand their unique needs, preferences, and lifestyle. We
              combine creativity with functionality to deliver spaces that are
              not only beautiful but also practical and sustainable.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
                alt="Interior Design Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">Excellence</div>
              <div className="text-amber-100">in Every Detail</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}