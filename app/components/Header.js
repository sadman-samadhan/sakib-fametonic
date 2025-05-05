import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ isMobile }) => {
  return (
    <header className="w-full bg-black">
      {/* Promo Banner */}
      <div className="banner-gradient w-full py-3 md:py-4 px-6 text-center">
        <p className="text-white font-medium text-lg md:text-xl flex items-center justify-center">
          <span className="mr-2 text-2xl">🚀</span>
          <span className="font-bold cyan-text text-2xl">FRESH BEGINNINGS SALE:</span>
          <span className="font-bold ml-2 text-2xl">Extra 25% OFF, Limited Spots - start your journey today!</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-black py-4">
        <div className="max-w-screen-xl mx-auto px-6 md:px-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="block">
                <div className="w-[250px] h-[74px] relative">
                  <Image
                    src="/images/fametonic-logo.png"
                    alt="Fametonic Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-10">
              <Link href="#" legacyBehavior>
                <a className="text-white hover:text-gray-300 transition text-base font-medium">About us</a>
              </Link>
              <Link href="#" legacyBehavior>
                <a className="text-white hover:text-gray-300 transition text-base font-medium">Contact</a>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="md:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
