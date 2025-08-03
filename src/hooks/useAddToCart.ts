import { useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import type { Product } from '../models/product.model';
import { useNotification } from '../context/useNotification';
import type { NotificationType } from '../context/NotificationGlobal';

const MESSAGES = {
  notFound: 'Product not found.',
  invalidQuantity: 'Quantity must be greater than zero.',
  stockExceeded: (quantity: number, stock: number) => `Cannot add ${quantity} items. Only ${stock} in stock.`,
  addError: 'Error adding product to cart.',
};

export const useAddToCart = () => {
  const { addToCart } = useCart();
  const { notify } = useNotification();

  const validate = (product: Product | undefined, quantity: number): { valid: boolean; message?: string; type?: NotificationType } => {
    if (!product) return { valid: false, message: MESSAGES.notFound, type: 'error' };
    if (quantity <= 0) return { valid: false, message: MESSAGES.invalidQuantity, type: 'warning' };
    if (quantity > product.stock) return { valid: false, message: MESSAGES.stockExceeded(quantity, product.stock), type: 'warning' };
    return { valid: true };
  };

  const handleAddToCart = useCallback((product: Product, quantity: number) => {
    const validation = validate(product, quantity);
    if (!validation.valid) {
      notify(validation.message || '', validation.type);
      return;
    }
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '',
        quantity,
      });
    } catch {
      notify(MESSAGES.addError, 'error');
    }
  }, [addToCart, notify]);

  return handleAddToCart;
};
