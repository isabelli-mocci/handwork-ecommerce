import React from 'react';
import { Link } from 'react-router-dom';
import { PiInstagramLogo, PiYoutubeLogo, PiTiktokLogo } from 'react-icons/pi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary border-t border-primary/20 pt-6 pb-3 md:pt-6 md:pb-2 lg:pt-8 lg:pb-3 px-4 mt-12'>
      <div className='container mx-auto max-w-5xl flex flex-col items-center gap-6'>
        <div className='flex flex-col items-center mb-2'>
          <Link
            to='/'
            className='font-americanTypewriterCondensed text-3xl lg:text-5xl text-primary tracking-wide drop-shadow-sm'
          >
            Mocci & Co.
          </Link>
          <span className='text-xs font-normal text-text/60 mt-1'>
            Handmade with love
          </span>
        </div>

        <nav className='flex flex-col items-center w-full mt-0 mb-2'>
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

        <div className='flex flex-col items-center gap-1 mt-0'>
          <div className='flex gap-4'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='text-text/70 hover:text-primary transition-colors'
            >
              <PiInstagramLogo size={26} />
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='YouTube'
              className='text-text/70 hover:text-primary transition-colors'
            >
              <PiYoutubeLogo size={26} />
            </a>
            <a
              href='https://tiktok.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='TikTok'
              className='text-text/70 hover:text-primary transition-colors'
            >
              <PiTiktokLogo size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-5xl mt-6 border-t border-primary/10 pt-3 md:pt-2 lg:pt-3 text-center'>
        <p className='text-xs font-normal lg:text-sm text-text/60'>
          &copy; {currentYear} Isabelli Mocci | Mocci & Co. | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
