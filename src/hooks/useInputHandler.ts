import { formatCardNumber, formatExpiryDate } from '../utils/payment.utils';
import type { PaymentDetails } from './useCheckoutState';

interface UseInputHandlerProps {
  onChange: React.Dispatch<React.SetStateAction<PaymentDetails>>;
}

export const useInputHandler = ({ onChange }: UseInputHandlerProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case 'cardNumber':
        formattedValue = formatCardNumber(value);
        break;
      case 'expiryDate':
        formattedValue = formatExpiryDate(value);
        break;
      case 'cvv':
        formattedValue = value.replace(/\D/g, '').slice(0, 3);
        break;
    }

    onChange(prev => ({ ...prev, [name]: formattedValue }));
  };

  return {
    handleInputChange
  };
};
