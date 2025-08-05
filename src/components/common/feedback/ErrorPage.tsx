import React from 'react';
import { Link } from 'react-router-dom';
import ErrorEmoji from './ErrorEmoji';

interface ErrorPageProps {
  code?: string | number;
  title: string;
  message: string;
  buttonLabel: string;
  buttonAction?: () => void;
  buttonTo?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code,
  title,
  message,
  buttonLabel,
  buttonAction,
  buttonTo,
}) => (
  <main className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4 py-16 bg-background text-center">
    <ErrorEmoji />
    {code && (
      <h1 className="font-cardo text-6xl md:text-8xl font-bold text-primary mb-2">{code}</h1>
    )}
    <h2 className="font-cardo text-2xl md:text-3xl font-semibold text-text mb-4">{title}</h2>
    <p className="text-base md:text-lg text-text/80 mb-8 max-w-md">{message}</p>
    {buttonTo ? (
      <Link
        to={buttonTo}
        className="w-full max-w-xs px-6 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {buttonLabel}
      </Link>
    ) : (
      <button
        onClick={buttonAction}
        className="w-full max-w-xs px-6 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {buttonLabel}
      </button>
    )}
  </main>
);

export default ErrorPage;
