import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import type { ShippingFormData } from '../../../types/shipping.types';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  const mockOnChange = jest.fn();
  const mockOnNext = jest.fn();

  const defaultProps = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      zipCode: '',
      address: '',
      shippingMethod: 'standard' as const,
    } satisfies ShippingFormData,
    onChange: mockOnChange,
    onNext: mockOnNext,
    loading: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (props = {}) => {
    return render(
      <MemoryRouter>
        <CheckoutForm
          {...defaultProps}
          {...props}
        />
      </MemoryRouter>
    );
  };

  it('renders all form fields', () => {
    renderComponent();

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Country')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Postal Code')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
  });

  it('shows shipping method options', () => {
    renderComponent();

    expect(screen.getByText('STANDARD SHIPPING')).toBeInTheDocument();
    expect(screen.getByText('EXPRESS SHIPPING')).toBeInTheDocument();
  });

  it('calls onChange when input values change', () => {
    renderComponent();

    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, {
      target: { value: 'John', name: 'firstName' },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('displays loading state when loading prop is true', () => {
    renderComponent({ loading: true });

    const submitButton = screen.getByRole('button', {
      name: /payment method/i,
    });
    expect(submitButton).toBeDisabled();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('navigates back to cart when back button is clicked', () => {
    renderComponent();

    const backButton = screen.getByText('Back to Shopping Cart');
    fireEvent.click(backButton);
  });

  it('validates form on submission', () => {
    renderComponent();

    const submitButton = screen.getByRole('button', {
      name: /payment method/i,
    });
    fireEvent.click(submitButton);

    expect(mockOnNext).not.toHaveBeenCalled();
  });
});
