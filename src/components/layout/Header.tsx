import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <nav className='hidden lg:block text-left'>
      <ul className='flex gap-4 lg:gap-8 justify-start'>
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className='hover:text-primary transition-colors duration-300'
            >
              {link.label}
            </Link>
          </li>
        ))}
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
