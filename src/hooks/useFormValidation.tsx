import { useState, useCallback } from 'react';
import type { ShippingFormData } from '../types/shipping.types';

interface ValidationErrors {
  [key: string]: string | null;
}

const useFormValidation = (data: ShippingFormData) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = useCallback(() => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.entries(data).forEach(([field, value]) => {
      if (!value && field !== 'shippingMethod') {
        newErrors[field] = 'Este campo é obrigatório';
        isValid = false;
      }
    });

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = 'Email inválido';
        isValid = false;
      }
    }

    if (data.phone) {
      const phoneRegex = /^\+?[\d\s-()]{10,}$/;
      if (!phoneRegex.test(data.phone)) {
        newErrors.phone = 'Telefone inválido';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [data]);

  const clearError = useCallback((field: string) => {
    setErrors(prev => ({ ...prev, [field]: null }));
  }, []);

  return {
    errors,
    validateForm,
    clearError
  };
};

export default useFormValidation;
