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
} from './ui/carousel'; // adjust path if necessary


interface HeroProps {
  /** image URLs; if not provided, placeholder images will be used */
  images?: string[];
}

export default function Hero({ images }: HeroProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const defaultImages = [
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
  ];

  const carouselImages = images && images.length >= 4 ? images.slice(0, 4) : defaultImages;


  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden border-solid"
    >
      {/* Carousel / Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Carousel opts={{ loop: true }} className="h-full w-full">
          <CarouselContent>
            {carouselImages.map((src, idx) => (
              <CarouselItem key={idx}>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-black/30 hover:bg-black/50 left-4 z-10" />
          <CarouselNext className="text-white bg-black/30 hover:bg-black/50 right-4 z-10" />
        </Carousel>
        {/* overlay was hiding dark images; make transparent or remove entirely */}
        {/* <div className="absolute inset-0 bg-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-gradient">Living Space</span>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="animate-bounce text-white" size={32} />
        </motion.div>
      </div>
    </section>
  );
}