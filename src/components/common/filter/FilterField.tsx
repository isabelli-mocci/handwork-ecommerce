import React from 'react';
import type { FilterFieldProps } from '../../../types/filterControls.types';

const FilterField: React.FC<FilterFieldProps> = ({ label, id, children }) => (
  <div className='flex flex-col gap-2'>
    <label htmlFor={id} className='text-sm font-semibold text-text mb-1 tracking-tight'>
      {label}
    </label>
    {children}
  </div>
);

export default FilterField;
