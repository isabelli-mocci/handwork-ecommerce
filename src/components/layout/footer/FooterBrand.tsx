import React from 'react';
import { Link } from 'react-router-dom';

const FooterBrand: React.FC = () => (
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
);

export default FooterBrand;
