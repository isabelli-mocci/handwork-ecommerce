import React from 'react';
import { Link } from 'react-router-dom';

const ERROR_CODE = 404;
const ERROR_TITLE = 'Page Not Found';
const ERROR_MESSAGE = 'The page you are looking for does not exist or has been moved.';
const HOMEPAGE_LABEL = 'Back to Home';

const NotFoundPage: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4 py-16 bg-background text-center">
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-6 text-primary" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <path d="M16 32c2-2 6-2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="20" r="2" fill="currentColor" />
      <circle cx="30" cy="20" r="2" fill="currentColor" />
    </svg>
    <h1 className="font-cardo text-6xl md:text-8xl font-bold text-primary mb-2">{ERROR_CODE}</h1>
    <h2 className="font-cardo text-2xl md:text-3xl font-semibold text-text mb-4">{ERROR_TITLE}</h2>
    <p className="text-base md:text-lg text-text/80 mb-8 max-w-md">{ERROR_MESSAGE}</p>
    <Link
      to="/"
      className="w-full max-w-xs px-6 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {HOMEPAGE_LABEL}
    </Link>
  </main>
);

export default NotFoundPage;
