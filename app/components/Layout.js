"use client";
import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Fametonic - Turn Social Media Into a Career</title>
        <meta name="description" content="Start your journey to social media success with Fametonic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-black">
        <Header isMobile={isMobile} />
        <main className="flex-grow">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { isMobile });
          })}
        </main>
      </div>
    </>
  );
}