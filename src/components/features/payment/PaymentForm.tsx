import { useState } from 'react';
import BankSlip from './BankSlip';
import PixMock from './PixMock';
import { BOLETO_MOCK_VALUE, PIX_MOCK_VALUE } from '../../../data/paymentForm.data';
import { usePaymentForm } from '../../../hooks/usePaymentForm';
import ShippingDetailsInfo from '../checkout/ShippingDetailsInfo.tsx';
import PaymentMethodsSelector from './PaymentMethodsSelector';
import PaymentInfo from './PaymentInfo.tsx';
import FormActions from '../../common/form/FormActions.tsx';
import { paymentIcons } from '../../../constants/paymentIcons.tsx';
import CheckoutConfirmationModal from '../checkout/CheckoutConfirmationModal';
import type { PaymentFormProps } from '../../../types/paymentForm.types.ts';
import { useFormSubmission } from '../../../hooks/useFormSubmission.ts';
import { useInputHandler } from '../../../hooks/useInputHandler.ts';
import { useMockContainer } from '../../../hooks/useMockContainer.ts';

const PaymentForm: React.FC<PaymentFormProps> = ({
  data,
  onChange,
  onBack,
  onFinalize,
  loading,
  error,
  totalAmount,
  shippingDetails,
}) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const {
    showMock,
    selectedMethod,
    installments,
    installmentOptions,
    handleInstallmentChange,
    handleMethodSelect,
    handleBackClick,
    handleMockBack,
    setShowMock,
  } = usePaymentForm({ onChange, onBack, onFinalize });

  const { formErrors, handleSubmit } = useFormSubmission({
    data,
    selectedMethod,
    onFinalize,
    setShowMock
  });

  const { handleInputChange } = useInputHandler({ onChange });

  const { mockContainerRef } = useMockContainer({
    showMock,
    selectedMethod,
    setShowMock,
    setOrderConfirmed
  });

  const renderPaymentMock = () => {
    if (!showMock) return null;

    const mockProps = {
      value: selectedMethod === 'boleto' ? BOLETO_MOCK_VALUE : PIX_MOCK_VALUE,
      MockComponent: selectedMethod === 'boleto' ? BankSlip : PixMock
    };

    return (
      <div ref={mockContainerRef} className='mb-8'>
        <mockProps.MockComponent value={mockProps.value} />
        <button
          className='mt-6 px-6 py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90 transition-colors'
          onClick={handleMockBack}
        >
          Back
        </button>
      </div>
    );
  };

  const renderPaymentForm = () => {
    if (showMock || orderConfirmed) return null;

    return (
      <form onSubmit={handleSubmit} className='space-y-8 w-full max-w-xl'>
        <PaymentInfo
          selectedMethod={selectedMethod}
          data={data}
          handleInputChange={handleInputChange}
          installments={installments}
          installmentOptions={installmentOptions}
          handleInstallmentChange={handleInstallmentChange}
          loading={loading}
          totalAmount={totalAmount}
          formErrors={formErrors}
        />
        <FormActions loading={loading} onBack={handleBackClick} />
      </form>
    );
  };

  return (
    <div className='p-6'>
      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4' role='alert'>
          <span className='block sm:inline'>{error}</span>
        </div>
      )}
      <ShippingDetailsInfo shippingDetails={shippingDetails} />
      <PaymentMethodsSelector
        selectedMethod={selectedMethod}
        onSelect={handleMethodSelect}
        loading={loading}
        icons={paymentIcons}
      />
      <CheckoutConfirmationModal
        isOpen={orderConfirmed}
        onClose={() => setOrderConfirmed(false)}
      />
      {renderPaymentMock()}
      {renderPaymentForm()}
    </div>
  );
};

export default PaymentForm;
