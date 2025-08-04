import React from 'react';
import { PAYMENT_METHODS } from '../../../data/paymentForm.data';
import PaymentMethodButton from './PaymentMethodButton';

interface PaymentMethodsSelectorProps {
  selectedMethod: string;
  onSelect: (method: string) => void;
  loading: boolean;
  icons: Record<string, React.ReactNode>;
}

const PaymentMethodsSelector: React.FC<PaymentMethodsSelectorProps> = ({
  selectedMethod,
  onSelect,
  loading,
  icons
}) => {
  if (!PAYMENT_METHODS?.length) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="font-cardo text-xl font-bold text-primary mb-6">
        Select Payment Method
      </h3>
      <div className="flex gap-6 flex-wrap justify-start" role="radiogroup" aria-label="Payment methods">
        {PAYMENT_METHODS.map(method => (
          <PaymentMethodButton
            key={method.value}
            method={method}
            isSelected={selectedMethod === method.value}
            onSelect={onSelect}
            icon={icons[method.value]}
            disabled={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsSelector;
