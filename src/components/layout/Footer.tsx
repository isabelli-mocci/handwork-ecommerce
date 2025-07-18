import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary p-6 mt-8'>
      <div className='container mx-auto text-center'>
        <p className='text-lg font-semibold mb-4'>Mocci & Co.</p>

        <nav className='mb-4'>
          <ul className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm'>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li>
              <Link to='/shipping-returns'>Shipping & Returns</Link>
            </li>

            <li>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>

            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
          </ul>
        </nav>

        <p className='text-sm'>
          &copy; {currentYear} Isabelli Mocci | Mocci & Co. | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
