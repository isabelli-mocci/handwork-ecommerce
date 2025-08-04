export interface BankSlipProps {
  value: string;
}

export const BANK_SLIP_MESSAGES = {
  TITLE: 'Bank Slip',
  INVALID_CODE: 'Invalid bank slip code',
  COPY_INSTRUCTION: 'Copy the code above to pay at your bank',
  TEST_DISCLAIMER: 'This bank slip is for testing purposes only',
} as const;

export const BANK_SLIP_STYLES = {
  CONTAINER: 'flex flex-col items-center gap-2 p-6 bg-white rounded-lg border border-secondary shadow-md',
  TITLE: 'font-bold text-primary text-lg mb-2',
  CODE_CONTAINER: 'w-full flex flex-col items-center gap-2',
  CODE_DISPLAY: 'bg-gray-200 rounded px-4 py-2 text-sm font-mono tracking-widest text-text/80',
  INSTRUCTION: 'text-xs text-text/60',
  DISCLAIMER: 'mt-4 text-xs text-text/70',
} as const;
