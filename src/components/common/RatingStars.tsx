import React from 'react';
import { IoStar, IoStarHalfOutline } from 'react-icons/io5';

export type RatingStarsProps = {
  rating: number;
};

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => (
  <>
    {Array.from({ length: 5 }, (_, i) => {
      const idx = i + 1;
      if (rating >= idx) return <IoStar key={idx} className="text-yellow-500" />;
      if (rating >= idx - 0.5) return <IoStarHalfOutline key={idx} className="text-yellow-500" />;
      return <IoStar key={idx} className="text-gray-300" />;
    })}
  </>
);

export default RatingStars;
