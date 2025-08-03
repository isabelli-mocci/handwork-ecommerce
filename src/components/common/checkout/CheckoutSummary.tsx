import React, { memo } from "react";
import type { CartItem as TCartItem } from "../../../context/CartProvider";

interface CheckoutSummaryProps {
  items: TCartItem[];
  subtotal: number;
  total: number;
  shippingMethod: 'standard' | 'express';
  discount?: number;
  totalUnits: number;
  discountForm?: React.ReactNode;
}

const formatCurrency = (value: number): string => `$${value.toFixed(2)}`;

const CheckoutItem: React.FC<{ item: TCartItem }> = memo(({ item }) => (
  <div className="flex items-center gap-4" key={item.id}>
    <div className="flex-shrink-0 w-16 h-16 relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-contain p-1 bg-primary/10"
        loading="lazy"
      />
      <span className="absolute -top-2 -right-2 text-xs bg-primary/80 text-white w-5 h-5 flex items-center justify-center rounded-full">
        {item.quantity}
      </span>
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-text line-clamp-1">{item.name}</h3>
      <p className="text-xs text-text/70">Quantity: {item.quantity}</p>
    </div>
    <span className="text-sm font-medium text-text">{formatCurrency(item.price * item.quantity)}</span>
  </div>
));

function getShippingValue(method: 'standard' | 'express'): number {
  return method === 'express' ? 10 : 0;
}

function getShippingLabel(method: 'standard' | 'express'): string {
  return method === 'express' ? 'Express' : 'Standard';
}

function getTotal(subtotal: number, discount: number, shippingValue: number): number {
  return subtotal - discount + shippingValue;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = memo(
  ({ items, subtotal, shippingMethod, discount = 0, totalUnits, discountForm }) => {
    const shippingValue = getShippingValue(shippingMethod);
    const total = getTotal(subtotal, discount, shippingValue);
    return (
      <section className="p-6" aria-label="Order Summary">
        <header>
          <h2 className="font-cardo text-2xl font-bold text-primary mb-4">Order Summary</h2>
        </header>
        <div className="space-y-4 mb-4 border-b border-secondary pb-4">
          {items.map((item) => (
            <CheckoutItem item={item} key={item.id} />
          ))}
        </div>
        <div className="space-y-2 text-sm text-text/80 mb-4">
          <div className="flex justify-between">
            <span>Subtotal &bull; {totalUnits} {totalUnits === 1 ? 'item' : 'items'}</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping ({getShippingLabel(shippingMethod)})</span>
            <span>{shippingValue === 0 ? 'FREE' : formatCurrency(shippingValue)}</span>
          </div>
          <div className="flex justify-between text-lime-800">
            <span>Discount</span>
            <span>-{formatCurrency(discount)}</span>
          </div>
        </div>
        <div className="flex justify-between font-normal text-xl text-primary pt-4 border-t border-secondary mb-10">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        {discountForm && (
          <div className="mb-2">{discountForm}</div>
        )}
      </section>
    );
  }
);

export default CheckoutSummary;