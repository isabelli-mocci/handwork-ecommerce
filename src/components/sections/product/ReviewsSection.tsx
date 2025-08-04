import React from 'react';
import SectionTitle from '../../common/display/SectionTitle';
import Review from '../../common/display/Review';
import RatingStars from '../../common/display/RatingStars';
import { reviewsMock } from '../../../data/reviews.data';

const AVERAGE_RATING = 4.5;
const TOTAL_STARS = 5;

const ReviewsSection: React.FC = () => {
  return (
    <div className='mt-8 border-t border-secondary pt-6 w-full'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-x-8'>
        <div className='lg:col-span-4'>
          <SectionTitle>Customer Reviews</SectionTitle>
          <div className='mt-3 flex items-center'>
            <RatingStars rating={AVERAGE_RATING} size='lg' />
            <p className='ml-2 text-sm text-gray-900'>
              {AVERAGE_RATING} out of {TOTAL_STARS}
            </p>
          </div>
          <div className='mt-6'>
            <h3 className='text-sm font-medium text-gray-900'>Share your thoughts</h3>
            <p className='mt-2 text-sm text-gray-600'>
              If you've used this product, share your thoughts with other customers
            </p>
            <button className='text-xs font-semibold uppercase mt-4 w-full border border-text hover:bg-primary hover:text-white py-2 px-4 hover:bg-primary/90 transition-colors'>
              Write a review
            </button>
          </div>
        </div>

        <div className='mt-8 lg:col-span-8 lg:mt-0'>
          <div className='space-y-6'>
            {reviewsMock.map((review) => (
              <Review
                key={review.id}
                user={review.user}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
