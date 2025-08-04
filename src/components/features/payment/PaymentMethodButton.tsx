import React from 'react';

interface PaymentMethod {
  value: string;
  label: string;
}

interface PaymentMethodButtonProps {
  method: PaymentMethod;
  isSelected: boolean;
  onSelect: (value: string) => void;
  icon: React.ReactNode;
  disabled?: boolean;
}

const getButtonStyles = (isSelected: boolean): string => {
  const baseStyles = 'px-4 py-2 border-b flex items-center gap-2 transition-colors duration-200 text-xs md:text-sm uppercase font-semibold';
  const variantStyles = isSelected
    ? 'border-primary text-primary'
    : 'border-secondary text-text/70';
  
  return `${baseStyles} ${variantStyles}`;
};

const PaymentMethodButton: React.FC<PaymentMethodButtonProps> = ({
  method,
  isSelected,
  onSelect,
  icon,
  disabled = false
}) => {
  const buttonStyles = getButtonStyles(isSelected);

  return (
    <button
      type="button"
      className={buttonStyles}
      onClick={() => onSelect(method.value)}
      disabled={disabled}
      aria-label={`Select ${method.label} payment method`}
      aria-pressed={isSelected}
    >
      <span className="flex items-center gap-2">
        {icon}
        {method.label}
      </span>
    </button>
  );
};

export default PaymentMethodButton;
