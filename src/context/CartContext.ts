import { createContext } from 'react';
import type { CartContextType } from './CartProvider';

export const CartContext = createContext<CartContextType | undefined>(undefined);
