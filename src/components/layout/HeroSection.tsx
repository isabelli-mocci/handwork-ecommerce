import React from 'react';
import heroBannerMobile from '../../assets/images/hero-banner-mobile.png';
import heroBannerDesktop from '../../assets/images/hero-banner-desktop.png';
import ctaBanner from '../../assets/images/cta-hero-section.png';

const BannerImage: React.FC = () => (
  <picture>
    <source media="(min-width: 768px)" srcSet={heroBannerDesktop} />
    <img
      src={heroBannerMobile}
      alt="Handcrafted Dreams World - Mocci & Co. Collection"
      className="w-full h-auto object-cover"
    />
  </picture>
);

const HeroTitle: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    <p
      className="text-base lg:text-lg xl:text-2xl text-white opacity-80 tracking-widest uppercase"
      style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}
    >
      New Collection
    </p>
  </div>
);

const HeroCTA: React.FC = () => (
  <div className="w-full flex flex-col items-center absolute left-0 right-0 bottom-0 pb-6 md:pb-8 lg:pb-12 xl:pb-24 z-10">
    <img
      src={ctaBanner}
      alt="Royal Elegance collection banner - Mocci & Co."
      className="mb-4 w-48 md:w-56 lg:w-64 xl:w-1/4 xl:mb-10 h-auto object-contain mx-auto" // Using mx-auto for centering
    />
    <button
      className="border-2 border-white text-white px-5 py-2 text-sm lg:px-6 lg:text-base xl:px-10 xl:py-3 xl:text-xl uppercase font-medium transition-colors duration-300 hover:bg-secondary hover:text-white"
      role="link"
      aria-label="Shop now for the Mocci & Co. collection."
    >
      Shop Now
    </button>
  </div>
);

const HeroSection: React.FC = () => (
  <section className="hero-section relative w-full overflow-hidden">
    <BannerImage />
    <div className="absolute inset-0 flex flex-col items-center text-center p-4 h-full justify-between"> {/* Added justify-between for spacing */}
      <HeroTitle />
      <HeroCTA />
    </div>
  </section>
);

export default HeroSection;