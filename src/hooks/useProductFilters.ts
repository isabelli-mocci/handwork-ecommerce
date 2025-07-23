import { useState, useMemo } from 'react';
import type { Product } from '../models/product.model';
import { filterProducts, sortProducts } from '../utils/productFilters.utils';
import type { PriceRange } from '../types/productFilters.types';

export function useProductFilters(
  allProducts: Product[],
  availablePriceRanges: PriceRange[]
) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [sortBy, setSortBy] = useState<string>('best-selling');

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
    [
      allProducts,
      searchTerm,
      selectedCategory,
      selectedPriceRange,
      selectedColor,
      availablePriceRanges,
    ]
  );

  const filteredAndSortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortBy),
    [filteredProducts, sortBy]
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
    sortBy,
    setSortBy,
    filteredProducts: filteredAndSortedProducts,
  };
}
