import { useState, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './useCart';

export interface ShippingDetails {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone?: string;
  city: string;
  country: string;
  zipCode: string;
  shippingMethod: "standard" | "express";
}

export interface PaymentDetails {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

interface UseCheckoutState {
  step: CheckoutStep;
  shippingDetails: ShippingDetails;
  setShippingDetails: Dispatch<SetStateAction<ShippingDetails>>;
  paymentDetails: PaymentDetails;
  setPaymentDetails: Dispatch<SetStateAction<PaymentDetails>>;
  subtotal: number;
  total: number;
  isLoading: boolean;
  error: string | null;
  isConfirmationModalOpen: boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  finalizePurchase: () => Promise<void>;
  closeConfirmationModal: () => void;
}


const INITIAL_SHIPPING_DETAILS: ShippingDetails = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: '',
  zipCode: '',
  shippingMethod: 'standard',
};

const INITIAL_PAYMENT_DETAILS: PaymentDetails = {
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
};


export function useCheckoutState(): UseCheckoutState {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>(INITIAL_SHIPPING_DETAILS);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>(INITIAL_PAYMENT_DETAILS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const subtotal = getCartTotal();
  const total = subtotal;

  const goToNextStep = useCallback(() => {
    if (step === 'shipping') {
      setStep('payment');
    }
  }, [step]);

  const goToPreviousStep = useCallback(() => {
    if (step === 'payment') {
      setStep('shipping');
    }
  }, [step]);

  const finalizePurchase = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      clearCart();
      setIsConfirmationModalOpen(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred while processing your payment. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [clearCart]);

  const closeConfirmationModal = useCallback(() => {
    setIsConfirmationModalOpen(false);
    navigate('/');
  }, [navigate]);

  return {
    step,
    shippingDetails,
    setShippingDetails,
    paymentDetails,
    setPaymentDetails,
    subtotal,
    total,
    isLoading,
    error,
    isConfirmationModalOpen,
    goToNextStep,
    goToPreviousStep,
    finalizePurchase,
    closeConfirmationModal,
  };
}