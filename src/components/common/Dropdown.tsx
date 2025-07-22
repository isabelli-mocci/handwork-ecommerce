import React from 'react';

interface DropdownProps {
  label: string;
  options: { value: string; label: string; icon?: React.ReactNode }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  className,
}) => {
  const selectClass =
    'appearance-none bg-transparent border-0 focus:outline-none cursor-pointer text-sm py-0.5 pr-6';
  const wrapperClass =
    'relative inline-flex items-center border border-gray-200 rounded-sm px-2';

  const getOptionLabel = (optionLabel: string) => {
    if (optionLabel === 'All') {
      if (label === 'Category') return 'Category';
      if (label === 'Price') return 'Price';
      if (label === 'Color') return 'Color';
    }
    return optionLabel;
  };

  return (
    <div className={`${wrapperClass} ${className || ''}`}>
      <label
        htmlFor={`dropdown-${label}`}
        className='sr-only'
      >
        {label}
      </label>
      <select
        id={`dropdown-${label}`}
        value={selectedValue}
        onChange={e => onValueChange(e.target.value)}
        className={selectClass}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {getOptionLabel(option.label)}
          </option>
        ))}
      </select>
      <svg
        className='w-4 h-4 text-gray-400 absolute right-1 pointer-events-none'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M19 9l-7 7-7-7'
        ></path>
      </svg>
    </div>
  );
};

export default Dropdown;
