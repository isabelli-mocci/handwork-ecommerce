import type { FC } from 'react';
import type { PaymentInfoProps } from '../../../types/paymentInfo.types';
import { CreditCardForm } from '../../common/form/CreditCardForm';
import { BoletoPayment, PixPayment, PayPalPayment } from '../../common/form/PaymentMethods';

const PaymentInfo: FC<PaymentInfoProps> = ({
  selectedMethod,
  data,
  handleInputChange,
  installments = 1,
  installmentOptions = [],
  handleInstallmentChange = () => {},
  loading = false,
  totalAmount = 0,
  formErrors = {},
}) => {
  const renderPaymentMethod = () => {
    switch (selectedMethod) {
      case 'credit':
        return (
          <CreditCardForm
            data={data}
            handleInputChange={handleInputChange}
            formErrors={formErrors}
            installments={installments}
            installmentOptions={installmentOptions}
            handleInstallmentChange={handleInstallmentChange}
            loading={loading}
            totalAmount={totalAmount}
          />
        );
      case 'boleto':
        return <BoletoPayment />;
      case 'pix':
        return <PixPayment />;
      case 'paypal':
        return <PayPalPayment />;
      default:
        return null;
    }
  };

  return renderPaymentMethod();
};

export default PaymentInfo;
