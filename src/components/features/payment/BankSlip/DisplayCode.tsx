import React from 'react';
import { BANK_SLIP_STYLES } from './types';

interface DisplayCodeProps {
  code: string;
  instruction?: string;
}

export const DisplayCode: React.FC<DisplayCodeProps> = ({ code, instruction }) => (
  <div className={BANK_SLIP_STYLES.CODE_CONTAINER}>
    <div className={BANK_SLIP_STYLES.CODE_DISPLAY}>
      {code}
    </div>
    {instruction && (
      <span className={BANK_SLIP_STYLES.INSTRUCTION}>{instruction}</span>
    )}
  </div>
);
