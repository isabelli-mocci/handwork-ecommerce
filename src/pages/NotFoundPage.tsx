import React from 'react';
import { Link } from 'react-router-dom';
import ErrorEmoji from '../components/common/ErrorEmoji';
import { ERROR_PAGE_DATA } from '../data/errorPage.data';

const NotFoundPage: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4 py-16 bg-background text-center">
    <ErrorEmoji />
    <h1 className="font-cardo text-6xl md:text-8xl font-bold text-primary mb-2">{ERROR_PAGE_DATA.code}</h1>
    <h2 className="font-cardo text-2xl md:text-3xl font-semibold text-text mb-4">{ERROR_PAGE_DATA.title}</h2>
    <p className="text-base md:text-lg text-text/80 mb-8 max-w-md">{ERROR_PAGE_DATA.message}</p>
    <Link
      to="/"
      className="w-full max-w-xs px-6 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {ERROR_PAGE_DATA.homepageLabel}
    </Link>
  </main>
);

export default NotFoundPage;
