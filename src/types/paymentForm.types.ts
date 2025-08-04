import type { PaymentDetails } from '../hooks/useCheckoutState';

export interface ShippingDetails {
  name: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
}

export interface PaymentFormBaseProps {
  totalAmount: number;
  loading: boolean;
  error: string | null;
}

export interface PaymentFormCallbacks {
  onChange: React.Dispatch<React.SetStateAction<PaymentDetails>>;
  onBack: () => void;
  onFinalize: () => void;
}

export interface PaymentFormData {
  data: PaymentDetails;
  shippingDetails: ShippingDetails;
}

export type PaymentFormProps = PaymentFormBaseProps & PaymentFormCallbacks & PaymentFormData;
