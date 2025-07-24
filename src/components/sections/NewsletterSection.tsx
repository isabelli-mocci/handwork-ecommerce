import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { useNewsletterForm } from '../../hooks/useNewsletterForm';
import { newsletterData } from '../../data/newsletter.data';

const NewsletterSection: React.FC = () => {
  const {
    email,
    submitted,
    error,
    handleChange,
    handleSubmit,
  } = useNewsletterForm();

  return (
    <section className='py-10 md:py-16 lg:py-18 bg-background text-left'>
      <div className='container mx-auto px-4 max-w-md flex flex-col items-start'>
        <h2 className='font-cardo text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8 uppercase text-left'>
          {newsletterData.title}
        </h2>
        <p className='text-sm md:text-base lg:text-lg font-light mb-6 lg:mb-8 leading-relaxed text-left'>
          {newsletterData.description}
        </p>
        <p className='text-sm md:text-base lg:text-lg font-extralight italic mb-8 lg:mb-12 leading-relaxed text-left'>
          {newsletterData.subDescription}
        </p>
        <form className='w-full relative' onSubmit={handleSubmit} autoComplete='off'>
          <input
            type='email'
            value={email}
            onChange={handleChange}
            placeholder={newsletterData.placeholder}
            aria-label={newsletterData.placeholder}
            className='w-full p-3 md:p-4 pr-10 md:pr-12 border border-primary/50 rounded-sm bg-background placeholder-text/70 focus:outline-none focus:border-primary transition-colors text-left'
            disabled={submitted}
          />
          <button
            type='submit'
            className='absolute right-0 top-1/2 -translate-y-1/2 p-2 focus:outline-none text-text hover:text-primary transition-colors'
            aria-label={newsletterData.submitLabel}
            disabled={submitted}
          >
            <GoChevronRight className='w-6 h-6' />
          </button>
          {error && (
            <span className='block mt-2 text-xs text-red-500'>{error}</span>
          )}
          {submitted && (
            <span className='block mt-2 text-xs text-green-600'>Inscrição realizada com sucesso!</span>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
