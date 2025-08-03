import React, { useState, useCallback, useEffect } from 'react';
import { FormValidator } from '../utils/formValidator';
import type { ShippingFormData } from '../types/shipping.types';

interface UseShippingFormReturn {
  data: ShippingFormData;
  errors: Record<keyof ShippingFormData, string | null>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShippingMethodChange: (method: ShippingFormData['shippingMethod']) => void;
  isValid: boolean;
  validateForm: () => boolean;
  resetForm: () => void;
}

const initialData: ShippingFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  zipCode: '',
  address: '',
  shippingMethod: 'standard'
};

export const useShippingForm = (): UseShippingFormReturn => {
  const [data, setData] = useState<ShippingFormData>(initialData);
  const [errors, setErrors] = useState<Record<keyof ShippingFormData, string | null>>(
    {} as Record<keyof ShippingFormData, string | null>
  );
  const [isValid, setIsValid] = useState(false);

  const validator = React.useMemo(() => new FormValidator(), []);

  const validateForm = useCallback(() => {
    const newErrors = validator.validateForm(data);
    setErrors(newErrors);
    const valid = !validator.hasErrors(newErrors);
    setIsValid(valid);
    return valid;
  }, [data, validator]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  }, []);

  const handleShippingMethodChange = useCallback((method: ShippingFormData['shippingMethod']) => {
    setData(prev => ({ ...prev, shippingMethod: method }));
  }, []);

  const resetForm = useCallback(() => {
    setData(initialData);
    setErrors({} as Record<keyof ShippingFormData, string | null>);
    setIsValid(false);
  }, []);

  useEffect(() => {
    validateForm();
  }, [data, validateForm]);

  return {
    data,
    errors,
    handleChange,
    handleShippingMethodChange,
    isValid,
    validateForm,
    resetForm
  };
};
