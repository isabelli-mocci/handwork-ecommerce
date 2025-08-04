import React, { useMemo } from 'react';
import { generateQRCode } from '../../../utils/qrcode.utils';

const QR_SIZE = 128;
const MIN_KEY_LENGTH = 5;

interface PixMockProps {
  value: string;
  testId?: string;
}

const styles = {
  container: 'flex flex-col items-center gap-2 p-6 bg-white rounded-lg border border-secondary shadow-md',
  title: 'font-bold text-primary text-lg mb-2',
  keyContainer: 'mt-2 text-sm text-text/80',
  keyValue: 'font-mono',
  disclaimer: 'mt-4 text-xs text-text/70',
};

const PixMock: React.FC<PixMockProps> = ({ value, testId = 'pix-mock' }) => {
  const isValidKey = value.length >= MIN_KEY_LENGTH;

  const qrSvg = useMemo(() => {
    if (!isValidKey) return null;

    return generateQRCode({
      content: value,
      size: QR_SIZE,
    });
  }, [value, isValidKey]);

  if (!isValidKey) {
    return (
      <div className={styles.container} data-testid={testId}>
        <span className={styles.title}>Invalid Pix Key</span>
        <p className={styles.disclaimer}>
          The Pix key must be at least {MIN_KEY_LENGTH} characters long.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container} data-testid={testId}>
      <span className={styles.title}>Pix Payment</span>
      {qrSvg && (
        <div
          dangerouslySetInnerHTML={{ __html: qrSvg }}
          aria-label="QR Code for Pix payment"
          role="img"
        />
      )}
      <div className={styles.keyContainer}>
        Pix Key: <span className={styles.keyValue}>{value}</span>
      </div>
      <div className={styles.disclaimer}>
        This QR Code is for testing purposes only.
      </div>
    </div>
  );
};

export default PixMock;
