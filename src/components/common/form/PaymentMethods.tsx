import type { FC } from 'react';

const InfoMessage: FC<{ message: string }> = ({ message }) => (
  <div className='p-4 border border-secondary rounded bg-white/50 text-text/80 text-sm'>
    {message}
  </div>
);

export const BoletoPayment: FC = () => (
  <InfoMessage message="You will receive the boleto for payment after confirming your order." />
);

export const PixPayment: FC = () => (
  <InfoMessage message="You will receive the Pix QR Code after confirming your order." />
);

export const PayPalPayment: FC = () => (
  <InfoMessage message="You will be redirected to PayPal to complete the payment." />
);
