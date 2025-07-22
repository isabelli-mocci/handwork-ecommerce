import type { Product } from '../components/common/ProductCard';

export type PriceRange = { label: string; min: number; max: number };

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

export type SortOption = { label: string; value: string };

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
