import type { SortOption } from '../../types/productFilters.types';
import React, { useMemo } from 'react';
import Dropdown from './Dropdown';
import { getColorDropdownOptions } from '../../utils/productFilters.utils';
import type { FilterControlsProps, FilterFieldProps } from '../../types/filterControls.types';
import { INPUT_CLASS } from '../../styles/input.styles';

const FilterField: React.FC<FilterFieldProps> = ({ label, id, children }) => (
  <div className='flex flex-col gap-2'>
    <label htmlFor={id} className='text-sm font-semibold text-text mb-1 tracking-tight'>
      {label}
    </label>
    {children}
  </div>
);

const SearchField: React.FC<{ value: string; onChange: (v: string) => void; id?: string; placeholder?: string; className?: string }> = ({ value, onChange, id = 'search', placeholder = 'Search products...', className }) => (
  <input
    id={id}
    type='text'
    placeholder={placeholder}
    className={className || INPUT_CLASS}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

import type { DropdownOption } from '../../types/dropdown.types';

const CategoryFilter: React.FC<{ options: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string }> = ({ options, value, onChange, className }) => (
  <Dropdown label='Category' options={options} selectedValue={value} onValueChange={onChange} className={className} />
);

const PriceFilter: React.FC<{ options: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string }> = ({ options, value, onChange, className }) => (
  <Dropdown label='Price' options={options} selectedValue={value} onValueChange={onChange} className={className} />
);

const ColorFilter: React.FC<{ options: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string }> = ({ options, value, onChange, className }) => (
  <Dropdown label='Color' options={options} selectedValue={value} onValueChange={onChange} className={className} />
);

const SortFilter: React.FC<{ options: SortOption[]; value: string; onChange: (v: string) => void; className?: string }> = ({ options, value, onChange, className }) => {
  const displayOptions = [
    { label: 'Default', value: 'default' },
    ...options.filter(opt => opt.value !== 'default')
  ];
  const selectedValue = !value || value === 'default' ? 'default' : value;
  return (
    <Dropdown label='Sort by' options={displayOptions} selectedValue={selectedValue} onValueChange={onChange} className={className} />
  );
};

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
  sortBy,
  setSortBy,
  sortOptions,
  onClose,
  productCount,
}) => {
  const categoryOptions = useMemo(() => categories.map(cat => ({ label: cat, value: cat })), [categories]);
  const priceRangeOptions = useMemo(() => priceRanges.map(range => ({ label: range.label, value: range.label })), [priceRanges]);
  const colorDropdownOptions = useMemo(() => getColorDropdownOptions(colors), [colors]);

  return (
    <>
      <div className='block lg:hidden relative h-full overflow-auto min-w-0 p-5 md:p-8'>
        {onClose && (
          <button
            className='absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold bg-transparent border-none outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-150 z-10'
            onClick={onClose}
            aria-label='Close filter'
            style={{ lineHeight: 1 }}
          >
            &times;
          </button>
        )}
        <h2 className='text-xl font-semibold mb-16 tracking-tight text-center'>
          Filter & Sort Options
        </h2>
        <div className='flex flex-col gap-8 max-w-2xl mx-auto'>
          <FilterField label='Search:' id='search-mobile'>
            <SearchField value={searchTerm} onChange={setSearchTerm} id='search-mobile' className={INPUT_CLASS + ' focus:border-b-2 focus:border-primary w-full'} />
          </FilterField>
          <FilterField label='Category:' id='category-mobile'>
            <CategoryFilter options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} className='w-full' />
          </FilterField>
          <FilterField label='Price:' id='price-mobile'>
            <PriceFilter options={priceRangeOptions} value={selectedPriceRange} onChange={setSelectedPriceRange} className='w-full' />
          </FilterField>
          <FilterField label='Color:' id='color-mobile'>
            <ColorFilter options={colorDropdownOptions} value={selectedColor} onChange={setSelectedColor} className='w-full' />
          </FilterField>
          <FilterField label='Sort By:' id='sort-mobile'>
            <SortFilter options={sortOptions} value={sortBy} onChange={setSortBy} className='w-full' />
          </FilterField>
        </div>
      </div>
      <div className='hidden lg:flex flex-row items-center mb-6 gap-6 w-full'>
        <div className='flex flex-wrap items-center gap-5 flex-grow'>
          <span className='text-sm font-normal text-text tracking-tight'>Search:</span>
          <SearchField value={searchTerm} onChange={setSearchTerm} />
          <span className='text-sm font-normal text-text tracking-tight'>Filter:</span>
          <CategoryFilter options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} />
          <PriceFilter options={priceRangeOptions} value={selectedPriceRange} onChange={setSelectedPriceRange} />
          <ColorFilter options={colorDropdownOptions} value={selectedColor} onChange={setSelectedColor} />
        </div>
        <div className='flex items-center gap-5 justify-end w-full lg:w-auto'>
          <span className='text-sm font-normal text-text tracking-tight'>Sort by:</span>
          <SortFilter options={sortOptions} value={sortBy} onChange={setSortBy} />
          <span className='text-sm font-normal text-text tracking-tight'>{productCount} products</span>
        </div>
      </div>
    </>
  );
};

export default FilterControls;
