import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { validateDiscount } from '../utils/discountStrategies';

type DiscountStatus = 'idle' | 'success' | 'error';

type DiscountState = {
  value: number;
  status: DiscountStatus;
  message: string;
};

function useDiscount(subtotal: number) {
  const [discount, setDiscount] = useState<DiscountState>({ value: 0, status: 'idle', message: '' });
  const [loadingDiscount, setLoadingDiscount] = useState(false);

  const applyDiscount = useCallback((code: string, onResult: (message: string, type: 'success' | 'error') => void) => {
    if (!code) {
      setDiscount({ value: 0, status: 'error', message: 'Enter a code.' });
      onResult('Enter a code.', 'error');
      return;
    }
    setLoadingDiscount(true);
    setDiscount(prev => ({ ...prev, status: 'idle', message: '' }));
    setTimeout(() => {
      const result = validateDiscount(code, subtotal);
      setDiscount({ value: result.valid ? result.value : 0, status: result.valid ? 'success' : 'error', message: result.message });
      onResult(result.message, result.valid ? 'success' : 'error');
      setLoadingDiscount(false);
    }, 1000);
  }, [subtotal]);

  return { discount, loadingDiscount, applyDiscount };
}

function useCartNavigation() {
  const navigate = useNavigate();
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const goToCheckout = useCallback((onError: (message: string) => void) => {
    setLoadingCheckout(true);
    setTimeout(() => {
      setLoadingCheckout(false);
      try {
        navigate('/checkout');
      } catch {
        onError('Error redirecting to checkout.');
      }
    }, 900);
  }, [navigate]);

  const continueShopping = useCallback((onError: (message: string) => void) => {
    try {
      navigate('/products');
    } catch {
      onError('Error redirecting to products.');
    }
  }, [navigate]);

  return { goToCheckout, continueShopping, loadingCheckout };
}

export function useCartPageState() {
  const { cartItems, removeFromCart, updateCartItemQuantity, getCartTotal } = useCart();
  const [loadingRemove, setLoadingRemove] = useState<string | null>(null);

  const subtotal = useMemo(() => getCartTotal(), [getCartTotal]);
  const { discount, loadingDiscount, applyDiscount } = useDiscount(subtotal);
  const total = useMemo(() => subtotal - discount.value, [subtotal, discount.value]);
  const { goToCheckout, continueShopping, loadingCheckout } = useCartNavigation();

  const handleGoToCheckout = useCallback(() => {
    goToCheckout(() => {});
  }, [goToCheckout]);

  const handleContinueShopping = useCallback(() => {
    continueShopping(() => {});
  }, [continueShopping]);

  const handleApplyDiscount = useCallback((code: string) => {
    applyDiscount(code, () => {});
  }, [applyDiscount]);

  const handleRemove = useCallback((id: string) => {
    setLoadingRemove(id);
    setTimeout(() => {
      removeFromCart(id);
      setLoadingRemove(null);
    }, 900);
  }, [removeFromCart]);

  const handleQuantityChange = useCallback((id: string, quantity: number) => {
    updateCartItemQuantity(id, quantity);
  }, [updateCartItemQuantity]);

  return {
    cartItems,
    subtotal,
    total,
    discountStatus: discount.status,
    discountMessage: discount.message,
    loadingRemove,
    loadingDiscount,
    loadingCheckout,
    handleGoToCheckout,
    handleContinueShopping,
    handleApplyDiscount,
    handleRemove,
    handleQuantityChange,
  };
}
