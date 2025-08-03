import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: 'Fairycore Toys', link: '/products?category=fairycore-toys' },
  { name: 'Cottagecore Toys', link: '/products?category=cottagecore-toys' },
  { name: 'Victorian Toys', link: '/products?category=victorian-toys' },
  { name: 'Farmcore Toys', link: '/products?category=farmcore-toys' },
  { name: 'Animal Toys', link: '/products?category=animal-toys' },
];

const SCROLL_AMOUNT = 320;

const CategorySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };
  
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) e.preventDefault();
  };

  return (
    <motion.section
      className='py-10'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='container mx-auto px-4 relative'>
        <button
          type='button'
          className='hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 transition disabled:opacity-30'
          aria-label='Scroll left'
          onClick={() => handleScroll(-SCROLL_AMOUNT)}
        >
          <svg
            width='36'
            height='36'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            viewBox='0 0 24 24'
          >
            <path d='M15 19l-7-7 7-7' />
          </svg>
        </button>
        <h2 className='sr-only'>Product Categories</h2>

        <motion.div
          ref={scrollContainerRef}
          className='flex gap-4 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:overflow-x-hidden'
          style={{ scrollBehavior: 'smooth' }}
          onWheel={handleWheel}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + idx * 0.08,
                ease: 'easeOut',
              }}
            >
              <Link
                to={category.link}
                className="flex-none w-40 h-36 md:w-60 md:h-52 lg:w-80 lg:h-72 flex flex-col bg-secondary font-cardo items-center justify-center text-center text-sm md:text-2xl font-black uppercase shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-secondary/90 hover:border hover:border-white/70 focus:ring-4 focus:ring-secondary/30 relative before:content-[''] before:absolute before:inset-4 before:border-2 before:border-primary/60 before:pointer-events-none"
              >
                {category.name.split(' ').map((word, index, arr) => (
                  <React.Fragment key={index}>
                    {word}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <button
          type='button'
          className='hidden md:flex absolute -right-12 top-1/2  -translate-y-1/2 z-10 p-3 transition disabled:opacity-30'
          aria-label='Scroll right'
          onClick={() => handleScroll(SCROLL_AMOUNT)}
        >
          <svg
            width='36'
            height='36'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            viewBox='0 0 24 24'
          >
            <path d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </motion.section>
  );
};

export default CategorySection;
