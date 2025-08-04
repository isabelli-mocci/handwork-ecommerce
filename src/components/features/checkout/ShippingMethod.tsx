import React, { memo } from 'react';
import type { ShippingFormData } from '../../../types/shipping.types';

interface ShippingMethodProps {
  label: string;
  value: 'standard' | 'express';
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<ShippingFormData>>;
  description: string;
  priceLabel: string;
  required?: boolean;
}

const ShippingMethod: React.FC<ShippingMethodProps> = memo(({
  label,
  value,
  checked,
  onChange,
  description,
  priceLabel,
  required
}) => (
  <label className="flex items-center gap-6">
    <input
      type="radio"
      name="shippingMethod"
      value={value}
      checked={checked}
      onChange={e =>
        onChange(prev => ({
          ...prev,
          shippingMethod: e.target.value as 'standard' | 'express',
        }))
      }
      className="accent-primary"
      required={required}
    />
    <span className="text-primary uppercase font-medium text-sm">{label}</span>
    <span className={`text-sm ${value === 'standard' ? 'mr-3' : 'mx-4'}`}>
      {description}
    </span>
    <span className="text-primary uppercase font-medium ml-2 text-sm">
      {priceLabel}
    </span>
  </label>
));

ShippingMethod.displayName = 'ShippingMethod';

export default ShippingMethod;
