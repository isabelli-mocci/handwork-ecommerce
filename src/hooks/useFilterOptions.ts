import { useMemo } from 'react';
import { getColorDropdownOptions } from '../utils/productFilters.utils';
import type { FilterControlsProps } from '../types/filterControls.types';

export function useFilterOptions({ categories, priceRanges, colors }: Pick<FilterControlsProps, 'categories' | 'priceRanges' | 'colors'>) {
  const categoryOptions = useMemo(() => categories.map(cat => ({ label: cat, value: cat })), [categories]);
  const priceRangeOptions = useMemo(() => priceRanges.map(range => ({ label: range.label, value: range.label })), [priceRanges]);
  const colorDropdownOptions = useMemo(() => getColorDropdownOptions(colors), [colors]);
  return { categoryOptions, priceRangeOptions, colorDropdownOptions };
}
