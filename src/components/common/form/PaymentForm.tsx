import React, { useCallback } from 'react';
import type { PaymentDetails } from '../../../hooks/useCheckoutState';
import { LiaSpinnerSolid } from 'react-icons/lia';
import { FaCreditCard } from 'react-icons/fa';

export interface PaymentFormProps {
  data: PaymentDetails;
  onChange: React.Dispatch<React.SetStateAction<PaymentDetails>>;
  onBack: () => void;
  onFinalize: () => void;
  loading: boolean;
  error: string | null;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ data, onChange, onBack, onFinalize, loading, error }) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      onChange(prev => ({ ...prev, [name]: value }));
    },
    [onChange]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onFinalize();
    },
    [onFinalize]
  );

  const renderError = () =>
    error ? (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>
    ) : null;

  return (
    <div className="p-6">
      <h2 className="font-cardo text-2xl font-bold text-primary mb-6">Payment Details</h2>
      {renderError()}
      <form onSubmit={handleSubmit} className="space-y-4">
        <PaymentInput
          label="Card Number"
          id="cardNumber"
          name="cardNumber"
          value={data.cardNumber}
          onChange={handleChange}
          icon={<FaCreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-text/50" />}
          required
        />
        <PaymentInput
          label="Name on Card"
          id="cardName"
          name="cardName"
          value={data.cardName}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PaymentInput
            label="Expiry Date (MM/YY)"
            id="expiryDate"
            name="expiryDate"
            value={data.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
          <PaymentInput
            label="CVV"
            id="cvv"
            name="cvv"
            value={data.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-4 mt-6 md:flex-row md:justify-center lg:justify-start">
          <button
            type="button"
            onClick={onBack}
            className={`w-full md:w-auto flex-1 px-6 py-3 border border-secondary text-text font-semibold hover:bg-secondary transition-colors ${loading ? 'pointer-events-none opacity-60' : ''}`}
            disabled={loading}
          >
            Back
          </button>
          <button
            type="submit"
            className={`w-full md:w-auto flex-1 px-6 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center ${loading ? 'pointer-events-none opacity-60' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <LiaSpinnerSolid className="animate-spin inline mr-2 text-lg" />
            ) : (
              'Finalize Purchase'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

interface PaymentInputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
}

const PaymentInput: React.FC<PaymentInputProps> = ({ label, id, name, value, onChange, required, placeholder, icon }) => (
  <div className="flex flex-col relative">
    <label htmlFor={id} className="text-sm text-text/70 mb-1">{label}</label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 border border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors${icon ? ' pr-10' : ''}`}
      required={required}
    />
    {icon}
  </div>
);

export default PaymentForm;