import About from '@/components/About';
import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
      <Works />
    </main>
  );
}
