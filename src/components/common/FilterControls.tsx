import React from 'react';
import { getColorClass } from '../../utils/productFilters';
import type { PriceRange } from '../../utils/productFilters';

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isSelected,
  onClick,
  className,
}) => {
  const baseClass =
    'px-1 py-0.5 text-sm font-medium border-none focus:outline-none transition-colors';
  const selectedClass = 'text-primary underline';
  const defaultClass = 'text-text hover:text-primary';

  return (
    <button
      key={label}
      onClick={onClick}
      className={`${baseClass} ${isSelected ? selectedClass : defaultClass} ${
        className || ''
      }`}
      style={{ minWidth: 0 }}
    >
      {label}
    </button>
  );
};

interface ColorFilterButtonProps {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const ColorFilterButton: React.FC<ColorFilterButtonProps> = ({
  color,
  isSelected,
  onClick,
}) => {
  const baseClass =
    'h-5 w-5 flex items-center justify-center border border-gray-300 transition-transform duration-200 rounded-sm';
  const selectedClass = 'ring-1 ring-primary scale-110';
  const defaultClass = 'ring-0 hover:scale-105';
  const allColorClass = 'text-xs text-text border border-text/20 bg-white';

  return (
    <button
      key={color}
      onClick={onClick}
      className={`${baseClass} ${getColorClass(color)} ${
        isSelected ? selectedClass : defaultClass
      } ${color === 'All' ? allColorClass : ''}`}
      aria-label={`Filter by ${color}`}
      style={{ minWidth: 0, fontSize: color === 'All' ? '0.7rem' : undefined }}
    >
      {color === 'All' && 'All'}
    </button>
  );
};

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => (
  <div className='flex flex-row gap-2 items-center'>
    <h3 className='text-sm font-normal text-text mr-1'>{title}:</h3>
    <div className='flex flex-row flex-wrap gap-1 items-center'>{children}</div>
  </div>
);

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  priceRanges: PriceRange[];
  selectedPriceRange: string;
  setSelectedPriceRange: (value: string) => void;
  colors: string[];
  selectedColor: string;
  setSelectedColor: (value: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRanges,
  selectedPriceRange,
  setSelectedPriceRange,
  colors,
  selectedColor,
  setSelectedColor,
  isMobile = false,
  onClose,
}) => {
  const inputClass =
    'w-full md:w-32 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-0.5 mb-1 md:mb-0';

  if (isMobile) {
    return (
      <div className='flex flex-col gap-2 relative'>
        {onClose && (
          <button
            className='absolute top-1 right-1 text-gray-400 hover:text-primary text-lg font-bold bg-transparent border-none outline-none'
            onClick={onClose}
            aria-label='Close filter'
            style={{ lineHeight: 1 }}
          >
            &times;
          </button>
        )}
        <input
          type='text'
          placeholder='Search...'
          className={inputClass}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <FilterSection title='Category'>
          {categories.map(category => (
            <FilterButton
              key={category}
              label={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </FilterSection>

        <FilterSection title='Price'>
          {priceRanges.map(range => (
            <FilterButton
              key={range.label}
              label={range.label}
              isSelected={selectedPriceRange === range.label}
              onClick={() => setSelectedPriceRange(range.label)}
            />
          ))}
        </FilterSection>

        <FilterSection title='Color'>
          {colors.map(color => (
            <ColorFilterButton
              key={color}
              color={color}
              isSelected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </FilterSection>
      </div>
    );
  }

  return (
    <div className='flex flex-row items-center gap-4 mb-4'>
      <input
        type='text'
        placeholder='Search...'
        className={` ${inputClass}`}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <FilterSection title='Category'>
        {categories.map(category => (
          <FilterButton
            key={category}
            label={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </FilterSection>
      <FilterSection title='Price'>
        {priceRanges.map(range => (
          <FilterButton
            key={range.label}
            label={range.label}
            isSelected={selectedPriceRange === range.label}
            onClick={() => setSelectedPriceRange(range.label)}
          />
        ))}
      </FilterSection>
      <FilterSection title='Color'>
        {colors.map(color => (
          <ColorFilterButton
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </FilterSection>
    </div>
  );
};

export default FilterControls;
