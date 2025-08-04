import React from 'react';

export type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  fullWidth?: boolean;
};

const ActionButton: React.FC<ActionButtonProps> = ({ children, fullWidth = false, className = '', ...props }) => (
  <button
    className={`px-6 py-3 transition-colors bg-primary text-white border border-brown-800 hover:-translate-y-0.5 hover:scale-102 duration-200 ${fullWidth ? 'w-full' : ''} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default ActionButton;
