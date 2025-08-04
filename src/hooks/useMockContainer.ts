import { useEffect, useRef } from 'react';

interface UseMockContainerProps {
  showMock: boolean;
  selectedMethod: string;
  setShowMock: (show: boolean) => void;
  setOrderConfirmed: (confirmed: boolean) => void;
}

export const useMockContainer = ({
  showMock,
  selectedMethod,
  setShowMock,
  setOrderConfirmed
}: UseMockContainerProps) => {
  const mockContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!showMock || (selectedMethod !== 'boleto' && selectedMethod !== 'pix')) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        mockContainerRef.current?.contains(target) ||
        target.closest('button') ||
        target.closest('input')
      ) {
        return;
      }

      setOrderConfirmed(true);
      setShowMock(false);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [showMock, selectedMethod, setShowMock, setOrderConfirmed]);

  return {
    mockContainerRef
  };
};
