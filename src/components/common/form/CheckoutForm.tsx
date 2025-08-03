import React, { useCallback, memo } from 'react';
import type { ShippingDetails } from '../../../hooks/useCheckoutState';
import { LiaSpinnerSolid } from 'react-icons/lia';

interface CheckoutFormProps {
  data: ShippingDetails;
  onChange: React.Dispatch<React.SetStateAction<ShippingDetails>>;
  onNext: () => void;
  loading: boolean;
}

interface InputProps {
  type: string;
  id: string;
  name: keyof ShippingDetails;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<InputProps> = memo(
  ({ type, id, name, value, onChange, placeholder, required = false }) => (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='px-3 py-2 border-b border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors placeholder:text-text/70'
      required={required}
      autoComplete='off'
    />
  )
);

const CheckoutForm: React.FC<CheckoutFormProps> = memo(
  ({ data, onChange, onNext, loading }) => {
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
        onNext();
      },
      [onNext]
    );

    return (
      <section
        className='w-full'
        aria-label='Checkout Form'
      >
        <header>
          <h2 className='font-cardo text-2xl font-bold text-primary mb-6'>
            Contact
          </h2>
        </header>
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
          noValidate
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='firstName'
                name='firstName'
                value={data.firstName}
                onChange={handleChange}
                placeholder='First Name'
                required
              />
            </div>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='lastName'
                name='lastName'
                value={data.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col'>
              <FormInput
                type='email'
                id='email'
                name='email'
                value={data.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />
            </div>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='phone'
                name='phone'
                value={data.phone || ''}
                onChange={handleChange}
                placeholder='Phone Number'
                required
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='font-cardo text-2xl font-bold text-primary my-6'>
              Delivery
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='country'
                name='country'
                value={data.country}
                onChange={handleChange}
                placeholder='Country'
                required
              />
            </div>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='city'
                name='city'
                value={data.city}
                onChange={handleChange}
                placeholder='City'
                required
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-4'>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='zipCode'
                name='zipCode'
                value={data.zipCode}
                onChange={handleChange}
                placeholder='Postal Code'
                required
              />
            </div>
            <div className='flex flex-col'>
              <FormInput
                type='text'
                id='address'
                name='address'
                value={data.address}
                onChange={handleChange}
                placeholder='Address'
                required
              />
            </div>
          </div>

          <div className='h-4' />
          <div className='flex flex-col gap-2'>
            <ShippingMethodRadio
              label='STANDARD SHIPPING'
              value='standard'
              checked={data.shippingMethod === 'standard'}
              onChange={onChange}
              description='8-10 days'
              priceLabel='FREE'
              required
            />
            <ShippingMethodRadio
              label='EXPRESS SHIPPING'
              value='express'
              checked={data.shippingMethod === 'express'}
              onChange={onChange}
              description='2-3 days'
              priceLabel='$10.00'
            />
          </div>
          <div className='h-2' />
          <div className='flex flex-col items-start'>
            <button
              type='submit'
              className={`px-6 py-3 border border-text text-xs font-semibold uppercase transition-colors duration-200 hover:bg-primary hover:text-white focus:bg-primary focus:text-white flex items-center justify-center ${
                loading ? 'pointer-events-none opacity-60' : ''
              }`}
              disabled={loading}
              style={{ minWidth: '400px', width: 'auto' }}
            >
              {loading ? (
                <LiaSpinnerSolid className='animate-spin inline mr-2 text-lg' />
              ) : (
                'Payment Method'
              )}
            </button>
          </div>

          <span
            className='mt-4 block w-full text-left text-xs font-semibold uppercase underline cursor-pointer hover:text-primary/90 transition-colors'
            role='button'
            tabIndex={0}
          >
            Back to Shopping Cart
          </span>
        </form>
      </section>
    );
  }
);

interface ShippingMethodRadioProps {
  label: string;
  value: 'standard' | 'express';
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<ShippingDetails>>;
  description: string;
  priceLabel: string;
  required?: boolean;
}

const ShippingMethodRadio: React.FC<ShippingMethodRadioProps> = ({ label, value, checked, onChange, description, priceLabel, required }) => (
  <label className='flex items-center gap-6'>
    <input
      type='radio'
      name='shippingMethod'
      value={value}
      checked={checked}
      onChange={e =>
        onChange(prev => ({
          ...prev,
          shippingMethod: e.target.value as 'standard' | 'express',
        }))
      }
      className='accent-primary'
      required={required}
    />
    <span className='text-primary uppercase font-medium text-sm'>{label}</span>
    <span className={`text-sm ${value === 'standard' ? 'mr-3' : 'mx-4'}`}>{description}</span>
    <span className='text-primary uppercase font-medium ml-2 text-sm'>{priceLabel}</span>
  </label>
);

export default CheckoutForm;
