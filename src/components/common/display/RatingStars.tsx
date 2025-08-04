import React from 'react';
import { IoStar, IoStarHalfOutline } from 'react-icons/io5';

export type RatingStarsProps = {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
};

const starSizes = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5'
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 'md' }) => (
  <>
    {Array.from({ length: 5 }, (_, i) => {
      const idx = i + 1;
      const iconClass = `${starSizes[size]} ${rating >= idx ? 'text-yellow-500' : rating >= idx - 0.5 ? 'text-yellow-500' : 'text-gray-300'}`;
      if (rating >= idx) return <IoStar key={idx} className={iconClass} />;
      if (rating >= idx - 0.5) return <IoStarHalfOutline key={idx} className={iconClass} />;
      return <IoStar key={idx} className={iconClass} />;
    })}
  </>
);

export default RatingStars;
