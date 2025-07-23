export function getDisplayLabel(dropdownLabel: string, optionLabel: string) {
  if (optionLabel === 'All') {
    switch (dropdownLabel) {
      case 'Category':
      case 'Price':
      case 'Color':
        return dropdownLabel;
      default:
        return optionLabel;
    }
  }
  return optionLabel;
}
import type { DropdownOption } from '../types/dropdown.types';
export function getColorDropdownOptions(colors: string[]): DropdownOption[] {
  return colors.map(color => ({
    value: color,
    label: color,
    icon:
      color !== 'All' ? (
        <span
          className={`w-3 h-3 rounded-full inline-block mr-1 ${getColorClass(color)}`}
        />
      ) : null,
  }));
}
import type { PriceRange, SortOption } from '../types/productFilters.types';
import type { Product } from '../models/product.model';

export function getUniqueValues<T>(arr: T[], key: keyof T): string[] {
  try {
    const uniqueValues = new Set(arr.map(item => String(item[key])));
    return ['All', ...Array.from(uniqueValues)];
  } catch (error) {
    console.error(`Error getting unique values for key ${String(key)}:`, error);
    return ['All'];
  }
}

export function getColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    Brown: 'bg-amber-800',
    Beige: 'bg-secondary',
    White: 'bg-white border border-gray-300',
    Purple: 'bg-purple-600',
    Pink: 'bg-pink-300',
    Orange: 'bg-orange-500',
    Yellow: 'bg-yellow-400',
    Grey: 'bg-gray-400',
    Black: 'bg-black',
  };
  return colorMap[color] || 'bg-gray-200';
}

export function filterProducts(
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  selectedPriceRangeLabel: string,
  selectedColor: string,
  priceRanges: PriceRange[]
): Product[] {
  const defaultPriceRange = priceRanges[0];
  const selectedRange =
    priceRanges.find(range => range.label === selectedPriceRangeLabel) ||
    defaultPriceRange;

  return products.filter(product => {
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice =
      product.priceValue >= selectedRange.min &&
      product.priceValue <= selectedRange.max;
    const matchesColor =
      selectedColor === 'All' || product.color === selectedColor;

    return matchesSearch && matchesCategory && matchesPrice && matchesColor;
  });
}

export const sortOptions: SortOption[] = [
  { label: 'Best Selling', value: 'best-selling' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A-Z', value: 'name-asc' },
  { label: 'Name: Z-A', value: 'name-desc' },
];

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.priceValue - b.priceValue);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.priceValue - a.priceValue);
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    case 'best-selling':
    default:
      return sortedProducts;
  }
}
