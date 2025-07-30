import React from 'react';

export type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <h2 className={`font-cardo text-xl md:text-2xl font-semibold text-primary mb-4 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
