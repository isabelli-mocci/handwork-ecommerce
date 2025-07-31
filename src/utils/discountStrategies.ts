export interface DiscountStrategy {
  validate(code: string, subtotal: number): DiscountResult;
}

export type DiscountResult = {
  valid: boolean;
  value: number;
  message: string;
};

class TenPercentDiscount implements DiscountStrategy {
  validate(code: string, subtotal: number): DiscountResult {
    if (code.trim().toLowerCase() === 'discount10') {
      return {
        valid: true,
        value: subtotal * 0.1,
        message: 'Discount applied successfully!'
      };
    }
    return { valid: false, value: 0, message: 'Invalid discount code.' };
  }
}

const discountStrategies: DiscountStrategy[] = [
  new TenPercentDiscount(),
];

export function validateDiscount(code: string, subtotal: number): DiscountResult {
  if (!code || typeof code !== 'string') {
    return { valid: false, value: 0, message: 'Discount code is required.' };
  }
  for (const strategy of discountStrategies) {
    const result = strategy.validate(code, subtotal);
    if (result.valid) return result;
  }
  return { valid: false, value: 0, message: 'Invalid discount code.' };
}
