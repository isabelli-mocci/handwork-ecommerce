
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'FAIRYCORE TOYS', link: '/products?category=fairycore-toys' },
  { name: 'COTTAGECORE TOYS', link: '/products?category=cottagecore-toys' },
  { name: 'VICTORIAN TOYS', link: '/products?category=victorian-toys' },
  { name: 'FARMCORE TOYS', link: '/products?category=farmcore-toys' },
  { name: 'ANIMAL TOYS', link: '/products?category=animal-toys' },
];


const CategorySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(amount: number) {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4 relative'>
        {/* Arrows for desktop */}
        <button
          type='button'
          className='hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 transition disabled:opacity-30'
          aria-label='Scroll left'
          onClick={() => scrollByAmount(-320)}
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

        <div
          ref={scrollContainerRef}
          className='
            flex gap-4 pb-4
            overflow-x-auto whitespace-nowrap
            scrollbar-hide
            w-full
            md:overflow-x-hidden
          '
          style={{ scrollBehavior: 'smooth' }}
          onWheel={e => {
            if (window.innerWidth >= 768) e.preventDefault();
          }}
        >
          {categories.map(category => (
            <Link
              key={category.name}
              to={category.link}
              className='
                flex-none
                w-40 h-36 md:w-60 md:h-52 lg:w-80 lg:h-72 flex flex-col bg-secondary font-cardo items-center justify-center text-center text-sm md:text-2xl font-black uppercase shadow-md transition-all duration-500 hover:-translate-y-1 hover:bg-secondary/90 hover:border hover:border-white/70 focus:ring-4 focus:ring-secondary/30 relative before:content-[""] before:absolute before:inset-4 before:border-2 before:border-primary/60 before:pointer-events-none
              '
            >
              {category.name.split(' ').map((word, index, arr) => (
                <React.Fragment key={index}>
                  {word}
                  {index < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </Link>
          ))}
        </div>

        <button
          type='button'
          className='hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-3 transition disabled:opacity-30'
          aria-label='Scroll right'
          onClick={() => scrollByAmount(320)}
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
    </section>
  );
};

export default CategorySection;
