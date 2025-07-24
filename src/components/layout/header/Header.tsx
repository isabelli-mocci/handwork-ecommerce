import React, { useState } from 'react';
import { HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import HeaderIcons from './HeaderIcons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='shadow-sm p-4 sticky top-0 z-50 bg-background'>
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
