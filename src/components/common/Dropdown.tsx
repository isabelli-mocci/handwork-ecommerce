import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

export type DropdownOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const getDisplayLabel = (dropdownLabel: string, optionLabel: string) => {
  if (optionLabel === 'All') {
    switch (dropdownLabel) {
      case 'Category':
      case 'Price':
      case 'Color':
        return dropdownLabel;
      default:
        return optionLabel;
    }
  }
  return optionLabel;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClickOutside]);

  const selectedOption = useMemo(
    () => options.find(option => option.value === selectedValue),
    [options, selectedValue]
  );

  const minWidthClass = useMemo(() => (
    label === 'Category' || label === 'Sort by' ? 'min-w-[200px]' : 'min-w-[140px]'
  ), [label]);

  const handleOptionSelect = useCallback((value: string) => {
    try {
      onValueChange(value);
      setIsOpen(false);
    } catch (error) {
      console.error('Error selecting option from Dropdown:', error);
    }
  }, [onValueChange]);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-flex items-center border border-gray-200 rounded-sm px-2 ${className || ''} ${minWidthClass}`}
    >
      <button
        type="button"
        className="flex items-center gap-2 w-full py-1 px-2 text-sm bg-transparent border-0 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption?.icon && (
          <span className="w-4 h-4 mr-1 align-middle inline-block">{selectedOption.icon}</span>
        )}
        <span>{getDisplayLabel(label, selectedOption?.label || '')}</span>
        <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 top-full w-full bg-[#f5f0ec] border border-gray-200 z-50 py-2 min-w-[130px] shadow-lg"
          role="listbox"
        >
          {options.map(option => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === selectedValue}
              tabIndex={0}
              className={`px-5 py-2 text-[0.9rem] text-[#786864] cursor-pointer border-0 transition-colors duration-200 ${option.value === selectedValue ? 'bg-[#f5f0ec] text-[#5e3517] font-semibold' : ''} hover:bg-[#f5f0ec] hover:text-[#5e3517] focus:bg-[#f5f0ec] focus:text-[#5e3517] outline-none ${options.length > 1 && option !== options[options.length - 1] ? 'border-b border-[#f1f1f1]' : ''}`}
              onClick={() => handleOptionSelect(option.value)}
            >
              {option.icon && <span className="w-4 h-4 mr-1 align-middle inline-block">{option.icon}</span>}
              <span>{getDisplayLabel(label, option.label)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
