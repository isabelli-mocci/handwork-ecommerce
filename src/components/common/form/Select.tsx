import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const styles = {
  label: 'text-sm text-text/70 mb-1 block',
  select: [
    'w-full',
    'px-3 py-2',
    'border-0 border-b border-secondary',
    'bg-[#f5f0ec]',
    'text-text/80',
    'focus:outline-none',
    'focus:border-primary',
    'transition-colors',
    'duration-200',
    'text-sm',
    'appearance-none',
  ].join(' '),
  error: 'text-red-500 text-xs mt-1',
  disabled: 'opacity-60 cursor-not-allowed'
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  className = '',
  disabled,
  children,
  ...props
}) => (
  <div className='mt-4 w-full'>
    {label && <label className={styles.label}>{label}</label>}
    <select
      className={`${styles.select} ${disabled ? styles.disabled : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </select>
    {error && <span className={styles.error}>{error}</span>}
  </div>
);
