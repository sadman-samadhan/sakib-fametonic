import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ isMobile }) => {
  const bannerHeight = isMobile ? "76px" : "46px";
  const logoHeight = isMobile ? "60px" : "90px";
  const containerWidth = isMobile ? "390px" : "1440px";

  return (
    <header className="w-full bg-black">
      {/* Promo Banner */}
      <div
        className="w-full flex items-center justify-center px-4 text-center"
        style={{
          background: "linear-gradient(90deg, #FF1B6B 0%, #45CAFF 100%)",
          height: bannerHeight,
          maxWidth: "100%",
        }}
      >
        <p className="text-white font-medium text-xs md:text-sm lg:text-xl leading-snug text-center">
          <span className="font-bold text-cyan">🚀 FRESH BEGINNINGS SALE:</span>
          <span className="ml-1"> Extra 25% OFF,</span>
          <br className="block md:hidden" />
          <span className="ml-1">Limited Spots - start your journey today!</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-black">
        <div
          className={`mx-auto flex items-center ${isMobile ? 'justify-center' : 'justify-between'
            } px-4`}
          style={{
            maxWidth: containerWidth,
            height: logoHeight,
          }}
        >
          {/* Logo - centered on mobile */}
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="block">
                <div className="relative" style={{
                  height: logoHeight,
                  width: isMobile ? "150px" : "535px"
                }}>
                  <Image
                    src="/images/fametonic-logo.png"
                    alt="Fametonic"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </a>
            </Link>
          </div>

          {/* Desktop Links */}
          {!isMobile && (
            <div
              className="hidden md:flex items-center space-x-8"
              style={{
                position: "relative",
                right: "13%"
              }}
            >
              <Link href="#" legacyBehavior>
                <a className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">About us</a>
              </Link>
              <Link href="#" legacyBehavior>
                <a className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">Contact</a>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="absolute right-4 text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
