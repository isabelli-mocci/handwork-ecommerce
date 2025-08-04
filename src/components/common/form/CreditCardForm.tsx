import type { FC } from 'react';
import { FaCreditCard } from 'react-icons/fa6';
import PaymentInput from '../../features/payment/PaymentInput';
import InstallmentsSelect from '../../features/payment/InstallmentsSelect';
import type { PaymentMethodProps, InstallmentProps } from '../../../types/paymentInfo.types';

interface ErrorMessageProps {
  error?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return <span className='text-red-600 text-xs'>{error}</span>;
};

export const CreditCardForm: FC<PaymentMethodProps & InstallmentProps> = ({
  data,
  handleInputChange,
  formErrors = {},
  installments,
  installmentOptions,
  handleInstallmentChange,
  loading,
  totalAmount,
}) => {
  return (
    <>
      <div className="space-y-2">
        <PaymentInput
          id='cardName'
          name='cardName'
          value={data.cardName}
          onChange={handleInputChange}
          placeholder='Name on Card'
          required
        />
        <ErrorMessage error={formErrors.cardName} />
      </div>

      <div className="space-y-2">
        <PaymentInput
          id='cardNumber'
          name='cardNumber'
          value={data.cardNumber}
          onChange={handleInputChange}
          placeholder='0000 0000 0000 0000'
          icon={<FaCreditCard className='absolute right-3 top-1/2 -translate-y-1/2 text-text/50' />}
          required
        />
        <ErrorMessage error={formErrors.cardNumber} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="space-y-2">
          <PaymentInput
            id='expiryDate'
            name='expiryDate'
            value={data.expiryDate}
            onChange={handleInputChange}
            placeholder='Expiry Date (MM/YY)'
            required
          />
          <ErrorMessage error={formErrors.expiryDate} />
        </div>
        <div className="space-y-2">
          <PaymentInput
            id='cvv'
            name='cvv'
            value={data.cvv}
            onChange={handleInputChange}
            placeholder='CVV (Security Code)'
            required
          />
          <ErrorMessage error={formErrors.cvv} />
        </div>
      </div>

      <InstallmentsSelect
        installments={installments}
        options={installmentOptions}
        onChange={handleInstallmentChange}
        loading={loading}
        totalAmount={totalAmount}
      />
    </>
  );
};
