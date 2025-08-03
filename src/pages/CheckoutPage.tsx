import React from 'react';
import { useCheckoutState } from '../hooks/useCheckoutState';
import CheckoutSummary from '../components/common/checkout/CheckoutSummary.tsx';
import DiscountForm from '../components/common/form/DiscountForm.tsx';
import { useDiscount } from '../hooks/useDiscount';
import CheckoutForm from '../components/common/form/CheckoutForm.tsx';
import PaymentForm from '../components/common/form/PaymentForm.tsx';
import CheckoutConfirmationModal from '../components/common/checkout/CheckoutConfirmationModal.tsx';
import { useCart } from '../hooks/useCart';

const getShippingMethod = (method: string) => (method === 'express' ? 'express' : 'standard');

const getTotalUnits = (items: Array<{ quantity: number }>) =>
  items.reduce((sum, item) => sum + item.quantity, 0);

const getTotal = (subtotal: number, discount: number, shippingMethod: string) =>
  subtotal - discount + (shippingMethod === 'express' ? 10 : 0);

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  const {
    step,
    shippingDetails,
    setShippingDetails,
    paymentDetails,
    setPaymentDetails,
    subtotal,
    isLoading,
    error,
    isConfirmationModalOpen,
    goToNextStep,
    goToPreviousStep,
    finalizePurchase,
    closeConfirmationModal,
  } = useCheckoutState();
  const { discount, isLoading: isDiscountLoading, applyDiscount } = useDiscount(subtotal);

  return (
    <div className="container mx-auto px-6 md:px-32 pt-16 pb-2 max-w-[98vw] min-h-[80vh] flex flex-col justify-start">
      <h1 className="font-cardo text-2xl md:text-4xl font-bold text-primary text-center uppercase">Checkout</h1>
      <div className="flex flex-col lg:flex-row-reverse gap-16 flex-1">
        <div className="w-full lg:w-2/5">
          <CheckoutSummary
            items={cartItems}
            subtotal={subtotal}
            shippingMethod={getShippingMethod(shippingDetails.shippingMethod)}
            totalUnits={getTotalUnits(cartItems)}
            discount={discount.value}
            total={getTotal(subtotal, discount.value, shippingDetails.shippingMethod)}
          />
          {step === 'shipping' && (
            <DiscountForm
              onApply={applyDiscount}
              loading={isDiscountLoading}
              status={discount.status}
              message={discount.message}
            />
          )}
        </div>

        <div className="w-full">
          {step === 'shipping' && (
            <CheckoutForm
              data={shippingDetails}
              onChange={setShippingDetails}
              onNext={goToNextStep}
              loading={isLoading}
            />
          )}
          {step === 'payment' && (
            <PaymentForm
              data={paymentDetails}
              onChange={setPaymentDetails}
              onBack={goToPreviousStep}
              onFinalize={finalizePurchase}
              loading={isLoading}
              error={error}
            />
          )}
        </div>
      </div>

      <CheckoutConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
      />
    </div>
  );
};

export default CheckoutPage;