export type ShippingMethod = 'standard' | 'express';

export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
  shippingMethod: ShippingMethod;
}

export interface ShippingMethodOption {
  label: string;
  value: ShippingMethod;
  description: string;
  priceLabel: string;
  required?: boolean;
}

export const SHIPPING_OPTIONS: ShippingMethodOption[] = [
  {
    label: 'STANDARD SHIPPING',
    value: 'standard',
    description: '8-10 days',
    priceLabel: 'FREE',
    required: true
  },
  {
    label: 'EXPRESS SHIPPING',
    value: 'express',
    description: '2-3 days',
    priceLabel: '$10.00'
  }
];
