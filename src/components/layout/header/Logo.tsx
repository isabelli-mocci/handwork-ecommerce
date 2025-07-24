import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link
    to='/'
    className='flex flex-col items-center flex-grow lg:flex-none lg:mx-auto'
  >
    <span className='font-americanTypewriterCondensed text-2xl lg:text-3xl xl:text-4xl text-primary'>
      Mocci & Co.
    </span>
  </Link>
);

export default Logo;
