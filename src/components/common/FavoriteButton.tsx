import React from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { usePopAnimation } from '../../hooks/usePopAnimation';
import '../../styles/pop-animation.css';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: () => void;
  label?: string;
}

const FAVORITE_BTN_CLASS = 'px-3 py-3 border border-brown-800 transition-colors flex items-center justify-center bg-white relative hover:-translate-y-0.5 hover:scale-102 duration-200';
const HEART_ICON_CLASS = 'text-2xl transition-transform duration-300';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite = false, onClick, label }) => {
  const [heartRef, triggerPop] = usePopAnimation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('animate-ping-heart');
    setTimeout(() => e.currentTarget.classList.remove('animate-ping-heart'), 400);
    if (onClick) onClick();
    triggerPop();
  };

  return (
    <button
      type='button'
      className={FAVORITE_BTN_CLASS}
      aria-label={label || (isFavorite ? 'Remove from Favorites' : 'Add to Favorites')}
      aria-pressed={isFavorite}
      onClick={handleClick}
      style={{ overflow: 'visible' }}
    >
      <span ref={heartRef} className='inline-block'>
        {isFavorite ? (
          <HiHeart className={HEART_ICON_CLASS + ' text-red-500'} />
        ) : (
          <HiOutlineHeart className={HEART_ICON_CLASS + ' text-gray-600'} />
        )}
      </span>
      <span className='sr-only'>{label || (isFavorite ? 'Remove from Favorites' : 'Add to Favorites')}</span>
    </button>
  );
};

export default FavoriteButton;
