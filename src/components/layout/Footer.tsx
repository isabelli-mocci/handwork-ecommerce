import React from 'react';
import { Link } from 'react-router-dom';
import { PiInstagramLogoThin, PiFacebookLogoThin } from 'react-icons/pi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary border-t border-primary/20 pt-10 pb-4 px-4 mt-12'>
      <div className='container mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8'>
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <Link
            to='/'
            className='font-americanTypewriterCondensed text-3xl lg:text-5xl text-primary tracking-wide drop-shadow-sm'
          >
            Mocci & Co.
          </Link>
          <span className='text-xs text-text/60 mt-1'>Handmade with love</span>
        </div>
        
        <nav className='flex-1 flex flex-col items-center'>
          <ul className='flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm lg:text-base font-medium'>
            <li>
              <Link
                to='/contact'
                className='hover:text-primary transition-colors'
              >
                Contact
              </Link>
            </li>
            <span className='hidden md:inline text-text/30'>|</span>
            <li>
              <Link
                to='/shipping-returns'
                className='hover:text-primary transition-colors'
              >
                Shipping & Returns
              </Link>
            </li>
            <span className='hidden md:inline text-text/30'>|</span>
            <li>
              <Link
                to='/privacy-policy'
                className='hover:text-primary transition-colors'
              >
                Privacy Policy
              </Link>
            </li>
            <span className='hidden md:inline text-text/30'>|</span>
            <li>
              <Link
                to='/faq'
                className='hover:text-primary transition-colors'
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
  
        <div className='flex flex-col items-center md:items-end gap-2'>
          <div className='flex gap-4'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='text-text/70 hover:text-primary transition-colors'
            >
              <PiInstagramLogoThin size={26} />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='text-text/70 hover:text-primary transition-colors'
            >
              <PiFacebookLogoThin size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-5xl mt-6 border-t border-primary/10 pt-4 text-center'>
        <p className='text-xs lg:text-sm text-text/60'>
          &copy; {currentYear} Isabelli Mocci | Mocci & Co. | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
