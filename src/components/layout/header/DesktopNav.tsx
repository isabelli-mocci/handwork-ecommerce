import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../../data/navLinks.data';
import { useNavLinkHandler } from '../../../hooks/useNavLinkHandler';

const DesktopNav: React.FC = () => {
  const location = useLocation();
  const handleNavClick = useNavLinkHandler();

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
                onClick={link.scrollTo ? (e) => handleNavClick(e, link) : undefined}
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
};

export default DesktopNav;
