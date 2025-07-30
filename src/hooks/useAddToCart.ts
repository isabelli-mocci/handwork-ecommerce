import { useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import type { Product } from '../models/product.model';

export const useAddToCart = () => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback((product: Product, quantity: number) => {
    if (!product) return;
    if (quantity > 0 && quantity <= product.stock) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '',
        quantity,
      });
      alert(`${quantity} ${product.name}(s) added to cart!`);
    } else {
      alert(`Cannot add ${quantity} items. Only ${product.stock} in stock.`);
    }
  }, [addToCart]);

  return handleAddToCart;
};
