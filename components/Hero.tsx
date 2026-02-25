'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

interface HeroProps {
  images?: string[];
}

export default function Hero({ images }: HeroProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const defaultImages = [
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
  ];

  const carouselImages = images;

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND CAROUSEL ===== */}
      <div className="absolute inset-0 z-0">
        <Carousel opts={{ loop: true }} className="h-screen w-full">
          <CarouselContent className="h-screen">
            {carouselImages && carouselImages.map((src, idx) => (
              <CarouselItem key={idx} className="h-screen">
                {/* IMPORTANT: give slide real height */}
                <div className="relative h-screen w-full">
                  
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                  />

                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="z-10 left-6 bg-black/40 text-white hover:bg-black/70" />
          <CarouselNext className="z-10 right-6 bg-black/40 text-white hover:bg-black/70" />
        </Carousel>
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-amber-500">Living Space</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            At Arterio Design Studio, we create stunning, functional interiors
            that reflect your unique style and enhance your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#portfolio"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-lg"
            >
              View Our Work
            </Link>

            <Link
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-lg"
            >
              Get Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
