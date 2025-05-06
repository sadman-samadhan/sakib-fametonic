import React from 'react';
import Image from 'next/image';

const Hero = ({ isMobile }) => {
  const containerWidth = isMobile ? "390px" : "1440px";
  const heroHugHeight = isMobile ? "auto" : "679px";

  return (
    <section className="bg-black relative overflow-hidden">
      <div
        className="mx-auto relative"
        style={{
          maxWidth: containerWidth,
          minHeight: heroHugHeight
        }}
      >
        <div className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row'}`}>

          {/* Left Content */}
          <div
            className="z-10 py-6 md:py-12 px-4 md:px-6"
            style={{
              width: isMobile ? "100%" : "600px",
              position: isMobile ? "static" : "relative",
              left: isMobile ? "0" : "13%",
              zIndex: 35,
              textAlign: isMobile ? "center" : "left"
            }}
          >
            <h1 className={`text-white ${isMobile ? 'text-xl leading-snug font-semibold mb-3' : 'text-4xl font-semibold mb-4'} `}>
              Want to Turn Social Media
              Into a Profitable Career?
            </h1>
            <h2 className={`font-bold ${isMobile ? 'text-lg leading-snug mb-6' : 'text-4xl mb-8'}`}>
              <span
                className="text-cyan-400"
                style={{
                  textShadow: "1px 4px 3px rgba(255, 27, 107, 1)",
                  display: "inline-block"
                }}
              >
                Discover your way to success <br />
                with Fametonic:
              </span>
            </h2>

            <ul className="space-y-3 mb-8 text-left md:text-left">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers",
              ].map((text, i) => (
                <li className="flex items-start text-white" key={i}>
                  <span className="text-yellow-400 mr-2 mt-0.5 text-sm">✨</span>
                  <span className="text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div
              className="mb-2"
              style={{
                width: isMobile ? "100%" : "auto",
                maxWidth: "100%"
              }}
            >
              <button
                className="text-white font-bold py-3 w-full md:w-auto px-12 md:px-8 rounded-md flex items-center justify-center"
                style={{
                  background: "linear-gradient(90deg, #FF1B6B 0%, #FF5B71 100%)",
                  height: "40px",
                  width: isMobile ? "100%" : "60%",
                  boxShadow: "3px 4px 10px rgba(0, 210, 255, 1)",
                  transition: "all 0.3s ease"
                }}
              >
                GET STARTED &gt;
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-3 md:px-16 px-4">1-minute quiz for personalized insights</p>
            <p className="text-xs text-gray-500 mb-3 px-4 md:px-0">
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="text-xs text-gray-600">© Fametonic 2025. All Rights Reserved.</p>
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative ${isMobile ? 'relative mb-2 mt-2' : 'absolute right-0 top-0'}`}
            style={{
              width: isMobile ? "280px" : "690px",
              height: isMobile ? "400px" : "665px",
              overflow: "visible",
              marginTop: isMobile ? "calc(50% - 140px - 50px)" : undefined, 
              marginBottom: isMobile ? "calc(50% - 140px - 100px)" : undefined,
              marginLeft: isMobile ? "calc(50% - 140px - 28px)" : undefined,
            }}
          >

            <div
              className="absolute"
              style={{
                width: "140%",
                height: "140%",
                top: "-49%",
                left: "-40%",
                borderRadius: "50%",
                filter: "blur(30px)",
                zIndex: 1
              }}
            />
            <div
              className="relative z-10 w-full h-full"
              style={{
                position: "relative",
                height: "159%",
                width: "100%",
                left: "10%",
                top: "-28%"
              }}
            >
              <Image
                src="/images/phone-mockup.png"
                alt="Phone showing Fametonic app"
                fill
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
