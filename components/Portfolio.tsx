'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioItems } from '@/lib/services';
export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showModal, setShowModal] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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

        {/* clicking any item opens modal with full gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer hover-lift"
              onClick={() => {
                if(item?.images && item.images.length > 0) { 
                setGalleryImages(item?.images as string[]);
                openModal();}
              }}
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

      {/* modal overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-lg p-6">
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
              onClick={closeModal}
              aria-label="Close gallery"
            >
              &#10005;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Portfolio Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImages.map((img,index) => (
                <div key={index} className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}