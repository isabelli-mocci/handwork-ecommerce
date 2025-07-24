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

const CategoryFilter: React.FC<{ options: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string }> = React.memo(({ options, value, onChange, className }) => (
  <Dropdown label='Category' options={options} selectedValue={value} onValueChange={onChange} className={className} />
));

const ColorTagButton = React.memo(({ opt, selected, onClick }: { opt: DropdownOption, selected: boolean, onClick: (v: string) => void }) => {
  const getColorStyle = (option: DropdownOption) => {
    if (option.label === 'All') return { display: 'none' };
    if ('color' in option && typeof (option as { color?: string }).color === 'string') {
      return { backgroundColor: (option as { color: string }).color };
    }
    const colorMap: Record<string, string> = {
      Red: '#ef4444', Blue: '#3b82f6', Green: '#22c55e', Yellow: '#eab308', Pink: '#ec4899', Purple: '#a21caf', Orange: '#f59e42', Black: '#222', White: '#fff', Gray: '#7b7280', Brown: '#a16207', Beige: '#f5f5dc',
    };
    return { backgroundColor: colorMap[option.label] || '#e5e7eb' };
  };
  return (
    <button
      key={opt.value}
      className={`px-3 py-1 rounded-full border text-sm whitespace-nowrap flex items-center gap-2 transition-all duration-150
        ${selected ? 'bg-text/80 text-white scale-105' : 'bg-white text-primary border-primary/30 hover:bg-primary/10'}
        aria-checked:${selected}`}
      aria-checked={selected}
      aria-label={opt.label}
      tabIndex={0}
      onClick={() => onClick(opt.value)}
      type="button"
      role="radio"
      style={{ minWidth: 48 }}
    >
      {opt.label !== 'All' && (
        <span className="inline-block w-4 h-4 rounded-full border border-gray-300 mr-1" style={getColorStyle(opt)}></span>
      )}
      {opt.label}
    </button>
  );
});

const ColorFilter: React.FC<{ options: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string; asTags?: boolean }> = ({ options, value, onChange, className, asTags }) => {
  if (asTags) {
    return (
      <div className={`flex gap-2 flex-wrap py-1 ${className || ''}`} role="radiogroup" aria-label="Color filter">
        {options.map(opt => (
          <ColorTagButton key={opt.value} opt={opt} selected={value === opt.value} onClick={onChange} />
        ))}
      </div>
    );
  }
  return <Dropdown label='Color' options={options} selectedValue={value} onValueChange={onChange} className={className} />;
};

const PriceFilter: React.FC<{ options?: DropdownOption[]; value: string; onChange: (v: string) => void; className?: string; asSlider?: boolean }> = React.memo(({ options, value, onChange, className, asSlider }) => {
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

const FilterControls: React.FC<FilterControlsProps & { hideSearchOnMobileTablet?: boolean }> = ({
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
  hideSearchOnMobileTablet
}) => {
  const categoryOptions = useMemo(() => categories.map(cat => ({ label: cat, value: cat })), [categories]);
  const priceRangeOptions = useMemo(() => priceRanges.map(range => ({ label: range.label, value: range.label })), [priceRanges]);
  const colorDropdownOptions = useMemo(() => getColorDropdownOptions(colors), [colors]);

  return (
    <>
      <div className='block lg:hidden relative h-full overflow-auto min-w-0 p-5 md:p-8'>
        {onClose && (
          <button
            className='fixed top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold bg-transparent border-none outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-150 z-30'
            onClick={onClose}
            aria-label='Close filter'
            style={{ lineHeight: 1 }}
          >
            &times;
          </button>
        )}
        <div className='flex flex-col gap-8 max-w-2xl mx-auto'>
          {!hideSearchOnMobileTablet && (
            <FilterField label='Search:' id='search-mobile'>
              <SearchField value={searchTerm} onChange={setSearchTerm} id='search-mobile' className={INPUT_CLASS + ' focus:border-b-2 focus:border-primary w-full'} />
            </FilterField>
          )}
          <FilterField label='Category:' id='category-mobile'>
            <CategoryFilter options={categoryOptions} value={selectedCategory} onChange={setSelectedCategory} className='w-full' />
          </FilterField>
          <FilterField label='Price:' id='price-mobile'>
            <PriceFilter value={selectedPriceRange} onChange={setSelectedPriceRange} className='w-full' asSlider={true} />
          </FilterField>
          <FilterField label='Color:' id='color-mobile'>
            <ColorFilter options={colorDropdownOptions} value={selectedColor} onChange={setSelectedColor} className='w-full' asTags={true} />
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
