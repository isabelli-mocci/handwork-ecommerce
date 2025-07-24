import React from 'react';
import { GoChevronRight } from 'react-icons/go';

const NewsletterSection: React.FC = () => {
  return (
    <section className='py-10 md:py-16 lg:py-18 bg-background text-left'>
      <div className='container mx-auto px-4 max-w-md flex flex-col items-start'>
        <h2 className='font-cardo text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8 uppercase text-left'>
          NEWSLETTER
        </h2>
        <p className='text-sm md:text-base lg:text-lg font-light mb-6 lg:mb-8 leading-relaxed text-left'>
          Join Mocci & Co for exclusive deals and early access to new products.
        </p>
        <p className='text-sm md:text-base lg:text-lg font-extralight italic mb-8 lg:mb-12 leading-relaxed text-left'>
          Plus, receive our free activity books.
        </p>
        <div className='w-full relative'>
          <input
            type='email'
            placeholder='Your email address'
            aria-label='Your email address for the newsletter'
            className='w-full p-3 md:p-4 pr-10 md:pr-12 border border-primary/50 rounded-sm bg-background placeholder-text/70 focus:outline-none focus:border-primary transition-colors text-left'
          />
          <button
            type='submit'
            className='absolute right-0 top-1/2 -translate-y-1/2 p-2 focus:outline-none text-text hover:text-primary transition-colors'
            aria-label='Subscribe'
          >
            <GoChevronRight className='w-6 h-6' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
