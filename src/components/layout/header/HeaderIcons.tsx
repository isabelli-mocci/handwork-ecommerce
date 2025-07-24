import React from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2';

const HeaderIcons: React.FC = () => (
  <div className='flex items-center gap-1 lg:ml-auto'>
    <button className='text-xl lg:mr-3'>
      <HiOutlineHeart aria-label='Wishlist' />
    </button>
    <button className='text-text-color text-xl p-2'>
      <HiOutlineShoppingBag aria-label='Shopping Cart' />
    </button>
  </div>
);

export default HeaderIcons;
