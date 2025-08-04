import React from 'react';

export type EmptyCartProps = {
  onContinueShopping: () => void;
};

const EmptyCart: React.FC<EmptyCartProps> = React.memo(({ onContinueShopping }) => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
    <h1 className="font-cardo text-primary text-3xl md:text-4xl mb-8">Your cart is empty.</h1>
    <button
      onClick={onContinueShopping}
      className="text-sm px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-colors"
    >
      View Products
    </button>
  </div>
));
EmptyCart.displayName = 'EmptyCart';

export default EmptyCart;
