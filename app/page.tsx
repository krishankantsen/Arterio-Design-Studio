import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero images={[
    'https://old-crimson-nyt2t23tht.edgeone.app/file_00000000a5dc71faa6e5f9839c54df83.png',
    'https://old-crimson-nyt2t23tht.edgeone.app/file_00000000235871fa82d82606252c8e01(1).png',
    'https://old-crimson-nyt2t23tht.edgeone.app/file_00000000235871fa82d82606252c8e01(2).png',
    'https://images.pexels.com/photos/5583620/pexels-photo-5583620.jpeg',
  ]}/>
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </>
  );
}