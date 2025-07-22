import React from 'react';
import { getColorClass } from '../../utils/productFilters';
import type { PriceRange } from '../../utils/productFilters';

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isSelected, onClick, className }) => {
  const baseClass = 'px-2 py-1 text-xs font-medium border-none focus:outline-none transition-colors';
  const selectedClass = 'bg-primary text-white';
  const defaultClass = 'bg-gray-100 text-text hover:bg-primary/10';

  return (
    <button
      key={label}
      onClick={onClick}
      className={`${baseClass} ${isSelected ? selectedClass : defaultClass} ${className || ''}`}
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

const ColorFilterButton: React.FC<ColorFilterButtonProps> = ({ color, isSelected, onClick }) => {
  const baseClass = 'h-6 w-6 flex items-center justify-center border transition-transform duration-200';
  const selectedClass = 'ring-2 ring-primary scale-110';
  const defaultClass = 'ring-0 hover:scale-105';
  const allColorClass = 'text-xs text-text border border-text/20 bg-white';

  return (
    <button
      key={color}
      onClick={onClick}
      className={`${baseClass} ${getColorClass(color)} ${isSelected ? selectedClass : defaultClass} ${color === 'All' ? allColorClass : ''}`}
      aria-label={`Filter by ${color}`}
      style={{ minWidth: 0, fontSize: color === 'All' ? '0.75rem' : undefined }}
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
  <div className='flex flex-col gap-2'>
    <h3 className='text-sm font-semibold text-text mb-1'>{title}</h3>
    <div className='flex flex-row flex-wrap gap-1 items-center'>
      {children}
    </div>
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
    'w-full border-0 border-b border-gray-200 bg-transparent text-base focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-1 mb-2';

  if (isMobile) {
    return (
      <div className='flex flex-col gap-3 relative'>
        {onClose && (
          <button
            className='absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold bg-transparent border-none outline-none'
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

        <FilterSection title="Category">
          {categories.map(category => (
            <FilterButton
              key={category}
              label={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Price Range">
          {priceRanges.map(range => (
            <FilterButton
              key={range.label}
              label={range.label}
              isSelected={selectedPriceRange === range.label}
              onClick={() => setSelectedPriceRange(range.label)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Color">
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
    <div className='flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 mb-8'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full md:w-48 border-0 border-b border-gray-300 bg-transparent text-base md:text-sm focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-1 mb-1 md:mb-0'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
        {categories.map(category => (
          <FilterButton
            key={category}
            label={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
        {priceRanges.map(range => (
          <FilterButton
            key={range.label}
            label={range.label}
            isSelected={selectedPriceRange === range.label}
            onClick={() => setSelectedPriceRange(range.label)}
          />
        ))}
      </div>
      <div className='flex flex-wrap gap-1 items-center w-full md:w-auto'>
        {colors.map(color => (
          <ColorFilterButton
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterControls;