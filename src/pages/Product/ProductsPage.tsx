import React, { useState } from 'react';
import ProductCard from '../../components/common/ProductCard';
import { products, priceRanges } from './productsData';
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
    filteredProducts,
  } = useProductFilters(products, priceRanges);

  const [showMobileFilter, setShowMobileFilter] = useState(false);
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
        <div className='mb-6 flex md:hidden'>
          <button
            className='ml-auto px-4 py-2 rounded bg-text text-white text-xs shadow-sm focus:outline-none'
            onClick={() => setShowMobileFilter(true)}
          >
            Filter
          </button>
        </div>
        {showMobileFilter && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-xs p-5 relative animate-fade-in'>
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
                isMobile
                onClose={() => setShowMobileFilter(false)}
              />
            </div>
          </div>
        )}
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
          />
        </div>
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
