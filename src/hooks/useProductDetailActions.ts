import { useCallback } from 'react';
import formatDescription from '../utils/formatDescription.utils';
import type { Product } from '../models/product.model';
import { useNotification } from '../hooks/useNotification';

const MESSAGES = {
  addError: 'Error adding product to cart.',
  favoriteError: 'Error updating favorite.',
  shareError: 'Error sharing product.',
  linkCopied: 'Link copied to clipboard!',
};

export function useProductDetailActions(
  product: Product | undefined,
  quantity: number,
  addToCart: (product: Product, quantity: number) => void,
  toggleFavorite: (id: string) => void
) {
  const { notify } = useNotification();

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    try {
      addToCart(product, quantity);
    } catch {
      notify(MESSAGES.addError, 'error');
    }
  }, [product, quantity, addToCart, notify]);

  const handleToggleFavorite = useCallback(() => {
    if (!product) return;
    try {
      toggleFavorite(product.id);
    } catch {
      notify(MESSAGES.favoriteError, 'error');
    }
  }, [product, toggleFavorite, notify]);

  const handleShare = useCallback(() => {
    if (!product) return;
    try {
      const desc = formatDescription(product.description);
      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: desc,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        notify(MESSAGES.linkCopied, 'info');
      }
    } catch {
      notify(MESSAGES.shareError, 'error');
    }
  }, [product, notify]);

  return { handleAddToCart, handleToggleFavorite, handleShare };
}
