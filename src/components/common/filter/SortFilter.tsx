import React from 'react';
import Dropdown from '../Dropdown';
import type { SortOption } from '../../../types/productFilters.types';

interface SortFilterProps {
  options: SortOption[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}

const SortFilter: React.FC<SortFilterProps> = ({ options, value, onChange, className }) => {
  const displayOptions = [
    { label: 'Default', value: 'default' },
    ...options.filter(opt => opt.value !== 'default')
  ];
  const selectedValue = !value || value === 'default' ? 'default' : value;
  return (
    <Dropdown label='Sort by' options={displayOptions} selectedValue={selectedValue} onValueChange={onChange} className={className} />
  );
};

export default SortFilter;
