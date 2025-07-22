import React, { useState } from 'react';
import ProductCard from '../../components/common/ProductCard';
import { products, priceRanges, sortOptions } from '../../data/productsData';
import { getUniqueValues } from '../../utils/productFilters';
import { useProductFilters } from '../../hooks/useProductFilters';
import FilterControls from '../../components/common/FilterControls';

const ProductsPage: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedColor,
    setSelectedColor,
    sortBy,
    setSortBy,
    filteredProducts,
  } = useProductFilters(products, priceRanges);

  const [showMobileFilterModal, setShowMobileFilterModal] = useState(false);

  const productCategories = getUniqueValues(products, 'category');
  const productColors = getUniqueValues(products, 'color');

  return (
    <div className='py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='font-cardo text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary m-6 lg:m-10 uppercase'>
          Our Collection
        </h1>
        <p className='lg:max-w-5xl mx-auto mb-10 text-xs md:text-sm lg:text-lg text-center text-text/80 leading-relaxed'>
          Our charming plush friends are made for both playtime adventures and
          quiet cuddles.
          <br />
          Whether you’re tucking them in for a nap or setting up a little tea
          party, they’re always ready to join the fun.
          <br />
          <br />
          <strong>
            Choose your companion and start a memory worth holding onto.
          </strong>
        </p>

        {/* Mobile Filter & Sort Button + Product Count */}
        <div className='mb-6 flex justify-between items-center md:hidden'>
          <button
            className='px-4 py-2 rounded bg-text text-white text-xs shadow-sm focus:outline-none flex items-center gap-2'
            onClick={() => setShowMobileFilterModal(true)}
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM4 10a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM4 16a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z'
              ></path>
            </svg>
            Filter & Sort
          </button>
          <span className='text-sm text-text/80'>
            {filteredProducts.length} products
          </span>
        </div>

        {/* Mobile Filter Modal */}
        {showMobileFilterModal && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-md p-4 relative animate-fade-in md:hidden h-[90vh]'>
              {' '}
              {/* Adjusted max-w and h */}
              <FilterControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={productCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRanges={priceRanges}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                colors={productColors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOptions={sortOptions}
                isMobile
                onClose={() => setShowMobileFilterModal(false)}
                productCount={filteredProducts.length}
              />
            </div>
          </div>
        )}

        {/* Desktop Filter Controls */}
        <div className='mb-8 hidden md:flex'>
          <FilterControls
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categories={productCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRanges={priceRanges}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            colors={productColors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOptions={sortOptions}
            productCount={filteredProducts.length}
          />
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p className='col-span-full text-center text-lg text-text/70 py-10'>
              No products found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
