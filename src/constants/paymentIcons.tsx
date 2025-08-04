import { FaCreditCard, FaBarcode, FaPix, FaPaypal } from 'react-icons/fa6';
import type { ReactNode } from 'react';

export const paymentIcons: Record<string, ReactNode> = {
  credit: <FaCreditCard className='mr-2 text-lg' />,
  boleto: <FaBarcode className='mr-2 text-lg' />,
  pix: <FaPix className='mr-2 text-lg' />,
  paypal: <FaPaypal className='mr-2 text-lg' />,
};
