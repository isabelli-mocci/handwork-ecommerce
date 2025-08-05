import React from 'react';
import { LiaSpinnerSolid } from 'react-icons/lia';

const LoadingPage: React.FC = () => (
  <main className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-4 py-16 bg-background text-center">
    <LiaSpinnerSolid className="animate-spin text-primary mb-6" style={{ fontSize: 56 }} />
    <h2 className="font-cardo text-2xl md:text-3xl font-semibold text-text mb-4">Loading...</h2>
    <p className="text-base md:text-lg text-text/80 mb-8 max-w-md">Preparing your handmade experience!</p>
  </main>
);

export default LoadingPage;
