export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value);
};

export const calculateInstallmentAmount = (total: number, installments: number): number => {
  if (installments <= 0) throw new Error('Number of installments must be greater than zero');
  if (total < 0) throw new Error('Total amount must be greater than or equal to zero');
  
  return total / installments;
};
