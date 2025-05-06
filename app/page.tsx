'use client';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <Layout>
      <Hero isMobile={isMobile} />
    </Layout>
  );
}
