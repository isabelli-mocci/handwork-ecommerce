export function formatInstallment(amount: number, installments: number): string {
  return `${installments}x of R$ ${(amount / installments).toFixed(2)}`;
}

export function isValidCardNumber(cardNumber: string): boolean {
  return /^\d{16}$/.test(cardNumber.replace(/\s/g, ''));
}

export function isValidCardName(cardName: string): boolean {
  return /^[A-Za-z ]{3,}$/.test(cardName.trim());
}

export function isValidCVV(cvv: string): boolean {
  return /^\d{3}$/.test(cvv);
}

export function formatCardNumber(value: string): string {
  return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

export function formatExpiryDate(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length < 3) return digits;
  return digits.slice(0, 2) + '/' + digits.slice(2);
}

export function validatePaymentForm(data: {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}): { valid: boolean; errors: Partial<Record<string, string>> } {
  const errors: Partial<Record<string, string>> = {};
  if (!isValidCardName(data.cardName)) {
    errors.cardName = 'Cardholder name must be at least 3 letters.';
  }
  if (!isValidCardNumber(data.cardNumber)) {
    errors.cardNumber = 'Card number must be 16 digits.';
  }
  if (!isValidCVV(data.cvv)) {
    errors.cvv = 'CVV must be 3 digits.';
  }
  if (!/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
    errors.expiryDate = 'Expiry date must be in MM/YY format.';
  }
  return { valid: Object.keys(errors).length === 0, errors };
}
