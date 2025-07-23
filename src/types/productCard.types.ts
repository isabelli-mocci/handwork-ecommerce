import type { Product } from '../models/product.model';

export type ProductCardProps = {
  product: Product;
  onFavoriteClick?: (id: string) => void;
  isFavorite?: boolean;
  actionLabel?: string;
};
