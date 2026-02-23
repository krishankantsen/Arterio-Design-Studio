'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'BIM Modeling',
    category: 'Commercial',
    image: 'https://skylarkconstructions.com/wp-content/uploads/2020/07/bim-e1643953135631.jpg',
  },
  {
    id: 2,
    title: 'Scan To Bim Modeling',
    category: 'Commercial',
    image: 'https://blog.novatr.com/hs-fs/hubfs/bim-scan.jpg?width=1602&height=856&name=bim-scan.jpg',
  },
  {
    id: 3,
    title: 'Revit Modeling',
    category: 'Commercial',
    image: 'https://www.elogictech.com/blog/wp-content/uploads/2025/05/1715863607_BIMRevit.jpg',
  },
  {
    id: 4,
    title: 'Executive Office',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
  },
  {
    id: 5,
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
  },
  {
    id: 6,
    title: 'Scandinavian Dining',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of beautifully crafted interiors that
            showcase our commitment to excellence and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="aspect-w-4 aspect-h-3 relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-amber-300">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}