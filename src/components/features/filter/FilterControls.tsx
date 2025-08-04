import React from 'react';
import { useFilterOptions } from '../../../hooks/useFilterOptions';
import type { FilterControlsProps } from '../../../types/filterControls.types';
import { INPUT_CLASS } from '../../../styles/input.styles';
import { CategoryFilter, ColorFilter, PriceFilter, SortFilter, FilterField, SearchField } from '.';

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
  const { categoryOptions, priceRangeOptions, colorDropdownOptions } = useFilterOptions({ categories, priceRanges, colors });

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
