import React from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

const HeaderIcons: React.FC = () => {
  const navigate = useNavigate();
  const { getCartItemCount } = useCart();
  const cartCount = getCartItemCount();
  return (
    <div className='flex items-center gap-1 lg:ml-auto'>
      <button className='text-xl lg:mr-3'>
        <HiOutlineHeart aria-label='Wishlist' />
      </button>
      <button
        className='text-text-color text-xl p-2 relative'
        onClick={() => navigate('/cart')}
      >
        <HiOutlineShoppingBag aria-label='Shopping Cart' />
        {cartCount > 0 && (
          <span className='absolute -bottom-0 -right-0 bg-accent text-white rounded-full text-xs w-4 h-4 flex items-center justify-center'>
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default HeaderIcons;
