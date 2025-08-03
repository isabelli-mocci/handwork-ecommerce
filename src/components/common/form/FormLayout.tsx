import React from 'react';

interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => (
  <>
    {title && (
      <div className='flex flex-col px-4 md:px-8 lg:px-0'>
        <h2 className='font-cardo font-bold text-primary text-xl my-4'>
          {title}
        </h2>
      </div>
    )}
    {children}
  </>
);

export const FormRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full'>
    {children}
  </div>
);

export const FormFieldWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='flex flex-col w-full px-4 md:px-8 lg:px-0'>
    {children}
  </div>
);
