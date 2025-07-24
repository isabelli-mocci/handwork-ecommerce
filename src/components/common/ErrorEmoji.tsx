import React from 'react';

const ErrorEmoji: React.FC = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-6 text-primary" aria-hidden="true">
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
    <path d="M16 32c2-2 6-2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="18" cy="20" r="2" fill="currentColor" />
    <circle cx="30" cy="20" r="2" fill="currentColor" />
  </svg>
);

export default ErrorEmoji;
