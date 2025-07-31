import React from 'react';
import { LiaSpinnerSolid } from 'react-icons/lia';

export type DiscountFormProps = {
  onApply: (code: string) => void;
  loading: boolean;
  status: 'idle' | 'success' | 'error';
  message: string;
};

const DiscountForm: React.FC<DiscountFormProps> = React.memo(({ onApply, loading, status, message }) => {
  const [discountCode, setDiscountCode] = React.useState('');
  const [fieldError, setFieldError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (status === 'success') setDiscountCode('');
  }, [status]);

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
    if (fieldError) setFieldError(null);
  }, [fieldError]);

  const handleInputBlur = React.useCallback(() => {
    if (!discountCode.trim()) {
      setFieldError(null);
    }
  }, [discountCode]);

  const handleFormSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!discountCode.trim()) {
      setFieldError('Enter a code.');
      return;
    }
    setFieldError(null);
    onApply(discountCode.trim());
  }, [onApply, discountCode]);

  const getInputBorderClass = () => {
    if (!discountCode.trim() && !fieldError) return 'border-secondary focus:border-primary';
    if (fieldError) return 'border-red-600/40 focus:border-red-600/65';
    if (status === 'success') return 'border-lime-800/40 focus:border-lime-800/70';
    if (status === 'error' && message && !fieldError && discountCode.trim()) return 'border-red-600/40 focus:border-red-600/65';
    return 'border-secondary focus:border-primary';
  };

  const renderMessage = () => {
    if (!discountCode.trim() && (fieldError || status === 'error')) return null;
    if (fieldError) return <span className="ml-2 text-xs text-red-600/65">{fieldError}</span>;
    if (status === 'success') return <span className="ml-2 text-xs text-lime-800/70">{message}</span>;
    if (status === 'error' && message && discountCode.trim()) return <span className="ml-2 text-xs text-red-600/65">{message}</span>;
    return null;
  };

  return (
    <form className="flex items-center gap-2 mb-4" onSubmit={handleFormSubmit} autoComplete="off">
      <div className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Discount code"
          className={`w-full px-3 py-2 bg-transparent border-0 border-b text-sm placeholder:text-text/50 outline-none pr-10 transition-colors duration-200 ${getInputBorderClass()}`}
          value={discountCode}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          aria-label="Discount code"
          disabled={loading}
        />
        <button
          type="submit"
          className={`absolute right-2 top-1/2 -translate-y-1/2 text-primary text-lg p-0 bg-transparent border-none outline-none transition-colors duration-200 ${loading ? 'pointer-events-none opacity-60' : 'hover:text-primary'}`}
          tabIndex={0}
          aria-label="Apply discount"
          disabled={loading}
        >
          {loading ? (
            <LiaSpinnerSolid className="animate-spin inline w-5 h-5 text-primary" />
          ) : (
            <span>&#8594;</span>
          )}
        </button>
      </div>
      {renderMessage()}
    </form>
  );
});

DiscountForm.displayName = 'DiscountForm';

export default DiscountForm;
