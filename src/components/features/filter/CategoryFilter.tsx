import React from 'react';
import Dropdown from '../../common/display/Dropdown';
import type { DropdownOption } from '../../../types/dropdown.types';

interface CategoryFilterProps {
  options: DropdownOption[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = React.memo(({ options, value, onChange, className }) => (
  <Dropdown label='Category' options={options} selectedValue={value} onValueChange={onChange} className={className} />
));

export default CategoryFilter;
