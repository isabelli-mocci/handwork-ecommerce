import React from 'react';
import { footerSocialLinks } from '../../../data/footerSocialLinks.data';

const FooterSocial: React.FC = () => (
  <div className='flex flex-col items-center gap-1 mt-0'>
    <div className='flex gap-4'>
      {footerSocialLinks.map(({ href, label, icon: Icon, size }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className='text-text/70 hover:text-primary transition-colors'
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  </div>
);

export default FooterSocial;
