export { PRODUCTS as products } from './productsDetails.data';

export const categories = [
  'All',
  'VICTORIAN TOYS',
  'FARMCORE TOYS',
  'COTTAGECORE TOYS',
  'FAIRYCORE TOYS',
];

export const colors = [
  'All',
  'Brown',
  'White',
  'Beige',
  'Orange',
  'Pink',
  'Grey',
  'Black',
];

export const priceRanges = [
  { label: 'All', min: 0, max: 300 },
  { label: '$150 - $170', min: 150, max: 170 },
  { label: '$171 - $190', min: 171, max: 190 },
  { label: '$191 - $220', min: 191, max: 220 },
];

export const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];