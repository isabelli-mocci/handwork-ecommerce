import { createContext } from 'react';
import type { CartContextType } from './CartProvider.tsx';

export const CartContext = createContext<CartContextType | undefined>(undefined);
