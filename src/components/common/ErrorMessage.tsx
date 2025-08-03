import React from 'react';

interface ErrorMessageProps {
  message: string | null;
  id: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, id }) => {
  if (!message) return null;

  return (
    <div
      id={`${id}-error`}
      role="alert"
      className="text-red-500 text-xs mt-1"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
