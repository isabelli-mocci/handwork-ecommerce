import type { PaymentDetails } from '../hooks/useCheckoutState';

export interface PaymentMethodProps {
  data: PaymentDetails;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formErrors?: Partial<Record<string, string>>;
}

export interface InstallmentProps {
  installments: number;
  installmentOptions: number[];
  handleInstallmentChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
  totalAmount: number;
}

export interface PaymentInfoProps extends PaymentMethodProps, Partial<InstallmentProps> {
  selectedMethod: string;
}
