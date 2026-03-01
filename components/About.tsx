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
              About Arterio BIM Solution

            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              
Arterio BIM Solution delivers precise, construction-ready BIM services for industrial and commercial projects. With 4+ years of expertise in Scan to BIM, Revit modeling, and LOD 350 development, we transform complex project data into highly detailed, coordinated, and execution-ready BIM models.


            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedicated team of BIM specialists, modelers, and coordination experts combines technical excellence with industry best practices to ensure accuracy, efficiency, and seamless project delivery. We focus on minimizing rework, optimizing workflows, and creating dependable digital models that add real value to every project.


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
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcG2jgLcqkq21QbDwjqI8EH1MDcesbw-aCvEC7t-SeNvStqGpqPGcES1TLF7n-ZrYMEaTgFAIbaHAVJBiaiMyJzRLuSn3-LFjo1IL51SvYdBj-MSyEZJiNNh92H-x6kS8vT9Q7tdQ?key=aB4B7SIqPQiNZ-y0hqzuMOlj"
                alt="Interior Design Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">Engineered for Precision.</div>
              <div className="text-amber-100">Built by Experts.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

