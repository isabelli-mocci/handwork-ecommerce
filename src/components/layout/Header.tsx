import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HiOutlineBars3CenterLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from 'react-icons/hi2';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/best-sellers', label: 'Best Sellers' },
  { to: '/products', label: 'Products' },
];

function DesktopNav() {
  const location = useLocation();
  return (
    <nav className="hidden lg:block text-left">
      <ul className="flex gap-4 lg:gap-8 justify-start">
        {NAV_LINKS.map(link => {
          const isActive = link.to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(link.to);
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  `relative transition-colors duration-300 hover:text-primary group focus:outline-none focus-visible:text-primary${
                    isActive ? ' text-primary' : ''
                  }`
                }
              >
                <span>{link.label}</span>
                <span
                  className={
                    `absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded transition-transform duration-300 origin-left
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100 group-focus-visible:scale-x-100`
                  }
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary opacity-0 group-focus-visible:opacity-100 transition-opacity duration-300 rounded"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 z-40'>
      <ul className='flex flex-col gap-4'>
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className='block text-text-color hover:text-primary py-2'
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <Link
      to='/'
      className='flex flex-col items-center flex-grow lg:flex-none lg:mx-auto'
    >
      <span className='font-americanTypewriterCondensed text-2xl lg:text-3xl xl:text-4xl text-primary'>
        Mocci & Co.
      </span>
    </Link>
  );
}

function HeaderIcons() {
  return (
    <div className='flex items-center gap-1 lg:ml-auto'>
      <button className='hidden lg:block text-xl p-2'>
        <HiOutlineMagnifyingGlass aria-label='Search' />
      </button>
      <button className='text-xl'>
        <HiOutlineHeart aria-label='Wishlist' />
      </button>
      <button className='text-text-color text-xl p-2'>
        <HiOutlineShoppingBag aria-label='Shopping Cart' />
      </button>
    </div>
  );
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='shadow-md p-4 sticky top-0 z-50 bg-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex items-center lg:hidden'>
            <button
              className='text-2xl p-2'
              onClick={() => setIsMobileMenuOpen(open => !open)}
              aria-label='Open mobile menu'
            >
              <HiOutlineBars3CenterLeft />
            </button>
            <button className='text-xl p-1'>
              <HiOutlineMagnifyingGlass aria-label='Search' />
            </button>
          </div>
          <DesktopNav />
        </div>
        <Logo />
        <HeaderIcons />
      </div>
      <MobileMenu
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
