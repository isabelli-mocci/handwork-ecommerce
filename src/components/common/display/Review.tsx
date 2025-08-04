import React, { memo } from 'react';
import RatingStars from './RatingStars';

interface ReviewProps {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

function formatReviewDate(date: string): string {
  try {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return date;
  }
}

const Review: React.FC<ReviewProps> = memo(
  ({ user, rating, comment, date }) => {
    return (
      <div className='py-6 border-b border-secondary last:border-b-0'>
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='h-8 w-8 rounded-full bg-secondary/40 flex items-center justify-center'>
              <span className='text-sm font-medium text-primary'>
                {user.charAt(0)}
              </span>
            </div>
            <div className='ml-4'>
              <h4 className='text-sm font-medium text-primary/70'>{user}</h4>
              <div className='mt-1 flex items-center'>
                <RatingStars rating={rating} size='md' />
              </div>
            </div>
          </div>
          <p className='text-sm text-gray-500'>
            {formatReviewDate(date)}
          </p>
        </div>
        <div className='space-y-2'>
          <p className='text-base'>{comment}</p>
        </div>
      </div>
    );
  },
);

export default Review;
