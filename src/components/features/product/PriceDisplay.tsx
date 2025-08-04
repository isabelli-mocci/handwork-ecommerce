import React from 'react';

export type PriceDisplayProps = {
  price: number;
  discountPrice?: number;
  currency: string;
};

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, discountPrice, currency }) => (
  <div>
    {discountPrice ? (
      <>
        <span className="text-xs text-brown-700 line-through mr-2">
          {currency} {price.toFixed(2)}
        </span>
        <span className="text-lg md:text-xl font-medium text-brown-800">
          {currency} {discountPrice.toFixed(2)}
        </span>
      </>
    ) : (
      <span className="text-lg md:text-xl font-medium text-brown-800">
        {currency} {price.toFixed(2)}
      </span>
    )}
  </div>
);

export default PriceDisplay;
