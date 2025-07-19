import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineBars3CenterLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi2';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='shadow-md p-4 sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center md:hidden'>
          {' '}
          <button
            className='text-2xl p-2'
            onClick={toggleMobileMenu}
            aria-label='Open mobile menu'
          >
            <HiOutlineBars3CenterLeft />
          </button>
          <button className='text-xl p-1'>
            {' '}
            <HiOutlineMagnifyingGlass aria-label='Search' />
          </button>
        </div>

        {/* Company Logo */}
        <Link
          to='/'
          className='flex flex-col items-center flex-grow md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10'
        >
          <span className='font-americanTypewriterCondensed text-2xl md:text-3xl lg:text-4xl text-primary'>
            Mocci & Co.
          </span>
        </Link>

        <nav className='hidden md:block flex-grow text-left'>
          <ul className='flex gap-4 md:gap-8 justify-start'>
            <li>
              <Link
                to='/'
                className='hover:text-primary transition-colors duration-300'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='hover:text-primary transition-colors duration-300'
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to='/best-sellers'
                className='hover:text-primary transition-colors duration-300'
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='hover:text-primary transition-colors duration-300'
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-1 md:justify-end'>
          <button className='hidden md:block text-xl p-2'>
            <HiOutlineMagnifyingGlass aria-label='Search' />
          </button>
          <button className='text-xl'>
            <HiOutlineHeart aria-label='Wishlist' />
          </button>
          <button className='text-text-color text-xl p-2'>
            <HiOutlineShoppingBag aria-label='Shopping Cart' />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 z-40'>
          <ul className='flex flex-col gap-4'>
            <li>
              <Link
                to='/'
                className='block text-text-color hover:text-primary py-2'
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='block text-text-color hover:text-primary py-2'
                onClick={toggleMobileMenu}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to='/best-sellers'
                className='block text-text-color hover:text-primary py-2'
                onClick={toggleMobileMenu}
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='block text-text-color hover:text-primary py-2'
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
