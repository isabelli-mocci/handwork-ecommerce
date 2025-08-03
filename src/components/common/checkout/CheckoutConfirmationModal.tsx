import React, { useRef, useEffect } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export interface CheckoutConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutConfirmationModal: React.FC<CheckoutConfirmationModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <div ref={modalRef} className="bg-white p-8 max-w-sm w-full mx-auto shadow-lg text-center">
        <IoCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="font-cardo text-2xl font-bold text-primary mb-2">Order Confirmed!</h2>
        <p className="text-text/70 mb-4">Your order has been confirmed & it is on the way.</p>
        <p className="text-sm text-text/50 mb-6">Check your email for the details.</p>
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          Close
        </button>
      </div>
    </ModalOverlay>
  );
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    {children}
  </div>
);

export default CheckoutConfirmationModal;