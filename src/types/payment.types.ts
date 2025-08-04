export interface PaymentMethod {
  value: string;
  label: string;
}

export interface PaymentMethodsProps {
  selectedMethod: string;
  onSelect: (method: string) => void;
  loading: boolean;
  icons: Record<string, React.ReactNode>;
}
