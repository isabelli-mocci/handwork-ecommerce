import { useCallback, useState } from 'react';
import { validateDiscount } from '../utils/discountStrategies.utils';

export type DiscountStatus = 'idle' | 'success' | 'error';

export interface DiscountState {
  value: number;
  status: DiscountStatus;
  message: string;
}

export function useDiscount(subtotal: number) {
  const [discount, setDiscount] = useState<DiscountState>({ value: 0, status: 'idle', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscountResult = (result: { valid: boolean; value: number; message: string }, onResult?: (message: string, type: 'success' | 'error') => void) => {
    setDiscount({
      value: result.valid ? result.value : 0,
      status: result.valid ? 'success' : 'error',
      message: result.message,
    });
    onResult?.(result.message, result.valid ? 'success' : 'error');
  };

  const applyDiscount = useCallback(
    (code: string, onResult?: (message: string, type: 'success' | 'error') => void) => {
      if (!code) {
        setDiscount({ value: 0, status: 'error', message: 'Enter a code.' });
        onResult?.('Enter a code.', 'error');
        return;
      }
      setIsLoading(true);
      setDiscount(prev => ({ ...prev, status: 'idle', message: '' }));
      setTimeout(() => {
        try {
          const result = validateDiscount(code, subtotal);
          handleDiscountResult(result, onResult);
        } catch {
          setDiscount({ value: 0, status: 'error', message: 'Unexpected error. Try again.' });
          onResult?.('Unexpected error. Try again.', 'error');
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    },
    [subtotal]
  );

  return { discount, isLoading, applyDiscount };
}
