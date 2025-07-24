import React from 'react';
import type { Product } from '../../models/product.model';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onFavoriteClick?: (id: string) => void;
  isFavorite?: (product: Product) => boolean;
  actionLabel?: string;
  emptyState?: React.ReactNode;
  className?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onFavoriteClick,
  isFavorite,
  actionLabel = 'Choose Options',
  emptyState = <p className="col-span-full text-center text-lg text-text/70 py-10">No products found.</p>,
  className = '',
}) => (
  <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 ${className}`}>
    {products.length > 0 ? (
      products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onFavoriteClick={onFavoriteClick ? () => onFavoriteClick(String(product.id)) : undefined}
          isFavorite={isFavorite ? isFavorite(product) : false}
          actionLabel={actionLabel}
        />
      ))
    ) : (
      emptyState
    )}
  </div>
);

export default ProductList;
