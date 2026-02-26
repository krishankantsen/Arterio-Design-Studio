'use client';

import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { portfolioItems } from '@/lib/services';

const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [showModal, setShowModal] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---------------------------------------------
   Close modal
  ----------------------------------------------*/
  const closeModal = useCallback(() => {
    setShowModal(false);
    setCurrentIndex(0);
  }, []);

  /* ---------------------------------------------
   Open modal with selected gallery
  ----------------------------------------------*/
  const openModal = useCallback((images: string[]) => {
    setGalleryImages(images);
    setCurrentIndex(0);
    setShowModal(true);
  }, []);

  /* ---------------------------------------------
   Next / Prev navigation
  ----------------------------------------------*/
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [galleryImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages.length]);

  /* ---------------------------------------------
   Auto slide effect
  ----------------------------------------------*/
  useEffect(() => {
    if (!showModal || galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [showModal, galleryImages.length, nextSlide]);

  /* ---------------------------------------------
   Escape key close
  ----------------------------------------------*/
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    if (showModal) {
      window.addEventListener('keydown', handleKey);
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [showModal, closeModal, nextSlide, prevSlide]);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
            Discover our collection of beautifully crafted interiors.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                if (item?.images?.length) {
                  openModal(item.images as string[]);
                }
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg"> 
                <div className="aspect-w-4 aspect-h-3 relative h-64">
                   <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" /> 
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"> 
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center"> 
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <button type="submit" className="bg-none border border-white-600 text-white-600 hover:bg-white-50 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-white font-semibold py-1 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        View Project →
                      </button>
                        </div> 
                        </div> 
                        </div>
                         </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =======================
          MODAL
      ======================== */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 z-50 text-white text-3xl"
                onClick={closeModal}
                aria-label="Close gallery"
              >
                &times;
              </button>

              {/* Image */}
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryImages[currentIndex]}
                      alt="Gallery Image"
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
                  >
                    &#10095;
                  </button>
                </>
              )}

              {/* Dots */}
              {galleryImages.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-amber-500 scale-125'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}