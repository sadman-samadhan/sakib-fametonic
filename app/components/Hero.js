import React from 'react';
import Image from 'next/image';

const Hero = ({ isMobile }) => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 ">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left content */}
          <div className="w-full md:w-1/2 z-10 text-left py-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-8 text-white">
              <span className="cyan-text">Discover your way to success with Fametonic:</span>
            </h2>

            {/* Value Propositions */}
            <ul className="space-y-4 mb-10">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers",
              ].map((text, i) => (
                <li className="flex items-start text-white" key={i}>
                  <span className="text-yellow-400 mr-3 mt-0.5 text-lg">✨</span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mb-6">
              <button className="pink-button text-white font-bold py-3 px-8 rounded-full flex items-center justify-center w-full md:w-auto">
                GET STARTED
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Mini text */}
            <p className="text-xs text-gray-400 mb-4">1-minute quiz for personalized insights</p>

            {/* Terms text */}
            <p className="text-xs text-gray-500 mb-4">
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>

            {/* Copyright */}
            <p className="text-xs text-gray-600">
              © Fametonic 2025. All Rights Reserved.
            </p>
          </div>

          {/* Right content - Phone mockup */}
          {!isMobile && (
            <div className="w-full md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
              <div className="relative h-[450px] w-full md:w-[666px] glowing-ring">
                <Image
                  src="/images/phone-mockup.png"
                  alt="Phone showing Fametonic app"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
