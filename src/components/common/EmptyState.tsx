import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => (
  <div className='min-h-[80vh] w-full flex items-center justify-center bg-background'>
    <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
      <h2 className="font-cardo text-primary text-2xl md:text-3xl mb-4">{title}</h2>
      <p className="text-text/70 mb-12">{description}</p>
      <button
        onClick={onButtonClick}
        className="text-sm font-semibold uppercase px-8 py-4 border border-text hover:bg-primary/90 hover:text-white transition-colors"
      >
        {buttonText}
      </button>
    </div>
  </div>
);
