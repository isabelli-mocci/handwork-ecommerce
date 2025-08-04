import React from 'react';
import { EmptyState } from '../../common/EmptyState';

export type EmptyCartProps = {
  onContinueShopping: () => void;
};

const EmptyCart: React.FC<EmptyCartProps> = React.memo(({ onContinueShopping }) => (
  <EmptyState
    title="Your cart is empty."
    description="Explore our collection and continue shopping."
    buttonText="View Products"
    onButtonClick={onContinueShopping}
  />
));
EmptyCart.displayName = 'EmptyCart';

export default EmptyCart;
