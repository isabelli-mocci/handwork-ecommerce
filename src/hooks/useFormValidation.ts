import { useState, useCallback } from 'react';
import type { ShippingDetails } from './useCheckoutState';

type ValidationErrors = { [key: string]: string };

const validateLength = (value: string, field: string, min: number, max: number): string | null => {
  if (!value.trim()) return `${field} is required.`;
  if (value.trim().length < min) return `${field} must be at least ${min} characters.`;
  if (max && value.trim().length > max) return `${field} must be less than ${max} characters.`;
  return null;
};

const useFormValidation = (data: ShippingDetails) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: ValidationErrors = {};

    // Name validation
    ['firstName', 'lastName'].forEach(field => {
      const value = data[field as keyof ShippingDetails];
      const error = validateLength(value as string, field === 'firstName' ? 'First name' : 'Last name', 2, 50);
      if (error) newErrors[field] = error;
    });

    // Email validation
    if (!data.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = 'Invalid email.';
    }

    // Phone validation
    if (!data.phone?.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{8,15}$/.test(data.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 8-15 digits.';
    }

    // Location validation
    ['country', 'city'].forEach(field => {
      const value = data[field as keyof ShippingDetails];
      const error = validateLength(value as string, field.charAt(0).toUpperCase() + field.slice(1), 2, 0);
      if (error) newErrors[field] = error;
    });

    // Postal code validation
    if (!data.zipCode.trim()) {
      newErrors.zipCode = 'Postal code is required.';
    } else if (!/^\d{5,10}$/.test(data.zipCode.replace(/\D/g, ''))) {
      newErrors.zipCode = 'Postal code must be 5-10 digits.';
    }

    // Address validation
    if (!data.address.trim()) {
      newErrors.address = 'Address is required.';
    } else if (data.address.trim().length < 5) {
      newErrors.address = 'Address must be at least 5 characters.';
    } else if (/^\d+$/.test(data.address.trim())) {
      newErrors.address = 'Address cannot be only numbers.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [data]);

  const clearError = useCallback((field: string) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
  }, []);

  return {
    errors,
    validateForm,
    clearError
  };
};

export default useFormValidation;
