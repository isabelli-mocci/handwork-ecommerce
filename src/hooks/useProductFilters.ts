import { useState, useMemo } from 'react';
import type { Product } from '../components/common/ProductCard';
import { filterProducts } from '../utils/productFilters';
import type { PriceRange } from '../utils/productFilters';

export function useProductFilters(allProducts: Product[], availablePriceRanges: PriceRange[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const filteredProducts = useMemo(
    () =>
      filterProducts(
        allProducts,
        searchTerm,
        selectedCategory,
        selectedPriceRange,
        selectedColor,
        availablePriceRanges
      ),
    [allProducts, searchTerm, selectedCategory, selectedPriceRange, selectedColor, availablePriceRanges]
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedColor,
    setSelectedColor,
    filteredProducts,
  };
}