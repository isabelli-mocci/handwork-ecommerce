import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='bg-background shadow-md p-4 sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center flex-wrap'>
        {/* Company Logo */}
        <Link to='./'>
          <img
            src='./src/assets/images/logo-mocci-&-co.png'
            alt='Mocci&Co. company logo'
          />
        </Link>

        {/* Principal Navigation */}
        <nav className='mt-4 md:mt-0'>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-8'>
            <li>
              <Link
                to='/'
                className='text-text font-medium'
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                className='text-text font-medium'
              >
                Our Story
              </Link>
            </li>

            <li>
              <Link
                to='/best-sellers'
                className='text-text font-medium'
              >
                Best Sellers
              </Link>
            </li>

            <li>
              <Link
                to='/products'
                className='text-text font-medium'
              >
                Products
              </Link>
            </li>
            
            {/* Wishlist and Cart Icons */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
