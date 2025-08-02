import React, { useCallback } from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { usePopAnimation } from '../../hooks/usePopAnimation';
import '../../styles/pop-animation.css';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: () => void;
  label?: string;
}

const BUTTON_CLASS = [
  'w-8',
  'h-8',
  'p-0',
  'transition-colors',
  'flex',
  'items-center',
  'justify-center',
  'bg-transparent',
  'absolute',
  'right-2',
  'top-2',
  'z-10',
  'hover:scale-105',
  'duration-200',
  'pointer-events-auto',
].join(' ');

const ICON_CLASS = 'text-2xl transition-transform duration-300';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite = false, onClick, label }) => {
  const [heartRef, triggerPop] = usePopAnimation();

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.currentTarget.classList.add('animate-ping-heart');
      setTimeout(() => {
        e.currentTarget.classList.remove('animate-ping-heart');
      }, 400);
      if (onClick) onClick();
      triggerPop();
    } catch {
      // log error
    }
  }, [onClick, triggerPop]);

  const ariaLabel = label || (isFavorite ? 'Remove from Favorites' : 'Add to Favorites');

  return (
    <button
      type="button"
      className={BUTTON_CLASS}
      aria-label={ariaLabel}
      aria-pressed={isFavorite}
      onClick={handleClick}
      style={{ overflow: 'visible' }}
    >
      <span ref={heartRef} className="inline-block">
        {isFavorite ? (
          <HiHeart className={`${ICON_CLASS} text-red-500`} />
        ) : (
          <HiOutlineHeart className={`${ICON_CLASS} text-gray-600`} />
        )}
      </span>
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};

export default FavoriteButton;
