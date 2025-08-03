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
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
      },
      [onChange]
    );

    const handleBackToCart = useCallback(() => {
      window.location.href = '/cart';
    }, []);

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        if (!data.firstName.trim())
          newErrors.firstName = 'First name is required.';
        // First name
        else if (data.firstName.trim().length < 2)
          newErrors.firstName = 'First name must be at least 2 characters.';
        else if (data.firstName.trim().length > 50)
          newErrors.firstName = 'First name must be less than 50 characters.';

        // Last name
        if (!data.lastName.trim())
          newErrors.lastName = 'Last name is required.';
        else if (data.lastName.trim().length < 2)
          newErrors.lastName = 'Last name must be at least 2 characters.';
        else if (data.lastName.trim().length > 50)
          newErrors.lastName = 'Last name must be less than 50 characters.';

        // Email
        if (!data.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^\S+@\S+\.\S+$/.test(data.email))
          newErrors.email = 'Invalid email.';
        if (!data.phone?.trim()) newErrors.phone = 'Phone number is required.';
        else if (!/^\d{8,15}$/.test(data.phone.replace(/\D/g, '')))
          newErrors.phone = 'Phone number must be 8-15 digits.';

        // Country
        if (!data.country.trim()) newErrors.country = 'Country is required.';
        else if (data.country.trim().length < 2)
          newErrors.country = 'Country must be at least 2 characters.';

        // City
        if (!data.city.trim()) newErrors.city = 'City is required.';
        else if (data.city.trim().length < 2)
          newErrors.city = 'City must be at least 2 characters.';

        // Postal code
        if (!data.zipCode.trim())
          newErrors.zipCode = 'Postal code is required.';
        else if (!/^\d{5,10}$/.test(data.zipCode.replace(/\D/g, '')))
          newErrors.zipCode = 'Postal code must be 5-10 digits.';

        // Address
        if (!data.address.trim()) newErrors.address = 'Address is required.';
        else if (data.address.trim().length < 5)
          newErrors.address = 'Address must be at least 5 characters.';
        else if (/^\d+$/.test(data.address.trim()))
          newErrors.address = 'Address cannot be only numbers.';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          onNext();
        }
      },
      [onNext, data]
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
              {errors.firstName && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.firstName}
                </span>
              )}
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
              {errors.lastName && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.lastName}
                </span>
              )}
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
              {errors.email && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.email}
                </span>
              )}
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
              {errors.phone && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.phone}
                </span>
              )}
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
              {errors.country && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.country}
                </span>
              )}
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
              {errors.city && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.city}
                </span>
              )}
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
              {errors.zipCode && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.zipCode}
                </span>
              )}
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
              {errors.address && (
                <span className='text-xs text-red-600/65 mt-1'>
                  {errors.address}
                </span>
              )}
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
            onClick={handleBackToCart}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') handleBackToCart();
            }}
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

const ShippingMethodRadio: React.FC<ShippingMethodRadioProps> = ({
  label,
  value,
  checked,
  onChange,
  description,
  priceLabel,
  required,
}) => (
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
    <span className={`text-sm ${value === 'standard' ? 'mr-3' : 'mx-4'}`}>
      {description}
    </span>
    <span className='text-primary uppercase font-medium ml-2 text-sm'>
      {priceLabel}
    </span>
  </label>
);

export default CheckoutForm;
