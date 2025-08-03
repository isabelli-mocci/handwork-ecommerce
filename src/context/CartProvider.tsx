import React, { useState, type ReactNode } from 'react';
import { CartContext } from './CartContext';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  clearCart: () => void;
}

const getUpdatedCartItems = (items: CartItem[], item: Omit<CartItem, 'quantity'> & { quantity?: number }): CartItem[] => {
  const existingItem = items.find(i => i.id === item.id);
  if (existingItem) {
    return items.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
    );
  }
  return [...items, { ...item, quantity: item.quantity || 1 }];
};

const getCartTotal = (items: CartItem[]): number =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

const getCartItemCount = (items: CartItem[]): number =>
  items.reduce((count, item) => count + item.quantity, 0);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCartItems(prevItems => getUpdatedCartItems(prevItems, item));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        getCartTotal: () => getCartTotal(cartItems),
        getCartItemCount: () => getCartItemCount(cartItems),
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
