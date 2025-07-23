import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import DROPDOWN_CLASSES from '../../styles/dropdown.styles';
import type { DropdownProps } from '../../types/dropdown.types';
import { getDisplayLabel } from '../../utils/productFilters.utils';

import type { DropdownOption } from '../../types/dropdown.types';

const DropdownButton: React.FC<{
  isOpen: boolean;
  onClick: () => void;
  selectedOption: DropdownOption | undefined;
  label: string;
}> = ({ isOpen, onClick, selectedOption, label }) => (
  <button
    type='button'
    className={DROPDOWN_CLASSES.button}
    onClick={onClick}
    aria-haspopup='listbox'
    aria-expanded={isOpen}
  >
    {selectedOption?.icon && (
      <span className={DROPDOWN_CLASSES.icon}>{selectedOption.icon}</span>
    )}
    <span>{getDisplayLabel(label, selectedOption?.label || '')}</span>
    <svg
      className={DROPDOWN_CLASSES.svg}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 9l-7 7-7-7'
      />
    </svg>
  </button>
);

const DropdownList: React.FC<{
  options: DropdownOption[];
  selectedValue: string;
  label: string;
  onSelect: (value: string) => void;
}> = ({ options, selectedValue, label, onSelect }) => (
  <ul className={DROPDOWN_CLASSES.list} role='listbox'>
    {options.map(option => {
      const isSelected = option.value === selectedValue;
      const isNotLast = options.length > 1 && option !== options[options.length - 1];
      return (
        <li
          key={option.value}
          role='option'
          aria-selected={isSelected}
          tabIndex={0}
          className={[
            DROPDOWN_CLASSES.listItemBase,
            isSelected && DROPDOWN_CLASSES.listItemSelected,
            DROPDOWN_CLASSES.listItemHoverFocus,
            isNotLast && DROPDOWN_CLASSES.listItemBorder,
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => onSelect(option.value)}
        >
          {option.icon && <span className={DROPDOWN_CLASSES.icon}>{option.icon}</span>}
          <span>{getDisplayLabel(label, option.label)}</span>
        </li>
      );
    })}
  </ul>
);

const Dropdown: React.FC<DropdownProps> = ({ label, options, selectedValue, onValueChange, className }) => {
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

  const minWidthClass = useMemo(
    () =>
      label === 'Category' || label === 'Sort by'
        ? 'min-w-[200px]'
        : 'min-w-[140px]',
    [label]
  );

  const handleOptionSelect = useCallback(
    (value: string) => {
      try {
        onValueChange(value);
        setIsOpen(false);
      } catch (error) {
        console.error('Error selecting option from Dropdown:', error);
      }
    },
    [onValueChange]
  );

  return (
    <div ref={dropdownRef} className={`${DROPDOWN_CLASSES.wrapper} ${className || ''} ${minWidthClass}`}>
      <DropdownButton
        isOpen={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
        selectedOption={selectedOption}
        label={label}
      />
      {isOpen && (
        <DropdownList
          options={options}
          selectedValue={selectedValue}
          label={label}
          onSelect={handleOptionSelect}
        />
      )}
    </div>
  );
};

export default Dropdown;
