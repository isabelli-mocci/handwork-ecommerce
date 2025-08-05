import heroBannerMobile from '../../../assets/images/hero-banner-mobile.png';
import heroBannerDesktop from '../../../assets/images/hero-banner-desktop.png';
import ctaBanner from '../../../assets/images/cta-hero-section.png';
import '../../../index.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BannerImage: React.FC = () => (
  <picture>
    <source
      media='(min-width: 768px)'
      srcSet={heroBannerDesktop}
    />
    <img
      src={heroBannerMobile}
      alt='Royal Elegance banner - Mocci & Co.'
      className='w-full h-auto object-cover animate-zoomInLoop'
    />
  </picture>
);

const HeroCTA: React.FC = () => (
  <div className='w-full flex flex-col items-center absolute left-0 right-0 bottom-0 pb-6 md:pb-8 lg:pb-12 xl:pb-20 z-10'>
    <ShopNowButton />
  </div>
);

const ShopNowButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className='border-2 border-white text-white px-5 py-2 text-sm lg:px-6 lg:text-base xl:px-10 xl:py-3 xl:text-xl uppercase font-medium transition-colors duration-300 hover:bg-primary hover:text-white hover:border-primary'
      role='link'
      aria-label='Shop now for the Mocci & Co. collection.'
      onClick={() => navigate('/products')}
    >
      Shop Now
    </button>
  );
};

const HeroSection: React.FC = () => (
  <motion.section
    className='hero-section relative w-full overflow-hidden'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <BannerImage />
    <motion.div
      className='absolute top-0 left-0 right-0 flex justify-center z-20 pt-4 md:pt-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
    >
      <img
        src={ctaBanner}
        alt='Royal Elegance banner - Mocci & Co.'
        className='w-48 md:w-56 lg:w-64 xl:w-1/4 h-auto object-contain mx-auto'
      />
    </motion.div>
    <motion.div
      className='absolute inset-0 flex flex-col items-center text-center p-4 h-full justify-end'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
    >
      <HeroCTA />
    </motion.div>
  </motion.section>
);

export default HeroSection;
