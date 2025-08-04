import React from 'react';
import type { BankSlipProps } from './types';
import { BANK_SLIP_MESSAGES, BANK_SLIP_STYLES } from './types';
import { DisplayCode } from './DisplayCode';

const BankSlip: React.FC<BankSlipProps> = ({ value }) => {
  const isValidValue = value?.trim().length > 0;

  return (
    <div className={BANK_SLIP_STYLES.CONTAINER}>
      <span className={BANK_SLIP_STYLES.TITLE}>
        {BANK_SLIP_MESSAGES.TITLE}
      </span>
      
      <DisplayCode 
        code={isValidValue ? value : BANK_SLIP_MESSAGES.INVALID_CODE}
        instruction={isValidValue ? BANK_SLIP_MESSAGES.COPY_INSTRUCTION : undefined}
      />

      <div className={BANK_SLIP_STYLES.DISCLAIMER}>
        {BANK_SLIP_MESSAGES.TEST_DISCLAIMER}
      </div>
    </div>
  );
};

export default BankSlip;
