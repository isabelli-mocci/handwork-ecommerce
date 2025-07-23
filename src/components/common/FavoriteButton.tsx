import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi2';

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: () => void;
  label: string;
}

const FAVORITE_BTN_CLASS = 'absolute top-0 right-0 p-2 group/heart';
const HEART_ICON_CLASS = 'w-5 h-5 transition-transform duration-200 group-hover/heart:scale-125 group-hover/heart:text-primary text-text';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite = false, onClick, label }) => (
  <button
    type="button"
    className={FAVORITE_BTN_CLASS}
    aria-label={label}
    aria-pressed={isFavorite}
    onClick={onClick}
  >
    <HiOutlineHeart className={HEART_ICON_CLASS} />
  </button>
);

export default FavoriteButton;
