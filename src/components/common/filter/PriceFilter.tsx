import React from 'react';
import Dropdown from '../Dropdown';
import type { DropdownOption } from '../../../types/dropdown.types';

interface PriceFilterProps {
  options?: DropdownOption[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
  asSlider?: boolean;
}

const PriceFilter: React.FC<PriceFilterProps> = React.memo(({ options, value, onChange, className, asSlider }) => {
  if (asSlider) {
    const min = 150;
    const max = 300;
    const step = 10;
    return (
      <div className={`flex flex-col gap-2 ${className || ''}`}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={parseInt(value) || min}
          onChange={e => onChange(e.target.value)}
          className="w-full accent-primary h-1 rounded appearance-none cursor-pointer bg-primary/20 focus:ring-2 focus:ring-primary/40"
          aria-label="Minimum price"
        />
        <div className="flex justify-between text-xs text-primary font-medium">
          <span>${min}</span>
          <span aria-live='polite'>${value || min}</span>
          <span>${max}</span>
        </div>
      </div>
    );
  }
  return <Dropdown label='Price' options={options || []} selectedValue={value} onValueChange={onChange} className={className} />;
});

export default PriceFilter;
