import React from 'react';
import { Select } from '../../common/form/Select';
import { calculateInstallmentAmount, formatCurrency } from '../../../utils/currency.utils';

const TEXTS = {
  label: 'Installments',
  installmentFormat: (times: number, amount: string) => `${times}x of ${amount}`
} as const;

interface InstallmentsSelectProps {
  installments: number;
  options: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
  totalAmount: number;
  error?: string;
}

const InstallmentsSelect: React.FC<InstallmentsSelectProps> = ({
  installments,
  options,
  onChange,
  loading,
  totalAmount,
  error
}) => {
  const renderOption = (installmentCount: number) => {
    try {
      const installmentAmount = calculateInstallmentAmount(totalAmount, installmentCount);
      const formattedAmount = formatCurrency(installmentAmount);
      return TEXTS.installmentFormat(installmentCount, formattedAmount);
    } catch (err) {
      console.error('Error calculating installment:', err);
      return 'Invalid installment';
    }
  };

  return (
    <Select
      label={TEXTS.label}
      value={installments}
      onChange={onChange}
      disabled={loading}
      error={error}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>
          {renderOption(opt)}
        </option>
      ))}
    </Select>
  );
};

export default InstallmentsSelect;
