import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavLinks } from '../../../data/footerNavLinks.data';

const FooterNav: React.FC = () => (
  <nav className='flex flex-col items-center w-full mt-0 mb-2'>
    <ul className='flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm lg:text-base font-medium'>
      {footerNavLinks.map((item, idx) => (
        <React.Fragment key={item.to}>
          <li>
            <Link to={item.to} className='hover:text-primary transition-colors'>
              {item.label}
            </Link>
          </li>
          {idx < footerNavLinks.length - 1 && (
            <span className='hidden md:inline text-text/30'>|</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  </nav>
);

export default FooterNav;
