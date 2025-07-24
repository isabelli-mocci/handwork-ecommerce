import React from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { usePopAnimation } from '../../hooks/usePopAnimation';
import '../../styles/pop-animation.css';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: () => void;
  label: string;
}

const FAVORITE_BTN_CLASS = 'absolute top-0 right-0 p-2 group/heart';
const HEART_ICON_CLASS =
  'w-5 h-5 transition-transform duration-200 group-hover/heart:text-primary text-text';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite = false,
  onClick,
  label,
}) => {
  const [heartRef, triggerPop] = usePopAnimation();

  const handleClick = () => {
    if (onClick) onClick();
    triggerPop();
  };

  return (
    <button
      type='button'
      className={FAVORITE_BTN_CLASS}
      aria-label={label}
      aria-pressed={isFavorite}
      onClick={handleClick}
    >
      <span
        ref={heartRef}
        className='inline-block'
      >
        {isFavorite ? (
          <HiHeart className={HEART_ICON_CLASS + ' text-primary'} />
        ) : (
          <HiOutlineHeart className={HEART_ICON_CLASS} />
        )}
      </span>
    </button>
  );
};

export default FavoriteButton;
