import React from 'react';

export type SnackbarProps = {
  open: boolean;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Snackbar: React.FC<SnackbarProps> = React.memo(({ open, message, type, onClose }) => {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);
  return (
    <div
      className={`fixed z-[60] top-20 right-8 max-w-xs w-fit px-6 py-3 rounded shadow-lg text-white text-sm font-semibold transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'}`}
      style={{ pointerEvents: open ? 'auto' : 'none' }}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
});
Snackbar.displayName = 'Snackbar';

export default Snackbar;
