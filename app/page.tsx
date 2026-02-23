import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero images={[
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
  ]}/>
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </>
  );
}