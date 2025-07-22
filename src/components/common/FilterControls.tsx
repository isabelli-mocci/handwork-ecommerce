import React from 'react';
import Dropdown from './Dropdown';
import { getColorClass } from '../../utils/productFilters';
import type { PriceRange, SortOption } from '../../utils/productFilters';

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
  sortBy: string;
  setSortBy: (value: string) => void;
  sortOptions: SortOption[];
  isMobile?: boolean;
  onClose?: () => void;
  productCount: number;
}

const getColorDropdownOptions = (colors: string[]) => {
  return colors.map(color => ({
    value: color,
    label: color,
    icon:
      color !== 'All' ? (
        <span
          className={`w-3 h-3 rounded-full inline-block mr-1 ${getColorClass(
            color
          )}`}
        ></span>
      ) : null,
  }));
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
  isMobile = false,
  onClose,
  productCount,
}) => {
  const inputClass =
    'w-full md:w-56 border-0 border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none focus:border-primary placeholder:text-text/40 px-0 py-1 transition-all duration-200';

  const categoryOptions = categories.map(cat => ({ label: cat, value: cat }));
  const priceRangeOptions = priceRanges.map(range => ({
    label: range.label,
    value: range.label,
  }));
  const colorDropdownOptions = getColorDropdownOptions(colors);

  if (isMobile) {
    return (
      <div className='flex flex-col gap-5 p-5 relative h-full overflow-auto'>
        {onClose && (
          <button
            className='absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold bg-transparent border-none outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-150'
            onClick={onClose}
            aria-label='Close filter'
            style={{ lineHeight: 1 }}
          >
            &times;
          </button>
        )}
        <h2 className='text-xl font-bold text-primary mb-4 tracking-tight'>
          Filter & Sort Options
        </h2>
        <div className='flex flex-col gap-5'>
          {/* Search Input */}
          <div className='flex flex-col'>
            <label
              htmlFor='search-mobile'
              className='text-sm font-semibold text-text mb-1 tracking-tight'
            >
              Search:
            </label>
            <input
              id='search-mobile'
              type='text'
              placeholder='Search products...'
              className={inputClass + ' focus:border-b-2 focus:border-primary'}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className='flex flex-col'>
            <label
              htmlFor='category-mobile'
              className='text-sm font-semibold text-text mb-1 tracking-tight'
            >
              Category:
            </label>
            <Dropdown
              label='Category'
              options={categoryOptions}
              selectedValue={selectedCategory}
              onValueChange={setSelectedCategory}
              className='w-full'
            />
          </div>

          {/* Price Filter */}
          <div className='flex flex-col'>
            <label
              htmlFor='price-mobile'
              className='text-sm font-semibold text-text mb-1 tracking-tight'
            >
              Price:
            </label>
            <Dropdown
              label='Price'
              options={priceRangeOptions}
              selectedValue={selectedPriceRange}
              onValueChange={setSelectedPriceRange}
              className='w-full'
            />
          </div>

          {/* Color Filter */}
          <div className='flex flex-col'>
            <label
              htmlFor='color-mobile'
              className='text-sm font-semibold text-text mb-1 tracking-tight'
            >
              Color:
            </label>
            <Dropdown
              label='Color'
              options={colorDropdownOptions}
              selectedValue={selectedColor}
              onValueChange={setSelectedColor}
              className='w-full'
            />
          </div>

          {/* Sort By */}
          <div className='flex flex-col'>
            <label
              htmlFor='sort-mobile'
              className='text-sm font-semibold text-text mb-1 tracking-tight'
            >
              Sort By:
            </label>
            <Dropdown
              label='Sort By'
              options={sortOptions}
              selectedValue={sortBy}
              onValueChange={setSortBy}
              className='w-full'
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className='flex flex-col md:flex-row items-center mb-6 gap-6 w-full'>
      <div className='flex flex-wrap items-center gap-5 flex-grow'>
        <span className='text-sm font-normal text-text tracking-tight'>Search:</span>
        <input
          type='text'
          placeholder='Type here...'
          className={inputClass + ' focus:border-b-2 focus:border-primary'}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <span className='text-sm font-normal text-text tracking-tight'>Filter:</span>
        <Dropdown
          label='Category'
          options={categoryOptions}
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
        />
        <Dropdown
          label='Price'
          options={priceRangeOptions}
          selectedValue={selectedPriceRange}
          onValueChange={setSelectedPriceRange}
        />
        <Dropdown
          label='Color'
          options={colorDropdownOptions}
          selectedValue={selectedColor}
          onValueChange={setSelectedColor}
        />
      </div>
      <div className='flex items-center gap-5 justify-end w-full md:w-auto'>
        <span className='text-sm font-normal text-text tracking-tight'>Sort by:</span>
        <Dropdown
          label='Sort by'
          options={sortOptions}
          selectedValue={sortBy}
          onValueChange={setSortBy}
        />
        <span className='text-sm font-normal text-text tracking-tight'>
          {productCount} products
        </span>
      </div>
    </div>
  );
};

export default FilterControls;
