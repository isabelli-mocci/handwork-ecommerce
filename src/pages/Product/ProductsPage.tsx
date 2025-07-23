import React from 'react';
import ProductList from '../../components/common/ProductList';
import { products, priceRanges, sortOptions } from '../../data/productsData';
import { getUniqueValues } from '../../utils/productFilters.utils';
import { useProductFilters } from '../../hooks/useProductFilters';
import FilterControls from '../../components/common/FilterControls';
import SidebarFilter from '../../components/common/SidebarFilter';

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

        <div className='mb-8 block lg:hidden'>
          <SidebarFilter
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

        <div className='mb-8 hidden lg:flex'>
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

        {/* SidebarFilter para tablet removido para evitar duplicidade de botão/modal */}

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
