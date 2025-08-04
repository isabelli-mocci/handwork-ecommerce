import React from 'react';
import type { ShippingDetails } from '../../../types/paymentForm.types';

interface ShippingDetailsInfoProps {
  shippingDetails: ShippingDetails;
}

const ShippingDetailsInfo: React.FC<ShippingDetailsInfoProps> = ({ shippingDetails }) => (
  <div className='mb-6 p-4 border border-secondary rounded bg-white/50'>
    <h3 className='font-semibold text-primary mb-2 text-base'>Shipping Details</h3>
    <div className='text-sm text-text/80 space-y-2'>
      <div><span className='font-medium'>Name:</span> {shippingDetails.name}</div>
      <div><span className='font-medium'>Address:</span> {shippingDetails.address}</div>
      <div><span className='font-medium'>City:</span> {shippingDetails.city}</div>
      <div><span className='font-medium'>ZIP:</span> {shippingDetails.zip}</div>
      <div><span className='font-medium'>Phone:</span> {shippingDetails.phone}</div>
    </div>
  </div>
);

export default ShippingDetailsInfo;
