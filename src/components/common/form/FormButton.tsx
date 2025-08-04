import React from 'react';
import { LiaSpinnerSolid } from 'react-icons/lia';

type ButtonVariant = 'primary' | 'secondary';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const getButtonStyles = (variant: ButtonVariant, loading: boolean): string => {
  const baseStyles = 'w-full md:w-[220px] lg:w-[220px] px-6 py-3 text-xs font-semibold uppercase transition-colors duration-200 flex items-center justify-center md:mx-auto lg:mx-0';
  const loadingStyles = loading ? 'pointer-events-none opacity-60' : '';
  
  const variantStyles = {
    primary: 'border border-text hover:bg-primary/90 hover:text-white',
    secondary: 'underline hover:text-primary/90'
  };

  return `${baseStyles} ${variantStyles[variant]} ${loadingStyles}`;
};

export const FormButton: React.FC<FormButtonProps> = ({
  variant,
  loading = false,
  icon,
  children,
  ...props
}) => (
  <button
    {...props}
    disabled={loading}
    className={getButtonStyles(variant, loading)}
  >
    {loading && <LiaSpinnerSolid className='animate-spin inline mr-2 text-lg' />}
    {!loading && icon}
    {children}
  </button>
);
