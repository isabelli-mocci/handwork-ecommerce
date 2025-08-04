import React from 'react';
import { motion } from 'framer-motion';
import { GoChevronRight } from 'react-icons/go';
import { useNewsletterForm } from '../../../hooks/useNewsletterForm';
import { newsletterData } from '../../../data/newsletter.data';

const NewsletterSection: React.FC = () => {
  const { email, submitted, error, handleChange, handleSubmit } = useNewsletterForm();

  return (
    <motion.section
      className="py-10 md:py-16 lg:py-18 bg-background text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="container mx-auto px-4 max-w-md flex flex-col items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <motion.h2
          className="font-cardo text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-8 uppercase text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          {newsletterData.title}
        </motion.h2>
        <motion.p
          className="text-sm md:text-base lg:text-lg font-light mb-6 lg:mb-8 leading-relaxed text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          {newsletterData.description}
        </motion.p>
        <motion.p
          className="text-sm md:text-base lg:text-lg font-extralight italic mb-8 lg:mb-12 leading-relaxed text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
        >
          {newsletterData.subDescription}
        </motion.p>
        <motion.form
          className="w-full"
          onSubmit={handleSubmit}
          autoComplete="off"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder={newsletterData.placeholder}
              aria-label={newsletterData.placeholder}
              className="w-full p-3 md:p-4 pr-12 border border-primary/50 rounded-sm bg-background placeholder-text/70 focus:outline-none focus:border-primary transition-colors text-left"
              disabled={submitted}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 flex items-center justify-center focus:outline-none text-text hover:text-primary transition-colors"
              aria-label={newsletterData.submitLabel}
              disabled={submitted}
              tabIndex={submitted ? -1 : 0}
              style={{ pointerEvents: submitted ? 'none' : 'auto' }}
            >
              <GoChevronRight className="w-6 h-6" />
            </button>
          </div>
          {error && (
            <span className="block mt-2 text-xs text-red-500">{error}</span>
          )}
          {submitted && (
            <span className="block mt-2 text-xs text-green-600">Registration successful!</span>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default NewsletterSection;
